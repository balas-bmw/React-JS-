


export function loadProducts() {
    return { type: 'LOAD_PRODUCTS_ASYNC' }
}
export function deleteProduct(id) {
    return { type: 'DELETE_PRODUCT', id }
}
