import "./ajude.css"
import { Container } from "react-bootstrap";

import img01 from "../../assets/images/ajude02.jpg";
import img02 from "../../assets/images/ajude04.jpg";
import img03 from "../../assets/images/ajude05.jpg";
import img04 from "../../assets/images/ajude08.jpg";

export default () => {
  return (
    <Container fluid>
    <section id="pg_defesa_pessoal_banner" >
        <div class="jumbotron card card-image  d-block ajude">
            <p class="mx-2 mb-4">Ajude Nossa <br /> Causa!</p>
        </div>
    </section>

    <section id="pg_defesa_pessoal_primeiraClass" class="container">
        <div class="row">
            <div class="col-md-6">
                <p>Com o intuito de ajudar as pessoas da comunidade LGBTQIA+ em situação de vulnerabilidade social, criamos meios que você pode de forma totalmente voluntária ajudar nessa missão tão importante que é vivermos em um país inclusivo onde todas as pessoas podem expressar suas vontades normalmente sem serem ofendidas pela sua orientação sexual.</p>
            </div>
            <div class="col-md-6">
                <img src={img01} class="img-fluid"/>
            </div>
        </div>
    </section>

    <section id="pg_defesa_pessoal_segundaClass" class="container-fluid my-4">
        <div class="container">
            <div class="row">
                <div class="col-md-12 py-5">
                    <p>Pensando nisso, nasceu o ASSEGURA que tem como objetivo principal contribuir por meio da informação, a segurança preventiva contra a violência das pessoas que fazem parte da comunidade LGBTQIA+ em diversos âmbitos da sociedade, seja ela física ou psicológica.</p>
                    <p>Vamos nessa? Fique à vontade para contribuir da maneira que se sentir mais confortável e vamos juntos nessa corrente do bem. </p>
                </div>
            </div>
            <div>
                <div class="row py-4">
                    <div class="col-md-6">
                        <img src={img02} class="img-fluid" />
                    </div>
                    <div class="col my-5">
                        <p>Por que ajudar? O Brasil é o país que mais sofre com a violência contra a comunidade LGBTQIA+, para mudarmos esse triste cenário que tal unirmos forças para combatermos essa realidade? O ASSEGURA LGBTQIA+ conta com sua contribuição para cada vez mais vivermos em um país mais inclusivo e melhor para todos :D</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid terceiraClass">
        <div class="container">
            <form method="post" action="">
                <h1>Seja um Voluntário:</h1>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nome">Nome</label>
                        <input name="nome" type="text" class="form-control" placeholder="Primeiro Nome" id="nome" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="sobreNome">Sobrenome</label>
                        <input name="sobreNome" type="text" class="form-control" placeholder="Sobrenome" id="sobreNome" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="email">E-mail</label>
                        <input name="email" type="text" class="form-control" id="email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="senha">Senha</label>
                        <input name="senha" type="text" class="form-control" id="senha" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="endereco">Endereço</label>
                    <input name="endereco" type="text" class="form-control" id="endereco" placeholder="Ex: Rua Maria Joana 123, Bairro x...." />
                </div>
                <div class="form-group">
                    <label for="complemeto">Complemento</label>
                    <input name="complemento" type="text" class="form-control" id="complemento" placeholder="Apartamento, Studio, ou Piso" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="cidade">Cidade de Residência</label>
                        <input name="cidade" type="text" class="form-control" id="cidade" />
                </div>
                <div class="form-group col-md-4">
                    <label for="estado">Estado de Nascimento</label>
                    <input name="estado" type="text" class="form-control" id="estado" />
                </div>
                <div class="form-group col-md-2">
                    <label for="cep">CEP</label>
                    <input name="cep" type="number" class="form-control" id="cep" />
                </div>
            </div>
            <div class="form-group">
            <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                    Verificar
                </label>
                </div>
            </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </section>

    <section class="container-fluid quartaClass">
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <h3>Veja abaixo mais informações de como você pode ajudar a comuidade LGBTQIA+</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <img src={img03} class="mr-3 img-fluid" alt="Conheça a primeira Trans faixa-preta de Jiu-Jitsu" />
                    
                </div>

                <div class="col-md-3">
                
                    <h5 class="mt-0">Saiba como AJUDAR!</h5>
                    <p>Contribua com nossa causa e ajude as pessoas que estão em situação de vulnerabilidade social da nossa comunidade. Confira ao lado como colaborar....</p>
                </div>

                <div class="col-md-3">
                    <img src={img04} class="mr-3 img-fluid" alt="“Sem ver diferenças”: É possível diversidade e inclusão nos treinos de artes marciais?" /> 
                </div>

                <div class="col-md-3">
                    
                    <h5 class="mt-0">Doar Faz Bem</h5>
                    <h6>Banco Santander <br />
                    <h6>Ag - 0000 <br />
                    Cc - 00000-0</h6> <br />
                    </h6>
                    <h6>Banco Itaú <br />
                    <h6>Ag - 0000 <br />
                    Cc - 00000-0</h6> <br />
                    </h6>
                </div>
            </div>
        </div>
    </section>
    </Container>
  );
};