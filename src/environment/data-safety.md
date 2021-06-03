---
title: "Data Sharing"
layout: "base.njk"
team: "Environment"
---

# Data safety


<div class="grid grid-md-2 two-column-md">
  <div class="mb1 grid-column-2-md">

<article class="document times">

<div class="tac">

## Data sharing agreement

</div>

I agree to share information only with all official members of the Employment team.

I agree that these data will only be used for the purposes of identifying which school is going to be hit by the disease.

I agree that the only information that I will share is the Sharing ID and the employment risk score.

I agree that the data will be safely stored and that I shall make no attempt to identify individuals. The Sharing ID and the Employment data will be destroyed after use.


Signed:

 <form  onclick="store()"  action="/environment/data-sharing/" id="myForm" >
<input id="fullName" name="fullName" type="text" required="required"  oninput="cacheInput(this)">
<button class="btn" type="submit">I Agree</button>
</form>

</article>




  </div>

  <div class="grid-column-1-md">



There is something you will need to do before you and the other team can share data.

The Chief Scientist will provide you with everything you need to meet these requests, but first you will need to read this data sharing agreement and insert your name to say that you agree

We have to be really careful about sharing people's data, making sure that the data are kept safe and are only used by people in the two teams, for the purposes of identifying the school at risk.


You will need to read and sign this data sharing agreement.

</div>

</div>



<script type="text/javascript">
  function store(){
     var inputName= document.getElementById("fullName");
     localStorage.setItem("name", inputName.value);
  }


  </script>