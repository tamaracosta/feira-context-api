import { CarrinhoProvider } from "commom/context/Carrinho";
import { UsuarioProvider } from "commom/context/Usuario";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router(){
  
return(
  <BrowserRouter>
    <Switch>

    <UsuarioProvider>
      <Route exact path="/">        
        <Login />        
      </Route>
      <CarrinhoProvider>
        <Route exact path="/feira">      
          <Feira />      
        </Route>
        <Route exact path="/carrinho">
          <Carrinho />
        </Route>
      </CarrinhoProvider>
    </UsuarioProvider>

      
    </Switch>
  </BrowserRouter>
)
}

export default Router;