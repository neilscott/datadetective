---
title: "Data Sharing Set"
layout: "base.njk"
team: "Environment"
---

# Data sharing

In order to securely share your data with the other team.

Your linkage key is <strong>III 3</strong>. Line up the code wheel to that position and convert the School ID into a sharing ID (W,X,Y or Z).






<div class="grid grid-md-2 grid-column-gap-2">




<form id="myForm" method="get" action="/environment/check-data-sharing/">
 <table>
          <thead>
            <tr>
            <th>
                School
              </th>
              <th>
                Risk Score
              </th>
              <th>
               Sharing ID
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>3</td>
              <td>
     <input name="A" type="" value="" pattern="X" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>II</td>
              <td>1</td>
              <td>
     <input name="B" type="" value="" pattern="Y" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>III</td>
              <td>1</td>
              <td>
     <input name="III" type="" value="" pattern="Z" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>IV</td>
              <td>4</td>
              <td>
     <input name="IV" type="" value="" pattern="W" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
          </tbody>
        </table>






<input  class="btn"  type="submit"  value="Check Your Answers" name="Test">
</form>


<div>
<ul class="circle-outer " style="transform: rotate(315deg);">
  <li><div class="text">I</div></li>
    <li><div class="text">II</div></li>
    <li><div class="text">III</div></li>
    <li><div class="text">IV</div></li>
 <ul class="circle draggable_wp" id="target" style="transform: rotate(-37.0904deg);">
  <li><div class="text">W</div></li>
    <li><div class="text">X</div></li>
    <li><div class="text">Y</div></li>
    <li><div class="text">Z</div></li>
 <ul class="circle-inner" style="transform: rotate(-90deg);">
  <li><div class="text">1</div></li>
    <li><div class="text">2</div></li>
    <li><div class="text">3</div></li>
    <li><div class="text">4</div></li>
</ul>
</ul>
</ul>
</div>



</div>



 <script type="text/javascript" src="/js/codewheel.js"></script>





<script>

  // Retrieve
  document.getElementById("fullName").innerHTML = localStorage.getItem("name");

</script>

