<h1 align="center">
<img src="https://raw.githubusercontent.com/khalleb/ignews/main/public/images/avatar.svg" alt="ignews" width="16%"/>
</h1>

<p align="center">
  Ig.news - Blog sobre Tecnologia 📰🚀

<p align="center">
  <a href="#-projeto">Projeto</a> |
  <a href="#-layout">Layout</a> |
  <a href="#-tecnologias">Tecnologias</a> |
  <a href="#-instalação-e-uso">Instalação e Uso</a> |
  <a href="#-testes">Testes</a>
  
</p>


## 💻 Projeto

<p>O Ignews é um blog sobre tecnologia no qual o usuário deverá fazer uma assinatura mensal para ter acesso completo aos conteúdos (modelo paywall). Porém, 
para usuários que não queiram fazer a assinatura, terão acesso limitado a cada post do Blog. Para logar no aplicativo, o usuário deverá fazer sua autenticação
via conta do GitHub.</p>

<p>O projeto Ignews é um aplicativo JAMStack que utiliza dos serviços FaunaDB(banco de dados), Stripe(API de pagamentos), GitHub(Autenticação +OAuth),
Prismic CMS(sistema de gestão de conteúdo) e do framework do React Next.js, além disso usa a estilização feita pelo Sass e possui testes unitários de 
todos os componentes da aplicação, feito com o Jest.</p>

Acesse em: https://ignews-orcin-six.vercel.app/

## 🔖 Layout

Você pode acessar o layout do projeto através do link abaixo

- [Layout no Figma](https://www.figma.com/file/UmGqHcsCAqsKAg5P1H8kVZ/ig.news-(Copy))


<h2>Desktop</h2>
<p align="center">
    <img src = "https://user-images.githubusercontent.com/97106134/167515080-326d4164-ad56-4336-a427-25782ba0e758.PNG" width="80%" />
</p>

<h2>Aplicativo em Uso</h2>
<p align="center">
  <img src =https://user-images.githubusercontent.com/97106134/167519049-6e919a78-8d4e-4550-88de-70c97d7c9168.gif width="80%" />
</p>

## 🚀 Tecnologias

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Sass](https://sass-lang.com/)
- [Jest](https://jestjs.io/)

## 💻 Instalação e Uso

### Requisito

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/) _(exemplos feitos com Yarn)_

**Clone o projeto e acesse a pasta**

```bash
# Clone this project
$ git clone https://github.com/henriquekramer/Ignite-ignews.git && cd ignews
```
**Siga os passos abaixo**

```bash
# Instale as dependências 
$ yarn install
# De start no App
$ yarn dev
```
**O servidor será inicializado em <http://localhost:3000>**

## 💻 Testes

**Para rodar os testes unitários da aplicação:**
```bash
# Execute o seguinte comando no terminal
$ yarn test
```


<p align="center">
  Made with 💜&nbsp; by <a href="https://www.linkedin.com/in/henriquekramer/">Henrique Kramer</a>
</p>
