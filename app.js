function Counter(element, value) {
    this.counter = element
    this.value = value
    this.resetBtn = element.querySelector('.reset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')

    this.valueDOM.textContent = this.value


    // Binding all function to the current Counter
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)

    // Adding event listeners to all buttons (to the current Counter)
    this.increaseBtn.addEventListener('click', this.increase)
    this.decreaseBtn.addEventListener('click', this.decrease)
    this.resetBtn.addEventListener('click', this.reset)
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

// Increase
Counter.prototype.increase = function () {
    console.log(this)
    this.value ++
    this.valueDOM.textContent = this.value
}

// Decrease
Counter.prototype.decrease = function () {
    console.log(this)
    this.value --
    this.valueDOM.textContent = this.value
}

// Reset
Counter.prototype.reset = function () {
    console.log(this)
    this.value = 0
    this.valueDOM.textContent = this.value
}

const firstCounter  = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)



