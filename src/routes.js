import { CarrinhoProvider } from "commom/context/Carrinho";
import { PagamentoProvider } from "commom/context/Pagamento";
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
        <PagamentoProvider>
          <Route exact path="/carrinho">
            <Carrinho />
          </Route>
        </PagamentoProvider>
      </CarrinhoProvider>
    </UsuarioProvider>

      
    </Switch>
  </BrowserRouter>
)
}

export default Router;