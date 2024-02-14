![Meteora](thumbnail.png)

# Meteora - E-commerce de Moda

O Meteora é um projeto de e-commerce em fase de desenvolvimento inicial. Este README fornece informações sobre o projeto, suas funcionalidades e como executá-lo em seu ambiente local.

![GIF da aplicação em execução](meteora-app.gif)

## 🔨 Funcionalidades do projeto

Neste estágio inicial de desenvolvimento, o Meteora possui as seguintes funcionalidades:

- Adicionar itens ao carrinho
- Remover itens do carrinho
- Visualizar a página do carrinho
- Deletar itens do carrinho

O [Figma dessa aplicação você encontra aqui](https://www.figma.com/file/R5ATrWK1nC44Eyeo6XZXlr/Meteora---Context-API?node-id=2386%3A2430&mode=dev).

## ✔️ Técnicas e tecnologias utilizadas

O projeto Meteora utiliza as seguintes tecnologias e bibliotecas:

- `React` - Framework JavaScript
- `Vite` - Build tool para desenvolvimento rápido
- `JavaScript` - Linguagem de programação principal
- `Context API` - Para gerenciamento de estado
- `useReducer` - Para controle de estado
- `useMemo` - Para otimização de desempenho
- `Bootstrap` - Framework de design e componentes

## 🛠️ Abrir e rodar o projeto

Para executar o projeto Meteora em seu ambiente local, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Baixe o repositório do projeto:

3. Extraia os arquivos para uma pasta de sua preferência.

4. Navegue até a pasta em questão via terminal (cmd):

```bash
cd repo-meteora
```

5. Instale as dependências usando o npm:

```bash
npm install
```

6. Inicie o projeto localmente:

```bash
npm run dev
```

7. Abra seu navegador e acesse a url exibida no seu terminal para visualizar o projeto.

## 📚 Mais informações do projeto

O Meteora é um e-commerce fictício de moda em constante desenvolvimento. Este projeto visa aprimorar as habilidades em React, e apresentar a Context API como uma solução para gerenciamento de estados globais de uma aplicação React.

O design e protótipo deste projeto podem ser encontrados [aqui](https://www.figma.com/file/R5ATrWK1nC44Eyeo6XZXlr/Meteora---Context-API?node-id=2386%3A2430&mode=dev).

# Conteúdo

## React: Gerencie Estados Globalmente com Context API

**Prop Drilling (Perfuração em Hélice)**

- Definição: Passar as props (propriedades) por vários componentes, mesmo que alguns deles não as utilizem, para poder chegar ao componente alvo. Isso pode tornar o código difícil de manter e entender.

**Elevação de Estado**

- Definição: Consiste em definir os estados no componente de nível mais alto da aplicação e passar esses estados para os componentes filhos (ou children) via props. Isso ajuda a evitar o prop drilling, mas pode se tornar complexo à medida que a aplicação cresce.

**Exemplo Gráfico de Elevação de Estado**

```
Home.jsx <- App.jsx (estados) -> Carrinho.jsx
```

**Prop Drilling Detalhado**

- Problema: Passar os estados via props para componentes distantes do local onde eles estão definidos, o que torna o gerenciamento de estado complicado e o código confuso.

**Exemplo Gráfico de Prop Drilling**

```
[{ItemCarrinhoSuspenso.jsx <- CarrinhoSuspenso.jsx}, {Produto.jsx <- Produto.jsx}] <- Home.jsx <- App.jsx (estados) -> Carrinho.jsx -> ItemCarrinho.jsx
```

**Analogia da Pintura da Casa**

- Imagine a necessidade de pintar vários cômodos de uma casa com uma única lata de tinta azul. O prop drilling é como carregar essa lata para cada cômodo individualmente, o que é ineficiente. Seria mais eficaz ter um local centralizado onde a tinta estivesse disponível para todos, assim como a Context API oferece um ponto central para os estados e props.

**Context API**

- Solução: A Context API é uma funcionalidade do próprio React que permite definir estados globais em um local e compartilhá-los diretamente com os componentes que necessitam, evitando o prop drilling.

**Exemplo Gráfico da Context API**

```
**Fonte de dados (Estilo db)** -> CarrinhoSuspenso.jsx, ItemCarrinhoSuspenso.jsx, Produto.jsx, Produto.jsx, ItemCarrinho.jsx
```

**Analogia do Piquenique**

- A Context API pode ser comparada a um mural em um parque onde informações sobre um piquenique são compartilhadas com todos os participantes. Ela centraliza as informações (estados e dados) de forma que todos os componentes da aplicação possam acessá-las diretamente, sem a necessidade de passá-las individualmente através de props.


## Parte Prática: Criando o Contexto no React

### 1. Criação do Contexto

Para iniciar, dentro da pasta `src` do seu projeto React, crie uma pasta chamada `context`. Dentro desta pasta, crie um arquivo denominado `CarrinhoContext.jsx`. Este arquivo servirá como o coração do nosso contexto de carrinho de compras.

### 2. Estrutura Inicial do `CarrinhoContext.jsx`

Primeiramente, importe a função `createContext` do React, que é essencial para criar um novo contexto.

```jsx
import { createContext } from "react";
```

### 3. Definindo o `CarrinhoContext`

Em seguida, defina uma constante chamada `CarrinhoContext` e atribua a ela o contexto criado pela função `createContext()`. Isso cria um espaço de contexto que pode ser acessado por outros componentes na aplicação.

```jsx
export const CarrinhoContext = createContext();
```

### 4. Criando o `CarrinhoProvider`

O próximo passo é criar um componente chamado `CarrinhoProvider`. Este componente funcionará como o provedor do contexto, permitindo que os estados e funções definidos sejam acessíveis por toda a aplicação.

```jsx
export const CarrinhoProvider = ({ children }) => {
    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
}
```

- **Detalhe Importante**: No exemplo acima, `{children}` representa os componentes filhos que terão acesso ao contexto. O `value={{}}` é o objeto que contém os dados e funções que você deseja disponibilizar globalmente.

### 5. Uso do `CarrinhoProvider`

O `CarrinhoProvider` deve envolver os componentes da sua aplicação que precisam acessar o contexto do carrinho. Isso geralmente é feito no arquivo principal da aplicação, como `App.js`, envolvendo o componente `<App/>` ou os componentes específicos que necessitam do contexto.

### Resumo da Implementação

- **Passo 1**: Criar a pasta `context` e o arquivo `CarrinhoContext.jsx` dentro de `src`.
- **Passo 2**: Utilizar `createContext` para definir um novo contexto.
- **Passo 3**: Exportar `CarrinhoContext` para torná-lo acessível em outros lugares.
- **Passo 4**: Criar e exportar `CarrinhoProvider` como um componente que disponibiliza o contexto para seus componentes filhos.

## Uso Prático da Context API no React

### Introdução

Imagine um aplicativo de lista de tarefas com seções para tarefas urgentes e não urgentes. Você pode ver todas as tarefas em uma seção geral e, separadamente, visualizar as tarefas urgentes e não urgentes. O desafio é como marcar uma tarefa como concluída em sua seção específica e garantir que ela também apareça como concluída na seção geral sem a necessidade de passar a informação manualmente entre os componentes.

### Solução com Context API

A Context API do React permite marcar uma tarefa como concluída em um lugar e refletir essa mudança em todos os outros lugares que exibem a mesma tarefa. Ela oferece uma maneira de compartilhar dados globalmente entre componentes sem a necessidade de passar propriedades manualmente, evitando assim a "prop drilling" e facilitando o compartilhamento de informações.

### Exemplos de Aplicação da Context API

1. **Autenticação de Usuário**: Mantém o estado de autenticação do usuário globalmente, permitindo acesso às informações do usuário logado em qualquer parte da aplicação.
2. **Temas e Estilos**: Compartilha informações sobre o tema atual da aplicação (cores, fontes, estilos) para garantir consistência visual.
3. **Configurações do Usuário**: Armazena preferências e configurações do usuário para acesso e modificação em diferentes partes da interface.
4. **Internacionalização (i18n)**: Mantém globalmente as informações do idioma selecionado, permitindo que todos os componentes se adaptem ao idioma escolhido pelo usuário.

### Quando Usar a Context API

- **Necessidade de compartilhamento global**: Quando informações ou estados precisam ser compartilhados entre componentes distantes na árvore de componentes.
- **Evitar Prop Drilling**: Quando passar propriedades através de vários níveis de componentes se torna impraticável ou confuso.

### Dicas para Melhor Uso

- **Dados Verdadeiramente Globais**: Use a Context API para dados que necessitam ser acessíveis globalmente na aplicação.
- **Re-renderização**: Avalie a necessidade de re-renderizar componentes ao atualizar informações no contexto para otimizar a performance.

### Recursos Adicionais

Para aprofundar os conhecimentos sobre a Context API, incluindo seus casos de uso, vantagens, desvantagens e como evitar o fenômeno de prop drilling, é recomendável a leitura da documentação oficial do React disponível em [Documentação Context API](https://react.dev/learn/passing-data-deeply-with-context).

## Outra solução:

### Solução: Composição de Componentes

Uma estratégia eficaz para evitar o prop drilling é a composição de componentes. Essa abordagem envolve simplificar a estrutura de componentes ao extrair componentes intermediários e fornecer os dados diretamente aos componentes que realmente precisam deles.

### Exemplo Prático: Refatoração do Componente de Navegação

**Antes da Refatoração:**

- **BarraNavegacao Componente**: Definia um array de links e passava para o componente de `<Menu>` por props.

```jsx
// BarraNavegacao Componente
import { useLocation } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  // Outros links
];

const BarraNavegacao = () => (
  <header>
    <nav>
      <Menu links={links} />
    </nav>
  </header>
);
```

- **Menu Componente**: Recebia os links via props e os passava para o componente `<MenuItem>`.

```jsx
// Menu Componente
import MenuItem from "./MenuItem";

const Menu = (props) => (
  <ul>
    {props.links.map((link) => <MenuItem key={link.path} link={link} />)}
  </ul>
);
```

**Depois da Refatoração:**

- **Menu Componente Refatorado**: Define os links diretamente dentro do componente, eliminando a necessidade de passá-los como props através do componente de `BarraNavegacao`.

```jsx
// Menu Componente Refatorado
import MenuItem from "./MenuItem";

const links = [
  { name: "Home", path: "/" },
  // Outros links
];

const Menu = () => (
  <ul>
    {links.map((link) => <MenuItem key={link.path} link={link} />)}
  </ul>
);
```

### Benefícios da Refatoração

Ao aplicar a composição de componentes desta maneira, alcançamos vários benefícios:

- **Eficiência**: Reduzimos a complexidade ao evitar passar dados desnecessários por vários componentes.
- **Legibilidade**: O código torna-se mais claro e fácil de entender.
- **Manutenibilidade**: Facilitamos a manutenção do código ao localizar dados e lógica mais próximos de onde são utilizados.

### Recursos Adicionais

Para explorar mais sobre composição de componentes, prop drilling, e outras técnicas avançadas como a Context API, consulte a documentação oficial do React em [Documentação](https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context).

## Utilização do `createContext` com `displayName` e `Consumer`

Para integrar eficientemente o estado global em sua aplicação React através do Context API, siga o padrão abaixo com o uso de um `CarrinhoProvider`. 

#### Configuração no `App.jsx`:

Envolver as rotas com `CarrinhoProvider` permite que o estado global seja acessível em toda a aplicação:

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoProvider>
    </BrowserRouter>
  );
}

export default App;
```

#### Motivação para Englobar as Rotas com `CarrinhoProvider`:

O `BrowserRouter` deve encapsular o `CarrinhoProvider` para garantir que o React Router DOM, que utiliza um contexto próprio para navegação, tenha acesso às informações de contexto necessárias para roteamento eficiente sem erros.

### Princípios SOLID em POO Aplicados ao React:

- **S** — Single Responsibility Principle: Cada componente ou módulo deve ter apenas uma razão para mudar, simplificando testes e manutenção.
- **O** — Open-Closed Principle: Componentes devem ser abertos para extensão, mas fechados para modificação direta.
- **L** — Liskov Substitution Principle: Objetos de uma classe base devem ser substituíveis por objetos de subclasses sem quebrar a aplicação.
- **I** — Interface Segregation Principle: Múltiplas interfaces específicas são melhores que uma interface única generalista.
- **D** — Dependency Inversion Principle: Dependa de abstrações, não de implementações concretas.

### Compartilhamento de Estado com `CarrinhoProvider`:

Para compartilhar estados como carrinho, quantidade e valor total, use a propriedade `value` do `CarrinhoContext.Provider`:

```jsx
<CarrinhoContext.Provider value={{ carrinho, setCarrinho, quantidade, setQuantidade, valorTotal, setValorTotal }}>
  {children}
</CarrinhoContext.Provider>
```

### Consumindo Contexto com `useContext`:

Para acessar e modificar o estado do carrinho dentro de componentes filho:

```jsx
import React, { useContext } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";

const Produtos = () => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function adicionarProduto(novoProduto) {
    // Implementação
  }

  // Restante do componente
};
```

### Uso de Hooks Customizados para Reutilização de Lógica:

Criar hooks customizados, como `useCarrinhoContext`, facilita a reutilização de lógica relacionada ao carrinho em diferentes componentes:

```jsx
import { useContext } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho, adicionarProduto, removerProduto } = useContext(CarrinhoContext);

  // Implementações das funções

  return { carrinho, setCarrinho, adicionarProduto, removerProduto };
};
```

### Contextos Aninhados e `reduce` para Cálculos:

- Use contextos aninhados para gerenciar diferentes escopos de estado dentro da aplicação.
- Utilize `reduce` dentro de `useEffect` para calcular valores agregados como quantidade total e valor total do carrinho, baseando-se no estado atual do carrinho.

## Uso do array.reduce()

O método `reduce()` é uma ferramenta poderosa em JavaScript, utilizada para reduzir um array a um único valor. Esse processo é feito passando por cada elemento do array e acumulando um resultado baseado em uma função que você define. [Documentação reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Sintaxe Básica

```javascript
array.reduce(function(accumulator, currentValue, currentIndex, array) {
  // Lógica para modificar o acumulador
}, initialValue);
```

- **accumulator**: O acumulador é o valor retornado pela última execução da função callback. Na primeira execução, é o `initialValue` (se fornecido).
- **currentValue**: O elemento atual sendo processado no array.
- **currentIndex** (opcional): O índice do elemento atual sendo processado.
- **array** (opcional): O array sobre o qual o `reduce` foi chamado.
- **initialValue** (opcional): Um valor sobre o qual o acumulador será inicialmente definido.

### Funcionamento do `reduce()`

1. **Inicialização**: O `reduce()` começa com o `accumulator` definido como o `initialValue`. Se `initialValue` não for fornecido, o primeiro elemento do array será usado como o `accumulator`, e o `reduce()` começará a partir do segundo elemento.
2. **Iteração**: Para cada elemento do array, a função callback é executada, recebendo o `accumulator` e o `currentValue` como argumentos.
3. **Acumulação**: A função callback modifica e retorna o `accumulator`. Esse valor é passado para a próxima execução da função callback como o `accumulator`.
4. **Resultado Final**: Após a última execução, o `reduce()` retorna o valor final do `accumulator`.

### Exemplo Prático: Carrinho de Compras

Vamos calcular a quantidade total de itens e o valor total de um carrinho de compras.

#### Dados do Carrinho

```javascript
const carrinho = [
    { quantidade: 2, preco: 10 }, // Produto 1
    { quantidade: 1, preco: 5 },  // Produto 2
    { quantidade: 3, preco: 15 }  // Produto 3
];
```

#### Cálculo com `reduce()`

```javascript
const resultado = carrinho.reduce((acumulador, produto) => ({
    quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
    totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
}), { quantidadeTemp: 0, totalTemp: 0 });
```

#### Explicação

- Iniciamos com um objeto acumulador `{ quantidadeTemp: 0, totalTemp: 0 }`.
- Para cada produto no carrinho, adicionamos `produto.quantidade` ao `quantidadeTemp` e `produto.preco * produto.quantidade` ao `totalTemp`.
- O objeto acumulador é atualizado a cada iteração com os novos valores de `quantidadeTemp` e `totalTemp`.
- O resultado final é um objeto com a quantidade total de itens (`quantidadeTemp`) e o valor total (`totalTemp`) do carrinho.

#### Resultado

```javascript
console.log(resultado);
// { quantidadeTemp: 6, totalTemp: 70 }
```

## Otimização da aplicação

**Entendendo o `useMemo` no React Através de uma Analogia**

Imagine trabalhar em um restaurante movimentado, onde é necessário preparar vários pratos simultaneamente. Cada prato requer uma combinação única de ingredientes e tempo de preparo. Sem uma organização prévia, conhecida como *Mise en place* - que significa colocar em ordem ou preparar o ambiente - você pode acabar preparando os mesmos ingredientes repetidamente por desatenção, resultando em ineficiência e desperdício de tempo e recursos.

**O `useMemo` Como Solução de Eficiência**

O `useMemo` do React funciona de maneira similar à prática do *Mise en place*. Ele permite organizar e reutilizar o resultado de operações pesadas, economizando recursos computacionais. Vamos entender melhor com um exemplo prático:

```jsx
import React, { useMemo } from 'react';

