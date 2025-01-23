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
import { InputName } from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/";

export function Register() {
    const navigate = useNavigate()

    function registerCep() {
        navigate ('/cadastrocep')
    }

    return (
        <Container>
            <Header><img src={logo} alt="logo" /></Header>
            <Content>
                <h3>Criar Conta</h3>
                <Form>
                    <InputName>
                        <Input type="text" placeholder="Nome" />
                        <Input type="text" placeholder="Sobrenome" />
                    </InputName>

                    <InputGroup>
                        <Input type="number" placeholder="CPF" />
                    </InputGroup>

                    <InputGroup>
                        <Input type="tel" placeholder="Telefone" />
                    </InputGroup>

                    <InputGroup>
                        <Input type="email" placeholder="E-mail" />
                    </InputGroup>

                    <InputGroup>
                        <Input type="password" placeholder="Senha" />
                    </InputGroup>

                    <InputGroup>
                        <Input type="password" placeholder="Confirmar Senha" />
                    </InputGroup>

                    <Button onClick={registerCep}>Continuar</Button>
                </Form>

                <P>Já possui conta? <Link to='/login'>Clique aqui.</Link></P>
            </Content>
        </Container>
    )
}