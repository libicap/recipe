var recipe = {
    name: "Keto Quiche Recipe",
    section: [
        {
        sectiontitle: "Ingredients",
        part: [
            {
            parttitle: "Crust",
            partitems: [
                "60g almond flour",
                "60g coconut flour",
                "1/2 tsp xanthum gum",
                "1 tbsp psyllium husk",
                "1 egg",
                "100g unsalted butter (cold)",
                "a few pinches of pink salt",
                "Egg wash"
            ]
            },
            {
            parttitle: "Fillings",
            partitems: [
                "200g baby spinach",
                "1 chopped onion",
                "2 cloves of garlics",
                "3 eggs",
                "200ml heavy cream",
                "100g greyere cheese (shreded)",
                "blue cheese (small amount, cut into cubes)",
                "salt and pepper to taste",
                "2 tbsp olive oil for frying"
            ]
            }
        ] 

        },

        {
        sectiontitle: "Preparation",
        part: [
            {
            parttitle: "Crust Preparation",
            partitems: [
                "Pre-heat oven at 180c.",
                "Add all dry ingredients in a big bowl, stir well.",
                "Add in cold butter, pulse until the dough comes together, until crumbly texture is formed, then add the eggs in.",
                "Pulse until evenly combined, make it into a dough shape, wrap with cling film and put into the freezer for 30 mins.",
                "Take the dough out and flatten the dough with your rolling pin between parchment paper."
            ]
            },
            {
            parttitle: "Filings Preparation",
            partitems: [
                        "Heat the pan with olive oil with medium heat",
                        "Add in garlic and onion, saute till fragrance for 5 mins", 
                        "Add in baby spinach, cook until wilted, drain",
                        "In a large bowl, beat in eggs and heavy cream, add salt and pepper to taste",
                        "Place cooked spinanch evenly on the crust, grueyere cheese, blue cheese and finaly pour in egg mixture carefully.",
                        "Bake in the oven, middle rack, for 40 mins."
                        ]
        
            }


        ]

        }


    ],

};

var titleH2 = document.getElementById("title");
titleH2.innerText = recipe.name;

var ingredientsandpreparationDIV = document.getElementById("ingredientsandpreparation");

for (var i=0; i<recipe.section.length; i=i+1){

    var sectiontitleH2 = document.createElement("h2");
    sectiontitleH2.innerText = recipe.section[i].sectiontitle;
    ingredientsandpreparationDIV.appendChild(sectiontitleH2);


    for (var j=0; j<recipe.section[i].part.length; j=j+1){

        var partH3 = document.createElement("h3");
        partH3.innerText = recipe.section[i].part[j].parttitle;
        ingredientsandpreparationDIV.appendChild(partH3);

        var itemsUL = document.createElement("ul");
        ingredientsandpreparationDIV.appendChild(itemsUL);

        for (var k=0; k<recipe.section[i].part[j].partitems.length; k=k+1){

            var itemsLi = document.createElement("li");
            itemsLi.innerText = recipe.section[i].part[j].partitems[k];
            itemsUL.appendChild(itemsLi);
        };

    };


};

