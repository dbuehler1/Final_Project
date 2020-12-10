$(document).ready(function () {

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



    var entries = [];


    function Home(){
        event.preventDefault();
        $("#Home").show();
        $("#OrderCar").hide();
        $("#Catalog").hide();
        $("#Cart").hide();
    }
    function OrderCar(){
        event.preventDefault();
        $("#OrderCar").show();
        $("#Home").hide();
        $("#Catalog").hide();
        $("#Cart").hide();
    }
    function Catalog(){
        event.preventDefault();
        $("#Catalog").show();
        $("#Home").hide();
        $("#OrderCar").hide();
        $("#Cart").hide();
    }
    function Cart(){
        event.preventDefault();
        $("#Cart").show();
        $("#Home").hide();
        $("#Catalog").hide();
        $("#OrderCar").hide();
    }




    function addToCart() {
        var itemQty = 0;
        var PName = "";
        /*switch(test){
            case 1:
                itemQty = $("#phoneHolder").val();
                PName = "Phone Holder";
                break;
            case 2:
                itemQty = $("#Spoiler").val();
                PName = "Spoiler";
                break;
            case 3:
                itemQty = $("#Subwoofers").val();
                PName = "Subwoofer";
                break;
            case 4:
                itemQty = $("#AirFreshener").val();
                PName = "Air Freshener";
                break;
            case 5:
                itemQty = $("#NeonLights").val();
                PName = "Neon Headlights";
                break;
        }*/


        var total = 0;

        var entry = {
            ProductName: PName,
            Qty: itemQty,
            Total: total
        };
        entries.push(entry);

    }

    function displayCart() {
        event.preventDefault();
        var Total = 0;
        for (var x = 0; x < entries.length; x++) {
            var newPName = $("<p>");
            $("#Cart").append(newPName);
            newPName.attr("id", 'PName${x}');
            newPName.text("Product Name: " + entries[x].ProductName);

            var newQty = $("<p>");
            $("#Cart").append(newQty);
            newQty.attr("id", 'QTY${x}');
            newQty.text("Quantity: " + entries[x].Qty);


        }

    }

})