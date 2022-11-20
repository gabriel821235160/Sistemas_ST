require('dotenv').config()
const express = require('express')
const cors = require("cors");
const app = express()
//const { Sequelize } = require('sequelize')

const session = require('express-session')
const mysql = require('mysql2')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//const Usuario = require('../prontuario/models/usuario')

const Paciente = require('././models/paciente')
const Medico = require('././models/medico')
const Funcionario = require('././models/funcionario')
const Administrador = require('././models/admin')


app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    app.use(cors());
    next();
  });

//fazer com que um adm seja criado assim que rodar o servidor


// ------CADASTRAR paciente------ FUNCIONANDO!!
app.post("/cadastro-paciente", async (req, res) => {

    const dados = req.body

    //responsável por encriptar a senha:
    //dados.senha = await bcrypt.hash(dados.senha, 7)

    await Paciente.create(dados)
        .then(() => {
            return res.json({
                erro: false,
                senha: dados.senha,
                mensagem: "Paciente cadastrado!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Paciente não cadastrado!"
            })
        })
})

// ------CADASTRAR médico------ FUNCIONANDO!!
app.post("/cadastro-medico", async (req, res) => {

    const dados = req.body

    //responsável por encriptar a senha:
    //dados.senha = await bcrypt.hash(dados.senha, 7)


    await Medico.create(dados)
        .then(() => {
            return res.json({
                erro: false,
                senha: dados.senha,
                mensagem: "Médico cadastrado!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Médico não cadastrado!"
            })
        })
})


// ------CADASTRAR funcionário------ FUNCIONANDO!!
app.post("/cadastro-funcionario", async (req, res) => {

    const dados = req.body

    //responsável por encriptar a senha:
    //dados.senha = await bcrypt.hash(dados.senha, 7)

    await Funcionario.create(dados)
        .then(() => {
            return res.json({
                erro: false,
                senha: dados.senha,
                mensagem: "Funcionário cadastrado!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Funcionário não cadastrado!"
            })
        })
})


// ------CADASTRAR paciente------ 
app.post("/cadastro-paciente", async (req, res) => {

    const dados = req.body

    //responsável por encriptar a senha:
    //dados.senha = await bcrypt.hash(dados.senha, 7)

    await Paciente.create(dados)
        .then(() => {
            return res.json({
                erro: false,
                senha: dados.senha,
                mensagem: "Paciente cadastrado!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Paciente não cadastrado!"
            })
        })
})







//// ------AUTENTICAÇÃO de usuário------ FUNCIONANDO!!
app.post("/logar", async (req, res) => {
    const usuario_medico = await Medico.findOne({
        attributes: ['nome', 'senha', 'tipo_acesso'],
        where: {
            cpf: req.body.cpf
        },
    });

    const usuario_funcionario = await Funcionario.findOne({
        attributes: ['nome', 'senha', 'tipo_acesso'],
        where: {
            cpf: req.body.cpf
        },
    });

    const usuario_administrador = await Administrador.findOne({
        attributes: ['nome', 'senha', 'tipo_acesso'],
        where: {
            cpf: req.body.cpf
        },
    });


    if (usuario_administrador != null) {
        var usuario = usuario_administrador
    } else if (usuario_medico != null){
        var usuario = usuario_medico
    }else if (usuario_funcionario != null){
        var usuario = usuario_funcionario
    }else {
        return res.status(400).json({
            erro: true,
            mensagem: "CPF ou senha incorretos! (usuário não encontrado)"
        })
    }
    console.log("vai corithians")
    console.log(usuario.nome)
    console.log(usuario.tipo_acesso)





    if (!(req.body.senha === usuario.senha)) {
        return res.status(400).json({
            erro: true,
            mensagem: "Usuário ou senha incorretos! (Senha incorreta)"
        })
    }

    //é uma "var" porque o valor pode ser alterado
    //deve ser informado a primary key, o valor está como 1 pois no momento não tem nenhum outro
    //já o "sorvete0101" é o segredo, teoricamente é algo "único".

    //var token = jwt.sign({cpf: 1}, "sorvete0101") 

    /*
    if(req.body.senha !== usuario.senha){
        return res.status(400).json({
            erro: true,
            mensagem: "Usuário ou senha incorretos! Senha inválida"
        })
    }
    */

    return res.json({
        erro: false,
        acesso: `${usuario.tipo_acesso}`,
        mensagem: `Login realizado! - ${usuario.tipo_acesso}`
    })

})


app.get('/pacientes', async (req, res) => {

    const pacientes = await Paciente.findAll()

    //console.log(pacientes.every(paciente => pacientes instanceof Paciente))
    console.log("Pacientes: ", JSON.stringify(pacientes, null, 2))

    return res.json({
        pacientes: pacientes,
        mensagem: "OK"
    })

})






const porta = 8000
app.listen(porta, () => console.log(`Cadastro - Conexão OK, porta: ${porta}`))