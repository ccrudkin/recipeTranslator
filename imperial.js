function toImperial(recipeText, method) {
    let frac = /(\d+\s+)?\d\/\d+/gi;
    let kg = /\.?\d\.?\d*\s*-*kilo(?:gram)?[s]?|\.?\d\.?\d*\s*-*kg[s]?\.?/gi;
    let g = /\.?\d\.?\d*\s*-*gram[s]?|\.?\d\.?\d*\s*-*g\.?/gi;
    let l = /\.?\d\.?\d*\s*-*liter[s]?|\.?\d\.?\d*\s*-*l[s]?\.?/gi;
    let ml = /\.?\d\.?\d*\s*-*milliliter[s]?|\.?\d\.?\d*\s*-*ml[s]?\.?/gi;
    let extraSpace = /^\t|^\s+/

    recipeText = recipeText.replace(frac, fracToDec); // fractions to decimal

    lines = recipeText.split('\n');
    liquidLines = [];
    lines.forEach((line) => {  // replace liquids first
        let converted = false;
        line = line.replace(extraSpace, '');
        liquids.forEach((liquid) => {
            let regex = RegExp(liquid);
            if (regex.test(line)) {
                line = line.replace(ml, mlToOz);
                line = line.replace(l, lToOz);
                liquidLines.push(line);
                converted = true;
                return;
            } 
        });
        if (!converted) {
            liquidLines.push(line);
        }
    });

    if (method === 'v') {
        dryLines = [];
        liquidLines.forEach((line) => {  // replace dry goods with known conversion factors
            let converted = false;
            drygoods.forEach((dry) => {
                let regex = RegExp(dry);
                if (regex.test(line)) {
                    line = line.replace(g, dryConvM(line, dry, 'gram'));
                    dryLines.push(line);
                    converted = true;
                    return;
                } 
            });
            if (!converted) {
                dryLines.push(line);
            }
        });

        liquidLines = dryLines;
    }

    recipeText = liquidLines.join('\n');

    recipeText = recipeText.replace(kg, kgToLb);
    return recipeText.replace(g, gToOz);
}