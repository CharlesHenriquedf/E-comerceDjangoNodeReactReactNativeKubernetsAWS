# Usar a imagem oficial do Node.js
FROM node:14

# Configurar o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar o arquivo package.json (e package-lock.json, se disponível) para o container
COPY package*.json ./

# Instalar as dependências do projeto (incluindo as devDependencies para rodar os testes)
RUN npm install

# Copiar o restante dos arquivos do projeto para o container
COPY . .

# Expor a porta que o Node.js vai usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
