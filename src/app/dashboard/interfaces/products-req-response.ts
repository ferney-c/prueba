export interface ProductsResponse {
    data: Product[];
}

export interface Product {
    id:          number;
    name:        string;
    description: string;
    price:       number;
    created_at:  Date;
    updated_at:  Date;
}
