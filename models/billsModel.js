const mongoose = require('mongoose');

const billSchema = mongoose.Schema ({
    clientName:{
        type: String,
        required: true
    },
    clientNumber:{
        type: Number,
        required: true
    },
    totalAmount:{
        type: Number,
        required: true
    },
    subTotal:{
        type: Number,
        required: true
    },
    vat:{
        type: Number,
        required: true
    },
    paymentMode:{
        type: String,
        required: true
    },
    cartItems:{
        type:Array,
        required:true

    },
    date : {
        type:Date,
        default:Date.now(),
    },
   
},
{timestamps: true}
);

const Bills = mongoose.model('bills', billSchema)

module.exports = Bills;