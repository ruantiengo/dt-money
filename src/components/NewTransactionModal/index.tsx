import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer }  from './style'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import { FormEvent, useContext, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: ()=> void;
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const {createTransaction} = useTransactions();

    const [type,setType] = useState('');
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState(0);
    const [category,setCategory] = useState('');
    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        await createTransaction(
            {
                title,
                amount,
                category,
                type
            }
        )
            setTitle('');
            setAmount(0);
            setCategory('');
            setType('');
            onRequestClose();
    }
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
                <button type="button"><img src={closeImg} 
                alt="close" 
                onClick={onRequestClose} 
                className="react-modal-close"/></button>
                <Container onSubmit={handleCreateNewTransaction}>
                        <h2>Cadastrar usuario</h2>
                        <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}/>
                        <input type="number" placeholder="Valor" value={amount}  onChange={event => setAmount(Number(event.target.value))}/>
                        <TransactionTypeContainer>
                            <RadioBox type="button"
                            onClick={()=> setType('deposit')}
                            isActive = {type === 'deposit'}
                            activeColor = "green"
                            >
                                <img src={incomeImg} alt="entrada" />
                                <span>Entrada</span>
                            </RadioBox>
                            <RadioBox type="button"
                            onClick={()=> setType('withdraw')}
                            isActive = {type === 'withdraw'}
                            activeColor = "red"
                            >
                                <img src={outcomeImg} alt="entrada" />
                                <span>Saída </span>
                            </RadioBox>
                        </TransactionTypeContainer>
                        <input type="text" placeholder="Categoria" value={category}  onChange={event => setCategory(event.target.value)}/>
                        <button type="submit">Cadastrar</button>
                </Container>
    </Modal>
    );
}