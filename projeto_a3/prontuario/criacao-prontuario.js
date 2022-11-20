require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const mysql = require('mysql2')

const Paciente = require('../cadastro/models/paciente')



app.get("/criar-prontuario", async (req, res) => {

    console.log("Teste Teste")

    
    const dados_paciente = await Paciente.findAll()

    console.log(dados_paciente)

    return res.json({
        pacientes: dados_paciente,
        mensagem: "OK"
    })

    /*
    const crm = req.body.crm
    const acesso = req.body.tipo_acesso
    const especialidade = req.body.especialidade
    const cpf_medico = req.body.cpf_medico



    console.log(especialidade)
    console.log(crm)
    if (usuario == null){
        return res.status(400).json({
            erro: true,
            mensagem: "Usuário não encontrado! Tente novamente"
        })
    }
    

    if (acesso == "administrador" || acesso == "Administrador" || acesso == "adm" || acesso == "admin"){
       
        if (cpf_medico != null){
            const usuario_medico = await Usuario.findOne({
                attributes: ['tipo_acesso', 'cpf', 'nome', 'crm', 'especialidade'],
                where: {
                    cpf: cpf_medico
                }
            })
            console.log(especialidade)
            console.log(crm)
            

            usuario_medico.update(
                {tipo_acesso: "Médico", crm, especialidade},
                {where: {cpf: cpf_medico}}
            )
           
           
 
 
        } else {
            return res.status(400).json({
                erro: true,
                mensagem: "Mudança não permitida!"
            })
        }
    }    
    */
})






const porta = 9000
app.listen(porta, () => console.log(`Prontuário - Conexão OK, porta: ${porta}`))