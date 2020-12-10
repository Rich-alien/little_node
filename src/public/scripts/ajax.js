const getProducts = () => {
    fetch("api/products")
        .then(response => response.json())
        .then(products => {
            let textBlock = document.querySelector(".response");
            textBlock.innerHTML = "";
            products.forEach((item, id) => {
                textBlock.innerHTML += ` 
            <tr id="${id}">
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
const editProducts = () => {
    let id = +document.getElementById("name").value;
    let name = document.getElementById("name").value;
    let count = +document.getElementById("count").value;
    let price = +document.getElementById("price").value;
    let description = document.getElementById("description").value;
    fetch("api/products/edit", {
        method: "PUT",
        body: JSON.stringify({
            id: id,
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
    document.getElementById(id.toString()).remove();
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