const products = [
    {
        id: 1,
        name: "Matafuego ABC 1 Kg",
        description: "Matafuego de polvo químico seco ABC, ideal para autos y pequeños espacios.",
        price: 25000,
        stock: 15,
        category: "ABC",
        imageUrl: ["/img/ABC1KG.jpg", "/img/ABC1KG-2.jpg"]
    },
    {
        id: 2,
        name: "Matafuego ABC 5 Kg",
        description: "Matafuego de polvo químico seco ABC, adecuado para hogares y oficinas.",
        price: 55000,
        stock: 10,
        category: "ABC",
        imageUrl: ["/img/ABC5KG.jpg", "/img/ABC5KG-2.png"]
    },
    {
        id: 3,
        name: "Matafuego CO2 2 Kg",
        description: "Matafuego de dióxido de carbono (CO2), ideal para fuegos eléctricos y líquidos inflamables.",
        price: 60000,
        stock: 8,
        category: "CO2",
        imageUrl: [
            "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_671419-MLA29635972691_032019-F-removebg-preview.png"
        ]
    },
    {
        id: 4,
        name: "Matafuego Agua Presurizada 9 L",
        description: "Matafuego a base de agua presurizada, ideal para fuegos de clase A.",
        price: 45000,
        stock: 12,
        category: "Agua",
        imageUrl: [
            "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_709196-MLA29772162350_032019-F-removebg-preview.png"
        ]
    },
    {
        id: 5,
        name: "Matafuego CO2 5 Kg",
        description: "Matafuego de dióxido de carbono (CO2), ideal para fuegos eléctricos y líquidos inflamables.",
        price: 60000,
        stock: 8,
        category: "CO2",
        imageUrl: [
            "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_671419-MLA29635972691_032019-F-removebg-preview.png"
        ]
    },
    {
        id: 6,
        name: "Matafuego ABC 2.5 Kg",
        description: "Matafuego de polvo químico seco ABC, ideal para autos y pequeños espacios.",
        price: 25000,
        stock: 15,
        category: "ABC",
        imageUrl: [
            "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_671419-MLA29635972691_032019-F-removebg-preview.png"
        ]
    }
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

export { getProducts };
