import { order } from '../../controller/types';
import { IPayment } from './IPayment.interface';
import { IProduct } from './IProduct.interface';

export interface IOrderDetail {
    quantity: number;
    status: order;
    date_buy: Date;
    payment: IPayment;
    order_item: IProduct[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}