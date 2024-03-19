const removeFromArray = function(array, ...args) {
    let arrayLength = array.length;
    let argsLength = args.length;
    tothetop: for(let i = 0; i < arrayLength; i++){
        for(let j = 0; j < argsLength; j++){
            if(array[i] === args[j]){
                array.splice(i,1);
                continue tothetop;
            }
        }
    }
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
