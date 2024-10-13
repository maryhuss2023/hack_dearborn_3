document.getElementById("calculate").addEventListener("click", () => {
    const amazon_url = "https://www.amazon.com/APHERMA-Massage-Athletes-Handheld-Massager/dp/B09P1DV7D8/ref=sr_1_7?dib=eyJ2IjoiMSJ9.LiyZsN8kTV-tXEtamWyFhFCoKQGkSwqDkNW7Vr4XOjC6cXND_kBqUxFQV-O4KerjA7LLdvMTviqSH9K_Ge0HaL1R_ZI_S768tx5hBPHcoVQ6IfY61CMMjqWoFsgohn76sQG7l1heQEGHwbiRe4WeyqOyavUWA7YqmVPTeHXkdIUHVUM4HwF578tT08yXS9eAukDyepHsOqfaA0xwT5uC2yV3Vh6LARvUEn84NzQxhng3YWBxQcUONQGmN9ihGKggHSrMnlIwj6iAA8nh2tCkUIMY3_zs5KiUl4cPbBXf1a8.k6K1mpXP_9xYS00DlC1j_rzKZIYgPtHL781HWtyyI4w&dib_tag=se&keywords=technology&qid=1728754938&sr=8-7";  // Replace PRODUCT_ID with an actual product ID

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