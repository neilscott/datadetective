---
title: "Data Sharing"
layout: "base.njk"
---

# Data Safety

We have to be really careful about sharing people&rsquo;s data, making sure that the data are kept safe and are only used by people in the two teams, for the purposes of identifying the school at risk.


You will need to read and sign this data sharing agreement.


<article class="document times">
<h2> Data sharing agreement</h2>

<p>I agree to share information with all official members of the Employment team.</p>

<p>I agree that these data will only be used for the purposes of identifying which school is going to be hit by the virus.</p>

<p>I agree that the only information that I will share is the Sharing ID and the Health risk score.

  <!--I agree that the only information that I will share is the Sharing ID and whether a school is at risk of Health / Environmental grounds.  -->
</p>

<p>I agree that the data will be safely stored and that I shall make no attempt to identify individuals. The Sharing ID and the Environment data will be destroyed after use.</p>










Signed:

 <form action="/environment6" id="myForm" >
<input name="fullName" type="text" required="required"  oninput="cacheInput(this)">
<button class="btn" type="submit">Submit</button>
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

  </script>