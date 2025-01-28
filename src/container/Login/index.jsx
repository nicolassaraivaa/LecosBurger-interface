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

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup
        .string()   
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: yup
        .string()  
        .min(6, 'A senha deve ter pelo menos 6 caracteres') 
        .required('Digite uma senha'),
  })
  .required()


export function Login() {
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
                <h3>Login</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <IconEmail>
                            <EnvelopeSimple fill="#858585" size={20} />
                        </IconEmail>
                        <Input 
                            type="email" 
                            placeholder="E-mail" 
                            {...register("email")} 
                        />
                    </InputGroup>
                    <p>{errors.email?.message}</p>


                    <InputGroup>
                        <IconLock>
                            <LockSimple   size={20} fill="#858585"/>
                        </IconLock>
                        <Input 
                            type="password" 
                            placeholder="Senha" 
                            {...register("password")}
                        />
                    </InputGroup>
                    <p>{errors.password?.message}</p>

                    <Button>Entrar</Button>
                </Form>

                <P>Não possui conta? <Link to='/cadastro'>Clique aqui.</Link></P>
            </Content>
        </Container>
    )
}