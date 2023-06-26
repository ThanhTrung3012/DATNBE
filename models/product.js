const mongoose = require('mongoose')

const ProductModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 255,
            unique: true,
        },
        images: {
            type: Array,
            required: true
        },
        options: {
            type: Array
        },
        price:{
            type: Number,
            required: true
        },
        colors: {
            type: Array
        },
        discount: {
            type: Number,
            defaultValue: 0
        },
        category: {
            type: String,
            required: true,
            ref: 'categories'
        },
        sold: {
            type: Number,
            required: false,
            default: 0
        },
        description: {
            type: String,
            required: false,
            default: 'Chưa có mô tả cho sản phẩm này!'
        },
        parameters:{
            type:Array,
            default:[]
        },
        isHot: {
            type: Boolean,
            default: false
        },
        isPopular: {
            type: Boolean,
            default: false
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model('products', ProductModel)
