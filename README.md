# 🕹️ EBAC Games - Redux Edition

![Status](https://img.shields.io/badge/Status-Concluído-green)
![React](https://img.shields.io/badge/React-18-blue)
![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-764ABC)
![Styled Components](https://img.shields.io/badge/Style-Styled_Components-db7093)

## 💻 Sobre o Projeto

Este repositório contém a versão evoluída do projeto **EBAC Games**. O foco central deste desenvolvimento foi a implementação do **Redux Toolkit**, a ferramenta padrão da indústria para gerenciamento de estado eficiente em React.

O desafio técnico consistiu em remover a complexidade de passar propriedades (props) por múltiplos níveis de componentes ("prop drilling") e centralizar as regras de negócio — como adicionar itens ao carrinho, calcular totais e remover produtos — em uma *Store* global e acessível.

## ⚙️ Diferenciais da Arquitetura

A principal mudança neste projeto em relação a versões anteriores é a estrutura de dados:

* **Centralização (Single Source of Truth):** Todo o estado do carrinho de compras reside em um único local (`store`), tornando a aplicação previsível e fácil de debugar.
* **Redux Toolkit (RTK):** Utilização de `createSlice` e `configureStore` para reduzir o código repetitivo (boilerplate) e facilitar a escrita de lógica imutável.
* **API Integration:** (Se aplicável) Uso de chamadas assíncronas organizadas para popular a vitrine de jogos.

## 🛠 Tecnologias Utilizadas

*
