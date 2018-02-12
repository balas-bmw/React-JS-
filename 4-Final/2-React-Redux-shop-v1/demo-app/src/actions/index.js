
import {
    LOAD_PRODUCTS_REQUEST,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,

    LOAD_REVIEWS_REQUEST,
    LOAD_REVIEWS_SUCCESS,
    LOAD_REVIEWS_ERROR,

    SUBMIT_NEW_REVIEW_SUCCESS

} from '../constants';

const apiUrl = "http://localhost:8080/api/products";

//---------------------------------------------------------

export function loadProductsRequest() {
    return { type: LOAD_PRODUCTS_REQUEST };
}
export function loadProductsSuccess() {
    return { type: LOAD_PRODUCTS_SUCCESS };
}

//---------------------------------------------------------

export function loadProducts() {
    return function (dispatch) {
        dispatch({ type: LOAD_PRODUCTS_REQUEST });
        // apiCall
        fetch(apiUrl)
            .then((response) => {
                return response.json()
            })
            .then(products => {
                //dispatch({ type: LOAD_PRODUCTS_SUCCESS, products })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: LOAD_PRODUCTS_ERROR, error })
            })
    }
}

export function loadReviews(prodId) {
    return function (dispatch) {
        dispatch({ type: LOAD_REVIEWS_REQUEST });
        // apiCall
        fetch(apiUrl + `/${prodId}/reviews`, { method: 'GET' })
            .then((response) => {
                return response.json()
            })
            .then(reviews => {
                dispatch({ type: LOAD_REVIEWS_SUCCESS, prodId, reviews })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: LOAD_REVIEWS_ERROR, error })
            })
    }
}


export function submitNewReview(prodId, newReview) {
    return function (dispatch) {
        // apiCall
        fetch(apiUrl + `/${prodId}/reviews`, { method: 'POST', body: JSON.stringify(newReview), headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                return response.json()
            })
            .then(review => {
                dispatch({ type: SUBMIT_NEW_REVIEW_SUCCESS, prodId, review })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}