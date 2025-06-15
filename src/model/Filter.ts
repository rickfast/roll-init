export type FilterType = 'like' | 'eq';

export type Filter = {
    field: string, value: string, type: FilterType
}

export const like = (x: any, y: any) => {
    return x.toLowerCase().includes(y.toLowerCase());
}

export const eq = (x: any, y: any) => {
    return Number(x) === Number(y);
}

export const filterCatalog: { [name: string]: (x: any, y: any) => boolean } = {
    like,
    eq
}