document.addEventListener("DOMContentLoaded", () => {
    const categorizationForm = document.getElementById("categorization-form");
    const categoryOutput = document.getElementById("category-output");
  
    categorizationForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const wasteInput = document.getElementById("waste-input").value.toLowerCase();
      let category;
  
      // Simple categorization logic
      if (["paper", "plastic", "glass", "metal",""].includes(wasteInput)) {
        category = "Recyclable";
      } else if (["food", "leaves", "biodegradable"].includes(wasteInput)) {
        category = "Organic";
      } else if (["batteries", "chemicals", "electronics"].includes(wasteInput)) {
        category = "Hazardous";
      } else {
        category = "Unknown - Please check disposal guidelines";
      }
  
      // Display the result
      categoryOutput.textContent = `Waste Type: ${wasteInput} - Category: ${category}`;
      categoryOutput.style.color = category === "Unknown - Please check disposal guidelines" ? "red" : "green";
    });
  });
  