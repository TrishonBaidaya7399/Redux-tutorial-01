// /**
//  * state
//  * action
//  * reducer
//  * store
//  */

// //constants
const INCREMENT = "INCREMENT"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const ADD_USER = "ADD_USER"

// //state
const initialCounterState = {
    users: ["Trishon"],
    count: 1
}

// //action
const addUser = (user)=>{
    return {
        type: ADD_USER,
        payload: user
    }
}
const incrementCounterAction = ()=>{
    return {
        type: INCREMENT
    }
}
const incrementCounterByValue = (value)=>{
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}
const decrementCounterAction = ()=>{
    return {
        type: DECREMENT
    }
}
const resetCounterAction = ()=>{
    return {
        type: RESET
    }
}

// //reducer
const userReducer = (state = initialCounterState, action)=>{
switch (action.type) {
    case ADD_USER:
        return {
            users: [...state.users, action.payload],
            count: state.count + 1
        }

    default:
        return state;
}
}
const counterReducer=(state= initialCounterState, action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case INCREMENT_BY_VALUE:
            return {
                count: state.count + action.payload
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        case RESET:
            return {
                count: 0
            }

        default:
            state;
    }
}

// //store

const storeUser = createStore(userReducer)
    storeUser.subscribe(()=>{
        console.log(storeUser.getState());
    })
const store = createStore(counterReducer)
    store.subscribe(()=>{
        console.log(store.getState());
    })

// //dispatch
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterByValue(10));
store.dispatch(incrementCounterByValue(20));
storeUser.dispatch(addUser("Shuvo"));






