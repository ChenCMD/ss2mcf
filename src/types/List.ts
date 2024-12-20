type Grow<T, A extends Array<T>> = ((_: T, ...xs: A) => void) extends ((...a: infer X) => void) ? X : never;
// eslint-disable-next-line @typescript-eslint/naming-convention
type GrowToSize<T, A extends Array<T>, N extends number> = { 0: A, 1: GrowToSize<T, Grow<T, A>, N> }[A["length"] extends N ? 0 : 1];

export type List<T, N extends number> = GrowToSize<T, [], N>;
