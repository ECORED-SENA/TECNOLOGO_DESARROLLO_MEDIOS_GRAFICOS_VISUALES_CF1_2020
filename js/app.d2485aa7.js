(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(a);while(d.length)d.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{"chunk-0206bfa0":"3432a2e0","chunk-04b93936":"a5290582","chunk-0cfca828":"2179ef27","chunk-13303073":"0f71ea35","chunk-13a6037e":"c277963e","chunk-1479a341":"f9240b08","chunk-1fb07a61":"40e731d6","chunk-2c06842c":"adac3e0f","chunk-2d208d90":"778204cf","chunk-2d21d0e2":"819c1ee4","chunk-2d22c123":"1fa49e35","chunk-2e80bb9a":"9ec4b4b9","chunk-3c94cd2f":"69791e32","chunk-4cdd78c0":"919bbd3f","chunk-515a8379":"d1353d2a","chunk-522cec8c":"63c6e50b","chunk-53ccb27e":"85f31383","chunk-59974754":"e59cc118","chunk-7432e4d4":"f60d41e6","chunk-766a929b":"1213377d","chunk-839300a6":"d96254ee","chunk-c796899c":"74a53e14",comple:"33ad31ff",creditos:"b5d624f3",glosario:"9cde01cc",intro:"10b1a41f",referencias:"52ac1c37",tema1:"3f1547ed",tema2:"06031479",tema3:"ae68bcd7"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-3c94cd2f":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-7432e4d4":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3c94cd2f":"1dbe8d4a","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"905aabe6","chunk-522cec8c":"99a35118","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"ac280f3a","chunk-7432e4d4":"99a35118","chunk-766a929b":"090da494","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"c0789c1a",creditos:"0001902f",glosario:"df5c54da",intro:"0e433876",referencias:"a9bed263",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],f.parentNode.removeChild(f),n(t)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var f=u;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,s=(n("cf25"),n("2877")),l=Object(s["a"])(c,i,r,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),f=n("ae58"),m=n("7e58");o["a"].use(d["a"]);var p=new d["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=p,g=n("1c2c"),b=(n("becf"),n("7b17"),n("ab8b"),n("a3a0"),n("4bc7"),n("78df"),{global:{componenteFormativo:"Diseño gráfico",descripcionCurso:"En un sentido amplio, el arte hace referencia a cualquier actividad que desarrolla el ser humano y que recurre a emociones y al intelecto para crear obras con características estéticas y que se expresan en un lenguaje universal; el arte abarca distintos  ámbitos como la escultura, la pintura, la arquitectura, entre otras expresiones artísticas que han ido evolucionando a lo largo de la historia de la humanidad.",imagenBannerPrincipal:n("bce2"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Definición e historia del diseño gráfico",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Arte vs diseño",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Historia del arte",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Exponentes, movimientos y tendencias del diseño",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Diseño básico",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Brief",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Tipos de brief y sus elementos",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Análisis e interpretación de la información",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Diseño, creatividad e innovación",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Gestión de proyectos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Identificar los requerimientos",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Fases y metodologías de programación de proyectos",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Recursos",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Seguimiento",hash:"t_3_4"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Antica-editions (s.f.). Par le paquebot L Atlantique. [Figura]",link:"https://www.antica-editions.com/fr/index.php?id_product=166&controller=product"},{referencia:"Cartwright, M. (2014). La piedra de Rosetta. En ancient.eu. ",link:"https://www.ancient.eu/trans/es/1-12408/la-piedra-de-rosetta/"},{referencia:"Castro, J. (2014). Urbanismo y arquitectura de Egipto. ",link:"https://es.slideshare.net/jonathan823/urbanismo-y-arquitectura-de-egipto"},{referencia:"Coelho, F. (2019). Retroalimentación. En Significados.com",link:"https://www.significados.com/retroalimentacion/"},{referencia:"Diccionario etimológico. (2020). Imagen. En diccionario etimológico.",link:"http://etimologias.dechile.net/?imagen#:~:text=La%20palabra%20%22imagen%22%20viene%20del,imitaci%C3%B3n%22%20de%20la%20figura%20real."},{referencia:"Diez, G y Parra, R. (2015). Mucho más sobre Bauhaus.",link:"https://issuu.com/gabrieladiez/docs/bauhause"},{referencia:"Diseño gráfico. (s.f.). La forma y los elementos conceptuales del diseño.",link:"https://www.apadisenografico.com/la-forma-elemento-conceptual-del-diseno/"},{referencia:"Ecured (s.f.). Saul Bass. [Figura].",link:"https://www.ecured.cu/Saul_Bass"},{referencia:"Enciclopedia. (2010). Arte del antiguo Egipto.",link:"http://enciclopedia.us.es/index.php/Arte_del_Antiguo_Egipto"},{referencia:"Godoy, J. (2009). Cuadernos del diseño básico, contraste.",link:"https://issuu.com/azulcero/docs/contraste/4"},{referencia:"Godoy, J. (2009). Cuadernos del diseño básico, la radiación.",link:"https://issuu.com/azulcero/docs/la_radiacion/2"},{referencia:"Lexico. (s.f.). Color. En Lexico.com.",link:"https://www.lexico.com/es/definicion/color"},{referencia:"Lozano, I (s.f.). Los 5 elementos claves para un mensaje efectivo.",link:"https://blog.locutora.org/los-5-elementos-clave-para-crear-un-mensaje-efectivo/"},{referencia:"OBS business school. (s.f.). Seguimiento de proyectos, una herramienta infalible para el control de la empresa.",link:"https://obsbusiness.school/es/blog-investigacion/sistemas-y-operaciones/seguimiento-de-proyectos-una-herramienta-infalible-para-el-control-de-la-empresa"},{referencia:"Real Académica Española. (s.f.). Simetría. En el diccionario de la lengua española.",link:"https://dle.rae.es/simetr%C3%ADa"},{referencia:"Reizenstein, R. (2004). Cliente. En Enciclopedia de la gestión sanitaria.",link:"https://sk.sagepub.com/reference/healthcaremanagement/n176.xml"},{referencia:"Ruiz, L. (2019). El padre del diseño gráfico moderno, Paul Rand. [Figura].",link:"https://www.enfoquegaussiano.com/el-padre-del-diseno-grafico-moderno-paul-rand/#"},{referencia:"Uriarte, J. (2020). Resumen y características paleolítico.",link:"https://www.caracteristicas.co/paleolitico/"},{referencia:"Wikiart. (s.f.). Cassandre. [Figura].",link:"https://www.wikiart.org/es/cassandre"},{referencia:"Wikipedia. (2020). Ilustración Walter Gropius. [Figura].",link:"https://es.wikipedia.org/wiki/Walter_Gropius"},{referencia:"Wong, W. (1991). Fundamentos del diseño bi- y tri-dimensional.",link:"https://centroculturalhaedo.edu.ar/cch/actualizacion_permanente/Fundamentos%20del%20Diseno%20Bidimensional%20y%20tridimensional,%20Wucius%20Wong.pdf"}],glosario:[{termino:"Axial",significado:"término utilizado para hacer referencia a la simetría alrededor del eje."},{termino:"Escorzo",significado:"técnica que permite percibir una sensación de profundidad en una obra."},{termino:"Feedback",significado:"término en inglés que significa retroalimentación, y se entiende como la respuesta u opinión que da un interlocutor, a partir de la información recibida por parte del emisor."},{termino:"Gárgola",significado:"son figuras mitológicas, en forma de animales o humanos, utilizadas en iglesias y catedrales como objetos decorativos o también para drenajes de agua, un estilo artístico de la edad media, especialmente en el arte gótico."},{termino:"Helenista",significado:"persona instruida en la lengua, cultura y literatura griega."},{termino:"Ortogonal",significado:"se emplea para hacer referencia que está en ángulo recto, ángulo de 90º."},{termino:"Polis",significado:"hace referencia a las ciudades-estado en la antigua Grecia, territorios independientes, gobernados de manera autónoma."},{termino:"Rosetta",significado:"“la piedra de Rosetta es una estela incompleta de granodiorita gris y rosa que data del 196 a. C., que presenta un decreto sacerdotal sobre el rey Ptolomeo V de Egipto. El texto está en tres versiones diferentes: jeroglíficos, escritura demótica y griego, cosa que ayudó inmensamente a descifrar por fin los jeroglíficos egipcios” (Cartwright, 2014)."},{termino:"Simetría",significado:"según el diccionario de la Real Academia Española – RAE (s.f.). “es correspondencia exacta en forma, tamaño y posición de las partes de un todo”."},{termino:"Target",significado:"es un término inglés, que no forma parte del diccionario de la RAE, se emplea en al campo de la publicidad para designar al público objetivo o nicho de mercado al cual se destinará una campaña, producto o servicio."}],complementario:[{texto:"Wong, W. (1991). Fundamentos deldiseño bi- y tri-dimensional.",tipo:"Libro PDF",link:"https://centroculturalhaedo.edu.ar/cch/actualizacion_permanente/Fundamentos%20del%20Diseno%20Bidimensional%20y%20tridimensional,%20Wucius%20Wong.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Guillermo Eduardo González Tarazona",cargo:"Instructor",centro:"Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital"},{nombre:"Javier Enrique Santana",cargo:"Experto temático",centro:"Centro de Gestión Industrial – Regional Distrito Capital"},{nombre:"Dayra Maritza Paz Calderón",cargo:"Diseñadora y Evaluadora Instruccional",centro:"Centro de Diseño y Metrología – Regional Distrito Capital"},{nombre:"Jhana Johanna Bustillo Ardila",cargo:"Revisión de estilo",centro:"Centro Industrial del Diseño y la Manufactura – Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Juan Carlos Tapias Rueda",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Zuleidy María Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Daniela Muñoz Bedoya",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Adriana Marcela Suárez Eljure",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Veimar Celis Mélendez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=b;var v=n("9224");o["a"].prototype.$package=v,o["a"].config.productionTip=!1,o["a"].directive("child",{bind:function(e,a){e.appendChild(a.value)}}),new o["a"]({router:h,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.1","core-js":"^3.6.5","ecored-base-pkg":"2.3.1","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},bce2:function(e,a,n){e.exports=n.p+"img/banner-principal.bb66fcd4.svg"},cf25:function(e,a,n){"use strict";n("fea6")},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.0f6310ea.png"},fea6:function(e,a,n){}});
//# sourceMappingURL=app.d2485aa7.js.map