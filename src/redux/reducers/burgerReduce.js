import {ADD_BREADMID} from '../constants/burgerContants'
const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]
    menu: {
      salad: 10,
  
      cheese: 20,
  
      beef: 55,
    },
  
    total: 85,
  };
  
  
  
export const burgerReduce = (state = burgerState,action) => {
    switch (action.type) {
      case ADD_BREADMID:{
        // console.log(action)
        // let {propsBurger, amount} = action.payload;
        // Thay doi so luong
        if(action.payload.value === -1 && state.burger[action.payload.propsBurger] < 1){
          return{...state}
        }
        let burgerUpdate = {...state.burger};
        burgerUpdate[action.payload.propsBurger] += action.payload.value;
        state.burger = burgerUpdate;
  
        state.total += action.payload.value * state.menu[action.payload.propsBurger];
  
        return{...state,burgerUpdate}



        // console.log(action)
      // let {propsBurger, amount} = action;
      // // Thay doi so luong
      // if(amount === -1 && state.burger[propsBurger] < 1){
      //   return{...state}
      // }
      // let burgerUpdate = {...state.burger};
      // burgerUpdate[propsBurger] += amount;
      // state.burger = burgerUpdate;

      // state.total += amount * state.menu[propsBurger];

      // return{...state};
      }
      default:
      return{...state}
    }
    
  }
  