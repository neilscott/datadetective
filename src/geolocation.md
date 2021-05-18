---
title: "Data Detective"
layout: "base.njk"
---

## Can you be a Data Detective?

Data Detective is a game for children aged 11-16 to show how to link data securely to help stop the spread of a mystery disease.




<button><a href="/play">Let's play!</a></button>

<hr >

<div id="demo"></div>



<details>
  <summary>Learning Outcomes</summary>
The game draws upon a range of skills including:

- Team work – players must work together within their teams and with the other team to win the game
- Listening skills – players must listen to the Chief Scientist to understand their challenge and what needs to be done to complete the game
- Reading skills – players must follow a set of written instructions and read and sign data sharing forms
- Mathematics: players must familiarise themselves with the structure and information stored in a simple dataset and use that information to carry out a series of calculations and make recommendations

</details>
<details>
  <summary>Information for Teachers and Parents</summary>
Using the example of an infectious disease, Data Detectives will demonstrate that:

- There are many ways in which our physical and social environments influence health. Researchers use data, such as health records and census data, to understand more about this.
- The data that researchers use are only made available under a strict set of conditions, including that the data are anonymised and stored securely
- Sometimes data sharing is essential in order to get the right answers.
- In these situations, data are shared safely, they are only shared among approved persons, and they are only used to answer pre-specified and approved research questions.

</details>
    <p>Click the button to get Location.</p>
    <button type="button" onclick="getLocation()">Share my Location</button>
    <pre id="json-result"></pre>




<script type="text/javascript">
    var result = document.getElementById("json-result");
    const Http = new XMLHttpRequest();
    function getLocation() {
        console.log("getLocation Called");
        var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"

        navigator.geolocation.getCurrentPosition(
            (position) => {
                bdcApi = bdcApi
                    + "?latitude=" + position.coords.latitude
                    + "&longitude=" + position.coords.longitude
                    + "&localityLanguage=en";
                getApi(bdcApi);

            },
            (err) => { getApi(bdcApi); },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
    }
    function getApi(bdcApi) {
        Http.open("GET", bdcApi);
        Http.send();
        Http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                result.innerHTML = this.responseText;
            }
        };
    }

</script>

