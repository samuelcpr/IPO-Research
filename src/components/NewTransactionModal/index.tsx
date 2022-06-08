import { FormEvent, useState } from 'react';

import Modal from 'react-modal'

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container, TransactionTypeContainer, RadioBox } from './styles'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('');
  const [title2, setTitle2] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit')
  const [type2, setType2] = useState('deposit2')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ title, title2, amount, category, type });

    setTitle('');
    setTitle2('');
    setAmount(0);
    setCategory('');
    setType('deposit')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastro de Voto</h2>
        <p>Como voce avalia o governo <br />
          Atual: BOM, RUIN, REGULAR.</p>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Digite aqui..."
        />
        <p>Como voce avalia a infraestrutura <br />
          da cidade.
        </p>
        <input
          value={title2}
          onChange={e => setTitle2(e.target.value)}
          type="text"
          placeholder="Digite aqui..."
        />
        <p>Quantidade de intrevistado</p>
        <input
          type="number"
          placeholder="Digite aqui..."
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <p>Como voce avalia os vereadores</p>
        <input
          type="text"
          placeholder="Digite aqui..."
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <TransactionTypeContainer>
          <p>Se as eleições fosse Hoje Em quem voce votaria ?</p> <br />
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            {/* <img src={incomeImg} alt="Entrada" /> */}
            <span>Candidato1</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('deposit2')}
            isActive={type === 'deposit2'}
            activeColor="green"
          >
            {/* <img src={outcomeImg} alt="Saída" /> */}
            <span>Candidato2</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="green"
          >
            {/* <img src={outcomeImg} alt="Saída" /> */}
            <span>Candidato3</span>
          </RadioBox>

        </TransactionTypeContainer>

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}