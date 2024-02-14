import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "@/reducers/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const { totalTemp, quantidadeTemp } = useMemo(() => {
    return carrinho.reduce(
      (acumulador, produto) => ({
        quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
      }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      }
    ); // Recebe uma função redutora e transforma os elementos de um array em um único valor
  }, [carrinho]); //O useMemo só vai utilizar a função se o estado do carrinho mudar, não a cada re-renderização. Para fazer isso é parecido com o useEffect, ele recebe dois argumentos e o segundo é o array de dependências

  useEffect(() => {
    setQuantidade(quantidadeTemp);
    setValorTotal(totalTemp);
  });

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        quantidade,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
