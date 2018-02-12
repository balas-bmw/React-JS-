


const apiUrl = "http://localhost:8080/api/products"

const Api = {
    loadProducts() {
        return fetch(apiUrl);
    }
}

export default Api;