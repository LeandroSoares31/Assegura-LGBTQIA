import "./nomeSocial.css"
import { Container } from "react-bootstrap";

import img01 from "../../assets/images/unnamed2.png";
import img02 from "../../assets/images/imgser.jpg";
import img03 from "../../assets/images/casa1.png";
import img04 from "../../assets/images/artigo2.jpg";
import img05 from "../../assets/images/translives5.png";

export default function nomeSocial(){
  return (
    <Container fluid>
      <section id="pg_defesa_pessoal_banner" >
        <div class="jumbotron card card-image d-block nomeSocial">
            <p class="mx-2 mb-4">Nome Social <br/> LGBTQIA+</p>
        </div>
      </section>

      <section id="pg_defesa_pessoal_primeiraClass" class="container primeiraClass" >
        <div class="row">
          <div class="col-md-6">
              <img src={img01} class="img-fluid"/>    
          </div>
          <div class="col-md-6 my-5 mb-0">
            <p>Nome social é o nome pelo qual pessoas transexuais, travestis ou outros preferem ser chamadas no dia a dia, ao invés de seu nome registrado em cartório, que não reflete a sua identidade de gênero. O conceito de identidade de gênero faz referência ao gênero com o qual a pessoa se identifica, podendo ser feminino, masculino, não-binário, entre outros.</p>
          </div>  
          <div class="col-md-12">
            <p>No processo de aceitação e entendimento em relação à identidade de gênero de cada um, o nome é uma das questões que têm maior impacto, já que os nomes estão diretamente ligados a um conceito de masculino e feminino em nossa sociedade. Felizmente, o processo para que pessoas trans possam utilizar seu nome social em documentos oficiais ficou menos complicado e mais inclusivo.</p>
          </div>
        </div>
      </section>

      <section id="pg_defesa_pessoal_segundaClass" class="container-fluid segundaClass" >
        <div class="container imagemNomeSocial">
            <div class="row">
              <div class="col-md-6 my-4 mb-4">
                <p> <b> Agora vamos tirar algumas duvidas</b></p>
                <p><b>O que pode ser alterado?</b>Conforme a regulamentação, podem ser alterados o prenome, agnomes indicativos de gênero (filho, júnior, neto e etc.) e o gênero em certidões de nascimento e de casamento (com a autorização do cônjuge). </p>
                <p><b>Preciso fazer a alteração no cartório em que fui registrado?</b>Não. O pedido pode ser realizado em qualquer cartório de Registro Civil de Pessoas Naturais em todo território nacional. O cartório que fizer a alteração deverá encaminhar via sistema eletrônico o procedimento ao cartório que registrou o nascimento da pessoa.</p>
                <p><b> É possível solicitar a gratuidade do procedimento?</b>Caso o interessado na mudança não tenha condições de arcar com os custos do procedimento, ele pode solicitar a gratuidade no cartório . Para isso, basta apresentar a declaração de hipossuficiência – documento necessário para obter assistência judiciária gratuita. Caso deseje, o cidadão que deseja realizar as mudanças pode contatar a Defensoria Pública de seu estado para conseguir a gratuidade.</p> 
              </div>
              <div class="col-md-6 my-5 mb-0">
                <img src={img02}  class="img-fluid" />
              </div>
            </div>
        </div>
      </section>

      <section class="container terceiraClass">
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <p class="text-center">Separamos aqui alguns videos com mais informaçoes sobre o processo </p>
                    <h3 class="text-center">Vídeos</h3>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-3">
                <iframe width="100%" height="160" src="https://www.youtube.com/embed/3oqztdVbivk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-md-3">
                <iframe width="100%" height="160" src="https://www.youtube.com/embed/hRD_xTbIgYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-md-3">
                <iframe width="100%" height="160" src="https://www.youtube.com/embed/sBKF5va4nRI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-md-3">
                <iframe width="100%" height="160" src="https://www.youtube.com/embed/1NOetBCF_pw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
      </section>

      <section class="container-fluid quartaClass">
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <h3>Artigos sobre, Retficação Nome Social e Documentação </h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <img src={img03} class="mr-3 img-fluid" alt="Conheça a primeira Trans faixa-preta de Jiu-Jitsu" />
                    <h5 class="mt-0">Casa1 -Guia Para Retificação Do Regitro Civil De Pessoas Não Cis-Gêneras</h5>
                    <p>Guia da Casa um para retificação do registro civil de pessoas não cisgêneras.</p>
                    <a class="btn btn-primary" target="_blank" href="https://www.casaum.org/como-fazer-retificacao-de-nome-e-genero/" role="button">Leia Mais</a>
                </div>

                <div class="col-md-4">
                    <img src={img04} class="mr-3 img-fluid" alt="Conheça a primeira Trans faixa-preta de Jiu-Jitsu" />
                    <h5 class="mt-0">Defensoria Pública de São Paulo </h5>
                    <p>Guia para retificação do registro civil de pessoas não-cisgêneras</p>
                   <a class="btn btn-primary" target="_blank" href="https://www.defensoria.sp.def.br/dpesp/Default.aspx?idPagina=6771" role="button">Leia Mais</a>
                </div>

                <div class="col-md-4">
                    <img src={img05} class="mr-3 img-fluid" alt="“Sem ver diferenças”: É possível diversidade e inclusão nos treinos de artes marciais?" />
                    <h5 class="mt-0">“O DIREITO À RETIFICAÇÃO DE NOME E GÊNERO PARA PESSOAS TRANS</h5>
                    <p>Um informativo prático com indicações do passo a passo para a retificação da certidão de nascimento</p>
                    <a class="btn btn-primary" target="_blank" href="https://www.mattosfilho.com.br/Documents/190614_cartilha_mobile.pdf" role="button">Leia Mais</a>
                </div>  
            </div>
        </div>
      </section>
    </Container>
  );
};