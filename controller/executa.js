const express = require('express')
const Calculadora = require('../model/calculo')
const resultado = express.Router()

resultado.post('/', (req, res) => {
    const { altura, comprimento, largura } = req.body
    const Volume = Calculadora.Volume(
        parseFloat(altura), parseFloat(comprimento), parseFloat(largura))
    res.send(`O volume é de ${Volume}`)
})

module.exports = resultado