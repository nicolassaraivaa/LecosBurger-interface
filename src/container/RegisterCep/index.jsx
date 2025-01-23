import {
    ButtonCep,
    Container,
    ContainerCheckBox,
    Content,
    Form,
    Header,
    Input,
    InputCep,
    InputGroup
} from "./styles";

import logo from '../../assets/logo.png'
import { Button } from "../../components/";

export function RegisterCep() {

    return (
        <Container>
            <Header><img src={logo} alt="logo" /></Header>
            <Content>
                <h3>Endereço</h3>
                <Form>
                    <InputCep>
                        <Input type="text" placeholder="CEP" />
                        <ButtonCep type="button">Buscar</ButtonCep>
                    </InputCep>

                    <InputGroup>
                        <Input type="number" placeholder="Logradouro" />
                    </InputGroup>

                    <InputGroup>
                        <Input type="tel" placeholder="Número" />
                    </InputGroup>

                    <InputGroup>
                        <Input type="email" placeholder="complemento" />
                    </InputGroup>

                    <InputGroup>
                        <Input type="password" placeholder="UF" />
                    </InputGroup>

                    <ContainerCheckBox>
                        <label>Receber nossas notificações</label>
                        <input type="checkbox" defaultChecked={true}/>
                    </ContainerCheckBox>

                    <Button>Cadastrar</Button>
                </Form>
            </Content>
        </Container>
    )
}