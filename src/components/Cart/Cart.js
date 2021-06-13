import React from 'react';

const Cart = (props) => {
    // console.log(props.salary)
    const cart = props.cart;
    // console.log(cart.salary)
    let playerName = '';
    let playersalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        playerName = playerName +" "+ player.first_name;
    }
    for (let i = 0; i < cart.length; i++) {
        const salary = cart[i];
        playersalary = playersalary + salary.salary;
    }
    return (
        <div>
            <h2>Player Added : {cart.length} </h2>
            <h4>Name : {playerName}</h4>
            <p>Total Salary: {playersalary}</p>

        </div>
    );
};

export default Cart;