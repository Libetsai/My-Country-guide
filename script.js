let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input");
searchBtn.addEventListener("click", () => {
    let countryName = countryInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((res) => res.json()).then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].capitalInfo.latlng);
        console.log(data[0].timezones[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(
            Object.values(data[0].languages).toString().split(",").join(", ")
        );

        result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
        <h1>${data[0].name.common}</h1>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>首都 Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>洲 Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>經緯度 latitude and longitude:</h4>
            <span>${data[0].capitalInfo.latlng}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>時區 Timezones:</h4>
            <span>${data[0].timezones[0]}</span>
        </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>人口 Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>貨幣 Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name
            } </span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>語言 Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                .toString()
                .split(",")
                .join(", ")}</span>
            </div>
        </div>
       `
    })
        .catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        });
});
