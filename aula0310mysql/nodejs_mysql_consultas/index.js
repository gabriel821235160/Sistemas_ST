const express = require("express");
const mysql2 = require("mysql2");
const app = express();
app.use(express.json());

//GET http://localhost:3000/medicos
/* 
    [
        {
            crm: 12345
            nome: José
        },
        {
            crm: de um outro medico
            nome: de um outro medico
        }
    ]
 */
app.get('/medicos', (req, res) => {
  //1- abrir uma conexão com MySQL
  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'aula0310',
    password: 'Ja921600'
  });
  //2 - Executar o comando SQL
  connection.query('select * from tb_medico', (err, results, fields) => {
    console.log('err', err);
    console.log('results', results);
    console.log('fields', fields);
    //3- Devoler o resutado utilizando uma função callback
    res.send('ok');
  });
});
const porta = 3000;
app.listen(porta, () => console.log(`Executando. Porta ${porta}`));
