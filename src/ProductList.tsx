import * as React from "react";
import type {Product, ProductWithState} from "./Product.ts";
import ProductRow from "./ProductRow.tsx";

interface ProductListProps {
    products: ProductWithState[]
    onChange: (updatedProduct: Product) => void
}

const ProductList: React.FC<ProductListProps> = (props) => {
    return <table>
        <thead>
        <tr>
            <th>Product name</th>
            <th>Price</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {props.products.map(product => <ProductRow
            key={product.id}
            product={product}
            onChange={props.onChange}
        />)}
        </tbody>
    </table>
}

export default ProductList;