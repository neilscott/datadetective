---
title: "Data Merging"
layout: "base.njk"
team: "Environment"
pageID: environment-page-7;
---

# Data merging

Thanks for sharing your data with the other team. To the right of your dataset, you'll see the dataset that the Employment team has shared with you – enter their risk score into your main dataset, using the Sharing ID








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
<a href="/environment/total-risk/" class="btn">Calculate Total Risk Score &rarr;</a>






<script>

  // Retrieve
  document.getElementById("name").innerHTML = localStorage.getItem("name");

</script>

