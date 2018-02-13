


export function loadProducts() {
    return { type: 'LOAD_PRODUCTS_BEGIN' }
}
export function deleteProduct(id) {
    return { type: 'DELETE_PRODUCT_BEGIN', id }
}
export function saveProduct(product) {
    return { type: "SAVE_PRODUCT_BEGIN", product }
}