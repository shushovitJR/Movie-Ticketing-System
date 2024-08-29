var tickets = [
    {no:1, amount:200},
    {no:2, amount:200},
    {no:3, amount:200},
    {no:4, amount:300},
    {no:5, amount:300},
    {no:6, amount:300},
    {no:7, amount:100},
    {no:8, amount:100},
    {no:9, amount:100},
];

str = ``;

tickets.forEach(function(value,index){
    str = str+`<div class="col-xl-1" for='${value.no}#${value.amount}' onclick='myfunc(this)'> ${value.no} <br/> ${value.amount}</div>`
})
document.getElementById("maindiv").innerHTML = str;

arr1 = [];
arr2 = [];

function myfunc(myvar){
    let ans = myvar.attributes.for.value;
    let ans1 = ans.split('#');
    let position = arr1.indexOf(ans1[0]);
    if(position == -1)
    {
        arr1.push(ans1[0]);
    arr2.push(ans1[1]);
    msg = "Ticket Added";
}
else{
    msg = "Ticket already exists";
}
document.getElementById("msg").innerHTML = msg;

final_no = arr1.join(",");
document.getElementById("no").innerHTML = final_no;
final_amount = arr2.join("+");
let total_amount = eval(final_amount);
document.getElementById("amount").innerHTML = total_amount;
myvar.style.background = "red";
}