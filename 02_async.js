function dealy(ms) {
    return new Promise((resolve) => setTimeout(resolve,ms));    
}

async function fetchData(){
    console.log("Fetching Data")

    await dealy(5000)

    console.log("Data Fatched")

}

fetchData()

async function getUserData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data=await response.json();
        console.log("==============data",data)
    } catch(error) {
        console.error("Error While fetching data",error)

    }
}

getUserData()


async function processdata(){
    console.log("Started Processing");


    const userData = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user= await userData.json();
    console.log("============== user data",user);


    const postData = await fetch("https://jsonplaceholder.typicode.com/posts?userId=${user.id}");
    const posts = await postData.json();
    console.log("==========postData",posts);

    console.log("Proccessing completed");
}

processdata()


const numbers = [1,2,3,4,5]

const double = numbers.map(inum=> inum * 2)

console.log(double)


const numbers = [10,20,3,4,5,6,30,40,50,60]

const filtering = numbers.filter(num => num >20 ==)

console.log(filtering)


const numbers = [1,2,3,4,5,]

const reduce = numbers.reduce((acc,num)=>acc+num,0)

console.log(reduce)