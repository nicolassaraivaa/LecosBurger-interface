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
import InputMask from 'react-input-mask'; // Importando a biblioteca para máscara
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const schema = yup
    .object({
        cep: yup
            .string()
            .required('CEP é obrigatório')
            .matches(/^\d{5}-\d{3}$/, 'Digite um CEP válido (99999-999)'),
        logradouro: yup
            .string()
            .required('Digite o logradouro'),
        number: yup
            .string()
            .required('Digite o número'),
        complemento: yup
            .string(),
        bairro: yup
            .string()
            .required('Digite o bairro'),
        uf: yup
            .string()
            .length(2, 'Digite exatamente 2 caractere!')
            .required('Digite a sigla do seu estado!'),
        checkbox: yup
            .boolean()
            .default(true)
    })
    .required()

export function RegisterCep() {
    const [loadingCep, setLoadingCep] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => console.log(data)

    const handleCepSerch = async () => {
        const cepValue = document.getElementById('cep').value.replace(/\D/g, '')

        if (cepValue.length !== 8) {
            toast.error("CEP incorreto!")
            return
        }

        setLoadingCep(true)

        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`)

            if (data.erro) {
                toast.error("CEP não encontrado!")
            } else {
                setValue("logradouro", data.logradouro)
                setValue("bairro", data.bairro)
                setValue("uf", data.uf)
            }
        } catch (error) {
            toast.error(error)
        } finally {
            setLoadingCep(false)
        }
    }

    return (
        <Container>
            <Header><img src={logo} alt="logo" /></Header>
            <Content>
                <h3>Endereço</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputCep>
                        <InputMask
                            mask='99999-999'
                            maskChar={null}
                            {...register("cep")}
                            id="cep"
                        >
                            {(inputProps) => (
                                <Input
                                    {...inputProps}
                                    type="text"
                                    placeholder="CEP"
                                />
                            )}
                        </InputMask>

                        <ButtonCep
                            type="button"
                            onClick={handleCepSerch}
                            disabled={loadingCep}
                        >
                            {loadingCep ? 'Buscando' : 'Buscar'}
                        </ButtonCep>
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
                            type="text"
                            placeholder="Bairro"
                            {...register("bairro")}
                        />
                        <p>{errors.bairro?.message}</p>
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