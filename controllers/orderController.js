import orderModel from "../models/orderModel.js";

export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel.find({}).sort({ createdAt: -1 });
    res
      .status(200)
      .send({ success: true, message: "Orders Fetched Successfully", orders });
  } catch (error) {
    res.send({ success: false, message: "Error in getting Orders", error });
  }
};

export const createOrdersController = async (req, res) => {
  try {
    const { items, totalAmount, totalItems } = req.body;

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    // console.log(items);
    const order = await new orderModel({
      items: items,
      totalAmount,
      deliveryTime: getRndInteger(12, 29),
      totalItems,
    }).save();
    res.status(201).send({ success: true, message: "Order Successfull" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Creating Order", error });
  }
};
