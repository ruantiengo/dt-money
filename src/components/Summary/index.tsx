import { Container } from "../Summary/style";
import  incomeImg  from '../../assets/entradas.svg'
import  outImg  from '../../assets/saidas.svg'
import  totalImg  from '../../assets/total.svg'
export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>R$10000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outImg} alt="" />
                </header>
                <strong>-R$5000,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>R$5000,00</strong>
            </div>
        </Container>
    );
}