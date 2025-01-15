const inputbox=document.getElementById("input-box")
const listcontainer=document.getElementById("list-container")

function addtask(){
    if(inputbox.value === ''){
        alert("You Must Write Something!")
    }else{
        let li=document.createElement("li")
        li.innerHTML=inputbox.value
        listcontainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputbox.value=""
    savedata()
}

listcontainer.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked")
        savedata()
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove()
        savedata()
    }
},false)

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML)
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showtask()