console.log("hiiii");
setTimeout(()=>{
    console.log("hellow");
},5000)
console.log();

//set interval
setInterval(()=>{
    console.log("wlcm");

},10000);
console.log();

//promise
let mypromise=new Promise(reject=>reject("this isnreject"))
mypromise.then(null)
.catch((error)=>{
    console.log(error);
})

//Async await function
async function getdog()
{
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    console.log(res);
    let data=await res.json()
    console.log(data);
    document.querySelector("img").src=data.message
}
getdog()

let array=[1,2,3,4,5]
let sum=array.reduce((p,c)=>{
    return p+c;

})
console.log(sum);