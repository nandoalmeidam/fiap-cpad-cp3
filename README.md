# 📱 FIAP — CP3 | Cross-Platform Application Development

## 👨‍💻 Integrante

- Fernando de Almeida Godoi Martines
- RM: 564820
- Turma: 2CCPG

---

## 📚 Sobre o Projeto

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
|------|-----------|-------|
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

![Cartão de visita](./aula03-cartao-visita/meu-perfil/docs/images/app-cartao-visita.jpeg)

---

# 💧 Aula 04 — Contador de Hidratação

Aplicativo simples de rastreamento de consumo de água.

Neste exercício foram utilizados `useState` para controlar o contador de copos, `useEffect` para detectar quando a meta diária era atingida e estilização com `StyleSheet` para personalização visual da interface.

### Estado inicial

![Inicial](./aula04-contador-hidratacao/docs/images/01_inicial.png)

### Progresso inicial

![5 copos](./aula04-contador-hidratacao/docs/images/02_cincoCopos.png)

### Meta diária atingida

![8 copos](./aula04-contador-hidratacao/docs/images//03_oitoCopos.png)

### Nível avançado

![10 copos](./aula04-contador-hidratacao/docs/images/04_dezCopos.png)

### Desafio extra

![50 copos](./aula04-contador-hidratacao/docs/images/05_cinquentaCopos.png)

### Reset do contador

![Reset](./aula04-contador-hidratacao/docs/images/06_zerando.png)

---

# 👤 Aula 05 — Meu Perfil

Aplicativo com navegação entre telas utilizando Expo Router.

Durante a atividade foram praticados conceitos de navegação mobile, organização de layout com `Flexbox`, estilização utilizando `StyleSheet` e componentização de telas.

### Tela Inicial

![Tela inicial](./aula05-meu-perfil/docs/images/01_inicio.png)

### Tela de Perfil

![Tela perfil](./aula05-meu-perfil/docs/images/02_perfil.png)

### Navegação entre telas

![Tela voltar](./aula05-meu-perfil/docs/images/03_voltar.png)

---

# 📝 Aula 06 — MemoList Plus

Aplicativo de gerenciamento de tarefas com persistência local.

Neste exercício foram utilizados `useState`, `AsyncStorage`, componentes reutilizáveis e estilização com `StyleSheet` para criação de uma interface dinâmica e persistente.

### Tela inicial

![Tela inicial](./aula06-memolist/docs/images/01_inicio.png)

### Adicionando tarefa

![Adicionar tarefa](./aula06-memolist/docs/images/02_adicionarTarefa.jpeg)

### Lista de tarefas

![Lista tarefas](./aula06-memolist/docs/images/03_adicionarSegundaTarefa.jpeg)

### Tarefa concluída

![Tarefa concluída](../aula06-memolist/docs/images/04_tarefaConcluida.jpeg)

### Limpeza completa

![Limpar tudo](./aula06-memolist/docs/images/05_limparTudo.jpeg)

---

# 🛒 Aula 07 — Mini Loja Virtual

Aplicativo simulando um sistema simples de carrinho de compras.

Durante o exercício foram utilizados `Context API` para compartilhamento de estado, listas dinâmicas, navegação entre telas e estilização utilizando `StyleSheet`.

### Tela inicial

![Tela inicial](./aula07-mini-loja/docs/images/01_inicio.png)

![Tela inicial](./aula07-mini-loja/docs/images/02_inicio.jpeg)

### Adicionando itens

![Item 1](../aula07-mini-loja/docs/images/03_adicionadoItem1.jpeg)

![Item 2](./aula07-mini-loja/docs/images/04_adicionadoItem2.jpeg)

![Item 3](./aula07-mini-loja/docs/images/05_adicionadoItem3.jpeg)

### Tela do carrinho

![Carrinho](./aula07-mini-loja/docs/images/06_carrinhoComItens.jpeg)

### Carrinho zerado

![Carrinho zerado](./aula07-mini-loja/docs/images/08_carrinhoZerado.jpeg)

---

# 📋 Aula 09 — Cadastro Completo

Aplicação desenvolvida em React Native simulando um sistema completo de cadastro de usuários.

Neste exercício foram praticados `useRef`, validação de formulário, máscaras de CPF e telefone, inputs controlados e estilização utilizando `StyleSheet` para criação de uma interface moderna e responsiva.

### Tela inicial

![Tela inicial](./aula09-cadastro-completo/docs/images/01_inicio.jpeg)

### Validação de e-mail

![Erro email](./aula09-cadastro-completo/docs/images/02_erroEmail.jpeg)

### Mostrar senha

![Mostrar senha](./aula09-cadastro-completo/docs/images/04_mostrandoSenha.jpeg)

### Perfil selecionado

![Perfil](./aula09-cadastro-completo/docs/images/05_dadosPreenchidos.jpeg)

### Cadastro válido

![Cadastro válido](./aula09-cadastro-completo/docs/images/06_dadosPreenchidosBotaoVerde.jpeg)

### Cadastro realizado

![Cadastro realizado](./aula09-cadastro-completo/docs/images/07_cadastroFinalizado.jpeg)

### Campos limpos

![Campos limpos](./aula09-cadastro-completo/docs/images/08_limparCampos.jpeg)

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
