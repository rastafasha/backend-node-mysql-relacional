# backend-node-mysql-relacional

comandos: 
1. luego de instalar las dependencias correr en la terminal
iniciar el sequelize para terminar de instalar
npx sequelize-cli init

2.crear bd: npx sequelize-cli db:create

3.crear modelo: npx sequelize-cli model:generate --name Categoria --attributes descripcion:string

4. modificar en los modelos y asignarles sus relaciones como en el ejemplo

5.migrar bd: npx sequelize-cli db:migrate