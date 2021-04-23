

let namesFromJson = [];
Array.from(data).forEach(elem => namesFromJson.push(elem.name));

const chars = 'ABCDEFGHIJKLMNQPQRSTUVWXYZ';
const options = new Set();

const mySelect = document.getElementById("mySelect");
const willHide = document.getElementById("willHide");
const showNames = document.getElementById("namesDiv");

function randomChars(n) {
    const min = 0;
    const max = chars.length - 1;

    while (options.size < n) {
        options.add(chars[Math.round(min - 0.5 + Math.random() * (max - min + 1))]);
    }
}


function loadOptionsInSelect() {
    randomChars(5);
    options.forEach((elem) => {
        const option = document.createElement("option");
        option.text = `${elem}`;
        mySelect.add(option);
    })
}

loadOptionsInSelect();


mySelect.addEventListener("click", () => {
    willHide.style.display = 'none';
    let elem = mySelect.options.selectedIndex;
    render(elem);
} );



function render(byChar) {
    if (byChar === 0) {
        showNames.innerHTML = '';
    } else {
        showNames.innerHTML = '';
        let sortChar = Array.from(options);

        namesFromJson.forEach(elem => {

                if (elem[0] === sortChar[byChar - 1]) {
                    const newElement = document.createElement("p");
                    newElement.innerHTML = elem;
                    showNames.appendChild(newElement);
                }
            }
        );

        if (showNames.innerHTML === '') {
            const newElement = document.createElement("p");
            newElement.innerHTML = 'No matches found';
            showNames.appendChild(newElement);
        }
    }
}















