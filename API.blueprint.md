# Bossa Box API Challenge: Blueprint

Esse é o diagrama da API

## Group Tools

### Tools collection [/tools]

#### Lista todas as ferramentas [GET]

Lista as ferramentas na ordem de criação.
  - Response 200 (application/json)
    - Body

          [
            {
              "id": "477557a0-65bc-4fbb-b52f-198f35d14050",
              "title": "Notion",
              "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
              "link": "https://www.notion.so/",
              "tags": [
                        "organization",
                        "planning",
                        "collaboration",
                        "writing",
                        "calendar"
                      ],
              "created_at": "2021-09-25T14:48:26.514Z",
              "updated_at": "2021-09-25T14:50:00.789Z"
            }
          ]

#### Pesquisar ferramenta [GET ?]

Pesquisa as ferramentas que se parecem com o valor title e que possuem a tag indicada
  - Parametros
    - tag (string, opicional) - Uma tag da ferramenta procurada;
    - title (string, opicional) - Parte to titulo da ferramenta procurada;
    - take (number, opicional) - A quantidade de ferramentas que deseja vizualizar (sem limite);
    - page (number, opicional) - o número da página de procura iniciando em 1;
  - Response 200 (application/json)
    - Body

          [
            {
              "id": "477557a0-65bc-4fbb-b52f-198f35d14050",
              "title": "Notion",
              "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
              "link": "https://www.notion.so/",
              "tags": [
                        "organization",
                        "planning",
                        "collaboration",
                        "writing",
                        "calendar"
                      ],
              "created_at": "2021-09-25T14:48:26.514Z",
              "updated_at": "2021-09-25T14:50:00.789Z"
            }
          ]

#### Mostrar ferramenta [GET /{id}]

Exibe a ferramenta encontrada
  - Response 200 (application/json)
    - Body

          {
            "id": "477557a0-65bc-4fbb-b52f-198f35d14050",
            "title": "Notion",
            "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
            "link": "https://www.notion.so/",
            "tags": [
                      "organization",
                      "planning",
                      "collaboration",
                      "writing",
                      "calendar"
                    ],
            "created_at": "2021-09-25T14:48:26.514Z",
            "updated_at": "2021-09-25T14:50:00.789Z"
          }

#### Criar ferramenta nova [POST]

Cria uma nova ferramenta, recebe um objeto JSON contendo as propreidades da ferramenta, retorna a ferramenta criada.
OBS: Se a propriedade tag não estiver no corpo da requisição será criado sem problemas retornando uma lista vazia;
  - Request (application/json)
    - Body

          {
            "title": "notion",
            "link": "https://www.notion.so/",
            "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
            "tags": [
                      "organization",
                      "agenda"
                    ]
          }
  - Response 201 (application/json)
    - Body

          {
            "id": "6af5ae85-e8fa-4276-af25-b62f7eb299a3",
            "title": "notion",
            "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
            "link": "https://www.notion.so/",
            "tags": [
                      "organization",
                      "agenda"
                    ],
            "created_at": "2021-09-25T14:50:06.441Z",
            "updated_at": "2021-09-25T14:50:06.442Z"
          }

#### Atualizar Ferramenta [PATCH /{id}]

Atualiza ferramenta encontrada através do id. Recebe um objeto contendo as propriedades da ferramenta, devolve a ferramenta com os dados atualizados
  - Request (application/json)
    - Body

          {
            "title": "json-server",
            "link": "https://github.com/typicode/json-server",
            "description": "Get a full fake REST API with zero coding in less than 30 seconds",
            "tags": [
                      "JSON",
                      "server",
                      "fake",
                      "REST"
                    ]
          }
  - Response 200 (application/json)
    - Body

          {
            "id": "6af5ae85-e8fa-4276-af25-b62f7eb299a3",
            "title": "json-server",
            "description": "Get a full fake REST API with zero coding in less than 30 seconds",
            "link": "https://github.com/typicode/json-server",
            "tags": [
                      "JSON",
                      "server",
                      "fake",
                      "REST"
                    ],
            "created_at": "2021-09-25T14:50:06.441Z",
            "updated_at": "2021-09-26T03:54:44.535Z"
          }

#### Deletar ferramenta [DELETE /{id}]

  - Reponse 204
