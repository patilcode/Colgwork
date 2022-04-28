//concat method
let a = ["dipali", "shivami", "apeksha", "shweta"]
let b = ["Msc-i", "Msc-ii"]
let c = a.concat(b)
document.querySelector("#d1").innerHTML = "The concat array is : " + c;

//filter method
let d = [23, 44, 56, 18,]
function checkadult(age) {
    return age > 18
}
let e = d.filter(checkadult)
document.querySelector("#d2").innerHTML = "The filter array is : " + e;

//every method(answer is in true or false type)
let f = [23, 44, 56,]
function checktf(age) {
    return age < 100
}
let g = f.every(checktf)
document.querySelector("#d3").innerHTML = "The every array is : " + g;

//find method(shanka ahe)
let h = [23, 8, 12, 67, 18]
function correct(ages) {

    return ages < 18

}
let i = h.find(correct)
document.querySelector("#d4").innerHTML = "The find array is : " + i;

//findindex method
let j = [11, 22, 33, 44, 55]
function index(number) {
    return number > 22
}

let k = j.findIndex(index)
document.querySelector("#d5").innerHTML = "The findindex array is : " + k;


//includes method(boolean type answers)
let fruit = ["mango", "apple", "banana", "watermelon"]
let m = fruit.includes("mango")
document.querySelector("#d6").innerHTML = "The includes array is : " + m;
// let n=fruit.includes("coconut",0)
// document.querySelector("#d6").innerHTML = "The includes array is : " + n;

//indexof method
let frt = ["mango", "apple", "banana", "watermelon"]
let o = frt.indexOf("watermelon")
document.querySelector("#d7").innerHTML = "The indexof array is : " + o;

//join method(convert array to string)
let myFrt = ["mango", "apple", "banana", "watermelon"]
let p = myFrt.join()
document.querySelector("#d8").innerHTML = "The join array is : " + p;

//length method
let aroma = ["mango", "apple", "banana", "watermelon", "coconut"]
let q = aroma.length;
document.querySelector("#d9").innerHTML = "The lenth array is : " + q;

//pop method removes last element
let arm = ["mango", "apple", "banana", "watermelon", "coconut"]
let r = arm.pop()
document.querySelector("#d10").innerHTML = "The pop1 array is : " + arm;

// //pop removed array 
// let arm1=["mango","apple","banana","watermelon","coconut"]
// let r1=arm.pop()
// document.querySelector("#d10").innerHTML = "The pop2 array is : " + r1;

//reduce method
let num = [110, 23, 34]
function myfun(total, number) {
    return total - number
}
let s = num.reduce(myfun)
document.querySelector("#d11").innerHTML = "The reduced array is : " + s;

//reverse method
let rev = ["mango", "apple", "banana", "watermelon", "coconut"]
let t = rev.reverse()
document.querySelector("#d12").innerHTML = "The reversed array is : " + t;

//some method
// let z=["mango","apple","banana","watermelon","coconut"]
// function checkit(name)
// {
//     name=="mango"
// }
// let u=z.some(checkit)

// document.querySelector("#d13").innerHTML = "The some array is : " + u;

let arr = [23, 34, 45, 66]
function my1(age) {
    age < 25;
}
let z = arr.some(my1)
document.querySelector("#d13").innerHTML = "The some array is:" + z;

//slice method
let frtsl = ["Banana", "peru", "cheeku", "mango", "kiwi"]
let sl = frtsl.slice(1, 4)
document.querySelector("#d14").innerHTML = "The sliced array is:" + sl;

//splice method(not working)
let spl = ["Banana", "peru", "cheeku", "mango", "kiwi"]
let sd = spl.splice(2, 0, "hii", "hello")
document.querySelector("#d15").innerHTML = "The spliced array is:" + sd;

//dottostring
let aray = ["Banana", "peru", "cheeku", "mango", "kiwi"]
let sdm = aray.toString()
document.querySelector("#d16").innerHTML = "The tostring array is:" + sdm;

//copywiyhin method(target,start,end)
let arr1 = ["Banana", "peru", "cheeku", "mango", "kiwi"]
let dsm = arr1.copyWithin(1, 2, 3)
document.querySelector("#d17").innerHTML = "The copywithin array is:" + dsm;

//entries method
let arr2 = ["Banana", "peru", "cheeku", "mango", "kiwi"]
let ds = arr2.entries()
for (x of ds) {
    document.querySelector("#d18").innerHTML += x + "<br>"
}





























