/*Bring in toggle buttons(querySelectorAll)
Loop through NodeList(forEach)
Add click event(addEventListener)
Toggle the active class on the parent Node(.parentNode & classList.toggle())*/

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click' , ()=> {
        toggle.parentNode.classList.toggle('active')
    })

})

