//Variables
const resultados = document.querySelector("#resultados")
const campos = document.querySelectorAll(".campos")
const marca = document.querySelector(".marca")
const modelo = document.querySelector(".modelo")
const year = document.querySelector(".year")
const color = document.querySelector(".color")
const transmision = document.querySelector(".transmision")
const puertas = document.querySelector(".puertas")
const minimo = document.querySelector(".minimo")
const maximo = document.querySelector(".maximo")
const inicio = document.querySelector(".inicio")
const limpiarFiltros = document.querySelector(".limpiarFiltros")


const anio = new Date().getFullYear()
const nuevoAnio = anio - 10
for(let i = anio; i>= nuevoAnio; i--){
    const nuevoOption = document.createElement("option")
    nuevoOption.textContent = i
    nuevoOption.value = i
    inicio.appendChild(nuevoOption)
}

let baseAutos = {
    marca : "",
    modelo : "",
    year : "",
    color : "",
    transmision : "",
    puertas : "",
    minimo : "",
    maximo : ""
}

filtrarAutos()

//Eventos
marca.addEventListener("change", e => {
    baseAutos.marca = e.target.value
    filtrarMarca(autos)
    filtrarAutos()
})

modelo.addEventListener("change", e => {
    baseAutos.modelo = e.target.value
    filtrarAutos()
    filtrarModelo(autos)
})

year.addEventListener("change", e => {
    baseAutos.year = parseInt(e.target.value)
    filtrarAutos()
    filtrarYear(autos)
})

color.addEventListener("change", e => {
    baseAutos.color = e.target.value
    filtrarAutos()
    filtrarColor(autos)
})

transmision.addEventListener("change", e => {
    baseAutos.transmision = e.target.value
    filtrarAutos()
    filtrarTransmision(autos)
})

puertas.addEventListener("change", e => {
    baseAutos.puertas = parseInt(e.target.value)
    filtrarAutos()
    filtrarPuertas(autos)
})

minimo.addEventListener("change", e => {
    baseAutos.minimo = e.target.value
    filtrarAutos()
    filtrarMinimo(autos)
})

maximo.addEventListener("change", e => {
    baseAutos.maximo = e.target.value
    filtrarAutos()
    filtrarMaximo(autos)
})

limpiarFiltros.addEventListener("click", () => {
    limpiar()
    filtrarAutos()
})


//Funciones
function filtrarAutos(){
    let newAutos = autos.filter(filtrarMarca).filter(filtrarModelo).filter(filtrarYear).filter(filtrarColor).filter(filtrarTransmision).filter(filtrarPuertas).filter(filtrarMinimo).filter(filtrarMaximo)
    limpiarHTML()
    mostrarAutos(newAutos)
}

function mostrarAutos(newAutos){
    if(newAutos.length == 0){
        const p = document.createElement("p")
        p.classList.add("alerta")
        p.textContent = "No se encontraron resultados para los filtros indicados"
        resultados.appendChild(p)
    }else{
        newAutos.forEach(auto => {
            const {marca, modelo, year, color, transmision, puertas, precio} = auto
            const datos = document.createElement("p")
            datos.classList.add("existe")
            datos.textContent = `${marca} ${modelo} - ${year} - Color: ${color} - transmisión: ${transmision} - Puertas: ${puertas} - Precio $: ${precio}`
            resultados.appendChild(datos)
        });
    }

}

function filtrarMarca(auto){
    const {marca} = baseAutos
    if(marca){
        return auto.marca === marca
    }
    return auto
}

function filtrarModelo (auto){
    const {modelo} = baseAutos
    if(modelo){
        return auto.modelo === modelo
    }
    return auto
}

function filtrarYear (auto){
    const {year} = baseAutos
    if(year){
        return auto.year === year
    }
    return auto
}

function filtrarColor (auto){
    const {color} = baseAutos
    if(color){
        return auto.color === color
    }
    return auto
}

function filtrarTransmision (auto){
    const {transmision} = baseAutos
    if(transmision){
        return auto.transmision === transmision
    }
    return auto
}

function filtrarPuertas (auto){
    const {puertas} = baseAutos
    if(puertas){
        return auto.puertas === puertas
    }
    return auto
}

function filtrarMinimo (auto){
    const {minimo} = baseAutos
    if(minimo){
        return auto.precio >= minimo
    }
    return auto
}

function filtrarMaximo (auto){
    const {maximo} = baseAutos
    if(maximo){
        return auto.precio <= maximo
    }
    return auto
}

function limpiarHTML(){
    resultados.innerHTML=` `
}

function limpiar (){
    campos.forEach(element => {
        element.selectedIndex = 0
    })
    baseAutos = []
    newAutos = autos
}