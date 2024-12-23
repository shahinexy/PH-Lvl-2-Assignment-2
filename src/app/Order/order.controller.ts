import { Request, Response } from "express";
import { OrderServer } from "./order.server";


const createOrder = async (req: Request, res: Response) =>{
    try {
        const {order: orderData} = req.body;
        const result = await OrderServer.createtOrderinDB(orderData)

        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            data: error
        })
    }
}

export const OrderController = {
    createOrder
}