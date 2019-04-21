const fs = require('fs');
const opciones = {
    id: {
        demand: true,
        alias: 'i'
    }, 
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'x'
    }
};

let cursos = [{
    id: "1",
    nombre: "Node.JS",
    duracion: 32,
    valor: 0
},

{
    id: "2",
    nombre: "Ingles",
    duracion: 64,
    valor: 200000,
},

{
    id: "3",
    nombre: "Bolsa de valores",
    duracion: 32,
    valor: 150000
}];

let crearArchivo = (argv) => {
    let cursosid = cursos.find(cursos => cursos.id == argv.i);
    if(cursosid) {
        texto = "el estudiante " + argv.n + "\n" +
        "con cedula " + argv.x + "\n" + 
        "se ha matriculado en el curso llamado " + cursos[argv.i-1].nombre + "\n" + 
        "tiene una duracion de " + cursos[argv.i-1].duracion + " horas y un valor de " + 
        cursos[argv.i-1].valor + " pesos"

        fs.writeFile("inscripcion.txt", texto, (err) => {
            if(err) throw (err);
            console.log("se ha creado el archivo")
        });
    }
    else {
        console.log("ha ingresado un id que no corresponde a ningún curso");
        setTimeout(function(){console.log("El curso se llama " + cursos[0].nombre + ", " + "tiene una duración de " + 
                cursos[0].duracion + " horas y un valor de " + cursos[0].valor + " pesos");
                
}, 2000);
setTimeout(function(){console.log("El curso se llama " + cursos[1].nombre + ", " + "tiene una duración de " + 
                cursos[1].duracion + " horas y un valor de " + cursos[1].valor + " pesos");
                
}, 4000);
setTimeout(function(){console.log("El curso se llama " + cursos[2].nombre + ", " + "tiene una duración de " + 
                cursos[2].duracion + " horas y un valor de " + cursos[2].valor + " pesos");
                
}, 6000);
    }
}

const argv = require('yargs')
        .command("inscribir", "inscribirme en un curso", opciones)
        .argv

if(argv.nombre){
crearArchivo(argv);
}
else{
    setTimeout(function(){console.log("El curso se llama " + cursos[0].nombre + ", " + "tiene una duración de " + 
    cursos[0].duracion + " horas y un valor de " + cursos[0].valor + " pesos");
    
}, 2000);
setTimeout(function(){console.log("El curso se llama " + cursos[1].nombre + ", " + "tiene una duración de " + 
    cursos[1].duracion + " horas y un valor de " + cursos[1].valor + " pesos");
    
}, 4000);
setTimeout(function(){console.log("El curso se llama " + cursos[2].nombre + ", " + "tiene una duración de " + 
    cursos[2].duracion + " horas y un valor de " + cursos[2].valor + " pesos");
    
}, 6000);
}