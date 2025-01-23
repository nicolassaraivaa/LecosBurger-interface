import {
    Container,
    Content,
    Form,
    Header,
    Input,
    InputGroup,
    Link,
    P
} from "./styles";

import logo from '../../assets/logo.png'
import { Button } from "../../components";

export function Login() {
    return (
        <Container>
            <Header><img src={logo} alt="logo" /></Header>
            <Content>
                <h3>Login</h3>
                <Form>
                    <InputGroup>
                        <Input type="email" placeholder="E-mail" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="password" placeholder="Senha" />
                    </InputGroup>
                    <Button>Entrar</Button>
                </Form>

                <P>Não possui conta? <Link to='/cadastro'>Clique aqui.</Link></P>
            </Content>
        </Container>
    )
}