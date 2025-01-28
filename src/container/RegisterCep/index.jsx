import {
    ButtonCep,
    Container,
    ContainerCheckBox,
    Content,
    Form,
    Header,
    Input,
    InputCep,
    InputGroup,
    ErrorCep
} from "./styles";

import logo from '../../assets/logo.png'
import { Button } from "../../components/";

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        cep: yup
            .number()
            .required('CEP é obrigatório')
            .typeError('CEP é obrigatório'),
        logradouro: yup
            .string()
            .required('Digite o logradouro'),
        number: yup
            .number()
            .required('Digite o número'),
        complemento: yup
            .string(),
        uf: yup
            .string()
            .min(2, 'O UF deve ter no máximo 2 caracteres')
            .required('Digite o estado'),
        checkbox: yup
            .boolean()
    })
    .required()

export function RegisterCep() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <Header><img src={logo} alt="logo" /></Header>
            <Content>
                <h3>Endereço</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputCep>
                        <Input
                            type="number"
                            placeholder="CEP"
                            {...register("cep")}
                        />

                        <ButtonCep type="button">Buscar</ButtonCep>
                    </InputCep>
                    <ErrorCep>{errors.cep?.message}</ErrorCep>

                    <InputGroup>
                        <Input
                            type="text"
                            placeholder="Logradouro"
                            {...register("logradouro")}
                        />
                        <p>{errors.logradouro?.message}</p>
                    </InputGroup>

                    <InputGroup>
                        <Input
                            type="number"
                            placeholder="Número"
                            {...register("number")}
                        />
                        <p>{errors.number?.message}</p>
                    </InputGroup>

                    <InputGroup>
                        <Input
                            type="text"
                            placeholder="Complemento"
                            {...register("complemento")}
                        />
                        <p>{errors.complemento?.message}</p>
                    </InputGroup>

                    <InputGroup>
                        <Input
                            type="text"
                            placeholder="UF"
                            {...register("uf")}
                        />
                        <p>{errors.uf?.message}</p>
                    </InputGroup>

                    <ContainerCheckBox>
                        <input
                            type="checkbox"
                            defaultChecked={true}
                            {...register("checkbox")}
                        />
                        <label>Receber nossas notificações</label>

                    </ContainerCheckBox>

                    <Button>Cadastrar</Button>
                </Form>
            </Content>
        </Container>
    )
}