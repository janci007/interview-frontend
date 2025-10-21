import type {Product} from "./Product.ts";
import {generateProductList, waitRandom} from "./random.ts";

const MAX_ITEMS = 1000;
const MAX_RESULTS = 20;
const DB: Product[] = generateProductList(MAX_ITEMS);

/**
 * Mock API client with network latency and jitter simulations
 */
export default class ApiClient {

    async listProducts(search: string) {
        await waitRandom(100, 1000);
        return DB.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).slice(0, MAX_RESULTS);
    }

    async updateProduct(product: Product) {
        await waitRandom(100, 1000);
        const item = DB.find(item => item.id === product.id);
        if (!item) throw new Error("Item not found: " + product.id);
        item.name = product.name;
        item.price = product.price;
        return item;
    }
}