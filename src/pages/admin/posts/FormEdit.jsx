import React, { useEffect , useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";

const Container = styled.div`
  position: fixed;
  top: 50px;
  width: 600px;
  height: 650px;
  background: #400040;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 40px;
  color: white;
  z-index: 2;
`;

const Close = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 30px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin-bottom: 50px;
  color: white !important;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border-radius: 4px;
  border: 1px solid #333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-left: auto;
  display: block;
  padding: 10px 30px;
  border-radius: 4px;
  border: 1px solid #333;
  margin-bottom: 20px;
`;

export const FormEdit = ({ history, match }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [categorias, setCategorias] = useState([]);

  const idPost = match.params.id;

  useEffect(() => {
    axios.get(`https://app-toplojavirtual-com-br.umbler.net/post/${idPost}`).then((response) => {
      // console.log("eee", response.data.categoria[0].nome)
      setValue("title", response.data.post[0].title);
      setValue("content", response.data.post[0].content);
      setValue("image", response.data.post[0].image);
      setValue("link", response.data.post[0].link);
    });
  }, [idPost, setValue]);

  useEffect(() => {
    axios.get("https://app-toplojavirtual-com-br.umbler.net/categoria").then((response) => {
      setCategorias(response.data.categorias);
    });
  }, []);

  const handleOnSubmit = (data) => {
    axios.patch(`https://app-toplojavirtual-com-br.umbler.net/post/${match.params.id}`, data).then((response) => {
      if (response.data.status === "OK") {
        alert("Atualizado com Sucesso");

        history.push("/admin/posts");

        window.location.reload()
      }
    });
  };

 

  return (
    <Container>
      <Close
        onClick={() => {
          history.push("/admin/posts");
        }}
      >
        X
      </Close>

      <Title>Editar Post</Title>

      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Label>Titulo do Post:</Label>
        <Input type="text" name="title" ref={register} required />

        <Label>Conteudo:</Label>
        <Input type="text" name="content" ref={register} required />

        <Label>Imagem:</Label>
        <Input type="text" name="image" ref={register} required />

        <Label>Link:</Label>
        <Input type="text" name="link" ref={register} required />
        
        <Label>Categoria</Label>
        <select type="select" name="categoria_id" ref={register} required>
          {categorias.map(item=>(
            <option value={item.id} >{item.nome}</option>
          ))}
        </select>

        <Button>Enviar</Button>
      </form>
    </Container>
  );
};
