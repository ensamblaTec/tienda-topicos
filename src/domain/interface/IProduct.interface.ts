export interface IProduct {
    product: string;
    description: string;
    price: number;
    category: string[];
    discount?: string;
    id_supplier: string;
    id_inventory: string;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}