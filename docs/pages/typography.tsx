import { Paper, Typography } from "../../mod.ts";

// export function TypographyPageContent() {
//   return (
//     <Paper flexDirection="column" gap={4} padding={3} align="start">
//       <Typography textSize="2xl">
//         Typography
//       </Typography>

//       <Stack render={<section />} direction="column" align="start" gap={2}>
//         <Typography textSize="lg">Text size</Typography>
//         <Typography textSize="sm">Small body copy</Typography>
//         <Typography textSize="base">Base body copy</Typography>
//         <Typography textSize="xl">Larger emphasis text</Typography>
//       </Stack>

//       <Stack render={<section />} direction="column" align="start" gap={2}>
//         <Typography textSize="lg">Text color</Typography>
//         <Typography textColor="neutral.200">Neutral foreground</Typography>
//       </Stack>

//       <Stack render={<section />} direction="column" align="start" gap={2}>
//         <Typography textSize="lg">Font weight</Typography>
//         <Typography fontWeight="normal">Normal weight</Typography>
//         <Typography fontWeight="medium">Medium weight</Typography>
//         <Typography fontWeight="bold">Bold weight</Typography>
//       </Stack>

//       <Stack render={<section />} direction="column" align="start" gap={2}>
//         <Typography textSize="lg">Custom render element</Typography>
//         <Typography render={<h2 />} textSize="xl" fontWeight="bold">
//           This Typography renders as an h2
//         </Typography>
//         <Typography textSize="sm" textColor="neutral.400">
//           Use the render prop for semantic markup while keeping Typography styling props.
//         </Typography>
//       </Stack>
//     </Paper>
//   );
// }

export function TypographyPageContent() {
  return (
    <Paper flexDirection="column" gap={4} padding={3} alignItems="start">
      <Typography render="h2" fontSize="xl" fontWeight="bold">
        This Typography renders as an h2
      </Typography>
    </Paper>
  );
}
