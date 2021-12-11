function loadEvent() {
    const rootElement = document.getElementById("root");
    console.log("Loaded");

    const checkboxList = rootElement.querySelectorAll('input[type="checkbox"]');

    for (const checkbox of checkboxList) {
        checkbox.addEventListener("click", () => {
            const box = event.target;
            box.classList.toggle("checked");
            box.style.checked ? false : true;
        })
    };
}

window.addEventListener("load", loadEvent);