

export function products(state = [], action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return [...action.products]
        case 'DELETE_PRODUCT_SUCCESS':
            return state.filter(item => item.id !== action.id)
        default:
            return state;
    }
}