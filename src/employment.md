---
title: "Employment Team"
layout: "base.njk"
---


# Employment Team


<div class="grid grid-md-2 two-column-md">
  <div class="mb1 grid-column-2">
    <img src="/img/employment.svg" alt="">
  </div>

  <div class="grid-column-1">


You hold Employment data on Glasgow. This is really useful data to have, because the jobs that people have can affect your health.

For example, people who work on building sites are more likely to be in an accident, while people who sit at desks all day get less physical activity.

Research shows that adults who are key workers, i.e. those who work in hospitals, who drive public transport, or work in supermarkets, are more likely to catch the disease. Because they can’t work from home.

You&rsquo;re going to need to use the Employment data to work out which school is at highest risk.






<a class="btn" href="/employment2">Get your data &rarr;</a>

  </div>
</div>

 <p id="display">Time Left: 0</p><p>
        <button id="start">Start</button>


<script type="text/javascript">
  var start = document.getElementById("start");
var dis = document.getElementById("display");
var finishTime;
var timerLength = 10;
var timeoutID;
dis.innerHTML = "Time Left: " + timerLength;

if(localStorage.getItem('myTime')){
  Update();
}
start.onclick = function () {
    localStorage.setItem('myTime', ((new Date()).getTime() + timerLength * 1000));
    if (timeoutID != undefined) window.clearTimeout(timeoutID);
    Update();
}

function Update() {
    finishTime = localStorage.getItem('myTime');
    var timeLeft = (finishTime - new Date());
    dis.innerHTML = "Time Left: " + Math.max(timeLeft/1000,0);
    timeoutID = window.setTimeout(Update, 100);
}
</script>

