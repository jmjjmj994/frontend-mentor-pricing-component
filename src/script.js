

function initialRender(arr) {
    const card_1 = document.querySelector(".card-1");
    const card_2 = document.querySelector(".card-2");
    const card_3 = document.querySelector(".card-3");
    const cardPrice = document.querySelectorAll(".card-header--price");
    const annually = arr
    cardPrice.forEach((span, index) => {
        if (index < annually.length) {
            span.textContent = annually[index]
        }
    })
}




const updateState = () => {
    const monthly = ["$19.99", "$24.99", "$39.99"]
    const annually = ["$199.99", "$249.99", "$399.99"]
    const checkbox = document.querySelector("#toggleSwitch")
    let state;
    checkbox.addEventListener("change", (e) => {
        if (e.target.checked === false) {
            state = false
            initialRender(annually)
        } else {
            state = true
            initialRender(monthly)
        }
    })

}
updateState()





function cardEffect() {
    const a = document.querySelectorAll("a")
    a.forEach(a => {
        a.addEventListener("mouseover", (e) => {
            e.target.closest('.card').style.cssText = 'transform:scale(1.05); transition:130ms ease;';
        })
    })

    a.forEach(a => {
        a.addEventListener("mouseout", (e) => {
            e.target.closest('.card').style.cssText = 'transform:scale(1); transition:130ms ease;';
    })


    })


}



window.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.querySelector("#toggleSwitch")
    checkbox.checked = false
    initialRender(["$199.99", "$249.99", "$399.99"])
    cardEffect()
})


