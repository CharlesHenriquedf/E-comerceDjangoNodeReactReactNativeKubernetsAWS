# Usar a imagem oficial do Python, que já inclui as ferramentas necessárias
FROM python:3.8-slim

# Configurar o diretório de trabalho no container
WORKDIR /app

# Copiar o arquivo de dependências e instalar as dependências do Python
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o projeto para o container
COPY . /app/

# Expor a porta que o Django vai usar
EXPOSE 8000

# Comando para iniciar o servidor Django
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
