require('dotenv').config()
const jwt = require('jsonwebtoken')
//const { promisify } = require('util')

module.exports = {
    verificaJWT: async function (req, res, next) {
        //const autorizacao = req.headers.autorization
        // console.log(autorizacao)
        const token = req.headers['token']
        //console.log(token)
        if (!token)
            return res.status(401).json({
                auth: false,
                message: 'Token não encontrado.',
                token
            })

        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err)
                return res.status(500).json({
                    auth: false,
                    message: 'Erro de autenticação do Token',
                });

            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id
            next()
        })
    }
}


