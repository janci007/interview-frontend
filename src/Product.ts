export interface Product {
    id: number,
    name: string,
    price: number
}

export interface ProductWithState extends Product {
    modified?: boolean
}