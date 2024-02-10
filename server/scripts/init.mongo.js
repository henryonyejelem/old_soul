db.women.remove({});
db.men.remove({});
db.users.remove({});

const menDB = [
    {
        name : "Michael Kors Mens Luxury Wool Overcoat",
        ID : "B80E71BI66",
        price : 115.25,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Hugo Boss Men Slim Fit",
        ID : "XN6MU4R3UX",
        price : 95.66,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men Dillon Trucker Jacket",
        ID : "E640DBR6NR",
        price : 130.99,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Mark New York Modern Fit Suit",
        ID : "OWY9OPV2YJ",
        price : 84.00,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men Regular Fit Stain Shirt",
        ID : "U7KYUN8FFE",
        price : 0.00,
        colors : ["Biege"],
        tags : "",
    },
    
    {
        name : "Men Gattaca Down Parka Coat",
        ID : "H727S11CEG",
        price : 100.00,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Vogue Slim-Fit Ready Flex Suit",
        ID : "AS2XMABP9C",
        price : 235.66,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men Smooth Cotton Crewneck T-Shirt",
        ID : "MT8H8ZIXWG",
        price : 39.50,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Kenneth Cole Men Solid Coat",
        ID : "3F58Q8GCOM",
        price : 220.99,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men Full Stretch Solid Suit",
        ID : "2HYTQYAKZQ",
        price : 139.00,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Ralph Lauren Vintage Highscool Hoodie",
        ID : "XDAUVIW05Y",
        price : 185.00,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men's Classic Button Up Long-Sleeve Shirt",
        ID : "KQQPT9EJ4D",
        price : 0.00,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Kenneth Cole Reaction Slim Fit Suit",
        ID : "CNQSM3E9YL",
        price : 139.25,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Hugo Boss Men's Slim-Fit Superflex Suit",
        ID : "N1LOXVJSAA",
        price : 84.99,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Tommy Hilfiger Mens Trim Overcoat",
        ID : "TZ8R5Q7J1J",
        price : 130.00,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men's Addison Wool Blend Trim Peacoat",
        ID : "RN0O4T0419",
        price : 129.50,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men's Mayden Slim-Fit Overcoat",
        ID : "LV128PL57T",
        price : 150.69,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men Modern Fit Tailored Piece Suit",
        ID : "YBH9VSSRVK",
        price : 249.00,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men's Regular-Fit Camber Wool-Blend Overcoat",
        ID : "PU5ONZSTO5",
        price : 210.00,
        colors : ["Biege"],
        tags : "",
    },
    {
        name : "Men's Modern-Fit Solid Overcoat",
        ID : "PA9WO3WQZ6",
        price : 155.35,
        colors : ["Biege"],
        tags : "",
    }
]

db.men.insertMany(menDB);

const womenDB = [
    {
        name : "Women Tommy Control Pull-On Pants",
        ID : "ZWO2VPZ6UU",
        price : 49.99,
        colors : ["Tan", "Vintage Black", "Dark Metal", "Autumn"],
        tags : "",
    },
    {
        name : "Michael Kors Women Wool Blend Belted Wrap Coat",
        ID : "LBUAISFRIK",
        price : 111.99,
        colors : ["Tan", "Vintage Black"],
        tags : "",
    },
    {
        name : "Women's Mock-Neck Long-Sleeve Top ",
        ID : "2USO1ZFUBF",
        price : 54.99,
        colors : ["Vintage Black", "Biege"],
        tags : "",
    },
    
    {
        name : "Women's Midi Length Fit and Flare Dress",
        ID : "CKMXBDJQM7",
        price : 56.70,
        colors : ["Lilae", "Autumn", "Cardinal"],
        tags : "",
    },
    
    {
        name : "Women's Printed Knit Maxi Dress",
        ID : "IU8MIAW332",
        price : 89.50,
        colors : ["Gold", "Black"],
        tags : "",
    },
    
    {
        name : "Women's Floral-Print Smocked Tiered Maxi Dress",
        ID : "5VQVGPP024",
        price : 99.00,
        colors : ["Ocean Blue", "Olive", "White"],
        tags : "",
    },
    
    {
        name : "Ruched A-Line Gown",
        ID : "YGQLAYZDX0",
        price : 209.99,
        colors : ["Cardinal", "Tan"],
        tags : "",
    },
    
    
    {
        name : "Women's Printed Pleat-Neck Ruffle-Sleeve Top",
        ID : "AHW5WN5LK4",
        price : 90.90,
        colors : ["Brown"],
        tags : "",
    },
    
    
    {
        name : "Women's Knit Sleeve Boyfriend Blaze",
        ID : "R3TWEW40CA",
        price : 59.50,
        colors : ["Silver", "Vintage Black", "Storm"],
        tags : "",
    },

    {
        name : "Lauren Ralph Lauren Non-Iron Straight-Fit Shirt",
        ID : "Q5MHEMY8NE",
        price : 89.50,
        colors : ["Autumn", "Vintage Black"],
        tags : "",
    },

    {
        name : "Women's Halter Bow  Sleeve A-Line Dress",
        ID : "L1YIJ6KOTM",
        price : 99.00,
        colors : ["Olive", "Autumn"],
        tags : "",
    },

    {
        name : "Women's Ieena Solid Square Puff Fitted Midi Dress",
        ID : "8EEDHX16R0",
        price : 56.25,
        colors : ["Black", "Tan"],
        tags : "",
    },

    {
        name : "Women's Ruffle-Collar Shirts",
        ID : "0BEGAR2WL9",
        price : 49.50,
        colors : ["White", "Olive"],
        tags : "",
    },

    {
        name : "Women's The Vivi Knit Dress for Women",
        ID : "BP9CLJ7GYY",
        price : 150.00,
        colors : ["Sky Blue", "Storm"],
        tags : "",
    },

    {
        name : "Women's Menswear Blazer",
        ID : "HNVFTEV7P7",
        price : 79.50,
        colors : ["Storm", "Vintage Black"],
        tags : "",
    },

    {
        name : "Women's Ruffled-Sleeve Sheath Dress",
        ID : "FBOCSGOSPX",
        price : 99.98,
        colors : ["Dark Metal", "Tan", "Biege", "Coral"],
        tags : "",
    },

    {
        name : "Women's V-Neck Midi Sweater Dress",
        ID : "9JPQWD9TVH",
        price : 49.50,
        colors : ["Vintage Black", "Biege", "White"],
        tags : "",
    },

    {
        name : "Women's Side-Tie Faux-Wrap Dress",
        ID : "MZ5XJGGFJ8",
        price : 119.25,
        colors : ["Cardinal", "Vintage Black", "Cardinal"],
        tags : "",
    },

    {
        name : "Women's Ruffled-Sleeve Sheath Dress",
        ID : "DITCBMFHCT",
        price : 89.00,
        colors : ["Gold", "Vintage Black"],
        tags : "",
    },

    {
        name : "Women's Houndstooth  Menswear Jacket",
        ID : "DYXKCRKENU",
        price : 169.00,
        colors : ["Biege", "White"],
        tags : "",
    }
]


db.women.insertMany(womenDB);