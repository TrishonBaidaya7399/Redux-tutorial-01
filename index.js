//Steps:
// 1. state declare
// 2. dispatch action
// 3. reducer
// 4. store

const {createStore} = require("redux")

//<-----------Defining constant-------------->
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"

//<------------------STATS------------------->
//We are using redux mainly to manage the state globally
const initialCounterState = {
  count: 0,
};
const initialUsers = {
  user: [{ name: "Trishon Baidaya" }],
};

//<-----------------ACTIONS------------------->
//action are basically object when using in redux, and in this object we basically work with 2 things, 'type' and 'payload'. We transfer data through payload

//Increment counter
const incrementCounter=()=>{
return {
    type: INCREMENT
}; 
}

//option 01: by getting user data as a prop
// const addUser=(user)=>{
// return {
//     type: ADD_USER,
//     payload: {user}
// }; 
// }

//option 02: Defining the user 
const addUser=()=>{
return {
    type: ADD_USER,
    payload: {name: "Trishon Baidaya"} //this payload will go the the Reducer
}; 
}

//Decrement counter
const decrementCounter=()=>{
return {
    type: DECREMENT
}; 
}

//<-----------------Create reducer for counter------------------->
//Reducer is a pure function, that means it take some input and provide an output based on the input. based on the type of the action it update the state
const counterReducer = (state= initialCounterState, action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                //getting all the property and only update the count
                ...state, 
                count: state.count + 1
            }
            case DECREMENT:
            return {
                //getting all the property and only update the count
                ...state, 
                count: state.count - 1
            }
            
            break;
    
        default:
            state;
    }

}

//<-----------------Store------------------->
//The mail responsibility of store is to maintain and hold the state
//Three important methods - getState(), dispatch(), subscribe()

//Create store
const store = createStore(counterReducer)
store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch actions
store.dispatch(incrementCounter());