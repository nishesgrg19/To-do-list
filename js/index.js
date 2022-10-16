let add=document.getElementById('add')
let listc=document.querySelector('#listc')
add.addEventListener('click',getlist)

function getlist(){

    let screen=document.getElementById('screen')
    let screendata=screen.value
    let listdata=document.createElement('li')
  
    listdata.setAttribute('class','listvalue')
    listdata.innerHTML=`<span class='ld'>${screendata}</span>`

   
    if (listdata.innerText!=''){
        listc.appendChild(listdata)
        screen.value=''

   
    }
    let cross=document.createElement('i')
    cross.setAttribute('class','bi bi-trash3-fill')
    cross.style.marginLeft=4+'px'
    listdata.appendChild(cross)
   

    
    // deleting the contents//
    let remove=document.querySelectorAll('.bi')
    remove.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.parentElement.remove()
    })
})
  
   
   
}
let remove=document.querySelectorAll('.bi')
remove.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.parentElement.remove()
    })
})