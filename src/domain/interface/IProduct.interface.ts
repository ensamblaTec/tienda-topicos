export interface IProduct {
    product: string;
    description: string;
    price: number;
    category: string[];
    discount?: Object;
    id_supplier: string;
    inventory: Object;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}