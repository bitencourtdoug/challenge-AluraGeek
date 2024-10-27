import { addProduct } from './api.js';

document.getElementById("add-product-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const imageFile = document.getElementById("product-image").files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = async function (e) {
            const image = e.target.result;

            const newProduct = { name, price, image };
            await addProduct(newProduct);

            // Redireciona de volta à página principal
            window.location.href = "index.html";
        };
        reader.readAsDataURL(imageFile);  // Converte a imagem para base64 para armazenamento no localStorage
    }
});
