import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Como voce avalia o governo <br />
              Atual: BOM, RUIN, REGULAR.
            </th>
            <th>Quantidade de intrevistado</th>
            <th>Se as eleições fosse Hoje <br />
              Em quem voce votaria ?
            </th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>

              <td>{transaction.title}</td>

              <td className={transaction.type}>
                {transaction.amount}
              </td>

              {/* <td>{transaction.category}
              </td> */}

              <td>{transaction.category}
              </td>

              <td>{transaction.formattedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}