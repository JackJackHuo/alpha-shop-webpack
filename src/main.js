import './scss/main.scss'
console.log('JS loaded!')
const stepper = document.querySelector('.stepper')
const steps = stepper.querySelectorAll('.step')
const form = document.querySelector('FORM')
const parts = form.querySelectorAll('.part')
const btnControl = document.querySelector('.form__btn--control')
const nextBtn = btnControl.querySelector('.form__btn--next')
const prevBtn = btnControl.querySelector('.form__btn--previous')
const cart = document.querySelector('.cart')
const cartItems = cart.querySelectorAll('.cart__item')
const quantity = cart.querySelector('.item__quantity--number')
const darkModeBtn = document.querySelector('.icon__darkMode--toggle')

let currentStep = 0

function handleClickedBtn(e) {
  e.preventDefault()
  const target = e.target
  const thisStep = steps[currentStep]
  const nextStep = steps[currentStep + 1]
  const prevStep = steps[currentStep - 1]
  const thisPart = parts[currentStep]
  const nextPart = parts[currentStep + 1]
  const prevPart = parts[currentStep - 1]
  if (target.classList.contains('form__btn--next')) {
    if (currentStep === 2) return
    thisStep.classList.toggle('active')
    thisStep.classList.toggle('checked')
    nextStep.classList.toggle('active')
    thisPart.classList.toggle('d-none')
    nextPart.classList.toggle('d-none')
    currentStep += 1
  } else if (target.classList.contains('form__btn--previous')) {
    thisStep.classList.toggle('active')
    prevStep.classList.toggle('checked')
    prevStep.classList.toggle('active')
    thisPart.classList.toggle('d-none')
    prevPart.classList.toggle('d-none')
    currentStep -= 1
  }
  resetBtn()
}

function resetBtn() {
  if (currentStep !== 0) {
    prevBtn.style.display = 'initial'
  }
  if (currentStep === 0) {
    prevBtn.style.display = 'none'
  }
  if (currentStep === 2) {
    nextBtn.innerHTML = '確認下單'
  } else {
    nextBtn.innerHTML = '下一步 &longrightarrow;'

  }
}

function handleClickedQuantity({ target }) {
  const cartItem = cartItems[+target.dataset.id - 1]
  let quantity = cartItem.querySelector('.item__quantity--number')

  if (target.classList.contains('item__quantity--minus') && +quantity.innerHTML > 0) {
    quantity.innerHTML = Number(quantity.innerHTML) - 1
  } else if (target.classList.contains('item__quantity--plus')) {
    quantity.innerHTML = Number(quantity.innerHTML) + 1
  }
  calcTotal()
}

function calcTotal() {
  let totalPrice = cart.querySelector('.cart__charge--total')
  let total = 0
  cartItems.forEach(item => {
    const quantity = item.querySelector('.item__quantity--number')
    const price = item.querySelector('.item__price')
    total += +quantity.innerHTML * +price.innerHTML.split('$')[1].split(',').join('')
  })
  totalPrice.innerHTML = total
}

function handleClickeddarkMode({ target }) {
  if (!target.classList.contains('clicked')) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
  target.classList.toggle('clicked')
}
btnControl.addEventListener('click', handleClickedBtn)
cart.addEventListener('click', handleClickedQuantity)
darkModeBtn.addEventListener('click', handleClickeddarkMode)
