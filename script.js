/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput')
const totalDisplayed = document.getElementById('perPersonTotal')
const tipInput = document.getElementById('tipInput')
const numberOfPeople =document.getElementById('numberOfPeople')

// Get number of people from number of people div

// ** Calculate the total bill per person **
const calculateBill = () => {
    let billInputValue = Number(billInput.value)
    let tipPercentage = Number(tipInput.value) / 100
    let calculatedTip = tipPercentage * billInputValue
    let sharedBetween = Number(numberOfPeople.innerText)
    let calculatedBill = ((billInputValue + calculatedTip) / sharedBetween).toFixed(2)
    totalDisplayed.innerText = `$${calculatedBill}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
    let sharedBetween = Number(numberOfPeople.innerText)
    numberOfPeople.innerText = sharedBetween += 1
    calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    let sharedBetween = Number(numberOfPeople.innerText)
    if (sharedBetween > 1) {
        numberOfPeople.innerText = sharedBetween -= 1
        calculateBill()
    }else {
        throw ('Yo! You cannot have less than 1 person')
    }
}