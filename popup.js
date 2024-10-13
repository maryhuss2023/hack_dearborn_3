document.getElementById("calculate").addEventListener("click", () => {
    const amazon_url = "https://www.amazon.com/Tootsie-Pops-Limited-Flavors-Caramel/dp/B004R6EP3Q/ref=pd_ci_mcx_pspc_dp_2_t_1?pd_rd_w=4HOmA&content-id=amzn1.sym.2dfc1605-9ad4-4767-b699-ffe3b61e0dc9&pf_rd_p=2dfc1605-9ad4-4767-b699-ffe3b61e0dc9&pf_rd_r=FZBB5KFQN60N6P452HT0&pd_rd_wg=PpH6D&pd_rd_r=cbfc7668-70af-43cb-a240-f719302227ba&pd_rd_i=B004R6EP3Q";  // Replace PRODUCT_ID with an actual product ID

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