document.getElementById('first-click').addEventListener('click', function () {
    var element = document.getElementById('second-click');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
});



// document.getElementById("A1").addEventListener("click", function(event){
//     console.log("click");
//     console.log(event)
// });

document.addEventListener('click', handleClickEvent)

function handleClickEvent(event) {
    // console.log(event)
    console.log(event.target.id)
    const id1 = event.target.id
    colorEnable(id1)
}

let count = 0
let seatCount = 40
function colorEnable(m) {

    count += 1
    if (count <= 4) {
        setBackgroundColorById(m)
        disabledElementById(m)

        // seat count  
        seatCount = seatCount - 1;
        seatCount1('seat-count')
    }
    else {
        disabledElementById(m)

    }

    // removeBackgroundColorById(id)

}

function seatCount1(m){
    const id = document.getElementById(m)
    id.innerText = seatCount
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