chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "calculate_co2") {
        fetch('http://localhost:5000/calculate_co2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amazon_url: request.amazon_url  
            })
        })
        .then(response => response.json())
        .then(data => {
            sendResponse({ co2: data.co2 });
        })
        .catch(error => {
            console.error('Error:', error);
            sendResponse({ error: 'Failed to calculate CO2.' });
        });
        return true;  
    }
});