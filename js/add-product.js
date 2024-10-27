document.getElementById("add-product-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const imageFile = document.getElementById("product-image").files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const image = e.target.result;

            const product = { name, price, image };
            const products = JSON.parse(localStorage.getItem("products")) || [];
            products.push(product);

            localStorage.setItem("products", JSON.stringify(products));

            // Redireciona de volta à página principal
            window.location.href = "index.html";
        };
        reader.readAsDataURL(imageFile);  // Converte a imagem para base64 para armazenamento no localStorage
    }
});
