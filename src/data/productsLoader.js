import { collection, getDocs, addDoc } from "firebase/firestore";
import { getProducts } from "./data"; // Asegúrate de tener la ruta correcta
import db from "./db";
const productsCollectionRef = collection(db, "items");

const loadProductsToFirebase = async () => {
    try {
        // 1. Obtener productos de Firebase
        const firebaseProductsSnapshot = await getDocs(productsCollectionRef);
        const firebaseProducts = firebaseProductsSnapshot.docs.map(doc => doc.data());

        // 2. Obtener productos locales
        const localProducts = await getProducts();

        // 3. Comparar los productos locales con los productos en Firebase
        const newProducts = localProducts.filter(localProduct => 
            !firebaseProducts.some(firebaseProduct => firebaseProduct.id === localProduct.id)
        );

        // 4. Si hay productos nuevos, cargarlos a Firebase
        if (newProducts.length > 0) {
            for (const product of newProducts) {
                await addDoc(productsCollectionRef, product);
                console.log(`Producto ${product.name} agregado a Firebase.`);
            }
        } else {
            console.log("No hay productos nuevos para agregar.");
        }
    } catch (error) {
        console.error("Error al cargar los productos a Firebase: ", error);
    }
};

export default loadProductsToFirebase;
