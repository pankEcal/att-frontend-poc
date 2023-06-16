# Base image of node js from docker hub
FROM node:18-alpine

# Specify the environment in which an application is running
# ENV NODE_ENV=development

# App directory
WORKDIR /app
# WORKDIR /c/Users/aswin/Documents/ATT/API-testing-tool-frontend
#  copying the entire working directory
# COPY package.json .
# COPY package-lock.json .
COPY . .

# Install node_modules
RUN npm install
RUN npm install @material-ui/core
CMD ["npm", "start"]