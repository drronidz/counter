function Counter(element, value) {
    this.counter = element
    this.value = value
    this.resetBtn = element.querySelector('.reset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')

    this.valueDOM.textContent = this.value


    console.log(this.resetBtn)
    console.log(this.increaseBtn)
    console.log(this.decreaseBtn)
    console.log(this.valueDOM)
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