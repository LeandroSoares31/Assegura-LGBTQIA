import "./defesaPessoal.css"
import { Container } from "react-bootstrap";

import img01 from "../../assets/images/Defesa.png";
import img02 from "../../assets/images/Defesa_Pessoal.png";
import img03 from "../../assets/images/imagemartigotrans.jpg";
import img04 from "../../assets/images/defesa5.jpeg";
import img05 from "../../assets/images/artigosemdiferenca.png";
import img06 from "../../assets/images/defesa4.png";

export default () => {
  return (
    <Container>
        <section id="pg_defesa_pessoal_banner" >
        <div class="jumbotron card card-image  d-block">
            <p class="mx-2 mb-4">Defesa Pessoal <br /> LGBTQIA+</p>
        </div>
      </section>

      <section id="pg_defesa_pessoal_primeiraClass" class="container">
        <div class="row">
            <div class="col-md-6">
                <p>Muitas pessoas LGBTQIA+ no centro de São Paulo precisam de apoio, para se defender de violências sofridas. Mas muitas dessas pessoas não conseguem acessar esse tipo serviço. Seja por falta de grana, por falta de um serviço personalizado, falta de tempo ou até mesmo falta de acesso à informação.</p>
                <h3><br />Por isso criamos o Assegura LGBTQIA+ </h3>
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
                    <p>Por isso, vamos através de Informações e Parcerias com Professores e Escolas de Defesa Pessoal, conectar quem precisa de acesso a esse serviço com Profissionais e Ambientes seguro, livre de assédio, livre de discriminações, em que as pessoas possam desenvolver suas potencialidades em um clima de respeito, amizade e colaboração, buscando assegurar a comunidade LGBTQIA+.</p>
                    <p>Nosso diferencial, é que além de promover essa conexão, também vamos disponibilizar na nossa plataforma, vídeos com aulas básicas gratuitas. </p>
                </div>
            </div>
            <div>
                <div class="row py-4">
                    <div class="col-md-6">
                        <img src={img02} class="img-fluid" />
                    </div>
                    <div class="col my-5">
                        <p>Pesquisas mostram que pessoas treinadas para responder adequadamente a um ataque, podem até mesmo impedir que agressões aconteçam, pois, reagem ao perigo de forma mais assertiva e confiante, aumentando as chances de evitar situações violentas ou enfrentá-las com segurança. </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section class="container-fluid terceiraClass">
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <p class="text-center">Você que é alvo de violência deve saber se defender, isto é empoderamento, é ser livre, <br /> é não viver refém do medo.</p>
                    <h3 class="text-center">Vídeos com Aulas de Defesa Pessoal</h3>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-3">
                    <iframe width="100%" height="160" src="https://www.youtube.com/embed/HF8NxF1QYh0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-md-3">
                    <iframe width="100%" height="160" src="https://www.youtube.com/embed/kxnjvWnpnxQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-md-3">
                    <iframe width="100%" height="160" src="https://www.youtube.com/embed/rSmerT0ZpFI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-md-3">
                    <iframe width="100%" height="160" src="https://www.youtube.com/embed/C14myVELhnE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
      </section>

      <section class="container-fluid quartaClass">
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <h3>Artigos sobre Defesa Pessoal</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <img src={img03} class="mr-3 img-fluid" alt="Conheça a primeira Trans faixa-preta de Jiu-Jitsu" />
                    <h5 class="mt-0">Conheça a primeira Trans faixa-preta de Jiu-Jitsu</h5>
                    <p>O jiu-jitsu brasileiro é muito peculiar como hobby. Isso meio que mergulha o praticante profundamente em um estilo de vida especial...</p>
                    <a class="btn btn-primary" target="_blank" href="https://medium.com/@piranhasteamfc/conhe%C3%A7a-a-primeira-trans-faixa-preta-de-jiu-jitsu-3b591fdda7c6" role="button">Leia Mais</a>
                </div>

                <div class="col-md-3">
                    <img src={img04} class="mr-3 img-fluid" alt="Conheça a primeira Trans faixa-preta de Jiu-Jitsu" />
                    <h5 class="mt-0">“Qualquer um pode ser uma ameaça”: no Brasil de Bolsonaro, LGBTs tomam a defesa pessoal com suas próprias mãos</h5>
                    <p>Em um país com uma das maiores taxas de violência do mundo contra gays e transgêneros, onde as redes sociais...</p>
                    <a class="btn btn-primary" target="_blank" href="https://medium.com/@piranhasteamfc/qualquer-um-pode-ser-uma-amea%C3%A7a-no-brasil-de-bolsonaro-lgbts-tomam-a-defesa-pessoal-com-suas-a9b62555aa0e" role="button">Leia Mais</a>
                </div>

                <div class="col-md-3">
                    <img src={img05} class="mr-3 img-fluid" alt="“Sem ver diferenças”: É possível diversidade e inclusão nos treinos de artes marciais?" />
                    <h5 class="mt-0">“Sem ver diferenças”: É possível diversidade e inclusão nos treinos de artes marciais?</h5>
                    <p>Uma das minhas partes favoritas do desafio de esgrima deste ano...</p>
                    <a class="btn btn-primary" target="_blank" href="https://medium.com/@piranhasteamfc/sem-ver-diferen%C3%A7as-%C3%A9-poss%C3%ADvel-diversidade-e-inclus%C3%A3o-nos-treinos-de-artes-marciais-c60ab57db6d9" role="button">Leia Mais</a>
                </div>

                <div class="col-md-3">
                    <img src={img06} class="mr-3 img-fluid" alt="“Sem ver diferenças”: É possível diversidade e inclusão nos treinos de artes marciais?" />
                    <h5 class="mt-0">Turmas de Defesa-Pessoal para LGBTs focam no empoderamento</h5>
                    <p>No 50º aniversário do levante de Stonewall, que deu início ao movimento pela igualdade LGBT, os instrutores locais...</p>
                    <a class="btn btn-primary" target="_blank" href="https://medium.com/@piranhasteamfc/sem-ver-diferen%C3%A7as-%C3%A9-poss%C3%ADvel-diversidade-e-inclus%C3%A3o-nos-treinos-de-artes-marciais-c60ab57db6d9" role="button">Leia Mais</a>
                </div>
            </div>
        </div>
      </section>
    </Container>
  );
};