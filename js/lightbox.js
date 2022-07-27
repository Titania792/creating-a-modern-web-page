const images = document.querySelectorAll('.img-gallery') // create a variable for the images
const addimg = document.querySelector('.add-img') // create a variable for the add image
const lightbox = document.querySelector('.light-img') // create a variable for the lightbox
const menu1 = document.querySelector('.menu-icon') // create a variable for the menu icon


console.log(images) // check if the variable is correct
console.log(addimg) // check if the variable is correct
console.log(lightbox) // check if the variable is correct

images.forEach(img =>{ // for each image
    img.addEventListener('click', ()=>{ // add an event listener to the image
        showimage(img.src) // show the image
        img.getAttribute('src') // get the src of the image
    })
})

lightbox.addEventListener('click', (e)=>{ // add an event listener to the lightbox
    if (e.target !== addimg){ // if the target of the event is not the add image
        lightbox.classList.toggle('show') // add a class to the lightbox
        addimg.classList.toggle('showImage') // add a class to the add image
        menu1.style.opacity = '1' // set the opacity of the menu icon to 1
    }
})

const showimage = (img)=>{ // create a function to show the image
    addimg.src = img // set the src of the add image to the image src
    lightbox.classList.toggle('show') // add a class to the lightbox
    addimg.classList.toggle('showImage') // add a class to the add image
    menu1.style.opacity = '0' // set the opacity of the menu icon to 0
}