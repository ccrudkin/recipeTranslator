function mlToOz(n) {
    let val = /\.?\d\.?\d*/

    function conversion(x) {
        return x / 29.5735;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 10) / 10;
    return newUnit + ' oz.';
}

function lToOz(n) {
    let val = /\.?\d\.?\d*/

    function conversion(x) {
        return x * 1000 / 29.5735;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 10) / 10;
    return newUnit + ' oz.';
}

function kgToLb(n) {
    let val = /\.?\d\.?\d*/;

    function conversion(x) {
        return x / 0.453592;
    }

    newUnit = Math.round(conversion(val.exec(n)) * 100) / 100;
    return newUnit + ' lbs.';
}

function gToOz(n) {
    let val = /\.?\d\.?\d*/

    function conversion(x) {
        return x / 28.3495;
    }

    newUnit = conversion(val.exec(n));
    
    if (newUnit <= 32) {
        return Math.round(newUnit * 100) / 100 + ' oz.';
    } else if (newUnit > 32) {
        return Math.round((newUnit / 16) * 100) / 100 + ' lbs.';
    }
}

// all dry goods
function dryConvM(line, kind, unit) {
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
        amount = val.exec(line) / gPer.flour.cup;
        if (amount > 0.25) {
            return round(amount) + ' cups';    
        } else if (amount > .1) {
            return round(amount * 16) + ' tablespoons';
        } else {
            return round(amount * 48) + ' teaspoons';
        }
        
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