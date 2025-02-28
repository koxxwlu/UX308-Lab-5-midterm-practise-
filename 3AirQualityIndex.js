function AirQualityIndex(num) {
    var desc = "nil";
    if (num < 0) {
        desc = "Value Error";
    } else if (num < 51) {
        desc = "Good";
    } else if (num < 101) {
        desc = "Moderate";
    } else if (num < 151) {
        desc = "Unhealthy for Sensitive Groups";
    } else if (num < 201) {
        desc = "Unhealthy";
    } else if (num < 301) {
        desc = "Very Unhealthy";
    } else if (num > 300) {
        desc = "Hazardous";
    }
    return desc;
}

export { AirQualityIndex }