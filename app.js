// Special ingredient list
const liquids = ['water', 'milk', 'vinegar', 'syrup', 'vodka', 'sauce', 
                'mayonnaise', 'vanilla extract', 'juice', 'oil', 'honey'];
const drygoods = ['flour', 'salt', 'sugar', 'baking soda', 'baking powder'];

// Base functions
function transferText(textIn) {
    document.getElementById('outputRecipe').innerHTML = textIn;
}

function convertRecipe() {
    let textIn = document.getElementById('inputRecipe').value;
    let units = document.getElementById('unitSelector').value;
    let textOut;
    if (units === 'toMetric') {
        textOut = toMetric(textIn);
    } else if (units === 'toImperial' || units === 'toImperialV') {
        if (units === 'toImperial') {
            textOut = toImperial(textIn, 'w');
        } else {
            textOut = toImperial(textIn, 'v');
        }
    } else {
        textOut = 'Please choose a conversion';
    }
    transferText(textOut);
}

document.getElementById('convertButton').addEventListener('click', convertRecipe);