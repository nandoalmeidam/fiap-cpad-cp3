# 📱 FIAP — CP3 | Cross-Platform Application Development

## 👨‍💻 Integrante

- Fernando de Almeida Godoi Martines  
- RM: 564820  
- Turma: 2CCPG  

---

# 📚 Sobre o Projeto

Este repositório reúne os aplicativos desenvolvidos durante as aulas da disciplina **Cross-Platform Application Development**, utilizando **React Native** com **Expo**.

Os exercícios foram desenvolvidos com foco em:
- Componentização
- Navegação entre telas
- Gerenciamento de estado
- Context API
- Persistência local
- Validação de formulários
- Experiência do usuário
- Estilização mobile personalizada

Além da implementação funcional, também foi realizada a personalização visual dos aplicativos para tornar cada exercício mais próximo de um aplicativo real.

---

# 📂 Estrutura do Repositório

| Aula | Exercício | Pasta |
|---|---|---|
| 03 | Cartão de Visita Digital | [aula03-cartao-visita](./aula03-cartao-visita/) |
| 04 | Contador de Hidratação | [aula04-contador-hidratacao](./aula04-contador-hidratacao/) |
| 05 | Meu Perfil | [aula05-meu-perfil](./aula05-meu-perfil/) |
| 06 | MemoList Plus | [aula06-memolist](./aula06-memolist/) |
| 07 | Mini Loja Virtual | [aula07-mini-loja](./aula07-mini-loja/) |
| 09 | Cadastro Completo | [aula09-cadastro-completo](./aula09-cadastro-completo/) |

---

