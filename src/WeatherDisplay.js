import React from 'react';
import './WeatherDisplay.css';

class WeatherDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null
        }
    }

    componentDidMount() {
        const cityName = this.props.name;
        const country = this.props.country;
        const URL = "https://api.openweathermap.org/data/2.5/weather?q="
            + cityName + ',' + country
            + "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
        // alert(JSON.stringify(URL));
        fetch(URL).then(res => res.json()).then(json => {
            // alert(JSON.stringify(json));
            this.setState({weatherData: json});
        });
    }

    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;

        console.log(weatherData);
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";

        return (
            <div className="weather-display">
                <h1 className="weather-display__header">
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description} />
                </h1>
                <p>Current: {weatherData.main.temp}°</p>
                <p>High: {weatherData.main.temp_max}°</p>
                <p>Low: {weatherData.main.temp_min}°</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
        );
    }
}

export default WeatherDisplay;