import ProductList from "./ProductList.tsx";
import type {Product, ProductWithState} from "./Product.ts";
import {useEffect, useState} from "react";
import ApiClient from "./ApiClient.ts";


const apiClient = new ApiClient();


function App() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<ProductWithState[]>([]);

    async function load() {
        setProducts(await apiClient.listProducts(search))
    }

    async function save() {
        for (const product of products) {
            if (product.modified) {
                await apiClient.updateProduct(product);
            }
        }
        void load();
    }

    useEffect(() => {
        void load();
    }, [search]);


    function productUpdated(newProduct: Product) {
        setProducts(products.map(product => {
            if (product.id === newProduct.id) {
                return {...newProduct, modified: true}
            } else {
                return product
            }
        }))
    }

    return <>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div className={"toolbar"}>
                <button onClick={save}>Save</button>
            </div>
            <div className={"searchBar"}>
                <label htmlFor={"search"}>Search: </label>
                <input type="text" name={"search"} value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
        </div>
        <ProductList products={products} onChange={productUpdated}/>
    </>
}

export default App
