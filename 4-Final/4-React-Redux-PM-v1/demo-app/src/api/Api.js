
const apiUrl = "http://localhost:8080/api/products"

const Api = {
    loadProducts() {
        return fetch(apiUrl);
    },
    deleteProduct(id) {
        return fetch(apiUrl + "/" + id, { method: 'DELETE' })
    }
}

export default Api;