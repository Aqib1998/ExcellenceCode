console.log('Insie MAin');
filterSelection("all")
function filterSelection() {
  
  var tt= document.getElementById('mySearch').value;
  console.log(tt);
  var areEqual = tt.toUpperCase();
  c = areEqual;
  
  var x, i;
  x = document.getElementsByClassName("column");
  
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeData(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeData(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

function deleteThumbnail(){
  console.log("inside delete code");
  document.getElementById("conDel").style.visibility = "hidden";
  

 
  
  
}