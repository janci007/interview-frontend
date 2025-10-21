import type {Product} from "./Product.ts";

const WORDS = [
    [
        "Awesome", "Sleek", "Durable", "Compact", "Ergonomic", "Rustic", "Premium", "Smart", "Portable",
        "Modern", "Elegant", "Vintage", "Eco", "Ultra", "Lightweight", "Heavy-Duty", "Innovative",
        "Stylish", "Versatile", "Minimalist", "Rechargeable", "Waterproof", "Wireless", "Customizable"
    ],
    [
        "Red", "Blue", "Green", "Black", "White", "Gray", "Silver", "Gold", "Yellow", "Orange",
        "Purple", "Brown", "Teal", "Beige", "Maroon", "Cyan", "Olive", "Rose", "Ivory", "Navy"
    ],
    [
        "Steel", "Wooden", "Plastic", "Leather", "Cotton", "Aluminum", "Carbon Fiber", "Glass",
        "Ceramic", "Wool", "Rubber", "Titanium", "Recycled", "Nylon", "Bamboo", "Silicone",
        "Canvas", "Copper", "Acrylic", "Hemp"
    ],
    [
        "Chair", "Table", "Lamp", "Bottle", "Backpack", "Watch", "Speaker", "Headphones",
        "Keyboard", "Mug", "Wallet", "Shoes", "Jacket", "Drone", "Camera", "Router", "Fan",
        "Monitor", "Microwave", "Sunglasses", "Towel", "Power Bank", "Flashlight", "Desk Organizer"
    ]
]

export function generateProductList(count: number): Product[] {
    const products: Product[] = [];
    for (let i = 0; i < count; i++) {
        products.push({
            id: i,
            name: randomName(),
            price: randomPrice(10, 1000)
        });
    }
    return products;
}

function randomName(): string {
    return WORDS.map(list => randomItem(list)).join(" ");
}

function randomItem(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomPrice(min: number, max: number) {
    return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

export function waitRandom(min: number, max: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, Math.floor(Math.random() * (max - min + 1)) + min);
    })
}