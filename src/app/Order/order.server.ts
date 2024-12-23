import { Order } from "./order.interface";
import { OrderModule } from "./order.module";


const createtOrderinDB = async (orderData: Order) =>{
    const result = await OrderModule.create(orderData);
    return result;
}

export const OrderServer = {
    createtOrderinDB
}