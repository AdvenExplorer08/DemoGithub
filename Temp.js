function converTemp1(cel){

    return (273+cel);
}

function convertTemp(temperatureValue, conversionUnit){
     let a= (conversionUnit = 'C') ? (273+temperatureValue): (temperatureValue- 273);
      return a;
    }


console.log(converTemp1(35)); // Temperature in Kelvin 

console.log(convertTemp(38, 'C'));

console.log(convertTemp(382, 'K'));