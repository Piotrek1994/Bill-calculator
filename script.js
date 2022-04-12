const price = document.querySelector('#price')
const people = document.querySelector('#people')
const select = document.querySelector('#tip')
const btn = document.querySelector('.count')
const error = document.querySelector('.error')
const pInfo = document.querySelector('.cost-info')
const spanCost = document.querySelector('.cost')

const showBill = () => {
	if (price.value === '' || people.value === '' || select.value == 0) {
		error.textContent = 'Uzupełnij wszystkie pola'
	} else if (price.value <= 0 || people.value <= 0 || select.value <= 0) {
		error.textContent = 'Liczba musi być większa od 0 '
	} else {
		error.textContent = ''
		countBill()
	}
}

const countBill = () => {
	const newSelect = select.value * 1
	const newPrice = price.value * 1
	const newPeople = people.value * 1
	const finallPirce = (newPrice + newPrice * newSelect) / newPeople
	pInfo.style.display = 'block'
	spanCost.textContent = finallPirce.toFixed(2)
}

btn.addEventListener('click', showBill)
