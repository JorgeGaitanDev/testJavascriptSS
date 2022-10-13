
let hash = "3837ac82f7ff2dd216764ac90622166d";
let s = hash.split("").find(x => !isNaN(x) && x > 0) ;

//point zero
console.log('3837ac82f7ff2dd216764ac90622166d -> ' + s);

//point one
function deleteSValue(array) {
    let arrayStr = array.reverse().map( x => {return x.toString().split("")}).flat();
    let intArray = arrayStr.map( x => {return parseInt(x)});
    return intArray.filter( x => {return x < s});
}

// console.log(deleteSValue([1,2,3,4,5,6]));// [ 2, 1 ]
// console.log(deleteSValue([3]));// []
// console.log(deleteSValue([33]));// []
// console.log(deleteSValue([32]));// [ 2 ]
// console.log(deleteSValue([3,2,1]));// [ 1, 2 ]
// console.log(deleteSValue([30, 6, 5, 4, 3, 2, 7, 7, 29, 1]));
// console.log(deleteSValue([10, 20, 30, 40]));

//point two
function orderArray(array){
    let intS = parseInt(s);
    let absValor = array.map(x => {return Math.abs(x)}).sort();
    let potValor = absValor.map(x => {return Math.pow(x,2)}).filter( x => {return x < (intS*10+intS)});
    return potValor;
}

// console.log(orderArray([1, 2, 3, 5, 6, 8, 9]));//[1, 4, 9, 25 ]
// console.log(orderArray([-2, -1]));// [1, 4])
// console.log(orderArray([-6, -5, 0, 5, 6]));// [0, 25, 25 ]
// console.log(orderArray([-10, 10]));// []

//point three
function Coin(array) {
    
    array.sort();
    let cambio = 0;
    let  array.forEach(element => array {
            let changeToBeCreated = changeYaCreated + 1;
            if (item > changeToBeCreated) {
                return changeToBeCreated;
                cambio += element;
            }
            return cambio + 1;
        });
    // private int NonConstructibleChange(List<int> monedas) 
    // { 
    //    // Complejidad de tiempo - O(n logn)
    //     // Complejidad de espacio - O(1)
       
    //     monedas.Sort(); 
    //    int cambioYaCreado = 0; 
    //    foreach (elemento var en monedas) 
    //    { 
    //       int changeToBeCreated = changeYaCreated + 1; 
    //       if (item > changeToBeCreated) 
    //             return changeToBeCreated ; 
    //       cambioYaCreado += elemento; 
    //    } 
       
    //    // si la matriz está vacía, 
    //    devuelve cambioYaCreado + 1; 
    // }
  
  
  
  
    // array.sort();
    // let ncc = 1;
    // for (i=0 ; i < array.length && array[i]<=ncc; i++){
    //     ncc +=array[i]
    // }
    // return ncc;
}
console.log(Coin( [5, 7, 1, 1, 2, 3, 22]));// 20
console.log(Coin([1, 1, 1, 1, 1]));// 6
console.log(Coin([1, 5, 1, 1, 1, 10, 15, 20, 100]));// 55




