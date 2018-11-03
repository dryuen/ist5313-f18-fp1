var itemInput = document.getElementById("newItem");
   var itemName = document.getElementById("itemName");
   var itemAmount= document.getElementById("itemAmount")
   var submit = document.getElementById("submit");
   var list = document.getElementById("list");
   function addItem() {
     var currentItem = itemInput.value;
     var listItem = document.createElement("li");
     listItem.innerHTML = currentItem;
     list.appendChild(listItem);
     itemInput.value = "";
   }
   submit.onclick = addItem;
   clear.onclick = function() {
     list.innerHTML = "";
     itemInput.value = "";
   }