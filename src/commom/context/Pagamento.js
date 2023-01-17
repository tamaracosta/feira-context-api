import { createContext, useState } from "react";

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
  const tiposPagamento = [
    {
      nome: "Boleto",
      id: 1,
      juros: 1
    },
    {
      nome: "Cartão de Crédito",
      id: 2,
      juros: 1.3
    },
    {
      nome: "PIX",
      id: 3,
      juros: 1
    },
    {
      nome: "Crediário",
      id: 4,
      juros: 1.5
    }
  ];
  const [formaPagamento, setFormaPagamento] = useState(tiposPagamento[0]);
  return (
    <PagamentoContext.Provider
      value={{
        tiposPagamento,
        formaPagamento,
        setFormaPagamento
      }}>
      {children}
    </PagamentoContext.Provider>
  )
}