const obj = {
    1: "sd",
    2: "df",
    3: "jk",
    4: "jk",
    5: "jk",
    6: "jk",
}

const add = document.querySelector(".add");
const block = document.querySelector(".portfolio-box");
add.addEventListener("click", nextPortfolio);

export function getItemPortfolio() {
    block.insertAdjacentHTML("beforeend", `
    <div class="gallery-item">sd</div>
    <div class="gallery-item">df</div>
    `)
}


function nextPortfolio() {
    const test = document.querySelectorAll(".test");
    console.log(test.length)
    for (let i in obj) {
        if (i > test.length & i < test.length + 2 || i > test.length + 1 & i < test.length + 3) {
            block.insertAdjacentHTML("beforeend", `
    <div class="gallery-item">${i}</div>
    `)
        }
    }

}