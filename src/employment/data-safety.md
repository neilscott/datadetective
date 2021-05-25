---
title: "Data Sharing"
layout: "base.njk"
team: "Employment"
---

# Data Safety

We have to be really careful about sharing people's data, making sure that the data are kept safe and are only used by people in the two teams, for the purposes of identifying the school at risk.


You will need to read and sign this data sharing agreement.


<article class="document times">

<div class="tac">

## Data sharing agreement

</div>

I agree to share information with all official members of the Environment team.

I agree that these data will only be used for the purposes of identifying which school is going to be hit by the disease.

I agree that the only information that I will share is the Sharing ID and the Health risk score.

I agree that the data will be safely stored and that I shall make no attempt to identify individuals. The Sharing ID and the Environemnt data will be destroyed after use.


Signed:

 <form  onclick="store()"  action="/employment/data-sharing/" id="myForm" >
<input id="fullName" name="fullName" type="text" required="required"  oninput="cacheInput(this)">
<button class="btn" type="submit">I Agree</button>
</form>

</article>



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




  function store(){
     var inputName= document.getElementById("fullName");
     localStorage.setItem("fullName", inputName.value);
    }


 function myFunction() {
  var x = sessionStorage["test1"];
  document.getElementById("demo").innerHTML = x;
}


  </script>