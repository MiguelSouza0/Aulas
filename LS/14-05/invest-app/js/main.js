import { investments } from './data.js';
import { InvestmentCard } from './components/InvestmentCard.js';
 
const investmentsGrid = document.querySelector('.investments');
 
investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment))
  .join('');
 
function addInvestiment(investments){
    const investmentsGrid = document.querySelector('investments')

    const newInvestmentCard = InvestmentCard(investment)

    investmentsGrid.insertAdjacentHTML('afterbegin',
        newInvestmentCard)
}
newInvestmentCard = InvestmentCard(investments[0])