export type NextMapper = (val: unknown) => string;
export type PropertyValueMapper<T> = (value: T, next: NextMapper) => string;

export interface DatatypeMapper {
  mapper: (value: unknown, next: NextMapper) => string;
  types: string[];
}

export type PropertyToCss = (value: string) => string;

export interface Datatype {
  mappers: DatatypeMapper[];
  staticValues?: Record<string, string> | string[];
}

export type PropertyConfig = {
  toCss: PropertyToCss | string | string[];
  // If omitted, any string value will be accepted, and passed as-is to the CSS output.
  datatype?: Datatype;
};

export type PropertiesMap = Record<string, PropertyConfig>;
