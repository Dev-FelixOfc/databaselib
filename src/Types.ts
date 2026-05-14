export type PaginationMode = 'before' | 'after'
export type Comparable<ObjectType, KeyType> = { 
    key: (v: ObjectType) => KeyType, 
    compare: (a: KeyType, b: KeyType) => number 
}
export type Identifiable<T> = (v: T) => string

export interface IDatabaseLib<T, K> extends Iterable<T> {
    length: number
    first: T
    last: T
    get(id: string): T
    toJSON()
    insert(...values: T[])
    delete(value: T): T
}
