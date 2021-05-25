---
title: "Data Sharing Set"
layout: "base.njk"
team: "Employment"
---

# Data Sharing

In order to securely share your data with the other team, you'll need to convert the School ID into a Sharing ID.

The linkage key is <strong>A 4</strong>.

<div class="show-md">

Line up the code wheel to that position and convert School IDs (A,B,C,D) into sharing IDs (W,X,Y,Z).

</div>
<div class="hide-md">

Line up the code wheel to that position and convert School IDs (A,B,C,D) into sharing IDs (W,X,Y,Z).

</div>



<!--


When communication officers return with signed agreement, hand them the Sharing dataset and the linkage key. If one arrives before the other, ask them to wait for a moment while you finish something important. Once both communication officers have arrived:
  <form id="myForm" ><input name="fullName" class="clearinput" type="text" class="b-none" readonly><br>
 </form>-->






<div class="grid grid-md-2 grid-column-gap-2">



<div class="table-overflow pb2 mb2">
<form  method="get" action="/employment7">
 <table>
          <thead>
            <tr>
            <th>
                School
              </th>
              <th>
               Sharing ID
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>
     <input type="" value="" pattern="Z" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>B</td>
              <td>
     <input type="" value="" pattern="Y" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>C</td>
              <td>
     <input  type="" value="" pattern="X" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
            <tr>
              <td>D</td>
              <td>
     <input  type="" value="" pattern="W" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  ></td>
            </tr>
          </tbody>
        </table>

<input  class="btn"  type="submit"  value="Check Your Answers" name="Test">
</form>
</div>


<div >
 <ul class="circle-outer "  style="transform: rotate(315deg);" >


  <li><div class="text">A</div></li>
    <li><div class="text">B</div></li>
    <li><div class="text">C</div></li>
    <li><div class="text">D</div></li>

 <ul class="circle draggable_wp" id="target"  style="transform: rotate(30deg);">
  <li><div class="text">W</div></li>
    <li><div class="text">Z</div></li>
    <li><div class="text">Y</div></li>
    <li><div class="text">X</div></li>




 <ul class="circle-inner" style="transform: rotate(180deg);" id="target" >
  <li><div class="text">1</div></li>
    <li><div class="text">2</div></li>
    <li><div class="text">3</div></li>
    <li><div class="text">4</div></li>
</ul>
</ul>
</ul>

</div>



</div>
<script src="/js/jquery-3.6.0.slim.min.js"></script>
<script src="/js/codewheel.js"></script>