import { Summary } from "../Summary";
import { TransactionalTable } from "../TransactionalTable";
import { Container } from "./style";

export function Dashboard(){
    return (
        <Container>
            <Summary/>
            <TransactionalTable/>
        </Container>
    );
}