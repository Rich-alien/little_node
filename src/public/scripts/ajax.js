const getProducts = () => {
    fetch("api/products")
        .then(response => response.json())
        .then(products => {
            let textBlock = document.querySelector(".response");
            textBlock.innerHTML = "";
            products.forEach((item,id) => {
                textBlock.innerHTML += ` 
            <tr>
                <td>${ id} </td>
                <td>${ item.name} </td>
                <td>${ item.count} </td>
                <td>${ item.price} </td>
                <td>${ item.description} </td>
            </tr>
  
`
            });
        });
};
const addProducts = () => {
    fetch("api/products", {
        method: "POST",
        body: JSON.stringify({
            name: "Some name",
            count: "f",
            price: "g",
            description: "f"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            getProducts();
            console.log(json);
        })
}
// let buttonGetProducts = document.querySelector(".button-get-products");
// let buttonAddProducts = document.querySelector(".button-add-products");
// buttonGetProducts.addEventListener("click", getProducts);
// buttonAddProducts.addEventListener("click", addProducts);