# 🚀 Como Executar os Projetos

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/fiap-cpad-cp3.git
```

Entre na pasta do exercício desejado:

```bash
cd fiap-cpad-cp3/aula03-cartao-visita
```

Instale as dependências:

```bash
npm install --legacy-peer-deps
```

Execute o projeto:

```bash
npx expo start
```

---

# 📱 Aula 03 — Cartão de Visita Digital

Aplicativo desenvolvido em React Native simulando um cartão de visita digital personalizado.

Neste exercício foram praticados componentes básicos do React Native, exibição de imagem via `uri` e estilização utilizando `StyleSheet` para organização visual da interface.

| Cartão de Visita |
|---|
| <img src="./aula03-cartao-visita/meu-perfil/docs/images/app-cartao-visita.jpeg" width="250"> |

---

# 💧 Aula 04 — Contador de Hidratação

Aplicativo simples de rastreamento de consumo de água.

Neste exercício foram utilizados `useState` para controlar o contador de copos, `useEffect` para detectar quando a meta diária era atingida e estilização com `StyleSheet` para personalização visual da interface.

| Estado Inicial | Progresso Inicial |
|---|---|
| <img src="./aula04-contador-hidratacao/Contador-de-Hidratacao-main/docs/images/01_inicial.png" width="250"> | <img src="./aula04-contador-hidratacao/Contador-de-Hidratacao-main/docs/images/02_cincoCopos.png" width="250"> |

| Meta Atingida | Nível Avançado |
|---|---|
| <img src="./aula04-contador-hidratacao/Contador-de-Hidratacao-main/docs/images/03_oitoCopos.png" width="250"> | <img src="./aula04-contador-hidratacao/Contador-de-Hidratacao-main/docs/images/04_dezCopos.png" width="250"> |

| Desafio Extra | Reset do Contador |
|---|---|
| <img src="./aula04-contador-hidratacao/Contador-de-Hidratacao-main/docs/images/05_cinquentaCopos.png" width="250"> | <img src="./aula04-contador-hidratacao/Contador-de-Hidratacao-main/docs/images/06_zerando.png" width="250"> |

---

# 👤 Aula 05 — Meu Perfil

Aplicativo com navegação entre telas utilizando Expo Router.

Durante a atividade foram praticados conceitos de navegação mobile, organização de layout com `Flexbox`, estilização utilizando `StyleSheet` e componentização de telas.

| Tela Inicial | Tela de Perfil |
|---|---|
| <img src="./aula05-meu-perfil/App-meu-perfil-main/docs/images/01_inicio.png" width="250"> | <img src="./aula05-meu-perfil/App-meu-perfil-main/docs/images/02_perfil.png" width="250"> |

| Navegação entre telas |
|---|
| <img src="./aula05-meu-perfil/App-meu-perfil-main/docs/images/03_voltar.png" width="250"> |

---

# 📝 Aula 06 — MemoList Plus

Aplicativo de gerenciamento de tarefas com persistência local.

Neste exercício foram utilizados `useState`, `AsyncStorage`, componentes reutilizáveis e estilização com `StyleSheet` para criação de uma interface dinâmica e persistente.

| Tela Inicial | Adicionando Tarefa |
|---|---|
| <img src="./aula06-memolist/Memo-List-Plus-main/docs/images/01_inicio.png" width="250"> | <img src="./aula06-memolist/Memo-List-Plus-main/docs/images/02_adicionarTarefa.jpeg" width="250"> |

| Lista de Tarefas | Tarefa Concluída |
|---|---|
| <img src="./aula06-memolist/Memo-List-Plus-main/docs/images/03_adicionarSegundaTarefa.jpeg" width="250"> | <img src="./aula06-memolist/Memo-List-Plus-main/docs/images/04_tarefaConcluida.jpeg" width="250"> |

| Limpeza Completa |
|---|
| <img src="./aula06-memolist/Memo-List-Plus-main/docs/images/05_limparTudo.jpeg" width="250"> |

---

# 🛒 Aula 07 — Mini Loja Virtual

Aplicativo simulando um sistema simples de carrinho de compras.

Durante o exercício foram utilizados `Context API` para compartilhamento de estado, listas dinâmicas, navegação entre telas e estilização utilizando `StyleSheet`.

| Tela Inicial | Produtos Adicionados |
|---|---|
| <img src="./aula07-mini-loja/mini-loja-main/docs/images/01_inicio.png" width="250"> | <img src="./aula07-mini-loja/mini-loja-main/docs/images/03_adicionadoItem1.jpeg" width="250"> |

| Mais Produtos | Carrinho |
|---|---|
| <img src="./aula07-mini-loja/mini-loja-main/docs/images/05_adicionadoItem3.jpeg" width="250"> | <img src="./aula07-mini-loja/mini-loja-main/docs/images/06_carrinhoComItens.jpeg" width="250"> |

| Carrinho Zerado |
|---|
| <img src="./aula07-mini-loja/mini-loja-main/docs/images/08_carrinhoZerado.jpeg" width="250"> |

---

# 📋 Aula 09 — Cadastro Completo

Aplicativo de cadastro desenvolvido em React Native utilizando múltiplos componentes e validações de formulário.

Nesta atividade foram praticados conceitos de `useState`, validação de campos, manipulação de formulários, renderização condicional, componentes como `Switch`, além de estilização com `StyleSheet`.

| Tela Inicial | Validação de E-mail |
|---|---|
| <img src="./aula09-cadastro-completo/cadastro-app-main/docs/images/01_inicio.jpeg" width="250"> | <img src="./aula09-cadastro-completo/cadastro-app-main/docs/images/02_erroEmail.jpeg" width="250"> |

| Mostrar Senha | Perfil Selecionado |
|---|---|
| <img src="./aula09-cadastro-completo/cadastro-app-main/docs/images/04_mostrandoSenha.jpeg" width="250"> | <img src="./aula09-cadastro-completo/cadastro-app-main/docs/images/05_dadosPreenchidos.jpeg" width="250"> |

| Cadastro Válido | Cadastro Finalizado |
|---|---|
| <img src="./aula09-cadastro-completo/cadastro-app-main/docs/images/06_dadosPreenchidosBotaoVerde.jpeg" width="250"> | <img src="./aula09-cadastro-completo/cadastro-app-main/docs/images/07_cadastroFinalizado.jpeg" width="250"> |

| Campos Limpos |
|---|
| <img src="./aula09-cadastro-completo/cadastro-app-main/docs/images/08_limparCampos.jpeg" width="250"> |

---

# 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- JavaScript
- Context API
- AsyncStorage
- Expo Router
- Hooks
- StyleSheet

---

# 🌟 Diferenciais Implementados

Durante o desenvolvimento dos exercícios, também foram adicionados alguns diferenciais além do conteúdo base apresentado em aula:

- Interfaces visuais personalizadas
- Feedback visual em tempo real
- Componentização para melhor organização do código
- Melhorias de experiência do usuário
- Validações extras em formulários
- Persistência de dados com AsyncStorage
- Atualizações dinâmicas de interface

---

# 📖 Reflexão Final

Ao longo das aulas foi possível evoluir bastante na construção de aplicações mobile utilizando React Native com Expo.

Os exercícios ajudaram no entendimento de conceitos importantes como gerenciamento de estado, navegação entre telas, persistência local, validação de formulários e organização de componentes.

Além da parte técnica, também foi possível desenvolver uma visão maior sobre experiência do usuário, organização visual e estruturação de projetos mobile mais próximos de aplicações reais.
