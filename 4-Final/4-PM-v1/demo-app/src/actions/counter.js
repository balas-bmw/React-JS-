
export function increment(value) {
    return { type: "INCREMENT", value }
}
export function decrement(value) {
    return { type: "DECREMENT", value }
}


// for Thunk middle
// export function incrementAsync(value) {
//     return function (dispatch) { // thunk
//         setTimeout(() => {
//             dispatch({ type: "INCREMENT_ASYNC", value });
//         }, 2000);
//     }
// }

export function incrementAsync(value) {
    return { type: "INCREMENT_ASYNC", value };
}