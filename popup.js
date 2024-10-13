document.getElementById("calculate").addEventListener("click", () => {
    const amazon_url = "https://www.amazon.com/dp/PRODUCT_ID";  // Replace PRODUCT_ID with an actual product ID

    chrome.runtime.sendMessage({
        action: "calculate_co2",
        amazon_url: amazon_url
    }, (response) => {
        if (response.co2) {
            document.getElementById("result").innerText = `CO2 Emissions: ${response.co2} kg`;
        } else {
            document.getElementById("result").innerText = "Error calculating CO2";
        }
    });
});