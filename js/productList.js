import { fetchProducts, deleteProduct, updateProduct } from './api.js';

const productContainer = document.querySelector('.produtos__lista');

const createProductCard = (product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Preço: R$${product.price}</p>
        <img src="${product.image}" alt="${product.name}" style="width: 150px; height: 150px;">
        <button class="edit-button" data-id="${product.id}">Editar</button>
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

// Adiciona evento para edição e exclusão aos botões dinamicamente
productContainer.addEventListener('click', async (event) => {
    const productId = event.target.dataset.id;

    if (event.target.classList.contains('delete-button')) {
        await deleteProduct(productId);
        loadProducts(); // Recarrega os produtos
    }

    if (event.target.classList.contains('edit-button')) {
        const newName = prompt("Digite o novo nome do produto:");
        const newPrice = prompt("Digite o novo preço do produto:");

        if (newName && newPrice) {
            const updatedProduct = { name: newName, price: newPrice };

            await updateProduct(productId, updatedProduct);
            loadProducts(); // Recarrega os produtos atualizados
        }
    }
});

// Carrega os produtos ao iniciar
document.addEventListener("DOMContentLoaded", loadProducts);
