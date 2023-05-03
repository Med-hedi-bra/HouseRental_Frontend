FROM node:16.0.0-alpine3.13
WORKDIR /app
ENV REACT_APP_API_URL=http://localhost:8081/apiStuff 
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["npm" , "start"]
