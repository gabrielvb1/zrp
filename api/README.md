# testculttivo

Instruções do Teste Técnico para Backend
Objetivo do Teste
O objetivo é avaliar sua habilidade em trabalhar com Node.js, integração com APIs externas, criação de endpoints RESTful e persistência de dados. Você deverá conectar-se à API da Marvel e implementar as seguintes funcionalidades, com foco em construir uma API backend que sirva dados para um frontend que consuma informações sobre os personagens da Marvel.
Requisitos do Teste
1. Conexão com a API da Marvel
Implemente a integração com a API da Marvel para capturar informações dos personagens e expor endpoints que servirão esses dados a um frontend.
Endpoints da API da Marvel a serem utilizados:
Listagem de personagens: GET http://gateway.marvel.com/v1/public/characters
Detalhes de um personagem específico: GET http://gateway.marvel.com/v1/public/characters/{idPersonagem}
Todas as requisições para a API da Marvel devem conter o parâmetro apikey no query string, usando a chave pública da Marvel fornecida.
 
Funcionalidades para Implementação
1. Endpoint de Listagem de Personagens com Paginação
Implemente um endpoint para retornar a lista de personagens com suporte a paginação, permitindo que o frontend acesse os dados de forma gradual.
Cada personagem deve incluir ao menos o nome e a imagem.
2. Endpoint para Detalhes de um Personagem
Crie um endpoint que receba o ID do personagem como parâmetro e retorne informações detalhadas sobre o personagem específico.
3. Edição de Personagens
Implemente um endpoint para editar informações de um personagem específico. As edições devem ser persistidas localmente (por exemplo, em um banco de dados como SQLite, MongoDB, ou em arquivos JSON).
As alterações devem ser recuperadas mesmo após o reinício do servidor.
4. Favoritar Personagens
Implemente um endpoint para favoritar/desfavoritar personagens. O status de favorito deve ser persistido para que permaneça mesmo após reiniciar o servidor.
Garanta que cada personagem pode ser marcado ou desmarcado como favorito individualmente.
5. Endpoint para Listar Personagens Favoritos
Crie um endpoint para listar todos os personagens favoritados, retornando apenas os que foram marcados como favoritos.
Requisitos Técnicos
Utilize Node.js para desenvolver a API.
Conecte-se à API da Marvel utilizando fetch ou uma biblioteca HTTP como Axios.
Armazene dados localmente usando um banco de dados (SQLite, MongoDB ou similar) ou em arquivos JSON.
Organize o código em uma estrutura limpa e modular, com separação de rotas, controladores e serviços.
Garanta que todos os dados editados e favoritos sejam persistentes.
Adicione tratamento de erros e valide o status das requisições para evitar falhas.
Envio do Projeto
Ao finalizar o desenvolvimento, garanta que o projeto funcione localmente e que os endpoints estejam documentados para facilitar o uso no frontend. O projeto deve ser enviado através de um repositório no GitHub. Inclua um README com instruções para configuração e execução do projeto.
Certifique-se de que todas as funcionalidades estejam implementadas e que o projeto esteja funcional ao ser clonado.