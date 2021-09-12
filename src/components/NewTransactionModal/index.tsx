import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer }  from './style'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'
interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: ()=> void;
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [type,setType] = useState('');
    const [title,setTitle] = useState('');
    const [value,setValue] = useState(0);
    const [category,setCategory] = useState('');
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        const data = {
            title,
            value,
            category,
            type
        }
        api.post('/transactions',data);
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
                        <input type="number" placeholder="Valor" value={value}  onChange={event => setValue(Number(event.target.value))}/>
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