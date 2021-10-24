function Counter(element, value) {
    console.log(element, value)
}

function getElement(selection) {
    const element = document.querySelector(selection)
    if(element) {
        return element
    } else {
        throw new Error(
            `Please check "${selection}" selector, no such element exists`
        )
    }
}


const firstCounter  = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)