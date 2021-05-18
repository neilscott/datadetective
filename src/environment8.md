---
title: "Data Sharing Set"
layout: "base.njk"
---

# Calculate Final Risk Score

Now that we have converted the code from the employment team we just need to add up the environment and employment risk scores to get a final risk score.




<div class="table-overflow">
<form  method="get" action="/environment9">
 <table>
          <thead>
            <tr>
              <th>
                School ID
              </th>
              <th>
                Pupil name
              </th>
              <th>
                Pupil ID
              </th>
              <th>
                Date of Birth
              </th>
              <th>
               Employment Risk
              </th>
              <th>
               Environment Risk
              </th>
              <th>
              Total Risk Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td rowspan="5">
                A
              </td>
              <td>
              ████ ████
              </td>
              <td>
                1
              </td>
              <td >
                ██ / ██ / ████
              </td>
              <td rowspan="5">
                0
              </td>
              <td rowspan="5">
                4
              </td>
              <td rowspan="5">
                 <input name="name" type="" value="" pattern="4" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
              </td>
            </tr>
            <tr>
           <td>
              ████ ████
              </td>
              <td>
                2
              </td>
               <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr>
             <td>
              ████ ████
              </td>
              <td>
                3
              </td>
                 <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr>
                          <td>
              ████ ████
              </td>
              <td>
                4
              </td>
             <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr class="bb">
              <td>████ ████</td>
              <td>5</td>
              <td>██ / ██ / ████</td>
            </tr>
            <tr >
              <td rowspan="5"> B</td>
              <td>████ ████
              </td>
              <td>
                6
              </td>
              <td >██ / ██ / ████ </td>
               <td rowspan="5">
                4
              </td>
              <td rowspan="5">
                1
              </td>
              <td rowspan="5">
                   <input name="name" type="" value="" pattern="5" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
              </td>
            </tr>
            <tr>
                <td>
              ████ ████
              </td>
              <td>
                7
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr>
                <td>
              ████ ████
              </td>
              <td>
                8
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr>
                <td>
              ████ ████
              </td>
              <td>
                9
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr class="bb">
                <td>
              ████ ████
              </td>
              <td>
                10
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr >
              <td rowspan="5">
                C
              </td>
              <td>
              ████ ████
              </td>
              <td>
                11
              </td>
              <td >
                ██ / ██ / ████
              </td>
          <td rowspan="5">
                3
              </td>
              <td rowspan="5">
                3
              </td>
              <td rowspan="5">
                 <input name="C" type="" value="" pattern="6" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
              </td>
            </tr>
            <tr>
                <td>
              ████ ████
              </td>
              <td>
                12
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr>
                <td>
              ████ ████
              </td>
              <td>
                13
              </td>
                          <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr>
                <td>
              ████ ████
              </td>
              <td>
                14
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr class="bb">
                <td>
              ████ ████
              </td>
              <td>
                15
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr>
              <td rowspan="5">
                D
              </td>
              <td >
              ████ ████
              </td>
              <td>
                16
              </td>
              <td >
                ██ / ██ / ████
              </td>
          <td rowspan="5">
                1
              </td>
              <td rowspan="5">
                1
              </td>
              <td rowspan="5">
     <input name="D" type="" value="" pattern="2" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
            </tr>
            <tr>
                <td>
              ████ ████
              </td>
              <td>
                17
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr>
                <td>
              ████ ████
              </td>
              <td>
                18
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr>
                <td>
              ████ ████
              </td>
              <td>
                19
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
            <tr class="bb">
                <td>
              ████ ████
              </td>
              <td>
                20
              </td>
                         <td >
                ██ / ██ / ████
              </td>
            </tr>
          </tbody>
        </table>
      </div>

## Which is School Zero?

<input name="zero" type="" value="" pattern="C" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
<button  type="submit"  class="btn" name="Test">Check Your Answers</button></form>




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

  </script>