import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { Lista } from "./Lista";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  margin-left: auto;
  display: block;
  padding: 10px 30px;
  border-radius: 4px;
  border: 1px solid #333;
  margin-bottom: 20px;
`;

export default ({history}) => {
  return (
    <Container>
      <Header>
        <h1>Categorias</h1>

        <Button onClick={()=>{history.push("/admin/categorias/new")}}>Novo</Button>
      </Header>

      <Switch>
        <Route
          path={["/admin/categorias", "/admin/categorias/new"]}
          component={Lista}
        />
      </Switch>
    </Container>
  );
};
