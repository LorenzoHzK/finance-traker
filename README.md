# finance-tracker
Projeto em Referência a matéria da faculdade UTFPR de desenvolvimento de páginas web com framework e CSS

# Tema do projeto: controlar as suas metas pessoas econômicas
# Nome do projeto: Finance Tracker


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
O projeto consiste em algumas páginas que permitem ao usuário criar metas financeiras, acompanhar seu progresso e manter o controle sobre o quanto já economizou em cada objetivo.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Funcionalidades principais:

### Tela de Login:
Acesso do usuário, uma tela simples de Login com validação de campos obrigatórios.

### Tela de Dashboard (Visão Geral):
Resumo geral do progresso financeiro: número de metas atingidas, metas concluídas, e valor total economizado. Exibição de gráficos e estatísticas do progresso das metas.

### Tela para Criar Nova Meta:
Formulário completo para cadastro de novas metas financeiras contendo:
- Nome da meta (ex: Viagem para o litoral)
- Valor total a ser alcançado
- Valor atual (quanto já economizou)
- Data limite (opcional)
- Validações customizadas com REGEX

### Tela de Metas (Objetivos): 
Lista de todas as metas criadas com uma barra de progresso para cada uma, mostrando quanto falta para completar. Permite editar e excluir metas existentes com feedback visual.

### Tela de cotação de moedas: 
Tela com a cotação das moedas em tempo real - Dólar, Euro e Real, para você tirar de base uma meta, para caso queira fazer uma viagem para o exterior. Utiliza requisições assíncronas para API pública.

## Tecnologias Utilizadas:
- HTML5
- CSS3
- JavaScript
- Materialize CSS (Framework CSS)
- jQuery (Manipulação do DOM e requisições AJAX)
- JSON Server (API Fake para persistência de dados)
- Node.js e NPM (Gerenciamento de dependências)
- Git e GitHub (Controle de versionamento)

## Estrutura do Projeto:
```
finance-tracker/
├── pages/
│   ├── overview.html      # Dashboard principal
│   │   ├── goal_page.html     # Lista de metas
│   │   ├── new_goal.html      # Criar nova meta
│   │   ├── quotation.html     # Cotação de moedas
│   │   └── header.html        # Header compartilhado
│   ├── css/
│   │   └── main.css           # Estilos principais
│   ├── js/
│   │   └── load-header.js     # Carregamento dinâmico do header
│   └── icons/
│       └── Logo.png           # Logo da aplicação
└── README.md                   # Documentação
```

## Manual de execução

### Pré-requisitos:
- Node.js instalado (versão 14 ou superior)
- NPM (Node Package Manager)
- Git para controle de versão
- Editor de código (recomendado: Visual Studio Code)

### Passos para executar:

1. Clonar o repositório com git clone
```bash
git clone https://github.com/LorenzoHzK/finance-traker.git
```

2. Fazer checkout no branch develop que contém as modificações mais recentes
```bash
git checkout develop
```

3. Abrir o projeto no editor Visual Studio Code (VS Code)

4. Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto

5. Instalar as dependências contidas no package.json
   - Comando: `npm i`

8. O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo db.json e routes.json.
   - Por padrão, a aplicação JSON Server executa no endereço localhost:3000

9. Executar o projeto frontend abrindo o arquivo index.html no navegador ou utilizando a extensão Live Server do VS Code.

## Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.

- [x] ID01 - Implementa um layout responsivo de uma página web utilizando um Framework CSS, como Bootstrap, Materialize ou Tailwind, aproveitando as técnicas de Flexbox ou Grid oferecidas pelo próprio framework, garantindo que o layout se adapte adequadamente a diferentes tamanhos de tela e dispositivos.
- [x] ID02 - Utiliza técnica de responsividade nativa de CSS, como Flexbox ou Grid Layout, para criar layouts responsivos e fluidos em diferentes resoluções de tela.
- [x] ID03 - Utiliza componentes CSS (ex. card, button ou outros) e JavaScript (ex. modal, carrousel ou outro) oferecidos por um Framework CSS.
- [x] ID04 - Implementa um layout fluido e responsivo utilizando unidades relativas (vw, vh, %, em ou rem) em vez de unidades fixas (px) em diferentes dispositivos e tamanhos de tela.
- [x] ID05 - Implementa animações em elementos da página, como fadeIn/fadeOut, slideIn/slideOut, utilizando CSS Animations ou bibliotecas de animação, como o Animate.css ou JQuery, para fornecer feedback visual ao usuário e criar uma experiência interativa.
- [ ] ID06 - Cria transições personalizadas entre diferentes estados da página ou elementos, como mudanças de layout, alterações de cor ou exibição/hide de elementos, usando CSS Transitions ou CSS Animation, para melhorar a usabilidade e a aparência da aplicação.
- [x] ID07 - Aplica um Design System consistente, definindo diretrizes de estilo, cores, tipografia e padrões de componentes que são seguidos em toda a aplicação, garantindo uma experiência de usuário uniforme e atraente.
- [ ] ID08 - Implementa pré-processadores CSS, como o Sass, em conjunto com um Framework CSS ou de forma isolada, para organizar e modularizar o código CSS, aplicando variáveis, mixins e funções para facilitar a manutenção e escalabilidade dos estilos.
- [x] ID09 - Aplica tipografia responsiva utilizando media queries ou a função clamp(), em conjunto com unidades relativas como rem, em ou vw, para ajustar o tamanho da fonte de acordo com diferentes tamanhos de tela.

### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente, utilizando a API do HTML e expressões regulares (REGEX).

- [x] ID10 - Implementa tratamento de formulários no lado cliente com apresentação de mensagens de erro (texto próximo dos campos de entrada ou balões com mensagens) ou sucesso, utilizando os recursos da API do HTML, como validação de campos obrigatórios, tipo de entrada e limites de caracteres, garantindo que os dados inseridos sejam válidos antes de serem enviados para o servidor (via tratador de evento submit).
- [x] ID11 - Aplica expressões regulares (REGEX) de forma eficiente para realizar validações customizadas nos campos de formulários, como formatos específicos de e-mail, telefone, data ou outros padrões personalizados definidos pelos requisitos do projeto.
- [x] ID12 - Incorpora elementos de listagem, como checkbox, radio ou select, de maneira eficiente em formulários web, possibilitando a seleção e coleta precisa de dados pelos usuários.
- [x] ID13 - Realiza a escrita e leitura de dados no Web Storage, permitindo a persistência de informações entre sessões de usuário e fornecendo uma maneira eficaz de armazenar dados localmente no navegador.

### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web, incluindo Node.js, NPM e linters para garantir a qualidade do código, juntamento com boas práticas de versionamento e organização de projetos.

- [x] ID14 - Configura adequadamente um ambiente de desenvolvimento usando Node.js e NPM para gerenciar pacotes e dependências do projeto, facilitando a instalação e o uso de bibliotecas e ferramentas de terceiros.
- [x] ID15 - Utiliza linters, como ESLint ou Stylelint, para analisar e corrigir automaticamente problemas de código, incluindo erros de sintaxe, estilo e boas práticas, garantindo a qualidade e consistência do código do projeto.
- [x] ID16 - Adota boas práticas de versionamento utilizando sistemas como Git e GitHub, criando e gerenciando repositórios com branches adequados ou pelo menos o branch main.
- [ ] ID17 - Utiliza técnicas de minificação e otimização de recursos, como minificação de CSS e JavaScript e otimização de imagens, para melhorar o desempenho e o tempo de carregamento do site ou aplicação.
- [x] ID18 - Organiza o arquivo README.md conforme o template exigido na disciplina, contendo informações claras e estruturadas sobre o projeto, principalmente o checklist de tópicos devidamente preenchido.
- [x] ID19 - Organiza os arquivos do projeto em uma estrutura coerente, lógica e modular, conforme projeto de exemplo, facilitando a localização, manutenção e escalabilidade.
- [ ] ID20 - Utiliza as metodologias BEM (Block Element Modifier) ou SMACSS (Scalable and Modular Architecture for CSS) para organizar e estruturar os estilos CSS de forma eficiente, garantindo a reutilização de estilos, a legibilidade do código e a manutenção sustentável do projeto.

### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade de páginas web.

- [x] ID21 - Utiliza a biblioteca jQuery para manipular o DOM e aprimorar a interatividade das páginas web, implementando funcionalidades como eventos, animações e manipulação de elementos HTML de forma eficiente.
- [x] ID22 - Seleciona e integra com sucesso um plugin jQuery, como o jQuery Mask Plugin ou outro plugin relevante para o projeto, a fim de melhorar a funcionalidade ou a aparência de elementos específicos em uma página web.
- [ ] ID23 - Utiliza bibliotecas de web components, como Lit, para criar componentes reutilizáveis e encapsulados, melhorando a modularidade e a manutenibilidade das páginas web.
- [ ] ID24 - Utiliza uma biblioteca de componentes prontos, como Material Web Components ou outra de escolha, ou então, algum componente independente (standalone) a fim de oferecer funcionalidades específicas sem a necessidade de estar integrado a uma biblioteca completa.

### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, permitindo a obtenção e manipulação de dados dinamicamente.

- [x] ID25 - Realiza requisições assíncronas para uma API fake utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para persistir os dados originados de um formulário.
- [x] ID26 - Realiza requisições assíncronas para uma API fake utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para exibição dos dados na página web.

## Inspiração: 
Nenhuma inspiração específica foi utilizada. O projeto foi desenvolvido com auxílio do Stitch para geração de ideias iniciais.

## Link do projeto: 
https://github.com/LorenzoHzK/finance-traker

## Autor:
Lorenzo
- GitHub: https://github.com/LorenzoHzK

## Licença:
Projeto desenvolvido para fins educacionais como parte do curso de Desenvolvimento Web - UTFPR 2024
