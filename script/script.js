const navigationLinks = document.querySelectorAll('.navigation__link');
const calcElems = document.querySelectorAll('.calc');


navigationLinks.forEach((link, index) => {
  link.addEventListener('click', e => {
		e.preventDefault();

		for (let i = 0; i < calcElems.length; i++) {
			if (navigationLinks[index].dataset.tax === calcElems[i].dataset.tax) {
				calcElems[i].classList.add('calc_active');
				navigationLinks[index].classList.add('navigation__link_active');
			} else {
				calcElems[i].classList.remove('calc_active');
				navigationLinks[i].classList.remove('navigation__link_active');
			}
		}
  })
})

const ausn = document.querySelector('.ausn');
const selfEmployment = document.querySelector('.self-employment');
const formSelfEmployment = selfEmployment.querySelector('.calc__form');
const resultTaxTotalSelfEmployment = selfEmployment.querySelector('.result__tax_self-employment');
const formAusn = ausn.querySelector('.calc__form');
const resultTaxTotal = ausn.querySelector('.result__tax_total');
const calcLabelExpenses = ausn.querySelector('.calc__label_expenses');

formSelfEmployment.addEventListener('input', () => {
	if (formSelfEmployment.incomeIndividual.value) {
		resultTaxTotalSelfEmployment.textContent = formSelfEmployment.incomeIndividual.value * 0.04;
	}

	if (formSelfEmployment.incomeEntity.value) {
		resultTaxTotalSelfEmployment.textContent = formSelfEmployment.incomeEntity.value * 0.06;
	}

	if (formSelfEmployment.incomeIndividual.value && formSelfEmployment.incomeEntity.value) {
		resultTaxTotalSelfEmployment.textContent = 
		(formSelfEmployment.incomeIndividual.value * 0.04) + (formSelfEmployment.incomeEntity.value * 0.06)
	}
});

calcLabelExpenses.style.display = 'none';

formAusn.addEventListener('input', () => {
	if (formAusn.type.value === 'income') {
		calcLabelExpenses.style.display = 'none';
		resultTaxTotal.textContent = formAusn.income.value * 0.08;
	}

	if (formAusn.type.value === 'expenses') {
		calcLabelExpenses.style.display = 'block';
		resultTaxTotal.textContent = (formAusn.income.value - formAusn.expenses.value) * 0.2;
	}
});