// --Bring in toggle button (querySelectorAll )
// --loop through NodeList(forEach)
// --Add click event (addEventListener)
// -toggle the active clsss on the parent node(.parent node and classlist.toggle() )
const toggles =document.querySelectorAll(".faq-toggle")
toggles.forEach(i=>{
    i.addEventListener("click",()=>{
        i.parentNode.classList.toggle("active")
    })
})

