// margin of error with rounding method used is acceptable in this application
// DRY principles not fully followed here to make the functions more explicit

function lbsToKg(n) {
    let val = /\d\.?\d*/;

    function conversion(x) {
        return x * 0.453592;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 100) / 100;
    return newUnit + ' kg';
}

function ozToG(n) {
    let val = /\.?\d\.?\d*/

    function conversion(x) {
        return x * 28.3495;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 10) / 10;
    return newUnit + ' g';    
}

function ozToMl(n) {
    let val = /\.?\d\.?\d*/

    function conversion(x) {
        return x * 29.5735;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 10) / 10;
    return newUnit + ' ml';

}

function tspToMl(n) {
    let val = /\.?\d\.?\d*/

    function conversion(x) {
        return x * 4.92892;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 10) / 10;
    return newUnit + ' ml';

}

function tbspToMl(n) {
    let val = /\.?\d\.?\d*/

    function conversion(x) {
        return x * 14.7868;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 10) / 10;
    return newUnit + ' ml';
}

function cupsToMl(n) {
    let val = /\.?\d\.?\d*/

    function conversion(x) {
        return x * 236.588;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 10) / 10;
    return newUnit + ' ml';
}

// all dry goods
function dryConv(line, kind, unit) {
    let val = /\.?\d\.?\d*/

    function round(x) {
        return Math.round(x * 10) / 10
    }

    const gPer = {
        flour: {
            cup: 120,
            tbsp: 120 / 16,
            tsp: 120 / 48
        },
        salt: {
            cup: 250,
            tbsp: 250 / 16,
            tsp: 250 / 48
        },
        sugar: {
            cup: 200,
            tbsp: 200 / 16,
            tsp: 200 / 48
        },
        soda: {
            cup: 245,
            tbsp: 245 / 16,
            tsp: 245 / 48
        },
        powder: {
            cup: 230,
            tbsp: 230 / 16,
            tsp: 230 / 48
        }
    }

    if (kind === 'flour') {
        console.log(gPer.flour[unit]);
        return round(val.exec(line) * gPer.flour[unit]) + ' g';
    } else if (kind === 'salt') {
        return round(val.exec(line) * gPer.salt[unit]) + ' g';
    } else if (kind === 'sugar') {
        return round(val.exec(line) * gPer.sugar[unit]) + ' g';
    } else if (kind === 'baking soda') {
        return round(val.exec(line) * gPer.soda[unit]) + ' g';
    } else if (kind === 'baking powder') {
        return round(val.exec(line) * gPer.powder[unit]) + ' g';
    }
    
}


function flourCupsToG(n) {
    let val = /\.?\d\.?\d*/

    function conversion(x) {
        return x * 120;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 10) / 10;
    return newUnit + ' g';
}

function fracToDec(n) {
    let frac = /((\d+)\s+)?(\d)\/(\d+)/;

    parse = frac.exec(n);

    console.log(n);
    console.log(parse);

    if (parse[1] != undefined) {
        return (parse[2] / 1) + (parse[3] / parse[4]);  // treat parse[2] like a number
    } else {
        return parse[3] / parse[4];
    }
}