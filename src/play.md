---
title: "We need your help!"
layout: "base.njk"
progress: 20
team: None
---
<div class="two-column-md grid grid-column-1-md">

  <div class="img-bg mb1 grid-column-2-md">
    <div class="rotate relative">
      <time id="date"></time>
    <img class="box-shadow mb2 " src="/img/dailynews-sm.jpg" alt="Newspaper showing crisis">
  </div>
  </div>

  <div >

# The scenario

There has been an outbreak of a new infectious disease in Edinburgh.

Scientists from the Social & Public Health Sciences Unit have reason to believe that the disease is going to spread to Glasgow, and fast!

A vaccine has been created, but supplies are low &hellip;

The scientists need to know which Glasgow school is most likely to be hit by the disease first, so they can dispatch the vaccine and prevent the disease spreading.


## The teams

You'll be <span class="no-js-hide">randomly</span> assigned one of two teams: **Environment** or **Employment**.

The Environment team has data on the types of areas that children live in, whereas the Employment Team has data on the jobs that parents do. Each are thought to be important for identifying where the disease outbreak will occur.

Your challenge is to find out which Glasgow school is most likely to be hit by the disease first, so we can dispatch the vaccine and prevent the disease spreading.


<button class="btn no-js-hide" onclick="randomSite();">Join your team &rarr;</button><a class="btn no-js-show" href="/environment" onclick="randomSite();">Environment &rarr;</a>

<a class="btn no-js-show" href="/employment" onclick="randomSite();">Employment &rarr;</a>



<script>
    var sites = [
        "/environment",
        "/employment"
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }


    n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate() ;
document.getElementById("date").innerHTML = d + "." + m + "." + y;
</script>

  </div>
</div>

