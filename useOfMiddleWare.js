// <----------------- Use of middlewares ------------------>
/**
 * Step 01: install redux-logger
 * step 02: import applyMiddleware from redux
 * step 03: use applyMiddleware(logger) inside the store function after declaring the reducer function 
 * */ 

const { createStore, combineReducers,applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//products constants
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"

//products states
const initialProductState = {
  products: ["apple", "banana"],
  numberOfProducts: 2,
};

// products actions
const getProductsAction = ()=>{
    return {
        type: GET_PRODUCTS,
    }
}
const addProductsAction = (product)=>{
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}

// product reducer
const productReducer= (state=initialProductState, action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
           return {
                products: state.products,
                numberOfProducts: state.numberOfProducts
            }
        case ADD_PRODUCTS:
           return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
    
        default:
           return state;
    }
}

// product store 
const store = createStore(productReducer, applyMiddleware(logger))
store.subscribe(()=>{
    console.log(store.getState());
})

// Product Dispatch
store.dispatch(getProductsAction());
store.dispatch(addProductsAction("mango"));
