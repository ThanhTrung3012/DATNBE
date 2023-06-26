const mongoose = require('mongoose')

const OrderModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        sex: {
            type: Number,
            required: true,
            enum: [0, 1]
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        other_requirements: {
            type: String,
        },
        method: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            min: 10,
            required: true
        },
        products: {
            type: Array,
            required: true
        },
        status: {
            type: String,
            enum: ['chờ xác nhận', 'xác nhận', 'đang giao','đã giao'],
            default:'chờ xác nhận'
        }
    },
    {timestamps: true}
)

const Order = mongoose.model('orders', OrderModel)
module.exports = Order
