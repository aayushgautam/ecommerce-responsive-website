var json = {
    "div1": {
        "logoname": "Aditi",
        "price": "$30"
    },

    "div2": [
        "HOME",
        "LAPTOPS",
        "MOBILES",
        "SALE",
        "CONTACT US"
    ],

    "div5": "FEATURED PRODUCT",

    "div7-items": [{
        "div7-items-1": "FEATURED SALE",
        "div-7-item-2": [
            "Alexis Hudson",
            "American Apparel",
            "Ben Sherman",
            "Big Buddha",
            "Chanel",
            "Christian Audigier",
            "Coach",
            "Cole Haan"
        ]
    },
    {
        "div7-items-1": "FEATURED SALE",
        "div-7-item-2": [
            "Alexis Hudson",
            "American Apparel",
            "Ben Sherman",
            "Big Buddha",
            "Chanel",
            "Christian Audigier",
            "Coach",
            "Cole Haan"
        ]
    },
    {
        "div7-items-1": "FEATURED SALE",
        "div-7-item-2": [
            "Alexis Hudson",
            "American Apparel",
            "Ben Sherman",
            "Big Buddha",
            "Chanel",
            "Christian Audigier",
            "Coach",
            "Cole Haan"
        ]
    },
    {
        "div7-items-1": "FEATURED SALE",
        "div-7-item-2": [
            "Alexis Hudson",
            "American Apparel",
            "Ben Sherman",
            "Big Buddha",
            "Chanel",
            "Christian Audigier",
            "Coach",
            "Cole Haan"
        ]
    }]
};

$(".logo").text(json.div1.logoname);

var out = "";
for (var x of json["div7-items"]) {
    out += "<div class=\"div7-items\"><div class=\"div7-items-1\"><strong>" + x["div7-items-1"] + "</strong></div><div class=\"div7-items-2\">";
    for (var y of x["div-7-item-2"]) {
        out += y + "<br>"
    }
    out += "</div></div>";
}
$(".div7").html(out);

var out1 = "";
for (var x of json["div2"]) {
    out1 += "<div class=\"div2items\">" + x + "</div>";
}
$(".div2").html(out1);

$(".div5").html(json.div5);
