// Add JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            document.querySelectorAll('.item').forEach(function (label) {
                label.classList.remove("highlight");
            });

            if (radioButton.checked) {
                const label = radioButton.closest('.item');
                if (label) {
                    label.classList.add("highlight");
                }
            }
        });
    });
});

const container = document.querySelector(".container");


document.querySelector(".container > span").addEventListener('click', function () {
    container.style.scale = "0";
    setTimeout(() => {
        container.style.scale = "1";
    }, "3000");
});
