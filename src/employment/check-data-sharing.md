---
title: "Thank you"
layout: "base.njk"
team: "Employment"
---

# Checking shared data


Please hold on for <span id="time">5</span> seconds while we check your results.


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
                window.location = "/employment/data-merging/";
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


<form id="form1" runat="server">

</form>


