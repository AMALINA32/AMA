class pizza{
    price
    toppings
    constructor(price,toppings){
        this.price=price
        this.toppings=toppings
    }
    addtopping(topping){
        this.toppings.push(topping)
 }
}
topping=prompt("Add topping available-topping are chicken,vegatables,beef,fish:enter no for for no toppings")

if(topping==="no"){
    pizza=new pizza(1000,[])
}
else if (topping==="vegatables"){
    const toppings=["vegatables"]
    pizza=new pizza(1150,toppings);
}

else if (topping==="beef"){
    const toppings=["beef"]
    pizza=new pizza(1200,toppings);
}


else if (topping==="chicken"){
    const toppings=["chicken"]
    pizza=new pizza(1300,toppings);
}



else if (topping==="tuna"){
    const toppings=["tuna"]
    pizza=new pizza(1250,toppings);
}
console.log(pizza.price)
