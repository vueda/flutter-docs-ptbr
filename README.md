# Documentação do Flutter em Português (pt-BR)

![Build and Deploy VuePress](https://github.com/vueda/flutter-docs-ptbr/workflows/Build%20and%20Deploy%20VuePress/badge.svg)

Este projeto tem como objetivo fornecer a documentação oficial do [Flutter](https://flutter.dev/docs) traduzido para o Português Brasileiro.

A versão mais recente está publicada com o GitHub Pages.

:point_right: [Clique aqui](https://vueda.github.io/flutter-docs-ptbr/) para acessar.

# Motivação

Hoje a grande maioria dos desenvolvedores já possuí algum conhecimento de inglês ou pode usar ferramentas de tradução automática para ter acesso ao conteúdo da documentação em outro idioma, então qual a motivação desse projeto?

No caso da tradução automática, principalmente com conteúdo mais técnico, muitas vezes o resultado obtido não é o ideal.

Também temos várias pessoas da comunidade brasileira que estão iniciando no mundo da programação ou ainda não se sentem tão confortáveis com o idioma inglês que estão começando a experimentar o Flutter.

Uma documentação em português pode ajudar a melhorar a experiência para esse grupo, abrindo também a possibilidade de adicionarmos coisas importantes que não constam na documentação original.

# Contribuindo

## O que está sendo usado para criar a documentação?

Esse projeto foi construído utilizando o **Vuepress**, um gerador de sites estáticos que utiliza **VueJS**.

[Clique aqui](https://vuepress.vuejs.org/) para acessar a documentação do **Vuepress**.

## Como posso contribuir?

Você pode contribuir de várias formas. Por exemplo:

- Abrindo uma nova [issue](https://github.com/vueda/flutter-docs-ptbr/issues/new) caso encontre algum problema.
- Revisando o conteúdo já publicado
- Contribuindo com traduções de novas seções da documentação

Para as contribuições com revisão ou novas traduções você pode criar um **Pull request** com as alterações. Mais abaixo esse processo está descrito com mais detalhes.

## Como executo o projeto localmente?

Pré-requisitos:

- [NodeJS](https://nodejs.org/pt-br/) instalado.

Execute os seguintes passos:

1.  Faça um **clone** ou baixe o código do projeto. Você também pode fazer um **fork** se desejar.
2.  Abra o diretório do projeto e execute o comando:

        npm run dev

3.  Aguarde o procedimento terminar. Você verá uma mensagem parecida com:

        success [13:33:36] Build c7ab96 finished in 147 ms! ( http://localhost:8080/flutter-docs-ptbr/ )

4.  Acesse a documentação em <code>http://localhost:8080/flutter-docs-ptbr/</code>

## Como criar o Pull request?

1. Execute os passos descritos em [Como executo o projeto localmente?](#como-executo-o-projeto-localmente)
2. Crie uma nova branch, por exemplo, <code>feature/nova-doc</code>
3. Altere ou crie os arquivos desejados
4. Se um novo asset ou biblioteca for adicionado, coloque os créditos na página **docs/creditos/README.md**
5. Faça o <code>commit</code> e <code>push</code> das alterações
6. Crie o [Pull request](https://github.com/vueda/flutter-docs-ptbr/pulls) para a branch **master**

## Quando as minhas alterações ficam disponíveis?

Após criar o seu **Pull request** ele será revisado e, após aceito, **mergeado**.

Uma pipeline do GitHub Actions é executada automáticamente após o merge e já publica a versão atualizada [aqui](https://vueda.github.io/flutter-docs-ptbr/).
