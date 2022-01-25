var uname = document.getElementById("name");
console.log("getting Elemnet by ID");
console.log(uname);

uname = document.querySelector(".item");
console.log("getting Elemnet by queryselector");
console.log(uname);

uname = document.querySelectorAll(".item");
console.log("getting Elemnets by queryselectorAll");
console.log(uname);

uname = document.getElementsByClassName("list1");
console.log("getting Elemnets by class name");
console.log(uname);


uname = document.getElementsByTagName("a");
console.log("getting Elemnets by tag");
console.log(uname);

