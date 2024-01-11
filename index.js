//Defining constant
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"
//<------------------STATS------------------->
//We are using redux mainly to manage the state globally
const initialCounter = {
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
