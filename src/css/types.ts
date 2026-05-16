export type NextMapper = (val: unknown) => string;
export type PropertyValueMapper<T> = (value: T, next: NextMapper) => string;

export interface DatatypeMapper {
  mapper: (value: unknown, next: NextMapper) => string;
  types: string[];
}

export type PropertyToCss = (value: string) => string;

export interface Datatype {
  mappers: DatatypeMapper[];
  staticValues?: Record<string, string>;
}

export type PropertyConfig = {
  datatype?: Datatype;
  toCss: PropertyToCss | string | string[];
};

export type PropertiesMap = Record<string, PropertyConfig>;
