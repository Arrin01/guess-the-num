const buttons = document.querySelectorAll('.colorbox"');
const body = document.querySelector('body')


buttons.forEach(function(colorbox){
    console.log(colorbox);

    colorbox.addEventListener('click',function(e)){
        console.log(e)
        console.log(e.target)

    }

})