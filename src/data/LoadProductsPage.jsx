import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loadProductsToFirebase from "./productsLoader";

const LoadProductsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                await loadProductsToFirebase();
                console.log("Productos cargados o no hay nuevos.");
                navigate("/"); 
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        };

        loadProducts(); 
    }, [navigate]);

    return (
        <div>
            <h1>Cargando productos...</h1>
        </div>
    );
};

export default LoadProductsPage;
