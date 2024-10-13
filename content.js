// content.js
const productInfo = {
    title: document.title,
    category: document.querySelector('#nav-bb').textContent, // Example selector
    weight: parseFloat(document.querySelector('#productDetails_detailBullets_sections1 li:nth-child(1)').textContent) // Example
  };
  
  const carbonFactors = {
    "electronics": 0.5, // Example factor (kg CO2 per unit)
    "clothing": 0.2,
    // Add more categories as needed
  };
  
  const emissions = carbonFactors[productInfo.category] * productInfo.weight;
  chrome.storage.local.set({ emissions });
  