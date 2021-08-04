const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({

    Name:{
        type: String,
        required: true
    },
    ContactNo:{
        type: Number,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    Timings:{
        type: String,
        required: true
    },
    Image:{
        type: String,
        required: true
    },

    MenuItems:[{
        Name:{
            type: String,
            required: true
        },
        Price:{
            type: Number,
            required: true
        }
    }],
    Customer: [{
       
    ContactNo:{
        type: Number,
        required: true
    },
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Email:{
        type: String,
    },
    Order:[{
        Date: {
            type: String,
            required: true
        },     
        Type:{
            type: String,
            enum:["sitting","takeaway"],
        },
        OrderedItems:[{
            ItemName:{
                type: String,
                required: true
            },
            Quantity:{
                type: Number,
                required: true
            },
            Price:{
                type: Number,
                required: true
            }
        }]
    }]}]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant; 