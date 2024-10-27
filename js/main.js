// Função para carregar produtos da localStorage ao iniciar a página
function loadProducts() {
    const productList = document.getElementById("product-list");
    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Preço: R$${product.price}</p>
            <img src="${product.image}" alt="${product.name}" style="width: 150px; height: 150px;">
        `;
        productList.appendChild(productElement);
    });
}

// Carregar os produtos ao carregar a página
document.addEventListener("DOMContentLoaded", loadProducts);
