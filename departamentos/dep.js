var selector = document.getElementById('deptoselect');
var botonlimpiar = document.getElementById('btnlimpiar');
var imagen = document.getElementById('deptoimagen');
var nombre = document.getElementById('deptonombre');
var descripcion = document.getElementById('deptodesc');
var cabecera = document.getElementById('deptocab');
var extension = document.getElementById('deptoext');
var poblacion = document.getElementById('deptopob');
var clima = document.getElementById('deptoclima');
var lugar = document.getElementById('deptotur');

var card = document.getElementById('infocard');
card.style.display='none';

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='altav'){
        imagen.src="img/altav.jpg";
        nombre.innerHTML = "Alta Verapaz"
        descripcion.innerHTML="Departamento del norte de Guatemala caracterizado por sus montañas, bosques, ríos, cuevas y abundante vegetación."
        cabecera.innerHTML="Cabecera: Cobán"
        extension.innerHTML="Extensión territorial: 8,686 km²"
        poblacion.innerHTML="Población aproximada: 1.4 millones"
        clima.innerHTML="Clima: Cálido y húmedo"
        lugar.innerHTML="Lugar turístico destacado: Semuc Champey"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='bajav'){
        imagen.src="img/bajav.jpg";
        nombre.innerHTML = "Baja Verapaz"
        descripcion.innerHTML="Departamento de la región central conocido por sus paisajes montañosos, bosques y tradiciones culturales."
        cabecera.innerHTML="Cabecera: Salamá"
        extension.innerHTML="Extensión territorial: 3,124 km²"
        poblacion.innerHTML="Población aproximada: 350 mil"
        clima.innerHTML="Clima: Cálido y templado"
        lugar.innerHTML="Lugar turístico destacado: Biotopo del Quetzal"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='chima'){
        imagen.src="img/chima.jpg";
        nombre.innerHTML = "Chimaltenango"
        descripcion.innerHTML="Departamento del altiplano central con una importante población indígena, agricultura y sitios arqueológicos de origen maya."
        cabecera.innerHTML="Cabecera: Chimaltenango"
        extension.innerHTML="Extensión territorial: 1,979 km²"
        poblacion.innerHTML="Población aproximada: 750 mil"
        clima.innerHTML="Clima: Templado"
        lugar.innerHTML="Lugar turístico destacado: Iximché"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='chiqui'){
        imagen.src="img/chiqui.jpg";
        nombre.innerHTML = "Chiquimula"
        descripcion.innerHTML="Departamento del oriente del país conocido por su actividad comercial y por ser un importante destino de peregrinación religiosa."
        cabecera.innerHTML="Cabecera: Chiquimula"
        extension.innerHTML="Extensión territorial: 2,376 km²"
        poblacion.innerHTML="Población aproximada: 450 mil"
        clima.innerHTML="Clima: Cálido y seco"
        lugar.innerHTML="Lugar turístico destacado: Basílica de Esquipulas"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='progre'){
        imagen.src="img/elprogreso.jpg";
        nombre.innerHTML = "El Progreso"
        descripcion.innerHTML="Departamento de la región nororiental caracterizado por sus paisajes secos, montañas y producción agrícola."
        cabecera.innerHTML="Cabecera: Guastatoya"
        extension.innerHTML="Extensión territorial: 1,922 km²"
        poblacion.innerHTML="Población aproximada: 180 mil"
        clima.innerHTML="Clima: Cálido y seco"
        lugar.innerHTML="Lugar turístico destacado: Sierra de las Minas"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='escuintla'){
        imagen.src="img/escuintla.jpg";
        nombre.innerHTML = "Escuintla"
        descripcion.innerHTML="Departamento de la costa sur con extensas áreas agrícolas, playas, volcanes y paisajes tropicales."
        cabecera.innerHTML="Cabecera: Escuintla"
        extension.innerHTML="Extensión territorial: 4,384 km²"
        poblacion.innerHTML="Población aproximada: 850 mil"
        clima.innerHTML="Clima: Cálido y tropical"
        lugar.innerHTML="Lugar turístico destacado: Volcán de Pacaya"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='guate'){
        imagen.src="img/guate.jpg";
        nombre.innerHTML = "Guatemala"
        descripcion.innerHTML="Departamento donde se encuentra la capital del país y uno de los principales centros políticos, económicos, comerciales y culturales de Guatemala."
        cabecera.innerHTML="Cabecera: Ciudad de Guatemala"
        extension.innerHTML="Extensión territorial: 2,126 km²"
        poblacion.innerHTML="Población aproximada: 3.3 millones"
        clima.innerHTML="Clima: Templado"
        lugar.innerHTML="Lugar turístico destacado: Centro Histórico"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='huehue'){
        imagen.src="img/huehue.jpg";
        nombre.innerHTML = "Huehuetenango"
        descripcion.innerHTML="Departamento del occidente con gran diversidad cultural y geográfica, desde zonas montañosas hasta valles y bosques."
        cabecera.innerHTML="Cabecera: Huehuetenango"
        extension.innerHTML="Extensión territorial: 7,403 km²"
        poblacion.innerHTML="Población aproximada: 1.4 millones"
        clima.innerHTML="Clima: Variado, de templado a frío"
        lugar.innerHTML="Lugar turístico destacado: Laguna Brava"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='izabal'){
        imagen.src="img/izabal.webp";
        nombre.innerHTML = "Izabal"
        descripcion.innerHTML="Departamento del Caribe guatemalteco que combina selvas tropicales, ríos, lagos y una rica diversidad cultural."
        cabecera.innerHTML="Cabecera: Puerto Barrios"
        extension.innerHTML="Extensión territorial: 9,038 km²"
        poblacion.innerHTML="Población aproximada: 500 mil"
        clima.innerHTML="Clima: Cálido y húmedo"
        lugar.innerHTML="Lugar turístico destacado: Livingston"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='jalapa'){
        imagen.src="img/jalapa.webp";
        nombre.innerHTML = "Jalapa"
        descripcion.innerHTML="Departamento del oriente de Guatemala con paisajes montañosos, tierras agrícolas y una diversidad de ecosistemas."
        cabecera.innerHTML="Cabecera: Jalapa"
        extension.innerHTML="Extensión territorial: 2,063 km²"
        poblacion.innerHTML="Población aproximada: 400 mil"
        clima.innerHTML="Clima: Templado"
        lugar.innerHTML="Lugar turístico destacado: Laguna del Hoyo"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='jutiapa'){
        imagen.src="img/jutiapa.jpg";
        nombre.innerHTML = "Jutiapa"
        descripcion.innerHTML="Departamento ubicado en el extremo suroriental del país, conocido por sus zonas agrícolas, montañas y playas del océano Pacífico."
        cabecera.innerHTML="Cabecera: Jutiapa"
        extension.innerHTML="Extensión territorial: 3,216 km²"
        poblacion.innerHTML="Población aproximada: 600 mil"
        clima.innerHTML="Clima: Cálido y seco"
        lugar.innerHTML="Lugar turístico destacado: Playa de la Barra del Jiote"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='peten'){
        imagen.src="img/peten.jpg";
        nombre.innerHTML = "Petén"
        descripcion.innerHTML="El departamento más grande de Guatemala, famoso por sus extensas selvas, sitios arqueológicos mayas y gran biodiversidad."
        cabecera.innerHTML="Cabecera: Flores"
        extension.innerHTML="Extensión territorial: 35,854 km²"
        poblacion.innerHTML="Población aproximada: 650 mil"
        clima.innerHTML="Clima: Cálido y húmedo"
        lugar.innerHTML="Lugar turístico destacado: Parque Nacional Tikal"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='quetza'){
        imagen.src="img/quetzal.webp";
        nombre.innerHTML = "Quetzaltenango"
        descripcion.innerHTML="Departamento del altiplano occidental con una fuerte identidad cultural, ciudades históricas, montañas y volcanes."
        cabecera.innerHTML="Cabecera: Quetzaltenango"
        extension.innerHTML="Extensión territorial: 1,951 km²"
        poblacion.innerHTML="Población aproximada: 950 mil"
        clima.innerHTML="Clima: Frío y templado"
        lugar.innerHTML="Lugar turístico destacado: Fuentes Georginas"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='quiche'){
        imagen.src="img/quiche.jpg";
        nombre.innerHTML = "Quiché"
        descripcion.innerHTML="Departamento del altiplano noroccidental con una importante presencia de pueblos mayas, tradiciones ancestrales y sitios históricos."
        cabecera.innerHTML="Cabecera: Santa Cruz del Quiché"
        extension.innerHTML="Extensión territorial: 8,378 km²"
        poblacion.innerHTML="Población aproximada: 1.1 millones"
        clima.innerHTML="Clima: Templado y frío"
        lugar.innerHTML="Lugar turístico destacado: Chichicastenango"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='reu'){
        imagen.src="img/reu.jpg";
        nombre.innerHTML = "Retalhuleu"
        descripcion.innerHTML="Departamento de la costa sur conocido por su clima tropical, plantaciones, sitios arqueológicos y centros de entretenimiento."
        cabecera.innerHTML="Cabecera: Retalhuleu"
        extension.innerHTML="Extensión territorial: 1,856 km²"
        poblacion.innerHTML="Población aproximada: 400 mil"
        clima.innerHTML="Clima: Cálido y tropical"
        lugar.innerHTML="Lugar turístico destacado: Takalik Abaj"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='saca'){
        imagen.src="img/saca.jpg";
        nombre.innerHTML = "Sacatepéquez"
        descripcion.innerHTML="Departamento del altiplano central reconocido por su arquitectura colonial, tradiciones culturales y hermosos paisajes volcánicos."
        cabecera.innerHTML="Cabecera: Antigua Guatemala"
        extension.innerHTML="Extensión territorial: 465 km²"
        poblacion.innerHTML="Población aproximada: 400 mil"
        clima.innerHTML="Clima: Templado"
        lugar.innerHTML="Lugar turístico destacado: Antigua Guatemala"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='sanm'){
        imagen.src="img/sanm.jpg";
        nombre.innerHTML = "San Marcos"
        descripcion.innerHTML="Departamento del occidente que posee una gran diversidad de climas y paisajes, incluyendo algunas de las montañas y volcanes más altos del país."
        cabecera.innerHTML="Cabecera: San Marcos"
        extension.innerHTML="Extensión territorial: 3,791 km²"
        poblacion.innerHTML="Población aproximada: 1.2 millones"
        clima.innerHTML="Clima: Variado, de cálido a frío"
        lugar.innerHTML="Lugar turístico destacado: Volcán Tajumulco"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='santa'){
        imagen.src="img/santa.jpg";
        nombre.innerHTML = "Santa Rosa"
        descripcion.innerHTML="Departamento de la región suroriental que combina montañas, valles, zonas agrícolas y playas del océano Pacífico."
        cabecera.innerHTML="Cabecera: Cuilapa"
        extension.innerHTML="Extensión territorial: 2,955 km²"
        poblacion.innerHTML="Población aproximada: 400 mil"
        clima.innerHTML="Clima: Cálido y templado"
        lugar.innerHTML="Lugar turístico destacado: Laguna de Ayarza"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='sol'){
        imagen.src="img/solola.jpg";
        nombre.innerHTML = "Sololá"
        descripcion.innerHTML="Departamento del altiplano occidental conocido principalmente por el Lago de Atitlán, sus volcanes y sus comunidades de origen maya."
        cabecera.innerHTML="Cabecera: Sololá"
        extension.innerHTML="Extensión territorial: 1,061 km²"
        poblacion.innerHTML="Población aproximada: 500 mil"
        clima.innerHTML="Clima: Templado"
        lugar.innerHTML="Lugar turístico destacado: Lago de Atitlán"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='suchi'){
        imagen.src="img/suchi.jpg";
        nombre.innerHTML = "Suchitepéquez"
        descripcion.innerHTML="Departamento de la costa sur con tierras fértiles dedicadas a la agricultura y una combinación de paisajes tropicales y montañosos."
        cabecera.innerHTML="Cabecera: Mazatenango"
        extension.innerHTML="Extensión territorial: 2,510 km²"
        poblacion.innerHTML="Población aproximada: 650 mil"
        clima.innerHTML="Clima: Cálido y húmedo"
        lugar.innerHTML="Lugar turístico destacado: Finca Chocolá"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='toto'){
        imagen.src="img/toto.jpg";
        nombre.innerHTML = "Totonicapán"
        descripcion.innerHTML="Departamento del altiplano occidental con una fuerte tradición indígena, bosques de pino y actividades artesanales."
        cabecera.innerHTML="Cabecera: Totonicapán"
        extension.innerHTML="Extensión territorial: 1,061 km²"
        poblacion.innerHTML="Población aproximada: 500 mil"
        clima.innerHTML="Clima: Frío"
        lugar.innerHTML="Lugar turístico destacado: Los Riscos de Momostenango"

        card.style.display = "block";
    }
});

selector.addEventListener('change', function(){
var elegida = selector.value;
    if (elegida==='zaca'){
        imagen.src="img/zacapa.jpg";
        nombre.innerHTML = "Zacapa"
        descripcion.innerHTML="Departamento de la región oriental conocido por su clima cálido, sus valles, montañas y producción agrícola y ganadera."
        cabecera.innerHTML="Cabecera: Zacapa"
        extension.innerHTML="Extensión territorial: 2,690 km²"
        poblacion.innerHTML="Población aproximada: 300 mil"
        clima.innerHTML="Clima: Cálido y seco"
        lugar.innerHTML="Lugar turístico destacado: Sierra de las Minas"

        card.style.display = "block";
    }
});

btnlimpiar.addEventListener("click", function () {
  selector.value = "";
  card.style.display = "none";
});