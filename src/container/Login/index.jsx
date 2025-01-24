import {
    Container,
    Content,
    Form,
    Header,
    IconEmail,
    IconLock,
    Input,
    InputGroup,
    Link,
    P
} from "./styles";

import logo from '../../assets/logo.png'
import { Button } from "../../components";
import { EnvelopeSimple, LockSimple   } from "@phosphor-icons/react";

export function Login() {
    return (
        <Container>
            <Header><img src={logo} alt="logo" /></Header>
            <Content>
                <h3>Login</h3>
                <Form>
                    <InputGroup>
                        <IconEmail>
                            <EnvelopeSimple fill="#858585" size={20} />
                        </IconEmail>
                        <Input type="email" placeholder="E-mail" />
                    </InputGroup>

                    <InputGroup>
                        <IconLock>
                            <LockSimple   size={20} fill="#858585"/>
                        </IconLock>
                        <Input type="password" placeholder="Senha" />
                    </InputGroup>
                    <Button>Entrar</Button>
                </Form>

                <P>Não possui conta? <Link to='/cadastro'>Clique aqui.</Link></P>
            </Content>
        </Container>
    )
}