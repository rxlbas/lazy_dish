# lazy_dish
A full stack app to help people decide what to eat for today base on the ingredients they have. 
## Table of Contents
1. [Installation](#installation)
2. [Tech-Stack](#tech-stack)
3. [Routes](#routes)

## Installation
  Navigate to the root directory and run the following commands in terminal
  ```npm
  npm install
  npm start
  ```
## Tech-Stack
![Mongodb](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) 
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

## Routes
  |Request Type|Endpoint|Status|
  |---|---|---|
  |GET|/lazydish|200
  |POST|/lazydish|201

## Optimization
- Create Index for DB to improve query time
- Using Load Balancer (Least Connection) to increase active Visual Users, decrease error rate and latency.
