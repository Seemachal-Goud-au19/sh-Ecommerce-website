import React,{createContext} from "react";


const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    // for login
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}

});

export default CartContext;