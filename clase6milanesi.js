const productos = [3,8,5,19,7,1];
const personas = [12,32,5,43,54,11,9,17,65];
const fechas = [];
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

for(let i = 0; i <= 5; i++){
    const d = new Date(getRandomArbitrary(1000, 10000000000000));
    fechas.push(d);
}




productos.sort(function(a,b){return a-b});
personas.sort(function(a,b){return b-a});
fechas.sort(function(a,b){return a-b})


console.log(productos);
console.log(personas);
console.log(fechas)
  