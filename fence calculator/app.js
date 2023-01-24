const form = document.querySelector("form");
const lengthInput = document.querySelector("#length");
const heightInput = document.querySelector("#height");
const materialSelect = document.querySelector("#material");
const outputDiv = document.querySelector("#output");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const length = lengthInput.value;
    const height = heightInput.value;
    const material = materialSelect.value;

    let panelCount;
    let postCount;
    let railCount;
    let cpostCount;
    let capCount;
    let screwCount;
    let bracketCount;
    let gateCount;

    if (material === "colorbond") {
        panelCount = Math.ceil(length / 6);
        postCount = panelCount + 1;
        railCount = panelCount;
        cpostCount = postCount;
        capCount = postCount;
        screwCount = (panelCount * 4) + (postCount * 2);
        bracketCount = postCount;
        gateCount = 1;
    } else if (material === "pool") {
        panelCount = Math.ceil(length / 4);
        postCount = panelCount + 1;
        railCount = panelCount;
        cpostCount = postCount;
        capCount = postCount;
        screwCount = (panelCount * 4) + (postCount * 2);
        bracketCount = postCount;
        gateCount = 1;
    }
    let html = `<h2>Materials List</h2>
    <ul>
        <li>Panels: ${panelCount}</li>
        <li>Posts: ${postCount}</li>
        <li>Rails: ${railCount}</li>
        <li>C-Posts: ${cpostCount}</li>
        <li>Caps: ${capCount}</li>
        <li>Screws: ${screwCount}</li>
        <li>Brackets: ${bracketCount}</li>
        <li>Gates: ${gateCount}</li>
    </ul>`;

    outputDiv.innerHTML = html;
});
