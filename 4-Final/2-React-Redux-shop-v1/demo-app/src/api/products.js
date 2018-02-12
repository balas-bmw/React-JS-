
const apiUrl = "http://localhost:8080/api/products";

export async function loadAllProducts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}