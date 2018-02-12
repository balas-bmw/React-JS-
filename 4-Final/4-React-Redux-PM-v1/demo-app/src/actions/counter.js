

export function increment(value) {
    return { type: "INCREMENT", value }
}
export function incrementAsync(value) {
    return { type: "INCREMENT_ASYNC", value }
}
export function decrement(value) {
    return { type: "DECREMENT", value }
}