const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const contdownContainer = document.querySelector('#countdown')

const targetYear = 2024; // Alterado para o ano desejado
const targetDate = new Date(`August 20 ${targetYear} 00:00:00`); // Alterado para a data desejada

nextYearContainer.textContent = targetYear;

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnit(seconds)
    minutesContainer.textContent = getTimeUnit(minutes)
    hoursContainer.textContent = getTimeUnit(hours)
    daysContainer.textContent = getTimeUnit(days)
}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = targetDate - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    insertCountdownValues({ days, hours, minutes, seconds })
}

const initialScreen = () => {
    spinnerLoading.remove()
    contdownContainer.style.display = 'flex'
}

setTimeout(initialScreen, 1000)
setInterval(updateCountdown, 1000)
