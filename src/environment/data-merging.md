---
title: "Data Merging"
layout: "base.njk"
team: "Environment"
pageID: environment-page-7;
---

# Data merging

Thanks for sharing your data with the other team. Click below to merge your data.

On the next page you can calculate the total risk score.



<div class="grid grid-md-2 pb2 grid-column-gap-2">



<form  method="get" action="/environment/total-risk/">
 <table>
          <thead>
            <tr>
            <th>
               Sharing ID 🔒
              </th>
              <th>
                School ID
              </th>
              <th>
               Employment Risk 🔐
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X</td>
              <td>A</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Y</td>
              <td>B</td>
              <td>4</td>
            </tr>
            <tr>
               <td>Z</td>
              <td>C</td>
              <td>3</td>
            </tr>
            <tr>
              <td>W</td>
              <td>D</td>
              <td>1</td>
            </tr>
          </tbody>
        </table></form>



 </div>
<a href="/environment/total-risk/" class="btn">Merge your data &rarr;</a>






<script>

  // Retrieve
  document.getElementById("name").innerHTML = localStorage.getItem("name");

</script>

