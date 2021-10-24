function Counter(element, value) {
    this.counter = element
    this.value = value
    this.resetBtn = element.querySelector('.reset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')

    this.valueDOM.textContent = this.value
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

firstCounter.increase()
firstCounter.increase()

secondCounter.reset()
secondCounter.decrease()


