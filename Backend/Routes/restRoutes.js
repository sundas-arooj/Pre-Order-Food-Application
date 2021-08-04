const express = require('express');
const app = express();
const restRoutes = express.Router();
const mongoose = require('mongoose');

let Restaurant= require('../SchemaModel/Restaurant');

restRoutes.route('/').get(function (req,res){
    Restaurant.find(function (err,restaurant){
        if(err) {
            console.log("Error in retriving the data "+JSON.stringify(err,undefined,2));
        }
        else {
            res.send(restaurant);
        }
    });
});
restRoutes.route('/rest/').get(function (req,res){
    let name = req.query.name;
    Restaurant.find( { 'Name' : { '$regex' : name, $options: 'i'} },function (err,restaurant){
        if(err) {
            console.log("Error in retriving the data "+JSON.stringify(err,undefined,2));
        }
        else {
            res.send(restaurant);
        }
    });
});
restRoutes.route('/menupage/:id').get(function (req,res){
    Restaurant.findById(req.params.id,function (err,restaurant){
        if(err) {
            console.log("Error in retriving the data "+JSON.stringify(err,undefined,2));
        }
        else {
            res.send(restaurant);
        }
    });
});
restRoutes.post('/',(req,res) => {
    var restr = new Restaurant({
        Name :  req.body.Name,
        ContactNo : req.body.ContactNo,
        Address: req.body.Address,
        Timings: req.body.Timings,
        Image: req.body.Image,
        MenuItems: req.body.MenuItems
    });
    restr.save((err,data) => {
        if(!err){
            res.send(data);
        }      
        else{
            console.log("Error in saving the data "+JSON.stringify(err,undefined,2));
        } 
    })

});

restRoutes.route('/').delete(function (req,res){
    Restaurant.deleteMany(function (err,restaurant){
        if(err) {
            console.log("Error in deleting the data "+JSON.stringify(err,undefined,2));
        }
        else {
            res.send(restaurant);
        }
    });
});

restRoutes.route('/update').post(function(req,res){
    console.log("update arrived");
    console.log(mongoose.Types.ObjectId(req.body.restId));
    Restaurant.findById(mongoose.Types.ObjectId(req.body.restId),function(err,restaurant){
        if(!restaurant)
        {
            res.status(404).send("Record not found!")
            console.log("id not found");
        }    
        else
        {
            var customer={
                FirstName: req.body.fname,
                LastName: req.body.lname,
                Email: req.body.email,
                ContactNo: req.body.contact,
            };
            var order={
                Date: new Date(),
                Type: req.body.ordertype
            };
            
            var foundIndex = restaurant.Customer.findIndex(c => c.FirstName == req.body.fname);
            console.log(req.body.orderedItems);
            if(foundIndex==-1){
                var custIndex = restaurant.Customer.push(customer);
                custIndex=custIndex-1;
                var index=restaurant.Customer[custIndex].Order.push(order);
                index=index-1;
                restaurant.Customer[custIndex].Order[index].OrderedItems=req.body.orderedItems;
            }
            else {
                var index=restaurant.Customer[foundIndex].Order.push(order);
                index=index-1;
                restaurant.Customer[foundIndex].Order[index].OrderedItems=req.body.orderedItems;
                
            }
                restaurant.save().then(restaurant=>{
                console.log("Updated");
                console.log(restaurant.Customer);
                res.send("update completed");
            })
            .catch(err=>{
                console.log(err);
                res.status(400).send(err+ "unable to update the db")
            })
        }
    })
})

module.exports = restRoutes;