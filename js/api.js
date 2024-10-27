const apiUrl = 'http://localhost:3000/products';

export const fetchProducts = async () => {
    try {
        const response = await fetch(apiUrl);
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
};

export const addProduct = async (product) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        return await response.json();
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
    }
};

export const deleteProduct = async (id) => {
    try {
        await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
};

export const updateProduct = async (id, updatedProduct) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });
        return await response.json();
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
    }
};

