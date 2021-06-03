---
title: "Data Sharing Set"
layout: "base.njk"
team: "Employment"
---

# Data Sharing

Below is a small table which contains the Risk Score that you calculated in the previous exercise. Your job now is to prepare the dataset so that it can be shared with the Environment team. The Environment team uses a different School ID to you, <span id="name"></span>, so you'll need to use a Sharing ID to share your Risk Score.

The Chief Scientist has provided you with a Linkage Key, **A4**. Swivel the wheel so that the letter A (in the outer wheel) and the number 4 (in the inner wheel) are lined up. The middle wheel will now tell you what the Sharing ID is for each school






<!--


When communication officers return with signed agreement, hand them the Sharing dataset and the linkage key. If one arrives before the other, ask them to wait for a moment while you finish something important. Once both communication officers have arrived:
  <form id="myForm" ><input name="fullName" class="clearinput" type="text" class="b-none" readonly><br>
 </form>-->






<div class="grid grid-md-2 grid-column-gap-2">



<div class="table-overflow pb2 mb2">
<form  method="get" action="/employment/check-data-sharing/">
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
     <input type="" value="" pattern="Z" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>B</td>   <td>1</td>
              <td>
     <input type="" value="" pattern="Y" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>C</td>   <td>1</td>
              <td>
     <input  type="" value="" pattern="X" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>D</td>   <td>4</td>
              <td>
     <input  type="" value="" pattern="W" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
          </tbody>
        </table>

<input  class="btn"  type="submit"  value="Check Your Answers" name="Test">
</form>
</div>


<div >
 <ul class="circle-outer   circle-light-blue"  style="transform: rotate(315deg);" >


  <li><div class="text">A</div></li>
    <li><div class="text">B</div></li>
    <li><div class="text">C</div></li>
    <li><div class="text">D</div></li>

 <ul class="circle draggable_wp circle-lighter-blue" id="target" style="transform: rotate(30deg);">
  <li><div class="text">W</div></li>
    <li><div class="text">Z</div></li>
    <li><div class="text">Y</div></li>
    <li><div class="text">X</div></li>
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

<script src="/js/codewheel.js"></script>

<script>

  // Retrieve
  document.getElementById("name").innerHTML = localStorage.getItem("fullName");

</script>