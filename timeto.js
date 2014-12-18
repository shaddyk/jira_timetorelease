<html>
<style>
h1 { background-color: #e0f0ff;
     text-align: center; 
     font-size: 15em;
     font-weight: normal;
}
</style>
<body>
<h1 id="toRelease" />
<script language="javascript" type="text/javascript">

var minDate = new Date("2099-01-01");
var today = new Date();

var holidays = ["01.01.2015", "02.01.2015", "03.01.2015", "04.01.2015", "05.01.2015", "06.01.2015", "07.01.2015", "08.01.2015", "09.01.2015", "23.02.2015", "09.03.2015", "01.05.2015", "04.05.2015", "11.05.2015", "12.06.2015", "04.11.2015"];

var xhr = new XMLHttpRequest();
xhr.open("GET", "/rest/api/2/project/CDI/versions/", false);
xhr.send();

var versions = JSON.parse(xhr.responseText);

for (i = 0; i < versions.length; ++i) {
    if (new Date(versions[i].releaseDate) < minDate && versions[i].released === false ) {
      minDate = new Date(versions[i].releaseDate);
    }
}

diff = Math.ceil((minDate - today) / (24 * 60 * 60 * 1000));
sign = Math.sign(diff);

//Check for holidays and weekends
for (i = Math.abs(diff); i > 0; --i) {
    date = new Date();
    date.setDate(today.getDate() + i * sign);
    if ((date.getDay() === 0 || date.getDay() === 6) || holidays.indexOf(date.toLocaleDateString('ru')) > -1) {
        diff -= 1 * sign;
    }
}

//Colors
switch (sign) {
    case  1: diff = diff.toString().fontcolor("forestgreen");
    case -1: diff = diff.toString().fontcolor("firebrick");
    case  0: diff = diff.toString().fontcolor("goldenrod");
}

//Check request was successful
if (xhr.status != 200) {
    document.getElementById("toRelease").innerHTML = "No auth";
}
else {
    document.getElementById("toRelease").innerHTML = diff;
}

</script>
</body>
</html>