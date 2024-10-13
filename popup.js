// Event listener for the "Calculate CO2" button
document.getElementById("calculate").addEventListener("click", () => {
    // Hardcoded Amazon product URL for CO2 calculation
    const amazon_url = "https://www.amazon.com/Tootsie-Pops-Limited-Flavors-Caramel/dp/B004R6EP3Q/ref=pd_ci_mcx_pspc_dp_2_t_1?pd_rd_w=4HOmA&content-id=amzn1.sym.2dfc1605-9ad4-4767-b699-ffe3b61e0dc9&pf_rd_p=2dfc1605-9ad4-4767-b699-ffe3b61e0dc9&pf_rd_r=FZBB5KFQN60N6P452HT0&pd_rd_wg=PpH6D&pd_rd_r=cbfc7668-70af-43cb-a240-f719302227ba&pd_rd_i=B004R6EP3Q";

    // Send message to the background script to initiate CO2 calculation
    chrome.runtime.sendMessage({
        action: "calculate_co2",   // Action identifier
        amazon_url: amazon_url     // Pass the Amazon URL
    }, (response) => {
        const resultElement = document.getElementById("result");
        const errorElement = document.getElementById("error");

        // Check if CO2 data is received and display the result
        if (response.co2) {
            resultElement.innerHTML = `<strong>CO2 Emissions:</strong> ${response.co2} grams`;
            resultElement.style.display = "block";  // Show the result
            errorElement.style.display = "none";    // Hide the error
        } else {
            // Display error message if CO2 calculation fails
            errorElement.innerHTML = "Error calculating CO2 emissions. Please try again.";
            errorElement.style.display = "block";   // Show the error
            resultElement.style.display = "none";   // Hide the result
        }
    });
});
