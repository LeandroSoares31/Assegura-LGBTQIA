import "./userProfile.css"
import React, {useContext} from 'react';
import { Container, Col, Row, Image, Button, Form } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import axios from "axios";

import FormEndereco from "./FormEndereco";

import userProfile from "../../assets/images/userProfile.png";

const initialValues = {
    nome: '',
    sobreNome: '',
    telefone: '',
    email: '',
    password: '',
}

export default () => {

    const [values, setValues] = React.useState(initialValues)

    console.log("euu", { values })

    const HandleonChange = e => {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value })
    }


    const handleOnEndereco = () => {
       const result =  axios.post("http://app.toplojavirtual.com.br/endereco", values).then(response=> console.log("euu", response)).catch(err=> console.log("euu", err))

       console.log('euu', result)
    }

    const history = useHistory();

    return (
    <Container>
    <Row className="linha">
        <Col lg={6} className="coluna1">
            <Image src={userProfile} roundedCircle className="profileImg" />
            <p>Usuário</p>
            <Button className="botaoEditL">Logout</Button>
        </Col>
        
        <Col lg={6} >
            <Row className="coluna2">
                <Form.Row>
                    <Form.Group as={Col} controlId="Primeiro Nome"  xs={12} lg={12}>
                        <Form.Label id="formLabel">Nome:</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome" disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Sobrenome" lg={12}>
                        <Form.Label id="formLabel">Sobrenome:</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu sobrenome" disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="dataNascimento" lg={12}>
                        <Form.Label id="formLabel">Data de nascimento:</Form.Label>
                        <Form.Control type="text" placeholder="DD/MM/AAAA" disabled />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" xs={12} lg={12}>
                        <Form.Label id="formLabel">Email:</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState" lg={12}>
                        <Form.Label id="formLabel">Tipo de cadastro:</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." disabled>
                            <option>Voluntário</option>
                            <option>Parceiro</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword" lg={12}>
                        <Form.Label id="formLabel">Senha:</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" lg={12}>
                        <Form.Label id="formLabel">Confirme a senha:</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                </Form.Row>
            </Row>    
            

            <FormEndereco />
        </Col>
    </Row>
    </Container>
    );
};