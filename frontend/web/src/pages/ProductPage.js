import React, { useEffect, useState } from 'react';

const ProductPage = ({ match }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${match.params.id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [match.params.id]);

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Preço: ${product.price}</p>
            {/* mais detalhes do produto */}
        </div>
    );
};

export default ProductPage;
