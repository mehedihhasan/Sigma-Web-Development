let arr = [1,13,5,7,11]

// let new_Arr=[]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     new_Arr.push(element**2)

//     console.log(new_Arr)
    
// }
// let new_Arr = arr.map((e, index, array)=>{
//     return e**2
// })
// console.log(new_Arr)

const greaterThanSeven = (e)=>{

    if(e>7){
        return true
    }
    return false

}
console.log(arr.filter(greaterThanSeven))
