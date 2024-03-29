import { z } from 'zod';

export function record<
    Table extends string = string,
    Id extends string = string,
>(table?: Table, id?: Id) {
    const group = (val?: Table | Id) =>
        !val
            ? '([A-Za-z0-9_]+|`(\\\\`|[^`])+`|⟨(\\\\⟨|\\\\⟩|[^⟨⟩])+⟩)'
            : /^[A-Za-z0-9_]+$/.test(val)
            ? val
            : `(\`${val.replace(/(?<!\\)(`)/g, '\\\\$1')}\`|⟨${val.replace(
                  /(?<!\\)(⟨|⟩)/g,
                  '\\\\$1'
              )}⟩)`;

    const regex = (table?: Table, id?: Id) =>
        new RegExp(`^${group(table)}:${group(id)}$`);

    const test = (val: string, table?: Table, id?: Id) =>
        regex(table, id).test(val as string);

    return z.custom<`${Table}:${Id}`>(
        (val) => typeof val === 'string' && test(val, table, id),
        {
            message: [
                'Must be a record',
                table && `Table must be: "${table}"`,
                id && `Id must match: "${id}"`,
            ]
                .filter((a) => a)
                .join('; '),
        }
    );
}
