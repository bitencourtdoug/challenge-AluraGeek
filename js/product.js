import { fetchProducts, deleteProduct } from './api.js';

const productContainer = document.querySelector('.produtos__lista');

const createProductCard = (product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Preço: R$${product.price}</p>
        <img src="${product.image}" alt="${product.name}" style="width: 150px; height: 150px;">
        <button class="delete-button" data-id="${product.id}">Excluir</button>
    `;
    return productCard;
};

const loadProducts = async () => {
    const products = await fetchProducts();
    if (products.length === 0) {
        productContainer.innerHTML = '<p class="produtos__mensagem">Nenhum produto foi adicionado.</p>';
    } else {
        productContainer.innerHTML = '';  // Limpa a mensagem inicial
        products.forEach(product => {
            const productCard = createProductCard(product);
            productContainer.appendChild(productCard);
        });
    }
};

// Adiciona evento de exclusão aos botões dinamicamente
productContainer.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete-button')) {
        const productId = event.target.dataset.id;
        await deleteProduct(productId);
        loadProducts(); // Recarrega os produtos
    }
});

// Carrega os produtos ao iniciar
document.addEventListener("DOMContentLoaded", loadProducts);
