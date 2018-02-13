


const apiUrl = "http://localhost:8080/api/products"

const Api = {
    loadProducts() {
        return fetch(apiUrl);
    },
    saveProduct(product) {
        return fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    },
    deleteProduct(id) {
        return fetch(apiUrl + "/" + id, { method: 'DELETE' })
    }
}

export default Api;