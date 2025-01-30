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

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputMask from 'react-input-mask'; // Importando a biblioteca para máscara

const schema = yup
    .object({
        name: yup
            .string()
            .max(15, 'Deve ter no máximo 15 caractere')
            .required('O nome é obrigatório'),
        surname: yup
            .string()
            .max(15, 'Deve ter no máximo 15 caractere')
            .required('Campo obrigatório'),
        cpf: yup
            .string()
            .required('Digite seu CPF'),
        phone: yup
            .string()
            .required('Digite uma senha'),
        email: yup
            .string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
        password: yup
            .string()
            .min(6, 'A senha deve ter pelo menos 6 caracteres')
            .required('Digite uma senha'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
            .required('Confirme sua senha'),
    })
    .required()

export function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    })

    const onSubmit = (dataUser) => {
                
        if (isValid) {
            navigate('/cadastrocep', {state: {dataUser}})
        }

    }

    const navigate = useNavigate()

    return (
        <Container>
            <Header><img src={logo} alt="logo" /></Header>
            <Content>
                <h3>Criar Conta</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputName>
                        <div>
                            <Input
                                type="text"
                                placeholder="Nome"
                                {...register("name")}
                            />
                            <p>{errors.name?.message}</p>
                        </div>

                        <div>
                            <Input
                                type="text"
                                placeholder="Sobrenome"
                                {...register("surname")}
                            />
                            <p>{errors.surname?.message}</p>
                        </div>
                    </InputName>

                    <InputGroup>
                        <InputMask
                            mask="999.999.999-99"
                            maskChar={null}
                            {...register("cpf")}
                        >
                            {(inputProps) => (
                                <Input
                                    {...inputProps}
                                    placeholder="CPF"
                                    type="text"
                                />
                            )}
                        </InputMask>
                        <p>{errors.cpf?.message}</p>
                    </InputGroup>

                    <InputGroup>
                        <InputMask
                            mask='(99) 99999-9999'
                            maskChar={null}
                            {...register("phone")}
                        >
                            {(inputProps) => (
                                <Input
                                    {...inputProps}
                                    type="tel"
                                    placeholder="Telefone"
                                />
                            )}
                        </InputMask>

                        <p>{errors.phone?.message}</p>
                    </InputGroup>

                    <InputGroup>
                        <Input
                            type="email"
                            placeholder="E-mail"
                            {...register("email")}
                        />
                        <p>{errors.email?.message}</p>
                    </InputGroup>

                    <InputGroup>
                        <Input
                            type="password"
                            placeholder="Senha"
                            {...register("password")}
                        />
                        <p>{errors.password?.message}</p>

                    </InputGroup>

                    <InputGroup>
                        <Input
                            type="password"
                            placeholder="Confirmar Senha"
                            {...register('confirmPassword')}
                        />
                        <p>{errors.confirmPassword?.message}</p>
                    </InputGroup>

                    <Button>Continuar</Button>
                </Form>

                <P>Já possui conta? <Link to='/login'>Clique aqui.</Link></P>
            </Content>
        </Container>
    )
}