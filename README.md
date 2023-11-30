# Meu Projeto E-commerce

Este é um sistema completo de e-commerce construído com Django Rest Framework com PostgreSQl e Node.js com MongoDB e API de pagamneto do Mercado Pago no backend, e no frontend web React e mobile com React Native. Além disso o projeto que está no início também vai utilizar AWS e Kubernets em DEVOPS.

## Tecnologias Utilizadas
- **Backend**: Django Rest Framework, Node.js
- **Frontend Web**: ReactJS com Material UI
- **Frontend Mobile**: React Native com React Native Elements
- **Banco de Dados**: PostgreSQL para Django e MongoDB para Node.js
- **Outras Ferramentas**: Docker, AWS, Kubernetes

## Configuração do Ambiente
Para executar este projeto, é necessário ter instalado:
- Docker e Docker Compose
- Node.js
- Python 3
- React
- React Native environment setup (para o desenvolvimento mobile)

## Executando o Projeto
1. Clone este repositório.
2. Navegue até a pasta de cada serviço (`django-api`, `nodejs-api`, `web`, `mobile`) e crie um arquivo `.env` com base nos exemplos de `.env.example` disponíveis em cada pasta.
3. Execute `docker-compose up` no backend do projeto para iniciar todos os serviços.
4. Para executar cada parte do projeto individualmente, consulte as instruções específicas nos respectivos diretórios.

## Estrutura do Projeto
- `backend/django-api`: Código da aplicação Django.
- `backend/nodejs-api`: Código da aplicação Node.js.
- `frontend/web`: Código da aplicação web React.
- `frontend/mobile`: Código da aplicação móvel React Native.

## Testes
Para executar os testes, use os seguintes comandos em cada serviço:
- Django API: `docker-compose run django-api python manage.py test`
- NodeJS API: `docker-compose run nodejs-api npm test`
- React web: Navegue até a pasta `frontend/web` e execute `npm test` para rodar os testes da aplicação web.
- React Native mobile: Navegue até a pasta `frontend/mobile` e execute `npm test` para rodar os testes da aplicação móvel.

## Documentação Adicional
Para mais detalhes sobre cada parte do sistema, consulte a documentação específica em cada diretório de serviço.

- [Django API](backend/django-api/README.md)
- [NodeJS API](backend/nodejs-api/README.md)
- [React web](frontend/web/README.md)
- [React Native mobile](frontend/mobile/README.md)