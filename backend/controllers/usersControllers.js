const User = require('../models/users')
const bcryptjs = require('bcryptjs')

const usersControllers = {

  signUpUsers: async (req, res) => {

    let { firstName, lastName, email, password, photoURL, chooseCountry, from } = req.body.userData
    
    try {

      const usuarioExiste = await User.findOne({ email }) //BUSCAR SI EL USUARIO YA EXISTE EN DB

      if (usuarioExiste) {
        console.log(usuarioExiste.from.indexOf(from))/* va buscar en el array(from) el valor que viene desde el formulario */
        if (usuarioExiste.from.indexOf(from) === 0) { //INDEXOF = 0 EL VALOR EXISTE EN EL INDICE EQ A TRUE -1 NO EXITE EQ A FALSE
          res.json({ success: false, from: "signup", message: "you have already done SignUp, please do SignIn" })
        } else { /* el usuario existe en la base de datos pero no se registro de esa manera */
          const contraseñaHasheada = bcryptjs.hashSync(password, 10) /* éncripto la contraseña y los caracteres que deseo que lo haga */
          usuarioExiste.from.push(from)
          usuarioExiste.password.push(contraseñaHasheada) 
          if (from === "form-Signup") {
            //PORSTERIORMENTE AGREGAREMOS LA VERIFICACION DE EMAIL
            await usuarioExiste.save()

            res.json({
              success: true,
              from: "signup", //RESPONDE CON EL TOKEN Y EL NUEVO USUARIO
              message: "We sent you an email to validate, please verify your registration in signUp y and so add it to your methods SignIn" 
            }) 

          } else {
            usuarioExiste.save()

            res.json({
              success: true,
              from: "signup",
              message: "We add " + from + " to your means to carry out signIn"
            })
          }// EN ESTE PUNTO SI EXITE RESPONDE FALSE
        }
      } else {
        //SI EL USUARIO NO ESXITE

        const contraseñaHasheada = bcryptjs.hashSync(password, 10) //LO CREA Y ENCRIPTA LA CONTRASEÑA
        // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
        const nuevoUsuario = await new User({
          firstName,
          lastName,
          email,
          emailVerificado: true,
          password: [contraseñaHasheada],
          photoURL,
          chooseCountry,          
          from: [from],

        })

        //SE LO ASIGNA AL USUARIO NUEVO
        if (from !== "form-Signup") { //SI LA PETICION PROVIENE DE CUENTA GOOGLE
          await nuevoUsuario.save()
          res.json({
            success: true,
            from: "signup",
            message: "Congratulations, your user was created with " + from
          }) // AGREGAMOS MENSAJE DE VERIFICACION

        } else {
          //PASAR EMAIL VERIFICADO A FALSE
          //ENVIARLE EL E MAIL PARA VERIFICAR
          await nuevoUsuario.save()

          res.json({
            success: true,
            from: "signup",
            message: "We sent you an email, please check it and complete your registration,we are waiting for you here"
          }) // AGREGAMOS MENSAJE DE VERIFICACION
        }
      }
    } catch (error) {
      console.log(error)
      res.json({ success: false, message: "We have a problem, try again in a few minutes" }) //CAPTURA EL ERROR
    }
  },

  signInUser: async (req, res) => {

    const { email, password, from } = req.body.logedUser
    try {
      const usuarioExiste = await User.findOne({ email }) /* aqui a través del email busco si el usuario existe */

      if (!usuarioExiste) {// PRIMERO VERIFICA QUE EL USUARIO EXISTA
        res.json({ success: false, message: "You haven't registered yet, do the signUp" })

      } else {    /* el usuario existe */
        if (from !== "form-Signin") { 

          let contraseñaCoincide = usuarioExiste.password.filter(pass => bcryptjs.compareSync(password, pass))/* se compara la contraseña con la que se guarda en la base de daos a través de esté filtro */

          if (contraseñaCoincide.length > 0) { //TERERO VERIFICA CONTRASEÑA

            const userData = {
              firstName: usuarioExiste.firstName,
              email: usuarioExiste.email,
              from: usuarioExiste.from
            }
            await usuarioExiste.save()

            res.json({
              success: true,
              from: from,
              response: { userData },
              message: "Welcome Again " + userData.firstName,
            })

          } else {
            res.json({
              success: false,
              from: from,
              message: "You have not registered with" + from + "you must first do the signUp with " + from
            })
          }
        } else {
          if (usuarioExiste.emailVerificado) {
            let contraseñaCoincide = usuarioExiste.password.filter(pass => bcryptjs.compareSync(password, pass))
            if (contraseñaCoincide.length > 0) {
              const userData = {
                firstName: usuarioExiste.firstName,
                email: usuarioExiste.email,
                photoURL: usuarioExiste.photoURL, 
                from: usuarioExiste.from
              }

              res.json({
                success: true,
                from: from,
                response: { userData },
                message: "Welcome Again " + userData.firstName,
              })
            } else {
              res.json({
                success: false,
                from: from,
                message: "The username or password do not match",
              })
            }
          } else {
            res.json({
              success: false,
              from: from,
              message: "you have not verified your email, please complete the signUp"
            })
          }

        } //SI NO ESTA VERIFICADO
      }

    } catch (error) {
      console.log(error);
      res.json({
        success: false, message: "Something went wrong try again in a few minutes" })
    }
  },
  
  signOutUser: async (req, res) => {
    console.log("ingrese a la función")
    const email = req.body.closeuser
    const user = await User.findOne({ email })
    await user.save()
    res.json(console.log(' Closed session ' + email))
  },

}
module.exports = usersControllers
