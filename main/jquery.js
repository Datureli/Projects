//preaload screen
$(document).ready(function () {
  setTimeout(function () {
    $(".wrapper").addClass("loaded");
  }, 1800);
});
// remove preaload
jQuery(function () {
  $(window).load(function () {
    $(".wrapper").removeClass("preload");
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    $(".hideme").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_object) {
        $(this).removeClass("showme");
      }
    });
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    $(".hideme").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass("showme2");
      }
      if (bottom_of_window < bottom_of_object) {
        $(this).removeClass("showme2");
      }
    });
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    $(".hideme2").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass("showme3");
      }
      if (bottom_of_window < bottom_of_object) {
        $(this).removeClass("showme3");
      }
    });
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    $(".hideme3").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass("skill-box-animated");
      }
    });
  });
});

$(document).ready(function () {
  $("textarea").click(function () {
    $("textarea").toggleClass("clicked");
  });
});

function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;

  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Adress is valid.";
    text.style.color = "green";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Adress.";
    text.style.color = "#ff0000";
  }
  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "red";
  }
}
