const getProducts = () =>{
    fetch("/product/view")
        .then(response=>response.json())
        .then(products=>{
            let textBlock = document.querySelector(".response");
            textBlock.innerHTML ="";
            products.forEach(item=>{
                textBlock.innerHTML +=`<span> product id: ${item.id} </span>
<span> product id: ${item.name} </span>
<span> product id: ${item.count} </span>
<span> product id: ${item.price} </span>
<span> product id: ${item.description} </span>
`

            });
        });
};
const addProducts = () =>{
    fetch("/product/view",{
        method: "POST",
        body: JSON.stringify({
            name: "Some name",
            count: "f",
            price: "g",
            description: "f"
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response)=>response.json())
        .then((json)=> {
            getProducts();
            console.log(json);
        })
}
let buttonGetProducts = document.querySelector(".button-get-products");
let buttonAddProducts = document.querySelector(".button-add-products");
buttonGetProducts.addEventListener("click",getProducts);
buttonAddProducts.addEventListener("click",addProducts);