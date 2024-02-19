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
    const selectedIds = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4',];

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
    const phoneNumberInput = document.getElementById('phone-number');

    count += 1
    if (count <= 4) {
        setBackgroundColorById(m)
        disabledElementById(m)

        // seat count  
        seatCount = seatCount - 1;
        seatCount1('seat-count')

        // second seat count 
        seatCount2('seat-count2')

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

            const couponVal = document.getElementById('coupon')
            if (couponVal.value == "NEW15" || couponVal.value == "Couple 20") {
                const applyBtn = document.getElementById('btn-apply')
                applyBtn.disabled = false;
                grandTotal1('grand-total')

                // applyBtn.addEventListener('click', function() {
                //     const p = document.createElement("p");
                //     p.innerText = "Alert! Invalid coupon";
                //     couponVal.appendChild(p);
                // });


            }
            else {
                grandTotal += 550
                const id = document.getElementById('grand-total')
                id.innerText = grandTotal
                // const p = document.createElement("p");
                // p.innerHTML =
                //     `<p> alert! invalid coupon`;
                // couponVal.appendChild(p);
            }




        }


        phoneNumberInput.addEventListener('input', function () {
            if (count > 0 && containsNumbers(this.value)) {
                const btn = document.getElementById('next-button');
                btn.disabled = false;
            }
        });

    }
    else {
        disabledElementById(m)

    }


}



function containsNumbers(input) {
    const digitRegex = /\d/;
    return digitRegex.test(input);
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
function seatCount2(m) {
    const id = document.getElementById(m)
    id.innerText = count
}
function totalPrice1(m) {
    const id = document.getElementById(m)
    id.innerText = totalPrice
}
function grandTotal1(m) {
    grandTotal = grandTotal + 550
    // console.log(grandTotal)
    let discount = grandTotal * .15
    // console.log(discount)
    grandTotal = grandTotal - discount
    const id = document.getElementById(m)
    id.innerText = grandTotal
}

function disabledElementById(elementId) {
    const element = document.getElementById(elementId);
    element.disabled = true

}


function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[green]');
}




const reloads = document.getElementById('reload-btn')
reloads.addEventListener('click',function(){
    location.reload(true);
})