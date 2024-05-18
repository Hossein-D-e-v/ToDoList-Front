
var txttodo=document.getElementById("txt-todo");
var btn=document.getElementById("btn-add");
var del=document.getElementById("del-all");
var list=document.getElementById("u");
var a=document.getElementById("icon");
function chek() {
    
    if(txttodo.value.length<=0)
   alert("!لطفا یک آیتم وارد کنید")

}
function creat() {
    var item=document.createElement("li");
    item.className="li-list";
    item.style.marginTop="5px";
     item.appendChild(document.createTextNode(txttodo.value));
     list.appendChild(item);
     txttodo.value="";
     item.addEventListener("click",greenItem)
        
     function greenItem() {
      
         item.classList.toggle("done");
         
     }
    item.addEventListener("dblclick",redItem)
    function redItem() {
       

    item.classList.toggle("cancle1");
       
    }
    

     }
  
 
     function deleteAll() {
        if(confirm("آیا از حذف تمامی آیتم ها اطمینان دارید؟"))

     {
        while(list.firstChild)
        {
        list.removeChild(list.firstChild)
        }
     }
       }
        del.addEventListener("click",deleteAll)
function addItem() {

   
    if (txttodo.value.length>0) {
      
         creat();
    }
    else
    chek()
   

}
function additementer(e) {
    if (txttodo.value.length>0 && e.which===13)
    {
        
        e.preventDefault();
         creat();
    }
    
 

}

btn.addEventListener("click",addItem);
txttodo.addEventListener("keypress",additementer);