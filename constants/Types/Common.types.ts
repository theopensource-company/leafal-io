export type TRecordID<
    Table extends string = string,
    Record extends string = string
> = `${Table}:${Record}`;
