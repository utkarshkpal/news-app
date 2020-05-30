# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN  yarn install 

# add app
COPY . ./

RUN  yarn build

# start app
EXPOSE 8000
CMD ["yarn", "ssr"]