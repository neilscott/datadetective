---
title: "Employment Data"
layout: "base.njk"
team: Employment
---


# Employment data


Using the data below (some data has been removed for privacy), enter the employment risk score for each school. You can get this by adding up the number of children who have a parent who is a key worker.

At the bottom of the page type in the ID of 'School Zero' (the school with the highest risk score) and click Check Your Answers.


Below you will see your dataset. Take a brief look over it now &mdash; hover your cursor over each table heading to find out more.

<div class="table-overflow mb1 pb1">
  <form action="/employment/check-data/" method="get">
    <table>
      <thead>
        <tr>
          <th>
            <div class="tooltip">
              School ID
              <span class="tooltiptext">
                School ID: there are four schools, labelled A-D. Their names have been removed for privacy purposes. These IDs will allow you to tell one school from the other, while not actually knowing which schools they are.
              </span>
            </div>
          </th>
          <th>
            <div class="tooltip">
              Pupil name
              <span class="tooltiptext">
                Children's names have been blanked out for privacy reasons
              </span>
            </div>
          </th>
          <th>
            <div class="tooltip">
              Pupil ID
              <span class="tooltiptext">
                Pupil ID has been given to you in places of the children’s names. There are 20 children in the dataset, five from each school
              </span>
            </div>
          </th>
          <th>
            <div class="tooltip">
              Date of Birth
              <span class="tooltiptext">
                Date of birth was included in the original dataset, but it was removed before you were given access. This is because age is not thought to be important in deciding who could catch the disease.
              </span>
            </div>
          </th>
          <th>
            <div class="tooltip">
              Parent is key
              <span class="hide-md">
                -
              </span>
              worker?
              <span class="tooltiptext">
                Now this is the important bit! This column tells you whether the pupils have a key worker parent – you’re going to have to use these data to create the Employment Risk Score – we hope your brain is warmed up for some calculations! Your challenge is listed below the table.
              </span>
            </div>
          </th>
          <th>
              Risk Score
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="5">
            A
          </td>
          <td>
            ████ ████
          </td>
          <td>
            1
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
          <td rowspan="5">
            <input name="name" oninput="setCustomValidity('')" oninvalid="setCustomValidity('Sorry that’s not right')" pattern="0" required="" type="" value="">
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            2
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            3
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            4
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
        </tr>
        <tr class="bb">
          <td>
            ████ ████
          </td>
          <td>
            5
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
        </tr>
        <tr>
          <td rowspan="5">
            B
          </td>
          <td>
            ████ ████
          </td>
          <td>
            6
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            Yes
          </td>
          <td rowspan="5">
            <input name="name" oninput="setCustomValidity('')" oninvalid="setCustomValidity('Sorry that’s not right')" pattern="4" required="" type="" value=""></td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            7
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            Yes
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            8
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            9
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            Yes
          </td>
        </tr>
        <tr class="bb">
          <td>
            ████ ████
          </td>
          <td>
            10
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            Yes
          </td>
        </tr>
        <tr>
          <td rowspan="5">
            C
          </td>
          <td>
            ████ ████
          </td>
          <td>
            11
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
          <td rowspan="5">
            <input name="C" oninput="setCustomValidity('')" oninvalid="setCustomValidity('Sorry that’s not right')" pattern="3" required="" type="" value="">
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            12
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            Yes
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            13
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            Yes
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            14
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            Yes
          </td>
        </tr>
        <tr class="bb">
          <td>
            ████ ████
          </td>
          <td>
            15
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
        </tr>
        <tr>
          <td rowspan="5">
            D
          </td>
          <td>
            ████ ████
          </td>
          <td>
            16
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
          <td rowspan="5">
            <input name="D" oninput="setCustomValidity('')" oninvalid="setCustomValidity('Sorry that’s not right')" pattern="1" required="" type="" value="">
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            17
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            18
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            Yes
          </td>
        </tr>
        <tr>
          <td>
            ████ ████
          </td>
          <td>
            19
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
        </tr>
        <tr class="bb">
          <td>
            ████ ████
          </td>
          <td>
            20
          </td>
          <td>
            ██ / ██ / ████
          </td>
          <td>
            No
          </td>
        </tr>
      </tbody>
    </table>



Enter the Employment Risk Score for each school in the last column of the table. You can get this by adding up the number of children who have key worker parents in each school.

Once you have done this, enter the ID of 'School Zero' (the one with the highest Risk Score ) and click Check Your Answers.


## Which is School Zero?


<input name="zero" type="" value="" pattern="B" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
<button  type="submit"  class="btn" name="Test">Check Your Answers</button></form>
</div>
<script src="/js/jquery-3.6.0.slim.min.js"></script>

<script>


$(document).ready(function() {


    /**
   * when abbreviations are clicked trigger their mouseover event then fade the tooltip
   * (this is friendly to touch interfaces)
   */
  $('.tooltip').on( "click", function() {


$(this).toggleClass('show').parent().siblings().children().removeClass('show');



  });


});
</script>