document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("WODP");

    button.addEventListener("click", function(e) {
        e.preventDefault();

        let weight = parseFloat(document.getElementById("input").value.trim());
        let gravityRatio = parseFloat(document.getElementById("planetsG").value);

        let resultContainer = document.getElementById("result-container");

        if (!isNaN(weight) && !isNaN(gravityRatio)) {
            let result = weight * gravityRatio;
            console.log(resultContainer)
            resultContainer.textContent = `Your weight on this planet is ${result.toFixed(2)} kg`;
        } else {
            resultContainer.textContent = "";
            alert("Please enter a valid weight and select a planet.");
        }
    });
});