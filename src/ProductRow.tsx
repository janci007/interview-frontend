import * as React from "react";
import type {Product, ProductWithState} from "./Product.ts";

interface ProductRowProps {
    product: ProductWithState
    onChange: (updatedProduct: Product) => void
}

const ProductRow: React.FC<ProductRowProps> = ({product, onChange}) => {


    return <tr>
        <td>
            <input
                type="text"
                value={product.name}
                onChange={(e) => onChange({...product, name: e.target.value})}
            />
        </td>
        <td>
            <input
                type="number"
                value={product.price}
                onChange={(e) => onChange({...product, price: +e.target.value})}
            />
        </td>
        <td>
            {product.modified ? "✏️" : ""}
        </td>
    </tr>
}

export default ProductRow;