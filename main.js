$(document).ready(function(){
     // get the number left of items
     let leftItem = document.querySelector('.num');
    //get the field
    const field = document.querySelector('#field');
    field.addEventListener('change', function(){
        let value = document.getElementById("field").value;
        $('.list').append("<p class='item'><span class='circle'><img class='check' src='images/icon-check.svg' alt=''></span>" + value +
        "<img class='cross' src='images/icon-cross.svg' alt=''></p>");
        this.focus();
        this.value = ""
       // get the circles buttons    
        let circles = document.querySelectorAll('.item .circle');
        circles.forEach(function(circle){
        circle.addEventListener('click', function(){
            this.classList.add('was-comleted');
            this.parentElement.classList.add('completed-item')
            lineThrogh(this);
            leftItem.innerHTML = $('.item:not(.completed-item)').length;
           })
       })

       // get the crosses buttons
       let crosses = document.querySelectorAll('.item .cross');
       crosses.forEach(function(cross){
           cross.addEventListener('click', function(){
               removeParent(this)
               leftItem.innerHTML = $('.item:not(.completed-item)').length;
        
           })
       })
       leftItem.innerHTML = $('.item:not(.completed-item)').length;

       // add drag and drop events

       $('.item').attr('draggable', 'true')

    }) // end of the event change

    //remove the item when a cross icon clicked
    function removeParent(el){
        el.parentElement.remove()
    }
    //add a line through the item completed
    function lineThrogh(el){
        el.parentElement.style.textDecoration = "line-through";
    }

    //show all items in the list
    const showAll = document.querySelector('.all');
    showAll.addEventListener('click', function(){
        if($('.item').length){
        $('.item').css({display: "block"})
        } 
    });

    // show all completed items in the list
    const showCompleted = document.querySelector('.completed');
    showCompleted.addEventListener('click', function(){
        if($('.completed-item').length){
            $('.item:not(.completed-item)').css({display: "none"})
        }
    })   

    // clear completed items
    const clearItem = document.querySelector(".clear-completed");
    clearItem.addEventListener('click', function(){
        if($('.completed-item').length){
            $('.completed-item').remove();
            } 
    })

    // toggle between sun and moom
    const sun = document.querySelector('.sun')
    const moon = document.querySelector('.moon')
    let link = document.getElementById('link')

    moon.addEventListener('click', function(){
        this.style.display = 'none'
        sun.style.display = 'block';
        link.setAttribute('href', 'night.css')
        

    })
    sun.addEventListener('click', function(){
        this.style.display = 'none'
        moon.style.display = 'block'
        link.setAttribute('href', 'style.css')
        
    });
    // update thenumber of item in the list
});  //end of ready function


//to fix itemlength

