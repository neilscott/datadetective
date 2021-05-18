---
title: "New Information!"
layout: "base.njk"
---

# Congratulations <form  id="myForm" class="dib"><input name="fullName" type="text" class="readonly" readonly=""></form>


<div class="grid grid-md-2 two-column-md">
  <div class="mb1 grid-column-2">
  <script src="/js/lottie-player.js"></script>

<lottie-player autoplay loop mode="normal" src="/js/53882-distance-education.json" style="width: 50vh"> </lottie-player>
  </div>

  <div class="grid-column-1">

You have successfully completed the Data Detective game!


Congratulations on working together. School C.

<!-- School X has been identified as the place where the outbreak is most likely to hit next. Resources will be directed etc.

Recap of main issues – why data sharing is important, how data are shared. We could include a video of researcher(s) describing how they use data in their job, equating the stages of the game to how it works in real life…

Evaluation  - a few tick box questions, plus free text box for comments

Option to now play the game again as the other team. NB the final outcome will always be the same, but this would reiterate how the other team’s data used different IDs, and initially came up with the wrong answer when using just their own data.
 -->




<script type="text/javascript">
    window.onload = function () {
    let form = document.getElementById("myForm");
    let inputs = form.children;
    for (let i = 0; i < inputs.length; i++) {
        let el = inputs[i];
        if (el.tagName.toLowerCase() != "input" || el.attributes["type"].value != "text") {
            continue
        }
        let cachedVal = localStorage.getItem(el.attributes["name"].value)
        if (cachedVal != null) {
            el.value = cachedVal;
        }
    }
}


function clearCache() {
    localStorage.clear()
}

  </script>

<!--<a class="btn" href="/environment5">Work with the other team</a>-->

</div>