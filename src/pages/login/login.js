import React from 'react';
import { Container, Form, Button, Row } from "react-bootstrap";
import "./login.css";

import user from "../../assets/images/user.png";

export default () => {
  return(
    <Container class="my-4 mx-5 ">
      <Row class="coluna no-gutters">
        <div class="col-lg-5">
            <img src= {user} class="img-fluid" alt="" />
        </div>
        <div class="col-lg-7">
          <Form>
            <Form.Group contolId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
                <Form.Text className="text-muted">Dados confidenciais</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasciPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"  />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
            <a href="#">Esqueceu a Senha?</a>
            <p>Não tem uma conta? <a href="#">Registre-se</a></p>
          </Form>
        </div>
      </Row>
    </Container>
  );
};