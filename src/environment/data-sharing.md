---
title: "Data Sharing Set"
layout: "base.njk"
team: "Environment"
---

# Data sharing

In order to securely share your data with the other team..

Your linkage key is <strong>A 4</strong>. Line up the code wheel to that position and convert the School ID into a sharing ID (W,X,Y or Z).


<span id="name"></span>


<!--


When communication officers return with signed agreement, hand them the Sharing dataset and the linkage key. If one arrives before the other, ask them to wait for a moment while you finish something important. Once both communication officers have arrived:
  <form id="myForm" ><input name="fullName" class="clearinput" type="text" class="b-none" readonly><br>
 </form>-->





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
              <td>A</td>
              <td>3</td>
              <td>
     <input name="A" type="" value="" pattern="X" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>B</td>
              <td>1</td>
              <td>
     <input name="B" type="" value="" pattern="Y" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>C</td>
              <td>1</td>
              <td>
     <input name="C" type="" value="" pattern="Z" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>D</td>
              <td>4</td>
              <td>
     <input name="D" type="" value="" pattern="W" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
          </tbody>
        </table>






<input  class="btn"  type="submit"  value="Check Your Answers" name="Test">
</form>


<div>
<ul class="circle-outer " style="transform: rotate(315deg);">
  <li><div class="text">A</div></li>
    <li><div class="text">B</div></li>
    <li><div class="text">C</div></li>
    <li><div class="text">D</div></li>
 <ul class="circle draggable_wp" id="target" style="transform: rotate(-37.0904deg);">
  <li><div class="text">W</div></li>
    <li><div class="text">X</div></li>
    <li><div class="text">Y</div></li>
    <li><div class="text">Z</div></li>
 <ul class="circle-inner" style="transform: rotate(180deg);">
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

