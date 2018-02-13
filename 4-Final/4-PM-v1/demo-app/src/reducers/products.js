



export default function products(state = [], action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return [...action.products]
        case 'SAVE_PRODUCT':
            return [...state, action.product]
        case 'DELETE_PRODUCT':
            return state.filter(item => item.id !== action.id)
        default:
            return state;
    }
}