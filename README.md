Troca Fácil — Aplicativo Mobile

Desenvolvimento de uma interface gráfica mobile para uma aplicação de blogging, utilizando React Native. O objetivo é oferecer uma aplicação acessível, intuitiva e de fácil navegação, proporcionando uma experiência de usuário fluida tanto para docentes (professores) quanto para estudantes.

🚀 Funcionalidades Implementadas

Tela de Login

Tela Home do Professor

Listagem de posts cadastrados

Criação de novos posts

Edição de posts (em desenvolvimento)

Exclusão de posts (em desenvolvimento)

Salvamento de posts (em desenvolvimento)

Outras telas (em desenvolvimento)

🏗️ Arquitetura da Aplicação
bash
Copiar
Editar
/app
├── /components           → Componentes reutilizáveis (PostCard, etc.)
├── /screens              → Telas da aplicação
│   ├── /context          → Context API para gerenciar estado global (PostContext)
│   ├── /Home             → Tela de listagem dos posts
│   ├── /CreatePost       → Tela para criação de posts
│   ├── /EditPost         → Tela para edição (em desenvolvimento)
│   ├── /Login            → Tela de login
│   └── _layout.tsx       → Definição do layout principal
├── /routes               → Definição de rotas da aplicação (app.routes.tsx)
└── index.tsx             → Arquivo principal da aplicação

🛠️ Tecnologias Utilizadas

React Native

Expo

Context API (para gerenciamento de estado)

React Navigation

Android Studio (emulador)

⚙️ Setup Inicial — Como rodar o projeto

Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/dominiquesantos/fase04.git

Acesse a pasta do projeto:

bash
Copiar
Editar
cd fase04

Instale as dependências:

bash
Copiar
Editar
npm install

Rode o projeto:

bash
Copiar
Editar
npx expo start

Abra no emulador do Android Studio ou escaneie o QR Code no celular com o app Expo Go.

💡 Guia de Uso

Acesse a tela de Login (login simples, sem autenticação real).

Na Home, visualize a lista de posts existentes.

Utilize o botão Criar Post para acessar a tela de cadastro.

As funcionalidades de Editar, Salvar e Excluir estão em desenvolvimento.

⚠️ Desafios e Aprendizados

Durante o desenvolvimento, enfrentei diversos desafios, principalmente na implementação das funcionalidades de edição e exclusão de posts.

Principais dificuldades:

Gerenciamento de estado global: 

Configurar e manipular o Context API foi desafiador.

Navegação e passagem de dados entre telas: 

Tive dificuldades na passagem de parâmetros entre telas (como para a tela de edição).

Integração com Android Studio e Expo: 

Enfrentei erros inesperados no ambiente, conflitos de dependências e lentidão no emulador.

Apesar dos desafios, o projeto trouxe muito aprendizado sobre:

Estruturação de projetos mobile;

Conceitos do React Native;

Funcionamento do Expo;

Integração com ferramentas de desenvolvimento mobile.

👩‍💻 Autora
Dominique Santos

GitHub: @dominiquesantos

✅ Status do Projeto

🚧 Em desenvolvimento:
Funcionalidades básicas estão funcionando. Melhorias, ajustes e complementos ainda estão pendentes.
