import logoImg from '../../assets/logo.svg'


import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>IPO Pesquisas</h1>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Fazer registro
        </button>
      </Content>
    </Container>
  )
}