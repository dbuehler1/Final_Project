$(document).ready(function () {

    //events
    $("#OrderCar").hide();
    $("#Catalog").hide();
    $("#Cart").hide();
    $("#btnHome").click(Home);
    $("#btnOrder").click(OrderCar);
    $("#btnCat").click(Catalog);
    $("#btnCart").click(Cart);
    $("#btnPhone").click(addToCart);
    $("#btnSpoiler").click(addToCart);
    $("#btnSub").click(addToCart);
    $("#btnFresh").click(addToCart);
    $("#btnNeon").click(addToCart);
    $("#btnDisplay").click(displayCart);
    $("#btnClear").click(ClearCart);
    $("#CarOrderForm").submit(Car);




//function figures out what the name of the person is along with requiring certain fields
    // At the end it will print out details about the order along with the person's name.
    function Car(){
        event.preventDefault();
        var CarType = "";
        var Color = "";
        var firstname = $("#FName").val();
        var lastname = $("#LName").val();

        var CarTotal = 0;
        if($("#red:checked").length == 1){
            Color = "red";
        }
        else if($("#blue:checked").length == 1){
            Color = "Blue";
        }
        else if($("#green:checked").length == 1){
            Color = "Green";
        }

        if($("#Normal:checked").length == 1){
            CarTotal = 15000;
            CarType = "Car";
        }
        else if($("#Truck:checked").length == 1){
            CarTotal = 25000;
            CarType = "Truck";
        }
        else if($("#sport:checked").length == 1){
            CarTotal = 35000;
            CarType = "Sports Car";
        }
        if($("#spareTire:checked").length == 1){
            CarTotal = CarTotal + 250;
        }
        //validation
        if(firstname.length < 1 || lastname.length < 1){
            $("#CarTotal").text("!!Please Enter Required Fields!!");
            $("#orderDesc").text("");
        }
        else{
            $("#CarTotal").text("Total: $" + CarTotal.toFixed(2));
            $("#orderDesc").text("Congrats "+ firstname + " " + lastname + " on your new " + Color + " "
                + CarType + ", Enjoy!");
        }

    }
    //array to hold entries
    var entries = [];
    //clear out array and empty div
    function ClearCart(){
        entries = [];
        $("#CartItems").empty();
        $("#total").text("Total: 0");
    }
//displays Home and hides others
    function Home(){
        event.preventDefault();
        $("#Home").show();
        $("#OrderCar").hide();
        $("#Catalog").hide();
        $("#Cart").hide();
    }
    //displays OrderCar and hides others
    function OrderCar(){
        event.preventDefault();
        $("#OrderCar").show();
        $("#Home").hide();
        $("#Catalog").hide();
        $("#Cart").hide();
    }
    //displays Catalog and hides others
    function Catalog(){
        event.preventDefault();
        $("#Catalog").show();
        $("#Home").hide();
        $("#OrderCar").hide();
        $("#Cart").hide();
    }
    //displays Cart and hides others
    function Cart(){
        event.preventDefault();
        $("#Cart").show();
        $("#Home").hide();
        $("#Catalog").hide();
        $("#OrderCar").hide();

    }



//takes in information from buttons and from inputs to calculate total and store information in
    //and object and then stores that object in an array.
    function addToCart() {

        var itemQty = 0;
        var price = this.dataset.price;
        var PName = this.dataset.name;
        $("#error").text("");


        switch(PName){
            case 'Phone Holder':
                itemQty = $("#phoneHolder").val();
                break;
            case 'Spoiler':
                itemQty = $("#Spoiler").val();
                break;
            case 'Subwoofers':
                itemQty = $("#Subwoofers").val();
                break;
            case 'Air Freshener':
                itemQty = $("#AirFreshener").val();
                break;
            case 'Neon Headlights':
                itemQty = $("#NeonLights").val();
                break;
        }
        //validation to ensure no negatives or 0's are stored
        if(itemQty < 1)
        {
            $("#error").text("Cannot add items with less than 1 QTY");
        }
        else{
            var total = itemQty * price;

            var entry = {
                ProductName: PName,
                Price: price,
                Qty: itemQty,
                Total: total
            };
            entries.push(entry);
        }



    }
//Displays all things in cart by printing out details from every object
    function displayCart() {
        event.preventDefault();
        var Total = 0;
        $("#CartItems").empty();
        for (var x = 0; x < entries.length; x++) {
            if(entries[x].Qty > 0){
                //product name
                var newPName = $("<p>");
                $("#CartItems").append(newPName);
                newPName.attr("id", 'PName${x}');
                newPName.text("Product Name: " + entries[x].ProductName);
                //quantity
                var newQty = $("<p>");
                $("#CartItems").append(newQty);
                newQty.attr("id", 'QTY${x}');
                newQty.text("Quantity: " + entries[x].Qty);
                //price per unit
                var newPrice = $("<p>");
                $("#CartItems").append(newPrice);
                newPrice.attr("id", 'Price${x}');
                newPrice.text("Per Unit: " + entries[x].Price);

                Total = Total + entries[x].Total;
            }


        }
        //total and tax
        $("#total").text("Total: $" + (Total * 1.05).toFixed(2) + "  Tax: $" + (Total * 0.05).toFixed(2));

    }

})