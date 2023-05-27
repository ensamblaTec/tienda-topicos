// import { Get, Post, Put, Query, Route, Tags } from 'tsoa';
// import { IOrderDetailController } from './interfaces';
// import { LogSuccess } from '../utils/logger';

// // ORM
// import {
//     getAllOrderDetails,
//     getOrderDetailByID,
//     updateOrderDetailByID,
//     createOrderDetail,
//     deleteOrderDetailByID
// } from '../domain/orm/OrderDetail.orm';

// @Route('/api/v1/order-detail')
// @Tags('OrderDetailController')
// export class OrderDetailController implements IOrderDetailController {
//     getAllOrderDetails(): Promise<any> {
//         throw new Error('Method not implemented.');
//     }
//     getOrderDetailByID(): Promise<any> {
//         throw new Error('Method not implemented.');
//     }
//     updateOrderDetailByID(): Promise<any> {
//         throw new Error('Method not implemented.');
//     }
//     createOrderDetail(): Promise<any> {
//         throw new Error('Method not implemented.');
//     }
//     deleteOrderDetailByID(): Promise<any> {
//         throw new Error('Method not implemented.');
//     }
//     @Get('/')
//     public async getOrderDetails(): Promise<any> {
//         LogSuccess('[/api/v1/products] get all order details');

//         const response = await getAll();
//     }
// }