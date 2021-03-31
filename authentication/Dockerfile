FROM node:latest

WORKDIR /app

COPY . /app

RUN npm i
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]