---
title: "Environment Data"
layout: "base.njk"
team: Environment
---


# Environment Data


Using the data below (some data has been removed for privacy), enter the Environmental Risk Score for each school. You can get this by calculating the number of children living in cities.

At the bottom of the page type in the ID of 'School Zero' (the one with the highest score) and click Check Your Answers.


Below you will see your dataset. Take a brief look over it now &mdash; hover your cursor over each table heading to find out more.

<div class="table-overflow mb1">
<form  method="get" action="/environment/check-data">
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
             Area of residence
              <span class="tooltiptext">
                Now this is the important bit! This column tells you where the pupils live – you’re going to have to use these data to create the Environment Risk Score – we hope your brain is warmed up for some calculations! Your challenge is listed below the table.
              </span>
            </div>
          </th>
          <th>
              Risk Score
          </th>
        </tr>
      </thead>
          <tbody>
            <tr >
              <td rowspan="5">
                A
              </td>
              <td>
              ████ ██████
              </td>
              <td>
                a
              </td>
              <td >
                ██ / ██ / ████
              </td>
              <td>
                City
              </td>
              <td rowspan="5">
                 <input name="name" type="" value="" pattern="3" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
              </td>
            </tr>
            <tr>
           <td>
              ████ ██████
              </td>
              <td>
                b
              </td>
               <td >
                ██ / ██ / ████
              </td>
              <td>
                Village
              </td>
            </tr>
            <tr>
             <td>
              ████ ██████
              </td>
              <td>
                c
              </td>
                 <td >
                ██ / ██ / ████
              </td>
              <td>
                City
              </td>
            </tr>
            <tr>
                          <td>
              ████ ██████
              </td>
              <td>
                d
              </td>
             <td >
                ██ / ██ / ████
              </td>
              <td>
                Town
              </td>
            </tr>
            <tr class="bb">
              <td>████ ██████
                            </td>
              <td>
                e
              </td>           <td >
                ██ / ██ / ████
              </td>
              <td>
                City
              </td>
            </tr>
            <tr >
              <td rowspan="5">
                B
              </td>
              <td>████ ██████
              </td>
              <td>
                f
              </td>
              <td >██ / ██ / ████ </td>
              <td>
                Village
              </td>
              <td rowspan="5">
                   <input name="name" type="" value="" pattern="1" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
              </td>
            </tr>
            <tr>
                <td>
              ████ ██████
              </td>
              <td>
                g
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                Village
              </td>
            </tr>
            <tr>
                <td>
              ████ ██████
              </td>
              <td>
                h
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                Town
              </td>
            </tr>
            <tr>
                <td>
              ████ ██████
              </td>
              <td>
                i
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                Village
              </td>
            </tr>
            <tr class="bb">
                <td>
              ████ ██████
              </td>
              <td>
                j
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                City
              </td>
            </tr>
            <tr >
              <td rowspan="5">
                C
              </td>
              <td>
              ████ ██████
              </td>
              <td>
                k
              </td>
              <td >
                ██ / ██ / ████
              </td>
              <td>
                Town
              </td>
              <td rowspan="5">
                 <input name="C" type="" value="" pattern="1" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
              </td>
            </tr>
            <tr>
                <td>
              ████ ██████
              </td>
              <td>
                l
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                Village
              </td>
            </tr>
            <tr>
                <td>
              ████ ██████
              </td>
              <td>
                m
              </td>
                          <td >
                ██ / ██ / ████
              </td>
              <td>
                City
              </td>
            </tr>
            <tr>
                <td>
              ████ ██████
              </td>
              <td>
                n
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                Town
              </td>
            </tr>
            <tr class="bb">
                <td>
              ████ ██████
              </td>
              <td>
                o
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                Town
              </td>
            </tr>
            <tr>
              <td rowspan="5">
                D
              </td>
              <td >
              ████ ██████
              </td>
              <td>
                p
              </td>
              <td >
                ██ / ██ / ████
              </td>
              <td>
                City
              </td>
              <td rowspan="5">
     <input name="D" type="" value="" pattern="4" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
            </tr>
            <tr>
                <td>
              ████ ██████
              </td>
              <td>
                q
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                City
              </td>
            </tr>
            <tr>
                <td>
              ████ ██████
              </td>
              <td>
                r
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                City
              </td>
            </tr>
            <tr>
                <td>
              ████ ██████
              </td>
              <td>
                s
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                City
              </td>
            </tr>
            <tr class="bb">
                <td>
              ████ ██████
              </td>
              <td>
                t
              </td>
                         <td >
                ██ / ██ / ████
              </td>
              <td>
                Village
              </td>
            </tr>
          </tbody>
        </table>
      </div>

## Which is School Zero?

<input name="zero" type="" value="" pattern="D" required oninvalid="setCustomValidity('Sorry that&rsquo;s not right')"  oninput="setCustomValidity('')"  >
<button  type="submit"  class="btn" name="Test">Check Your Answers</button></form>


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
