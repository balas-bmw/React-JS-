console.log('-index.js-');

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import $ from 'jquery';

import { composeWithDevTools } from 'redux-devtools-extension'

//-------------------------------------------
// Action(s)
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const ADD_NEW_REVIEW = 'add_new_review';
//-------------------------------------------

// Action creator(s)
function increment(value) {
    return { type: INCREMENT, value }
}
function decrement(value) {
    return { type: DECREMENT, value }
}
function addNewReview(review) {
    return { type: ADD_NEW_REVIEW, review }
}

//-------------------------------------------
// reducer(s)
function counterReducer(state = { count: 0 }, action) {
    console.log('counter reducer');
    switch (action.type) {
        case INCREMENT:
        case ADD_NEW_REVIEW:
            return Object.assign({}, state, { count: state.count + (action.value ? action.value : 1) });
        case DECREMENT:
            return Object.assign({}, state, { count: state.count - action.value });
        default:
            return state;
    }
}

function reviewsReducer(state = [], action) {
    console.log('reviews reducer');
    switch (action.type) {
        case ADD_NEW_REVIEW:
            // return state.concat(action.review)
            return [...state, action.review]
        default:
            return state;
    }
}
//-----------------------------------------------
// root Reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    reviews: reviewsReducer
});
//-----------------------------------------------
// store
const initialState = {
    counter: {
        count: 0
    },
    reviews: [
        { stars: 1, author: 'nag@gmail.com', body: 'test review' }
    ]
};

// const store = createStore(rootReducer, initialState, );


let middleware = [thunk];
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

//-----------------------------------------------


// View ( plain JS-view / React-View / NG-view )

let incBtn = document.getElementById('inc');
let decBtn = document.getElementById('dec');
let newReview = document.getElementById('newReview');

incBtn.addEventListener('click', function (e) {
    console.log('dispatching INCREMENT action..');
    store.dispatch(increment(1));
});
decBtn.addEventListener('click', function (e) {
    console.log('dispatching DECREMENT action..');
    store.dispatch(decrement(10));
});

//------------------------------------------------------

let apiUrl = "http://localhost:8080/api/products/5a50a1ef06f3da38787067aa/reviews";
function addNewReviewAsync(review) {
    return function (dispatch) {  // thunk
        dispatch({ type: 'ADD_NEW_REVIEW_BEGIN' })  // init
        $.ajax(apiUrl, {
            method: 'POST',
            contentType: "application/json",
            data: JSON.stringify(review),
            success: function (savedReview) {
                console.dir(savedReview);
                dispatch(addNewReview(savedReview))
            },
            error: function (error) {
                dispatch({ type: 'ADD_NEW_REVIEW_ERROR', error })
            }
        });
    }
}
//------------------------------------------------------
newReview.addEventListener('click', function (e) {
    console.log('dispatching ADD_NEW_REVIEW action..');
    let newReview = { stars: 1, author: 'who@email.com', body: 'bla bla' }
    //store.dispatch(addNewReview(newReview)); // sync Action
    store.dispatch(addNewReviewAsync(newReview)); // Async Action
});

// counter-view-component  subscribe for state change
store.subscribe(function () {
    let state = store.getState();
    console.log("counter - count :" + state.counter);
});



// reviews-view-component subscribe for state change
store.subscribe(function () {
    let state = store.getState();
    console.log('-reviews-');
    console.dir(state.reviews);
});

//-----------------------------------------------
