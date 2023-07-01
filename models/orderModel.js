import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
        items: {
          type: Array,
        required:true
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;