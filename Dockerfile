FROM nginx:1.17.8-alpine
WORKDIR /home/angular/portfolio
COPY package*.json ./
RUN npm install
COPY ./dist/chepkorir-webfolio ./
EXPOSE 8080
