# Projeto - Introdução Prática ao TypeScript na plataforma DIO
## Bootcamp - FullStack Developer Santander

Seja bem-vido(a) a esse repositório!

O objetivo aqui é apresentar o conteúdo que acompanhei durante os estudos do curso  **Introdução Prática ao TypeScript** e por fim a aplicação que fiz dos desafios propostos pelo professor **João Santos Lira**.

## O que é o Typescript
É um superset do JavaScript que trás tipagem estática para a linguagem, além de outras features, com o propósito de melhorar a qualidade do código escrito e a sua usabilidade. Como é um superset, o código compilado e usado em produção ainda é JavaScript, porém é um JS mais resiliente e turbinado graças ao uso de TS durante o desenvolvimento.

## Do que você vai precisar
Ferramentas necessárias:  
* Do Node instalado na sua máquina.
* Instalar o TypeScript usando o npm (npm install -g typescript)
    * É interessante que ele seja instalado de forma global, para que o usuário possa usar a biblioteca a qualquer momento e em qualquer projeto para fazer testes rápidos com o TS.
* De uma IDE como o [Visual Studio Code](https://code.visualstudio.com/download).  

Requisitos técnicos:  
* Lógica de programação.
* Mas é melhor ainda se tiver um conhecimento básico de JavaScript.

## Sobre a estrutura de commits
* *src* 
    * Contém arquivos com exemplos de uso de TS e JS.
* *desafios*
    * Contém vários arquivos JS que podem ser refatorados para solidificar o conhecimento adquirido na aula.
* *index.html*
    * É onde está a chamada para o arquivo app.js e pode ser manipulado a vontade para testes dos scripts.
* *tsconfig.json*
    * Arquivo de configuração do TypeScript e todas as suas funcionalidades.  
* *package.json*
    * Nesse arquivo foram colocados alguns scripts com o propósito para facilitar a vida de quem usar esse repositório
        * start
            * Inicia o *lite-server*, que vai escutar modificações no index.html e em seus arquivos importados. É útil caso queira fazer testes no browser. A porta disposta normalmente é a **localhost:3000**
        * watch  
            * Roda o **tsc --watch** com o propósito de compilar constantemente qualquer coisa que for editada nos arquivos TypeScript para sua contraparte em JavaScript. Esse comando evita que **tsc caminho/do/arquivo.ts** tenha que ser digitado constantemente para fazer a compilação. 

## Sobre como testar 
* Teste mão livre
    * Faça suas alterações em src/app.ts
    * Rode **tsc** ou **npm run watch** para compilar elas para o arquivo dist/app.js
    * Caso queira fazer um teste interagindo com o DOM, altere o index.html
    * Rode o npm start em uma nova sessão do terminal e acesse o localhost:3000
* Testar algum dos arquivos da pasta de exemplos ou desafios
    * Copie e cole o conteúdo para o arquivo src/app.ts ou altere o caminho do atributo src da tag script no index.html  
        * ex : *src=dist/app.js* -> *src=dist/exemplos/any.js*
    * Rode **tsc** ou **npm run watch** para compilar elas para o arquivo **dist/app.js**
    * Caso queira fazer um teste interagindo com o DOM, altere o index.html
    * Rode o npm start em uma nova sessão do terminal e acesse o localhost:3000 
* Caso queira fazer testes usando html é só alterar o index.html.

## Algumas observações adicionais sobre o projeto
A realização desse curso foi possível graças as bolsas de estudo proporcionadas pelo Santander através do programa [Becas Santander](https://www.becas-santander.com/pt_br/index.html) em parceria com a [DIO](https://www.dio.me/).

Deixo aqui meus sinceros agradecimentos pela oportunidade de ter recebido essa bolsa! 

E claro, pela diferença que ela fará na vida de cada um que também conseguiu e poderá usufruir do conhecimento adquirido aqui para crescimento profissional!

[Raphael A. Paulino](https://www.raphaelpaulino.com.br/)
