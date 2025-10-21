interface Product {
    id: number;
    name: string;
    price: number;
    category: ProductCategory;
    stock: number;
}

enum ProductCategory {
    Electronics,
    Clothing,
    Books,
    HomeAppliances,
    Toys
}


class ProductManager {
    private products: Product[] = [];

    addProduct(product: Product): void {
// Hinzufügen eines neuen Produkts
        this.products.push(product);
        console.log("Product added: " + product.name);
    }

    displayAllProducts(): void {
// Anzeigen aller Produkte
        // Variante 1: for of Schleife
//         for (let p of this.products) {
//             console.log(p);
//         }

        // Variante 2: for Schleife
        // for (let i = 0; i < this.products.length; i++) {
        //     console.log(this.products[i]);
        // }

        // Variante 3: forEach Methode
        this.products.forEach(p => console.log(p));
    }

    displayProductsByCategory(category: ProductCategory): void {
// Anzeigen von Produkten nach Kategorie
        for (let p of this.products) {
            if (p.category === category) {
                console.log(p);
            }
        }
    }

    updateProductStock(productId: number, newStock: number): void {
// Aktualisieren des Lagerbestands eines Produkts
        for (let p of this.products) {
            if (p.id === productId) {
                p.stock = newStock;
            }
        }
    }
}


let p1: Product = {
    id: 1,
    name: "ABC",
    price: 2,
    category: ProductCategory.Clothing,
    stock: 123
};
let p2: Product = {
    id: 2,
    name: "XYZ",
    price: 4,
    category: ProductCategory.Clothing,
    stock: 1265
};
let p3: Product = {
    id: 3,
    name: "XBox",
    price: 123,
    category: ProductCategory.Electronics,
    stock: 422
};

const pm = new ProductManager();
pm.addProduct(p1);
pm.addProduct(p2);
pm.addProduct(p3);

console.log("DisplayAllProducts");
pm.displayAllProducts();

console.log("DisplayProductsByCategory: Clothing");
pm.displayProductsByCategory(ProductCategory.Clothing);

console.log("Set stock of product 3 to 0");
pm.updateProductStock(3, 0);

pm.displayAllProducts();

// Teil2
interface CartItem {
    product: Product;
    quantity: number;
    userId: string;
}

let myCart: CartItem[] = [];

function addToCart(
    product: Product,
    quantity: number,
    userId: string,
    cart: CartItem[]
): CartItem[] {
// Hinzufügen von Artikeln zum Warenkorb
    const newItem: CartItem = {
        product: product,
        quantity: quantity,
        userId: userId
    };
    cart.push(newItem);
    return cart;
}

function removeFromCart(
    productId: number,
    userId: string,
    cart: CartItem[]
): CartItem[] {
    for (let i = 0; i < cart.length; i++) {
        const c = cart[i] as CartItem;
        if (c.product.id === productId && c.userId === userId) {
            cart.splice(i, 1);
            break;
        }
    }
    return cart;
}