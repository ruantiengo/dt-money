import { Container } from "../Summary/style";
import  incomeImg  from '../../assets/entradas.svg'
import  outImg  from '../../assets/saidas.svg'
import  totalImg  from '../../assets/total.svg'

import {  useTransactions } from "../../hooks/useTransactions";
export function Summary(){
    const { transactions } = useTransactions();
    console.log(transactions);
    
    const sumary = transactions.reduce((acc: { deposits: number; total: number; withdraws: number; },transaction: { type: string; amount: number; })=>{
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount
        }
        return acc;
    },{
        deposits : 0,
        withdraws: 0,
        total: 0
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>{Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(sumary.deposits)}</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outImg} alt="" />
                </header>
                <strong>- {Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(sumary.withdraws)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>{Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(sumary.total)}</strong>
            </div>
        </Container>
    );
}