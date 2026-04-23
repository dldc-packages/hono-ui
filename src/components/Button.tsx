import { css, cx } from "hono/css";
import type { Child } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: Child;
  href?: string;
  disabled?: boolean;
}

export function Button({
  type = "button",
  children,
  href,
  disabled,
}: ButtonProps): JSX.Element {
  const baseClassName = css`
    width: 100%;
    background: linear-gradient(to right, #f56565, #c53030);
    color: white;
    font-weight: bold;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.2s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    text-align: center;

    &:hover {
      background: linear-gradient(to right, #c53030, #9b2c2c);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
  `;

  const disabledClass = css`
    opacity: 0.5;
    cursor: not-allowed;
  `;

  const className = cx(baseClassName, disabled ? disabledClass : undefined);

  if (href) {
    return (
      <a
        href={disabled ? "#" : href}
        class={className}
        onclick={disabled ? (e: Event) => e.preventDefault() : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} class={className} disabled={disabled}>
      {children}
    </button>
  );
}
