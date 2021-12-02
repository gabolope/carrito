const data = [
    {
        "id":1,
        "name":"Super Cabrales Espresso",
        "description":"Exclusivo Blend de Cabrales que conquistó el paladar de los argentinos. Con Características únicas de aroma, cuerpo y sabor, logradas a partir de la exquisita combinación de los mejores granos seleccionados.",
        "category":"Café en Grano Tostado",
        "preparation":"Para preparar un buen café espresso, utilizar la medida justa de café para cada pocillo (6 a 7 gr).",
        "image":"https://www.cabrales.com/wp-content/uploads/2016/06/Super-Cabrales-Espresso-1.jpg",
        "price": 600,
        "stock": 5
    },
    {
        "id":2,
        "name":"Do Cerrado",
        "description":"Blend resultante de la combinación de granos de café arábigos originarios de la región de Do Cerrado: buena acidez, fuertes, aromáticos, nota amarga acentuada; producen una bebida con excelente firmeza y dejo persistente a café.",
        "category":"Café en Grano Tostado",
        "preparation":"Para preparar un buen café espresso, utilizar la medida justa de café para cada pocillo (6 a 7 gr).",
        "image":"https://www.cabrales.com/wp-content/uploads/2016/06/DO_CERRADO_1000-Personalizado.jpg",
        "price": 650,
        "stock": 6
    },
    {
        "id":3,
        "name":"Pedra Azul",
        "description":"Blend de 100% granos arábigos de la región de Cerrado/ Pedra azul (Brasil), se destaca por su intenso aroma y sabor frutal.",
        "preparation":"Para preparar un buen café espresso, utilizar la medida justa de café para cada pocillo (6 a 7 gr).",
        "category":"Café en Grano Tostado",
        "image":"https://www.cabrales.com/wp-content/uploads/2017/01/nuevo_pedra_azul_x_1000g.jpg",
        "price": 700,
        "stock": 7
    },
    {
        "id":4,
        "name":"Perú",
        "description":"Auténtico café de Perú. Granos 100% arábigos de las variedades: typica, bourbon y caturra, libre de defectos. Cosechados en la zona de Cajamarca, entre abril y agosto, a 1200 m s.n.m con un proceso de secado en cama solar. Este café permite obtener una bebida de cuerpo balanceado, acidez media en boca con sabor dulce y chocolate. Presenta un aroma a frutas cítricas con notas de caña, mandarina y miel. La marca país Perú avala que este café del Perú es especial ya que tiene características inusuales, singulares y autóctonas que reflejan los encantos cautivadores de este país.",
        "preparation":"Para preparar un buen café espresso, utilizar la medida justa de café para cada pocillo (6 a 7 gr).",
        "category":"Café en Grano Tostado",
        "image":"https://www.cabrales.com/wp-content/uploads/2020/11/cabrales-peru-1000-gr.jpg",
        "price": 700,
        "stock": 8
    }
]

const getProducts = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(data)
    }, 2000)
}) //Promesa escrita a mano, tiene un delay artificial de 2 segundos

export default getProducts