let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
  btn.onclick = () => {
    let src = btn.getAttribute('data-src');
    document.querySelector('.about .video-container .video').src = src;
  }
})


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function contactFunction() {
  document.getElementById("contactmyDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$(function() {
  'use strict';

  var body = $('body');

  function goToNextInput(e) {
    var key = e.which,
      t = $(e.target),
      sib = t.next('input');

    if (key != 9 && (key < 48 || key > 57)) {
      e.preventDefault();
      return false;
    }

    if (key === 9) {
      return true;
    }

    if (!sib || !sib.length) {
      sib = body.find('input').eq(0);
    }
    sib.select().focus();
  }

  function onKeyDown(e) {
    var key = e.which;

    if (key === 9 || (key >= 48 && key <= 57)) {
      return true;
    }

    e.preventDefault();
    return false;
  }
  
  function onFocus(e) {
    $(e.target).select();
  }

  body.on('keyup', 'input', goToNextInput);
  body.on('keydown', 'input', onKeyDown);
  body.on('click', 'input', onFocus);

})

// Check for valid email syntax
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function closeForm() {
  document.contactform.name.value = '';
  document.contactform.email.value = '';
  document.contactform.message.value = '';

  $('.acountNumber').removeClass('typing');
  $('.userName').removeClass('typing');
  $('.phoneNo').removeClass('typing');
  $('.CNIC').removeClass('typing');

  $('.cd-popup').removeClass('is-visible');
  $('.notification').addClass('is-visible');
  $('#notification-text').html("Thanks for contacting us!");
}

$(document).ready(function($) {

  /* ------------------------- */
  /* Contact Form Interactions */
  /* ------------------------- */
  $('#contact').on('click', function(event) {
    event.preventDefault();

    $('#contactblurb').html('Questions, suggestions, and general comments are all welcome!');
    $('.contact').addClass('is-visible');

    if ($('#acountNumber').val().length != 0) {
      $('.acountNumber').addClass('typing');
    }
    if ($('#userName').val().length != 0) {
      $('.userName').addClass('typing');
    }
    if ($('#phoneNo').val().length != 0) {
      $('.phoneNo').addClass('typing');
    }
    
    if ($('#CNIC').val().length != 0) {
      $('.CNIC').addClass('typing');
    }
    
  });

  //close popup when clicking x or off popup
  $('.cd-popup').on('click', function(event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });

  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event) {
    if (event.which == '27') {
      $('.cd-popup').removeClass('is-visible');
    }
  });

  /* ------------------- */
  /* Contact Form Labels */
  /* ------------------- */
  $('#name').keyup(function() {
    $('.name').addClass('typing');
    if ($(this).val().length == 0) {
      $('.name').removeClass('typing');
    }
  });
  $('#email').keyup(function() {
    $('.email').addClass('typing');
    if ($(this).val().length == 0) {
      $('.email').removeClass('typing');
    }
  });
  $('#message').keyup(function() {
    $('.message').addClass('typing');
    if ($(this).val().length == 0) {
      $('.message').removeClass('typing');
    }
  });

  /* ----------------- */
  /* Handle submission */
  /* ----------------- */
  $('#contactform').submit(function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var human = $('#human:checked').val();

    if (human) {
      if (validateEmail(email)) {
        if (name) {
          if (message) {

// Handle submitting data somewhere
// For a tutorial on submitting the form to a Google Spreadsheet, see:
// https://notnaturaltutorials.wordpress.com/2016/03/20/submit-form-to-spreadsheet/

/*
            var googleFormsURL = "https://docs.google.com/forms/d/1dHaFG67d7wwatDtiVNOL98R-FwW1rwdDwdFqqKJggBM3nFB4/formResponse";
            // replace these example entry numbers
            var spreadsheetFields = {
              "entry.212312005": name,
              "entry.1226278897": email,
              "entry.1835345325": message
            }
            $.ajax({
              url: googleFormsURL,
              data: spreadsheetFields,
              type: "POST",
              dataType: "xml",
              statusCode: {
                0: function() {

                },
                200: function() {

                }
              }
            });
*/
            
            closeForm();

          } else {
            $('#notification-text').html("<strong>Please let us know what you're thinking!</strong>");
            $('.notification').addClass('is-visible');
          }
        } else {
          $('#notification-text').html('<strong>Please provide a name.</strong>');
          $('.notification').addClass('is-visible');
        }
      } else {
        $('#notification-text').html('<strong>Please use a valid email address.</strong>');
        $('.notification').addClass('is-visible');
      }
    } else {
      $('#notification-text').html('<h3><strong><em>Warning: Please prove you are a human and not a robot.</em></strong></h3>');
      $('.notification').addClass('is-visible');
    }

    return false;
  });
});