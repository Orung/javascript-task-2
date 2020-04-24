//creating an array of objects called data
const data = [{
    principal: 2500,
    time: 1.8
}, {
    principal: 1000,
    time: 5
}, {
    principal: 3000,
    time: 1
}, {
    principal: 2000,
    time: 3
}]

// declaring a function
function interestCalculator(arr) {
    for (let obj of data) {
        let rate;
        let interestData;


        //Determine the rate applicable using the conditions
        if (obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
            obj.rate = 3;
        } else if (obj.principal >= 2500 && obj.time >= 3) {
            obj.rate = 4;
        } else if (obj.principal < 2500 || obj.time <= 1) {
            obj.rate = 2
        } else {
            obj.rate = 1;
        }
        obj.interestData = (obj.principal * obj.time * obj.rate) / 100;
    }
    console.log(data)
}

interestCalculator()