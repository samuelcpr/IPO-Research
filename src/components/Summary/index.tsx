import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";
import formatValue from "../../utils/formatValue";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      // acc.total += transaction.amount;
    }
    else if (transaction.type === 'deposit2') {
      acc.deposit2 += transaction.amount
      // acc.deposit2 += transaction.amount;
    }
    else {
      acc.withdraws += transaction.amount
      // acc.total += transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    deposit2: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Candidato1</p>
          {/* <img src={incomeImg} alt="Entradas" /> */}
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            // style: 'currency',
            // currency: 'BRL'
          }).format(summary.deposits)}

        </strong>
      </div>

      <div>
        <header>
          <p>Candidato2</p>
          {/* <img src={outcomeImg} alt="Saidas" /> */}
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            // style: 'currency',
            // currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>


      <div className='heighlight-background '>
        <header>
          <p>Candidato3</p>
          {/* <img src={totalImg} alt="Total" /> */}
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            // style: 'currency',
            // currency: 'BRL'
          }).format(summary.deposit2)}
        </strong>
      </div>

    </Container>
  )
}