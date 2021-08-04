export class Restaurant{
    Name:  String;
    ContactNo: Number;
    Address: String;
    Timings: String;
    Image: String;
    MenuItems:[{
        Name: String;
        Price: Number;
    }];
    Customer: [{     
        ContactNo: Number;
        FirstName:String;
        LastName:String;
        Email:String;
        Order:[{
            Date:  String;
            Type: String;
            OrderedItems:[{
                 ItemName: String;
                Quantity: Number;
                Price: Number
            }]
        }]}]
}