---
title: "Thank you"
layout: "base.njk"
team: "Employment"
---

# Checking Shared Data

We are auditing your results and get in touch shortly, if we need any other information.


<script src="/js/lottie-player.js"></script>

<lottie-player autoplay mode="normal" src="/js/lf20_nk7rih3w.json" style="width: 50vh"> </lottie-player>


<script>
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        var end =setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ?  + minutes : minutes;
            seconds = seconds < 10 ? + seconds : seconds;

            display.textContent = seconds;

            if (--timer < 0) {
                window.location = "/employment/data-decoding/";
                clearInterval(end);
            }
        }, 1000);
    }

    window.onload = function () {
        var fiveMinutes = 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };
</script>

<p>Please hold on for <span id="time">5</span> seconds.</p>
<form id="form1" runat="server">

</form>

<script>
  // Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("fullName");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
</script>
