//spread operators
arr = [1,2,3,5.6]

function avg(a,b,c,d){
    return a+b+c+d/4
}

let a = [9,8,9, ...arr,90]
console.log("Merged the array data ",a)

data = [20,30,40,50]

function avg1(a,b,c){
    return a+b+c/3
}

let b= avg("Array data avg1 value ",...data)
console.log(b)

// object based

let obj1 = {
    name1 : "Rahul",
    age1:25,
    city1:"Surat"

}

let {name1,age1,city1}=obj1
console.log("SPread operator object data ",name1,age1,city1)

