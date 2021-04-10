import {ADD_BREADMID} from '../constants/burgerContants'
export const addBreadMid = (propsBurger, value) => {
  return {
    type: "ADD_BREADMID",
    payload: {
      propsBurger,
      value,
    },
  };
};


// export const addBreadMid = (propsBurger,amount) => {
//     return {
//         type: ADD_BREADMID,
//         propsBurger,
//         amount
//     };
//   };