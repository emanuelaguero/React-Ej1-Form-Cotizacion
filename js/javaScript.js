window.addEventListener("load", () => {

    const nombre = document.querySelector("#nombre")
    const formCotizacion = document.querySelector("#formCotizacion")
    const apellido = document.querySelector("#apellido")
    const dni = document.querySelector("#dni")
    const email = document.querySelector("#email")
    const telefono = document.querySelector("#telefono")
    const tipoSeguro = document.querySelector("#tipoSeguro")
   

    const banderaNombre=false,banderaApellido=false, banderaDni=false, banderaEmail=false,banderaTelefono = false
    
    const s=2, v =2
    tipoSeguro.innerHTML = "Básico: 500"
    cambiarValor = (v) => {
    
        tipoSeguro.innerHTML = v === "500" ? "Básico: " + v : v === "1000" ? "Intermedio: " + v : "Avanzado: " + v
        "Básico: " + v
    }

})




function formCotizacion(event){
    event.preventDefault()
    const errorNombre = document.querySelector(".error-nombre")
    const errorApellido = document.querySelector(".error-apellido")
    const errorDni = document.querySelector(".error-dni")
    const errorEmail = document.querySelector(".error-email")
    const errorTelefono = document.querySelector(".error-telefono")
    const nombreValor = nombre.value.trim()
    const apellidoValor = apellido.value.trim()
    const dniValor = dni.value.trim()
    const emailValor = email.value.trim()
    const telefonoValor = telefono.value.trim()
    
    const msjEnviado = document.querySelector(".msj-enviado")

    function soloLetras(Valor){
        return(/^[A-Za-z\s]+$/.test(Valor))
    }
        
    
    if (!nombreValor) {
        nombre.style.border = "2px solid red"
        nombre.style.background = "#F1D4D4"
        errorNombre.innerHTML = "Debe Ingresar Nombre"

        banderaNombre = false
    } else if( soloLetras(nombreValor)) {

        nombre.style.border = ""
        nombre.style.background = ""
        errorNombre.innerHTML = ""
        banderaNombre = true


    }else{
        nombre.style.border = "2px solid red"
        nombre.style.background = "#F1D4D4"
        errorNombre.innerHTML = "No debe Ingresar Numeros"
        banderaNombre = false
    }

    if(!apellidoValor){
        apellido.style.border="2px solid red"
        apellido.style.background="#F1D4D4"
        errorApellido.innerHTML="Debe Ingresar Apellido"
        banderaApellido=false
    }else if (soloLetras(apellidoValor)){
      
        apellido.style.border=""
        apellido.style.background=""
        errorApellido.innerHTML=""
        banderaApellido = true
    }else{
        apellido.style.border="2px solid red"
        apellido.style.background="#F1D4D4"
        errorApellido.innerHTML="No debe Ingresar Numeros"
        banderaApellido=false

    }

    if(!dniValor){
       
        dni.style.border="2px solid red"
        dni.style.background="#F1D4D4"
        errorDni.innerHTML="Debe Ingresar Dni"
        banderaDni=false
    }else if(dniValor.length>7&&dniValor.length<9){
      
        dni.style.border=""
        dni.style.background=""
        errorDni.innerHTML=""
        banderaDni = true
        
    }else{
      
        dni.style.border="2px solid red"
        dni.style.background="#F1D4D4"
        errorDni.innerHTML="Debe Ingresar un valor de entre 7 y 8 digitos"
        banderaDni=false

        
    }

    function isValidEmail(emailValor) { 
        return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(emailValor); 
      }
    

    if(!emailValor){
       
        email.style.border="2px solid red"
        email.style.background="#F1D4D4"
        errorEmail.innerHTML="Debe Ingresar Email"
        banderaEmail=false
    }else if(isValidEmail(emailValor)){
       
        email.style.border=""
        email.style.background=""
        errorEmail.innerHTML=""
        banderaEmail = true
        
    }else{
       
        email.style.border="2px solid red"
        email.style.background="#F1D4D4"
        errorEmail.innerHTML="Debe Ingresar un Email Valido"
        banderaEmail=false

        
    }

    if(!telefonoValor){
       
        telefono.style.border="2px solid red"
        telefono.style.background="#F1D4D4"
        errorTelefono.innerHTML="Debe Ingresar un Telefono"
        banderaTelefono=false
    }else if(telefonoValor.length>6){
      
        telefono.style.border=""
        telefono.style.background=""
        errorTelefono.innerHTML=""
        banderaTelefono = true
        
    }else{
      
        telefono.style.border="2px solid red"
        telefono.style.background="#F1D4D4"
        errorTelefono.innerHTML="Debe Ingresar un numero mayor 6"
        banderaTelefono=false

        
    }

    


    if (banderaNombre&&banderaApellido&&banderaDni&&banderaEmail&&banderaTelefono) {
        msjEnviado.innerHTML = "Formulario Enviado....."
    } else {
        msjEnviado.innerHTML = ""
    }



}





















