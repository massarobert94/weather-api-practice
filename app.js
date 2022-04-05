// Our HTML contains an input box and a button. We input a city only, no state. The form submission is handled, and the API call will be madeThis code connects us to the OpenWeatherAPI, returning a data object with the current weather. 

// Add elements to the HTML to display various data points for the weather, like temperature, description, and more. You'll then need to add Javascript starting on line 35 to bring the data into the DOM.

// Add CSS and focus on styling if you have time left over. Let's practice our creativity!


const form = document.getElementById('mainForm');
const input = form.querySelector('#cityInput');
const button = document.getElementById('btn');

function handleSubmit(event){
    event.preventDefault();
    
    const data = new FormData(event.target);

    const city = data.get('cityInput');
    console.log({city});

    // const apiKey = PUT THE API KEY HERE AS A STRING

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    
    const weatherRequest = async(method, url) => {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    }

    const getCurrentData = async() => {
        weatherRequest('GET', url).then(data => {
            console.log(data.weather[0].description);

            // Start here


        })
    }

    getCurrentData();

}

form.addEventListener('submit', handleSubmit);