const Prato = ({ ingredientes }) => {
  // Função que simula a preparação dos ingredientes
  const prepararIngredientes = (ingredientes) => {
    console.log('Preparando ingredientes...');
    // Lógica de preparação
    return ingredientes.join(', ');
  };

  // Memoizando o resultado da preparação dos ingredientes
  const ingredientesPreparados = useMemo(() => prepararIngredientes(ingredientes), [ingredientes]);

  return <div><p>Ingredientes preparados: {ingredientesPreparados}</p></div>;
};
```

**Explicação do Código:**

- **Componente `Prato`:** Recebe uma lista de ingredientes como propriedade.
- **Função `prepararIngredientes`:** Simula um processamento intenso para preparar os ingredientes.
- **`useMemo`:** É utilizado para memorizar o resultado da função `prepararIngredientes`. Se a lista de ingredientes não mudar entre as renderizações, o resultado memorizado é reutilizado, evitando reprocessamento desnecessário.

**Vantagens do `useMemo`:**

- **Otimização de Desempenho:** Previne a execução desnecessária de funções pesadas, melhorando a performance do aplicativo.
- **Reutilização Eficiente:** Garante que a função de preparação seja invocada apenas quando há mudanças nos ingredientes, como evidenciado pela ausência da mensagem "Preparando ingredientes..." no console.log, caso os ingredientes não mudem.

**Quando Usar:**

O `useMemo` é especialmente útil em situações onde:
- O cálculo de um valor é computacionalmente intensivo.
- Os valores calculados podem ser reutilizados sem necessidade de reprocessamento.

**Para Mais Informações:**

A documentação oficial do React oferece um guia detalhado sobre o `useMemo`, disponível em [React Docs - useMemo](https://react.dev/reference/react/useMemo).

**Escalando Aplicações React com Reducer e Context**

À medida que uma aplicação React cresce, gerenciar estados compartilhados entre múltiplos componentes torna-se um desafio. React oferece duas poderosas ferramentas para lidar com esses cenários complexos: Context API e useReducer.

**Context API** permite compartilhar estados entre vários componentes sem a necessidade de prop drilling (passar props manualmente por vários níveis de componentes). Isso facilita o gerenciamento de estados globais em aplicações grandes.

**useReducer** é um hook que ajuda a gerenciar estados complexos e lógicas de estado que envolvem múltiplos sub-valores. Funciona de maneira similar ao Redux, mas sem a necessidade de adicionar bibliotecas externas.

**Como Funcionam Juntos:**

1. **Contexto para Propagação de Estado:** O Context é usado para passar o estado e a dispatch function do Reducer por toda a aplicação, permitindo que componentes em diferentes níveis acessem e manipulem o estado global de maneira eficiente.

2. **Reducer para Gerenciamento de Estado:** O Reducer gerencia o estado da aplicação, respondendo a ações enviadas para ele e atualizando o estado de acordo. Isso centraliza a lógica de atualização de estado e facilita o teste e a manutenção.

**Vantagens de Usar Reducer e Context Juntos:**

- **Estrutura Organizada:** Facilita a manutenção e compreensão do fluxo de estados na aplicação.
- **Performance Otimizada:** Reduz o número de atualizações desnecessárias de componentes, melhorando a performance da aplicação.
- **Escalabilidade:** Facilita a adição de novas funcionalidades e estados compartilhados, sem aumentar significativamente a complexidade do código.

**Exemplo Prático:**

Imagine uma aplicação de carrinho de compras onde o estado do carrinho precisa ser acessível por vários componentes:

1. **Criar o Contexto e o Reducer:**
   - O `CarrinhoContext` disponibiliza o estado do carrinho e a função dispatch.
   - O reducer `carrinhoReducer` define como as ações afetam o estado do carrinho.

2. **Provedor do Contexto:**
   - Um componente `CarrinhoProvider` usa o `useReducer` para gerenciar o estado do carrinho e disponibiliza o estado e dispatch para a aplicação.

3. **Consumindo o Contexto:**
   - Componentes podem consumir o `CarrinhoContext` para acessar ou modificar o estado do carrinho, facilitando a interação entre componentes distantes na hierarquia.

**Conclusão:**

A combinação de Reducer e Context oferece uma solução robusta para escalonar aplicações React, gerenciando estados complexos e compartilhados de forma eficiente. Adotar essa estratégia pode significativamente simplificar a arquitetura da sua aplicação, tornando-a mais escalável, manutenível e performática.

Para uma exploração mais aprofundada, incluindo exemplos de código e melhores práticas, a documentação oficial do React sobre "Scaling up with reducer and context" é um recurso indispensável.
Para uma exploração mais aprofundada, incluindo exemplos de código e melhores práticas, a documentação oficial do React sobre ["Scaling up with reducer and context"](https://react.dev/learn/scaling-up-with-reducer-and-context) é um recurso indispensável.
