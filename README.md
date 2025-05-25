Troca Fácil — Aplicativo Mobile

O projeto consiste no desenvolvimento de uma interface gráfica mobile para uma aplicação de blogging, utilizando React Native. O principal objetivo é oferecer uma aplicação acessível, intuitiva e de fácil navegação, proporcionando uma experiência de usuário fluida e eficiente tanto para docentes (professores) quanto para estudantes.

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

/app
 ├── /components        → Componentes reutilizáveis (PostCard, etc.)
 ├── /screens           → Telas da aplicação
 │    ├── /context      → Context API para gerenciar estado global (PostContext)
 │    ├── /Home         → Tela de listagem dos posts
 │    ├── /CreatePost   → Tela para criação de posts
 │    ├── /EditPost     → Tela para edição (em desenvolvimento)
 │    ├── /Login        → Tela de login
 │    └── _layout.tsx   → Definição do layout principal
 ├── /routes            → Definição de rotas da aplicação (app.routes.tsx)
 └── index.tsx          → Arquivo principal da aplicação

 Tecnologias Utilizadas
 
React Native

Expo

Context API (gerenciamento de estado)

React Navigation

Android Studio (emulador)

Como rodar o projeto:

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
Abra no emulador Android Studio ou escaneie o QR Code no celular com o aplicativo Expo Go.

💡 Guia de Uso
Acesse a tela de Login (login simples, sem autenticação real).

Na Home, visualize a lista de posts existentes.

Utilize o botão Criar Post para acessar a tela de cadastro.

⚠️ Funcionalidades de Editar, Salvar e Excluir ainda estão em desenvolvimento devido a desafios técnicos durante o desenvolvimento.


Desafios e Aprendizados
Durante o desenvolvimento, enfrentei diversos desafios, principalmente na implementação das funcionalidades de edição e exclusão de posts. 

As principais dificuldades foram:

Gerenciamento de estado global: Implementar o contexto para controlar os posts foi um processo desafiador.

Navegação e passagem de dados entre telas: Tive dificuldades na passagem de parâmetros para as telas de edição e detalhes.

Integração com Android Studio e Expo: Erros inesperados na execução do projeto no emulador e conflitos no ambiente de desenvolvimento.

Apesar dos desafios, esse processo me proporcionou muito aprendizado sobre React Native, Expo, e estruturação de projetos mobile.

👩‍💻 Autora
Dominique Santos
🚀 GitHub: @dominiquesantos


✅ Status
📌 Em desenvolvimento. Funcionalidades básicas funcionando, melhorias pendentes.
