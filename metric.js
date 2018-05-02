function toMetric(recipeText) {
    let frac = /(\d+\s+)?\d\/\d+/gi;
    let lb = /\.?\d\.?\d*\s*-*pound[s]?|\.?\d\.?\d*\s*-*lb[s]?\.?/gi;
    let oz = /\.?\d\.?\d*\s*-*ounce[s]?|\.?\d\.?\d*\s*-*oz\.?/gi;
    let cups = /\.?\d\.?\d*\s+cup[s]?/gi;
    let tsp = /\.?\d\.?\d*\s*-*teaspoon[s]?|\.?\d\.?\d*\s*-*tsp\.?/gi;
    let tbsp = /\.?\d\.?\d*\s*-*tablespoon[s]?|\.?\d\.?\d*\s*-*tbsp\.?/gi;
    let extraSpace = /^\t|^\s+/

    recipeText = recipeText.replace(frac, fracToDec); // fractions to decimal

    lines = recipeText.split('\n');
    liquidLines = [];
    lines.forEach((line) => {
        let converted = false;
        line = line.replace(extraSpace, '');
        liquids.forEach((liquid) => {
            let regex = RegExp(liquid);
            if (regex.test(line)) {
                line = line.replace(oz, ozToMl);
                line = line.replace(cups, cupsToMl);
                line = line.replace(tsp, tspToMl);
                line = line.replace(tbsp, tbspToMl);
                liquidLines.push(line);
                converted = true;
                return;
            } 
        });
        if (!converted) {
            liquidLines.push(line);
        }
    });

    dryLines = [];
    liquidLines.forEach((line) => {
        let converted = false;
        drygoods.forEach((dry) => {
            let regex = RegExp(dry);
            if (regex.test(line)) {
                line = line.replace(cups, dryConv(line, dry, 'cup'));
                line = line.replace(tsp, dryConv(line, dry, 'tsp'));
                line = line.replace(tbsp, dryConv(line, dry, 'tbsp'));
                dryLines.push(line);
                converted = true;
                return;
            } 
        });
        if (!converted) {
            dryLines.push(line);
        }
    });

    recipeText = dryLines.join('\n');

    recipeText = recipeText.replace(lb, lbsToKg);
    // recipeText = recipeText.replace(cups, cupsToMl); // just liquid to cups
    return recipeText.replace(oz, ozToG);
}