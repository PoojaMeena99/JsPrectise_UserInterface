let redius=14;
let price=20;

function calculation(redius,price){
    let area =calculate_area(redius);
    console.log(area,"calcualtion")
    return(area*price);
};

function calculate_area(redius){
    let PI= (22/7)
    let area= PI*redius*redius
    console.log(area)
    return area;
}

let redius_element =document.getElementById("redius")
redius_element.innerHTML=redius

let price_element =document.getElementById("price")
price_element.innerHTML=price

let totalePrice=document.getElementById(" totalePrice")
totalePrice.innerHTML=calculation(redius , price)

console.log(r);

let area =calculate_area(redius);
let cost=calculation(area,price)


































// // const price=10
// // const radius=35

// function radius(price){
//     return
//         <h1>hello</h1>
//         const redius=prompt("enter your redius")
//         const totalRedius=
//         const rediusFormula=((22/7)*redius)
    

    
// }

// function price(){
//     return 
//     price=prompt("what is the price")
// }
