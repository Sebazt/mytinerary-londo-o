const joi = require('joi')

const validator = (req, res, next) => {
  const schema = joi.object({
    firstName: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
      'string.min': 'El NOMBRE debe contener mas de 2 caracteres',
      'string.max': "El nombre debe contener como maximo 20 caracteres"
    }),
    lastName: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
      'string.min': 'El NOMBRE debe contener mas de 2 caracteres',
      'string.max': "El nombre debe contener como maximo 20 caracteres"
    }),

    email: joi.string().email({ minDomainSegments: 2 }).required().messages({
      'string.email': 'Formato incorrecto de email'
    }),
    password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
      'string.min': 'El password debe contener minimo 8 caracteres y contener mayuscula, minuscula y numero',
      'string.pattern': "El password debe ser alphanumerico y contener un numero"
    }),
    photoURL: joi.string().min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
      'string.min': 'El NOMBRE debe contener mas de 2 caracteres',
      'string.max': "El nombre debe contener como maximo 20 caracteres"
    }),
    chooseCountry: joi.string().min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
      'string.min': 'El NOMBRE debe contener mas de 2 caracteres',
      'string.max': "El nombre debe contener como maximo 20 caracteres"
    }),

    from: joi.string()
  })

  const validation = schema.validate(req.body.userData, { abortEarly: false })

  if (validation.error) {

    return res.json({ success: false, from: "validator", message: validation.error.details })
  }

  next()


}

module.exports = validator