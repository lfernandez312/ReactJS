const products = [
    {
        id: 1,
        name: "Matafuego ABC 1 Kg",
        description: "Matafuego de polvo químico seco ABC, ideal para autos y pequeños espacios.",
        price: 25000,
        stock: 15,
        category: "ABC",
        imageUrl: "/img/1kg.png"
    },
    {
        id: 2,
        name: "Matafuego ABC 5 Kg",
        description: "Matafuego de polvo químico seco ABC, adecuado para hogares y oficinas.",
        price: 55000,
        stock: 10,
        category: "ABC",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_964300-MLA30036163128_042019-O-removebg-preview.png"
    },
    {
        id: 3,
        name: "Matafuego CO2 2 Kg",
        description: "Matafuego de dióxido de carbono (CO2), ideal para fuegos eléctricos y líquidos inflamables.",
        price: 60000,
        stock: 8,
        category: "CO2",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_671419-MLA29635972691_032019-F-removebg-preview.png"
    },
    {
        id: 4,
        name: "Matafuego Agua Presurizada 9 L",
        description: "Matafuego a base de agua presurizada, ideal para fuegos de clase A.",
        price: 45000,
        stock: 12,
        category: "Agua",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_709196-MLA29772162350_032019-F-removebg-preview.png"
    },
    {
        id: 5,
        name: "Matafuego ABC 1 Kg",
        description: "Matafuego de polvo químico seco ABC, ideal para autos y pequeños espacios.",
        price: 25000,
        stock: 15,
        category: "ABC",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/20190729_094518-removebg-preview.png"
    },
    {
        id: 6,
        name: "Matafuego ABC 5 Kg",
        description: "Matafuego de polvo químico seco ABC, adecuado para hogares y oficinas.",
        price: 55000,
        stock: 10,
        category: "ABC",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_964300-MLA30036163128_042019-O-removebg-preview.png"
    },
    {
        id: 7,
        name: "Matafuego CO2 2 Kg",
        description: "Matafuego de dióxido de carbono (CO2), ideal para fuegos eléctricos y líquidos inflamables.",
        price: 60000,
        stock: 8,
        category: "CO2",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_671419-MLA29635972691_032019-F-removebg-preview.png"
    },
    {
        id: 8,
        name: "Matafuego Agua Presurizada 9 L",
        description: "Matafuego a base de agua presurizada, ideal para fuegos de clase A.",
        price: 45000,
        stock: 12,
        category: "Agua",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_709196-MLA29772162350_032019-F-removebg-preview.png"
    },
    {
        id: 9,
        name: "Matafuego ABC 1 Kg",
        description: "Matafuego de polvo químico seco ABC, ideal para autos y pequeños espacios.",
        price: 25000,
        stock: 15,
        category: "ABC",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/20190729_094518-removebg-preview.png"
    },
    {
        id: 10,
        name: "Matafuego ABC 5 Kg",
        description: "Matafuego de polvo químico seco ABC, adecuado para hogares y oficinas.",
        price: 55000,
        stock: 10,
        category: "ABC",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_964300-MLA30036163128_042019-O-removebg-preview.png"
    },
    {
        id: 11,
        name: "Matafuego CO2 2 Kg",
        description: "Matafuego de dióxido de carbono (CO2), ideal para fuegos eléctricos y líquidos inflamables.",
        price: 60000,
        stock: 8,
        category: "CO2",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_671419-MLA29635972691_032019-F-removebg-preview.png"
    },
    {
        id: 12,
        name: "Matafuego Agua Presurizada 9 L",
        description: "Matafuego a base de agua presurizada, ideal para fuegos de clase A.",
        price: 45000,
        stock: 12,
        category: "Agua",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_709196-MLA29772162350_032019-F-removebg-preview.png"
    },
    {
        id: 13,
        name: "Matafuego ABC 1 Kg",
        description: "Matafuego de polvo químico seco ABC, ideal para autos y pequeños espacios.",
        price: 25000,
        stock: 15,
        category: "ABC",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/20190729_094518-removebg-preview.png"
    },
    {
        id: 14,
        name: "Matafuego ABC 5 Kg",
        description: "Matafuego de polvo químico seco ABC, adecuado para hogares y oficinas.",
        price: 55000,
        stock: 10,
        category: "ABC",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_964300-MLA30036163128_042019-O-removebg-preview.png"
    },
    {
        id: 15,
        name: "Matafuego CO2 2 Kg",
        description: "Matafuego de dióxido de carbono (CO2), ideal para fuegos eléctricos y líquidos inflamables.",
        price: 60000,
        stock: 8,
        category: "CO2",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_671419-MLA29635972691_032019-F-removebg-preview.png"
    },
    {
        id: 16,
        name: "Matafuego Agua Presurizada 9 L",
        description: "Matafuego a base de agua presurizada, ideal para fuegos de clase A.",
        price: 45000,
        stock: 12,
        category: "Agua",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_709196-MLA29772162350_032019-F-removebg-preview.png"
    },
    {
        id: 17,
        name: "Matafuego ABC 1 Kg",
        description: "Matafuego de polvo químico seco ABC, ideal para autos y pequeños espacios.",
        price: 25000,
        stock: 15,
        category: "ABC",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/20190729_094518-removebg-preview.png"
    },
    {
        id: 18,
        name: "Matafuego ABC 5 Kg",
        description: "Matafuego de polvo químico seco ABC, adecuado para hogares y oficinas.",
        price: 55000,
        stock: 10,
        category: "ABC",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_964300-MLA30036163128_042019-O-removebg-preview.png"
    },
    {
        id: 19,
        name: "Matafuego CO2 2 Kg",
        description: "Matafuego de dióxido de carbono (CO2), ideal para fuegos eléctricos y líquidos inflamables.",
        price: 60000,
        stock: 8,
        category: "CO2",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_671419-MLA29635972691_032019-F-removebg-preview.png"
    },
    {
        id: 20,
        name: "Matafuego Agua Presurizada 9 L",
        description: "Matafuego a base de agua presurizada, ideal para fuegos de clase A.",
        price: 45000,
        stock: 12,
        category: "Agua",
        imageUrl: "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_709196-MLA29772162350_032019-F-removebg-preview.png"
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
