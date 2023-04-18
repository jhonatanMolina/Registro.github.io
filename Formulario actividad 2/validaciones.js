let usuarios=[
    {cedula:"1045699898",nombre:"andres", apellido:"ayala", pais:"colombia", ciudad:"barranquilla", direccion:"calle 3a #22-88", edad:"22",telefono:"12345678"},
    {cedula:"15416515",nombre:"jhonatan",apellido:"Molina",pais:"colombia",ciudad:"medellin",direccion:"calle 4 #52-2",edad:"45",telefono:"3045897878"},
    {cedula:"123456789",nombre:"juancho",apellido:"rodriguez",pais:"eeuu",ciudad:"miami",direccion:"calle 100 #45-78",edad:"17",telefono:"5558989"}
]

let tbody=document.getElementById("cTabla")
let contenido=""


const listar=()=>{
    let tbody=document.getElementById("cTabla")
    let contenido=""
   for(let i=0;i<usuarios.length;i++){
        contenido+="<tr><td>"+usuarios[i].cedula+
        "</td><td>"+usuarios[i].nombre+"</td><td>"
        +usuarios[i].apellido+"</td><td>"
        +usuarios[i].pais+"</td><td>"
        +usuarios[i].ciudad+
        "</td><td>"+usuarios[i].direccion+
        "</td><td>"+usuarios[i].edad+
        "</td><td>"+usuarios[i].telefono+"</td></tr>"
   }
    tbody.innerHTML=contenido

    
}

const registrar=()=>{

      const cedula=document.getElementById('cedula').value;
    const existingUser = usuarios.find(user => user.cedula === cedula);
    if(existingUser){
        alert('La cedula ya está registrada');
        return;
    }
    const nombre=document.getElementById('nombre').value
    const apellido=document.getElementById('apellido').value
    const pais=document.getElementById('pais').value
    const ciudad=document.getElementById('ciudad').value 
    const direccion=document.getElementById('direccion').value
    const edad=document.getElementById('edad').value
    const telefono=document.getElementById('telefono').value
    // if(!cedula ||!nombre || !apellido || !direccion ||!pais ||!ciudad ||!edad ||!telefono){
    //     alert('Ingrese los datos');
    //     return
    // }
    if(!cedula){
        alert('Por favor ingrese el cedula')
        return
    }if(!nombre){
        alert("ingrese el nombre")
        return 
    }if(!apellido){
        alert("ingrese el apellido")
        return 
    }if(!pais){
        alert("ingrese el pais")
        return 
    }if(!ciudad){
        alert("ingrese la ciudad")
        return 
    }if(!direccion){
        alert("ingrese la direccion")
        return 
    }if(!edad){
        alert("ingrese la edad")
        return 

    }if(!telefono){
        alert("ingrese el telefono")
        return 
    }

    tbody.innerHTML+="<tr><td>"+cedula+"</td><td>"+nombre+"</td><td>"+apellido+"</td><td>"+pais+"</td><td>"+ciudad+"</td><td>"+direccion+"</td><td>"+edad+"</td><td>"+telefono+"</td></tr>"
    const nuevo={cedula:cedula,nombre:nombre,apellido:apellido,pais:pais,ciudad:ciudad,direccion:direccion,edad:edad,telefono:telefono}
    usuarios.push(nuevo)
}
