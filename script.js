// document.ready()
$(document).ready(
    function(){
        // create a click listener for our button
        console.log("document ready!")
    }
)

// window onload
$(window).on("load", ()=>{
    console.log("window loaded!")
})

$('#button').click(
    ()=>{
        // get input value from input to append to list
        let input = $('#input').val();

        console.log(input);
        // append the list item to the list
        $('ul').append(`<li> ${input}</li>`);
        $('#input').val("");
    }
)

// referencing the input field
// listen for a keydown event
// keydown event has a callback function
// which takes the "event" as an arguement
// this event has a property of "keycode" that tells us which key was pressed
$('#input').keydown((e)=>{
    // check to see if enter key and the value is not empty:
    if(e.keyCode == 13 && $('#input').val()!=""){
        //Calling the button clicked method:
        $('#button').click();
    }
})

$(document).on('click', 'li', function () {

      if($(this).data("clicked")==undefined){
        //if undefined, set to false
          $(this).data("clicked",false);
      }

      //animate from the left 450 pixels over 1 second 
      $(this).animate({
          left:"450px"
      }, 1000, function(){
        console.log("animation complete!")
      });

      //Now we will toggle our strike class on the LI (this)
      $(this).toggleClass("strike")

      //check to see if our clicked value is false
      if(!$(this).data("clicked")){
          //Add the remove button to the list item
          $(this).append("</br><button class='removeBtn'> remove </button>");
          //Set our clicked value to true
          $(this).data("clicked", true);
      }            

      //When we click the remove buttons, their parent
      //element performs the slideUp() function
      $('.removeBtn').click(
          function(){
            //This makes an element animate upwards and removes it
            $(this).parent().slideUp();
          }
      );
  });

  $('input').focus(function () {
    $(this).val('');
});

$('ul').sortable();