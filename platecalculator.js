class PlateCalculator {

    // From desired weight and plates available, outputs the plates needed for one side of the barbell.
    getPlates(weight, plates) {
        let result = [];

        for (let key in plates) {
            if (weight < (2 * plates[key])) {
                continue;
            }

            let count = Math.floor(weight / plates[key]);

            if (count % 2 !== 0) count--;

            weight -= plates[key] * count;
            
            count /= 2;

            while(count-- > 0) {
                result.push(plates[key]);
            }
        }

        return result;
    }
}