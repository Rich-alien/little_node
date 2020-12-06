const getProducts = () => {
    fetch("api/products")
        .then(response => response.json())
        .then(products => {
            let textBlock = document.querySelector(".response");
            textBlock.innerHTML = "";
            products.forEach((item, id) => {
                textBlock.innerHTML += ` 
            <tr>
                <td>${id} </td>
                <td>${item.name} </td>
                <td>${item.count} </td>
                <td>${item.price} </td>
                <td>${item.description} </td>
                <td onclick="deleteProduct(${id})" class="button-delete">удалить</td>
            </tr> 
`
            });
        });
};
const addProducts = () => {
    let name = document.getElementById("name").value;
    let count = document.getElementById("count").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    fetch("api/products", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            count: count,
            price: price,
            description: description
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
const deleteProduct = (id) => {
    let product = document.querySelector('.response');
    console.log(product);
    fetch("api/products/delete", {
        method: "DELETE",
        body: JSON.stringify({
            id: id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())

}