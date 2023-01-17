import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({children}) => {
  const [carrinho, setCarrinho] = useState([]);
  return (
    <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export const useCarrinhoContext = () => {
  const {carrinho, setCarrinho} = useContext(CarrinhoContext)

  const mudarQuantidade = (id, quantidade) => {
    return carrinho.map(itemDoCarrinho =>  {
      if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
      return itemDoCarrinho;
    })    
  }

  const adicionarProduto = (novoProduto) => {
    const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id)
    if(!temOProduto){
      novoProduto.quantidade = 1;
      return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
    }
    setCarrinho(mudarQuantidade(novoProduto.id,1))     
  }

  const removerProduto = (id) => {
    const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id)
    const ehOUltimo = produto.quantidade === 1;
    if(ehOUltimo){
      setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho =>
        itemDoCarrinho.id !== id))
    }
    setCarrinho(mudarQuantidade(id,-1))   
  }

  return {carrinho, setCarrinho, adicionarProduto, removerProduto}
}