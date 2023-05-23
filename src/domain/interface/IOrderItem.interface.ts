import { IProduct } from "./IProduct.interface";

export interface Order_item {
    product: IProduct;
    quantity: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
}