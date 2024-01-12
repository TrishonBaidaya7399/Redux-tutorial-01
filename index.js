// //Steps:
// // 1. state declare
// // 2. dispatch action
// // 3. reducer
// // 4. store

const { createStore } = require("redux")

// const {createStore} = require("redux")

// //<-----------Defining constant-------------->
// const INCREMENT = "INCREMENT"
// const DECREMENT = "DECREMENT"
// const ADD_USER = "ADD_USER"

// //<------------------STATS------------------->
// //We are using redux mainly to manage the state globally
// const initialCounterState = {
//   count: 0,
// };
// const initialUsers = {
//   user: [{ name: "Trishon Baidaya" }],
// };

// //<-----------------ACTIONS------------------->
// //action are basically object when using in redux, and in this object we basically work with 2 things, 'type' and 'payload'. We transfer data through payload

// //Increment counter
// const incrementCounter=()=>{
// return {
//     type: INCREMENT
// }; 
// }

// //option 01: by getting user data as a prop
// // const addUser=(user)=>{
// // return {
// //     type: ADD_USER,
// //     payload: {user}
// // }; 
// // }

// //option 02: Defining the user 
// const addUser=()=>{
// return {
//     type: ADD_USER,
//     payload: {name: "Trishon Baidaya"} //this payload will go the the Reducer
// }; 
// }

// //Decrement counter
// const decrementCounter=()=>{
// return {
//     type: DECREMENT
// }; 
// }

// //<-----------------Create reducer for counter------------------->
// //Reducer is a pure function, that means it take some input and provide an output based on the input. based on the type of the action it update the state
// const counterReducer = (state= initialCounterState, action)=>{
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 //getting all the property and only update the count
//                 ...state, 
//                 count: state.count + 1
//             }
//             case DECREMENT:
//             return {
//                 //getting all the property and only update the count
//                 ...state, 
//                 count: state.count - 1
//             }
            
//             break;
    
//         default:
//             state;
//     }

// }

// //<-----------------Store------------------->
// //The mail responsibility of store is to maintain and hold the state
// //Three important methods - getState(), dispatch(), subscribe()

// //Create store
// const store = createStore(counterReducer)
// store.subscribe(()=>{
//     console.log(store.getState());
// })

// //dispatch actions
// store.dispatch(incrementCounter());

/**
 * state
 * action
 * reducer
 * store
 */

//constants
const INCREMENT = "INCREMENT"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const ADD_USER = "ADD_USER"

//state
const initialCounterState = {
    users: ["Trishon"],
    count: 1
}

//action 
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

//reducer
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

//store

const storeUser = createStore(userReducer)
    storeUser.subscribe(()=>{
        console.log(storeUser.getState());
    })
const store = createStore(counterReducer)
    store.subscribe(()=>{
        console.log(store.getState());
    })


//dispatch
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterByValue(10));
store.dispatch(incrementCounterByValue(20));
storeUser.dispatch(addUser("Shuvo"));