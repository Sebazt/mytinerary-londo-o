const User = require('../models/users')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto');
const nodemailer = require('nodemailer'); /* permite hacer envios desde node(backend) */
const jwt = require('jsonwebtoken')

const sendEmail = async (email, uniqueString) => {
  const transporter = nodemailer.createTransport({ //DEFINIMOS EL TRASPORTE UTILIZANDO NODEMAILER
    host: 'smtp.gmail.com',         //DEFINIMOS LO PARAMETROS NECESARIOS
    port: 465,
    secure: true,
    auth: {
      user: "mytinerary10@gmail.com",    //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE
      pass: "Sebast10?"                        //COREO ELECTRONICO, CONFIGURAR CUAENTAS PARA PERMIR EL USO DE APPS
    }                                           //CONFIGURACIONES DE GMAIL
  })

  // EN ESTA SECCION LOS PARAMETROS DEL MAIL 
  let sender = "mytinerary10@gmail.com"
  let mailOptions = {
    from: sender,    //DE QUIEN
    to: email,       //A QUIEN
    subject: "User email verification", //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
    html: `  
        <div >
        <h1 style="color:#006d77">Press<a href=http://localhost:4000/api/verify/${uniqueString}> here</a> for confirm your email, welcome and thanks you. </h1>
        </div>
        `
  };
  await transporter.sendMail(mailOptions, function (error, response) { //SE REALIZA EL ENVIO
    if (error) { console.log(error) }
    else {
      console.log("Mensaje enviado")

    }
  })
}


const usersControllers = {

  verifyEmail: async (req, res) => {

    const { uniqueString } = req.params; //EXTRAE EL EL STRING UNICO DEL LINK

    const user = await User.findOne({ uniqueString: uniqueString });
    console.log(user) //BUSCA AL USUARIO CORRESPONDIENTE AL LINK
    if (user) {
      user.emailVerificado = true //COLOCA EL CAMPO emailVerified en true
      await user.save()
      res.redirect("http://localhost:3000/signin") //REDIRECCIONA AL USUARIO A UNA RUTA DEFINIDA
      //return  res.json({success:true, response:"Su email se ha verificado correctamente"})
    }
    else { res.json({ success: false, response: "Your email has not been verified" }) }
  },

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
            usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex');
            await usuarioExiste.save() /* el mét. random trae 15 car. aleatoria/ en hexa */
            await sendEmail(email, usuarioExiste.uniqueString) /* llama a la fun. encargada de enviar correo electronico */
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
          password: [contraseñaHasheada],
          photoURL,
          chooseCountry,          
          uniqueString: crypto.randomBytes(15).toString('hex'),
          emailVerificado: false,
          from: [from]
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
          await sendEmail(email, nuevoUsuario.uniqueString)

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
              id:usuarioExiste._id,
              firstName: usuarioExiste.firstName,
              email: usuarioExiste.email,
              from: usuarioExiste.from
            }
            await usuarioExiste.save()
            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 })

            res.json({
              success: true,
              from: from,
              response: {token, userData },
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
                id: usuarioExiste._id,
                firstName: usuarioExiste.firstName,
                email: usuarioExiste.email,
                photoURL: usuarioExiste.photoURL,
                from: usuarioExiste.from
              }
              const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 })

              res.json({
                success: true,
                from: from,
                response: {token, userData },
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
        success: false, message: "Something went wrong try again in a few minutes"
      })
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
