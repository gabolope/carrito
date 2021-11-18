const data = [
    {
        "id":1,
        "name":"Super Cabrales Espresso",
        "description":"Exclusivo Blend de Cabrales que conquistó el paladar de los argentinos. Con Características únicas de aroma, cuerpo y sabor, logradas a partir de la exquisita combinación de los mejores granos seleccionados.",
        "category":"Café en Grano Tostado",
        "preparation":"Para preparar un buen café espresso, utilizar la medida justa de café para cada pocillo (6 a 7 gr).",
        "image":"https://www.cabrales.com/wp-content/uploads/2016/06/Super-Cabrales-Espresso-1.jpg",
    },
    {
        "id":2,
        "name":"Do Cerrado",
        "description":"Blend resultante de la combinación de granos de café arábigos originarios de la región de Do Cerrado: buena acidez, fuertes, aromáticos, nota amarga acentuada; producen una bebida con excelente firmeza y dejo persistente a café.",
        "category":"Café en Grano Tostado",
        "preparation":"Para preparar un buen café espresso, utilizar la medida justa de café para cada pocillo (6 a 7 gr).",
        "image":"https://www.cabrales.com/wp-content/uploads/2016/06/DO_CERRADO_1000-Personalizado.jpg",
    },
    {
        "id":3,
        "name":"Pedra Azul",
        "description":"Blend de 100% granos arábigos de la región de Cerrado/ Pedra azul (Brasil), se destaca por su intenso aroma y sabor frutal.",
        "preparation":"Para preparar un buen café espresso, utilizar la medida justa de café para cada pocillo (6 a 7 gr).",
        "category":"Café en Grano Tostado",
        "image":"https://www.cabrales.com/wp-content/uploads/2017/01/nuevo_pedra_azul_x_1000g.jpg"
    }
]

const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 2000)
}) //Promesa escrita a mano, tiene un delay artificial de 2 segundos

export default getProducts