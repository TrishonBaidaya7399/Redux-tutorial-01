// <---------------------------------- Multiple Reducers ---------------------------------->
// <--------------products-------------->
const { createStore, combineReducers } = require("redux");
//products constants
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"

//car constants
const GET_CART = "GET_CART"
const ADD_CART = "ADD_CART"

//products states
const initialProductState = {
  products: ["apple", "banana"],
  numberOfProducts: 2,
};

//cart states
const initialCartState = {
  items: [],
  productsInCart: 0,
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

// cart actions
const getCartItems = ()=>{
    return {
        type: GET_CART,
    }
}
const addCartItems = (item)=>{
    return {
        type: ADD_CART,
        payload: item
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

// cart reducer
const cartReducer= (state=initialCartState, action)=>{
    switch (action.type) {
        case GET_CART:
           return {
                items: state.items,
                productsInCart: state.productsInCart
            }
        case ADD_CART:
           return {
                items: [...state.items, action.payload],
                productsInCart: state.productsInCart + 1
            }
    
        default:
           return state;
    }
}

//store can't get more than one reducer at a time, so, if we want to pass multiple reducer at a time, we can pass them through combining them in a rootReducer

//rootReducer
const rootReducer = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer,
})

// product store 
const store = createStore(rootReducer)
store.subscribe(()=>{
    console.log(store.getState());
})



// Product Dispatch
store.dispatch(getProductsAction());
store.dispatch(addProductsAction("mango"));

// cart Dispatch
store.dispatch(getCartItems());
store.dispatch(addCartItems("mango"));
