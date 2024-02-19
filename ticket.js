document.getElementById('first-click').addEventListener('click', function () {
    var element = document.getElementById('second-click');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
});



// document.getElementById("A1").addEventListener("click", function(event){
//     console.log("click");
//     console.log(event)
// });

// document.addEventListener('click', handleClickEvent)

// function handleClickEvent(event) {
//     // console.log(event)
//     console.log(event.target.id)
//     const id1 = event.target.id
//     colorEnable(id1)
// }
document.addEventListener('click', handleClickEvent)

function handleClickEvent(event) {
    const selectedIds = ['A1', 'A2', 'A3','A4','B1', 'B2', 'B3','B4','C1', 'C2', 'C3','C4','D1', 'D2', 'D3','D4','E1', 'E2', 'E3','E4','F1', 'F2', 'F3','F4','G1', 'G2', 'G3','G4','H1', 'H2', 'H3','H4',]; 

    if (selectedIds.includes(event.target.id)) {
        const id = event.target.id;
        colorEnable(id);
    }
}


let count = 0
let seatCount = 40
let totalPrice = 0
let grandTotal = 0
function colorEnable(m) {

    count += 1
    if (count <= 4) {
        setBackgroundColorById(m)
        disabledElementById(m)

        // seat count  
        seatCount = seatCount - 1;
        seatCount1('seat-count')

        // price add writing
        ticketName1("price-div", m)

        // total price 
        totalPrice += 550
        totalPrice1('total-price')

        // grand total price 
        if (count < 4) {
            grandTotal += 550
            totalPrice1('grand-total')

        }
        else {
            // have to check coupon and button on

            grandTotal1('grand-total')



        }

    }
    else {
        disabledElementById(m)

    }

    // removeBackgroundColorById(id)

}

function ticketName1(n, m) {
    const divSection = document.createElement("div");
    divSection.innerHTML =
        `<p> ${m}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Economy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 550</p>`;


    document.getElementById(n).appendChild(divSection);
}

function seatCount1(m) {
    const id = document.getElementById(m)
    id.innerText = seatCount
}
function totalPrice1(m) {
    const id = document.getElementById(m)
    id.innerText = totalPrice
}
function grandTotal1(m) {
    grandTotal = grandTotal + 550
    console.log(grandTotal)
    let discount = grandTotal * .15
    console.log(discount)
    grandTotal = grandTotal - discount
    const id = document.getElementById(m)
    id.innerText = grandTotal
}

function disabledElementById(elementId) {
    const element = document.getElementById(elementId);
    element.disabled = true

}


function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-green-400');
}