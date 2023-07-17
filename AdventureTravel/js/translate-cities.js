class Translate {
    constructor() {
        document.querySelector("#english").onclick = () => {
            this.translate("english");
        };
        document.querySelector("#spanish").onclick = () => {
            this.translate("spanish");
        };
        this.translate(localStorage.getItem("language"));
    }
    translate(language) {
        const elements = {
            "h2-title-1": {
                english: "THE IMPORTANT CITIES",
                spanish: "LAS CIUDADES IMPORTANTES",
            },
            "h2-title-2": {
                english: "important-cities",
                spanish: "Ciudades importantes",
            },
            "p-info-1": {
                english:
                    "Egypt is one of the famous tourist destinations in the world, with a rich history and unique culture. Egypt includes many cities that attract tourists from all over the world, and each city is distinguished by its unique features and famous tourist places. In this article, we will review some of the famous cities in Egypt and the most prominent places that tourists target.",
                spanish:
                    "Egipto es uno de los destinos turísticos más famosos del mundo, con una rica historia y una cultura única. Egipto incluye muchas ciudades que atraen a turistas de todo el mundo, y cada ciudad se distingue por sus características únicas y lugares turísticos famosos. En este artículo, revisaremos algunas de las ciudades famosas de Egipto y los lugares más destacados a los que se dirigen los turistas.",
            },
            "span-t-1": { english: "Great Cairo", spanish: "El Cairo" },
            "info-city-1": {
                english:
                    "CAIRO IS A BUSTLING CITY AND A MUST-VISIT DESTINATION FOR ANYONE TRAVELING TO EGYPT. THE CITY IS A MELTING POT OF CULTURES, WITH A RICH HISTORY DATING BACK THOUSANDS OF YEARS. FROM THE FAMOUS PYRAMIDS OF GIZA TO THE VIBRANT KHAN EL KHALILI MARKET, THERE IS NO SHORTAGE OF THINGS TO SEE AND DO IN GREATER CAIRO , A VISIT TO THE EGYPTIAN MUSEUM IS ONE OF THE HIGHLIGHTS OF ANY TRIP TO GREATER CAIRO. THIS WORLD-FAMOUS MUSEUM HOUSES AN IMPRESSIVE COLLECTION OF ANCIENT ARTIFACTS, INCLUDING THE TREASURES OF TUTANKHAMUN. ANOTHER MUST-SEE IS THE CITADEL OF SALADIN, WHICH OFFERS STUNNING VIEWS OF THE CITY AND HOUSES SEVERAL MOSQUES AND HISTORICAL MUSEUMS",
                spanish:
                    "EL CAIRO ES UNA CIUDAD ACTIVA Y UN DESTINO IMPRESCINDIBLE PARA CUALQUIERA QUE VIAJE A EGIPTO. LA CIUDAD ES UN CRIZO DE CULTURAS, CON UNA RICA HISTORIA DE MILES DE AÑOS. DESDE LAS FAMOSAS PIRÁMIDES DE GIZA HASTA EL VIBRANTE MERCADO DE KHAN EL KHALILI, NO HAY ESCASIS DE COSAS PARA VER Y HACER EN EL GRAN CAIRO, UNA VISITA AL MUSEO EGIPCIO ES UNO DE LOS DESTACADOS DE CUALQUIER VIAJE AL GRAN CAIRO. ESTE MUSEO DE FAMOSA MUNDIAL ALOJA UNA COLECCIÓN IMPRESIONANTE DE ARTEFACTOS ANTIGUOS, INCLUYENDO LOS TESOROS DE TUTANKHAMUN. OTRO IMPRESCINDIBLE ES LA CIUDADELA DE SALADIN, QUE OFRECE IMPRESIONANTES VISTAS DE LA CIUDAD Y ALBERGA VARIAS MEZQUITAS Y MUSEOS HISTÓRICOS",
            },
            more: { english: "Learn More", spanish: "Aprende más" },
            "dis-egy": { english: "Egypt", spanish: "Egipto" },
            "span-t-2": { english: "Hurgada", spanish: "Hurgada" },
            "info-city-2": {
                english:
                    "THIS CITY, WITH ITS BEAUTIFUL BEACHES AND CLEAR BLUE WATERS, MAKES IT AN IDEAL DESTINATION FOR LOVERS OF WATER SPORTS SUCH AS DIVING AND SNORKELING. HURGHADA ALSO INCLUDES A NUMBER OF LUXURY RESORTS AND WORLD-CLASS HOTELS, PROVIDING TOURISTS WITH A UNIQUE AND RELAXING EXPERIENCE. IN ADDITION, TOURISTS CAN VISIT GIFTUN ISLAND AND ENJOY THE PICTURESQUE CORAL REEFS AND VARIOUS WATER ACTIVITIES.. AND IF YOU ARE FEELING ADVENTUROUS, THERE ARE PLENTY OF ACTIVITIES TO KEEP YOU BUSY, FROM QUAD BIKING IN THE DESERT TO HOT AIR BALLOON RIDES OVER THE CITY. ALL IN ALL, HURGHADA IS A BEAUTIFUL AND EXCITING DESTINATION THAT OFFERS SOMETHING FOR EVERYONE. WHETHER YOU ARE LOOKING FOR ADVENTURE OR RELAXATION, THIS SEASIDE TOWN IS SURE TO LEAVE YOU FEELING INSPIRED AND REJUVENATED.",
                spanish:
                    "ESTA CIUDAD, CON SUS HERMOSAS PLAYAS Y AGUAS AZULES CLARAS, LA CONVIERTE EN UN DESTINO IDEAL PARA LOS AMANTES DE LOS DEPORTES ACUÁTICOS COMO EL BUCEO Y EL SNORKEL. HURGHADA TAMBIÉN INCLUYE UN NÚMERO DE RESORTS DE LUJO Y HOTELES DE CLASE MUNDIAL, QUE OFRECEN A LOS TURISTAS UNA EXPERIENCIA ÚNICA Y RELAJANTE. ADEMÁS, LOS TURISTAS PUEDEN VISITAR LA ISLA GIFTUN Y DISFRUTAR DE LOS PINTORESCOS ARRECIFES DE CORAL Y VARIAS ACTIVIDADES ACUÁTICAS. Y SI SE SIENTE AVENTURERO, HAY MUCHAS ACTIVIDADES PARA MANTENERLO OCUPADO, DESDE PASEOS EN QUAD EN EL DESIERTO A PASEOS EN GLOBO AEROSTÁTICO POR EL CIUDAD. EN CONJUNTO, HURGHADA ES UN DESTINO HERMOSO Y EMOCIONANTE QUE OFRECE ALGO PARA TODOS. YA SEA QUE BUSCA AVENTURA O RELAJACIÓN, ESTA CIUDAD COSTERA SEGURO LO DEJARÁ SINTIÉNDOSE INSPIRADO Y REJUVENECIDO.",
            },
            "span-t-3": { english: "Sharm El-Shaikh", spanish: "Sharm El-Shaij" },
            "info-city-3": {
                english:
                    "SHARM EL-SHEIKH IS CONSIDERED ONE OF THE MOST FAMOUS TOURIST CITIES IN EGYPT, AS IT IS LOCATED ON THE RED SEA COAST. THIS CITY IS CHARACTERIZED BY ITS BEAUTIFUL WHITE SANDY BEACHES, WHICH ARE IDEAL FOR LOVERS OF WATER SPORTS SUCH AS DIVING AND SNORKELING. SHARM EL SHEIKH ALSO OFFERS GREAT OPPORTUNITIES FOR RECREATION AND RELAXATION IN ITS LUXURY HOTELS AND SPAS. IN ADDITION, TOURISTS CAN VISIT TIRAN ISLAND AND SANAFIR ISLAND TO ENJOY THE STUNNING LANDSCAPES AND RICH CORAL REEFS.",
                spanish:
                    "SHARM EL-SHEIKH ES CONSIDERADA UNA DE LAS CIUDADES TURÍSTICAS MÁS FAMOSAS DE EGIPTO, YA QUE SE ENCUENTRA EN LA COSTA DEL MAR ROJO. ESTA CIUDAD SE CARACTERIZA POR SUS HERMOSAS PLAYAS DE ARENA BLANCA, LAS CUALES SON IDEALES PARA LOS AMANTES DE LOS DEPORTES ACUÁTICOS COMO EL BUCEO Y EL SNORKEL. SHARM EL SHEIKH TAMBIÉN OFRECE GRANDES OPORTUNIDADES DE RECREACIÓN Y RELAJACIÓN EN SUS HOTELES Y SPAS DE LUJO. ADEMÁS, LOS TURISTAS PUEDEN VISITAR LA ISLA DE TIRAN Y LA ISLA DE SANAFIR PARA DISFRUTAR DE LOS IMPRESIONANTES PAISAJES Y LOS RICOS ARRECIFES DE CORAL.",
            },
            "span-t-4": { english: "Luxor", spanish: "Lúxor" },
            "info-city-4": {
                english:
                    "LUXOR IS ONE OF THE MOST IMPORTANT HISTORICAL CITIES IN EGYPT, AS IT HOSTS A GROUP OF TEMPLES AND PHARAONIC MONUMENTS. THE KARNAK TEMPLE AND LUXOR TEMPLE ARE THE MOST IMPORTANT LANDMARKS TO VISIT IN THIS CITY. TOURISTS CAN ALSO VISIT THE CITY OF THE DEAD, ' VALLEY OF THE KINGS', WHERE THERE ARE MANY TOMBS OF THE PHARAOHS, INCLUDING THE TOMB OF TUTANKHAMUN. LUXOR ALSO HOUSES A WONDERFUL MUSEUM CONTAINING ANCIENT PHARAONIC ARTIFACTS.",
                spanish:
                    "LUXOR ES UNA DE LAS CIUDADES HISTÓRICAS MÁS IMPORTANTES DE EGIPTO, YA QUE ALBERGA UN GRUPO DE TEMPLOS Y MONUMENTOS FARAÓNICOS. EL TEMPLO DE KARNAK Y EL TEMPLO DE LUXOR SON LOS LUGARES MÁS IMPORTANTES PARA VISITAR EN ESTA CIUDAD. LOS TURISTAS TAMBIÉN PUEDEN VISITAR LA CIUDAD DE LOS MUERTOS, 'VALLE DE LOS REYES', DONDE HAY MUCHAS TUMBAS DE LOS FARAONES, INCLUYENDO LA TUMBA DE TUTANKHAMUN. LUXOR TAMBIÉN ALBERGA UN MARAVILLOSO MUSEO QUE CONTIENE ANTIGUOS ARTEFACTOS FARAÓNICOS.",
            },
            "span-t-5": { english: "Aswan", spanish: "Asuán" },
            "info-city-5": {
                english:
                    "ASWAN IS LOCATED IN THE SOUTH OF EGYPT, AND IS CONSIDERED ONE OF THE MOST BEAUTIFUL TOURIST CITIES IN THE COUNTRY. ASWAN IS FAMOUS FOR ITS FAMOUS TEMPLE, THE PHILAE TEMPLE, WHICH IS CONSIDERED ONE OF THE MOST IMPORTANT NUBIAN TEMPLES. TOURISTS CAN ALSO VISIT THE GRAND ETHIOPIAN RENAISSANCE DAM, ONE OF THE LARGEST DAMS IN THE WORLD, WHICH OFFERS GREAT OPPORTUNITIES TO ENJOY THE SCENIC VIEWS OF THE NILE RIVER. IN ADDITION, VISITORS CAN RIDE FALAFEL BOATS, EXPLORE BOTANICAL ISLAND AND KITCHENER GARDEN.",
                spanish:
                    "ASWAN SE ENCUENTRA EN EL SUR DE EGIPTO, Y ES CONSIDERADA UNA DE LAS CIUDADES TURÍSTICAS MÁS HERMOSAS DEL PAÍS. ASWAN ES FAMOSA POR SU FAMOSO TEMPLO, EL TEMPLO DE PHILAE, QUE ES CONSIDERADO UNO DE LOS TEMPLOS NUBIOS MÁS IMPORTANTES. LOS TURISTAS TAMBIÉN PUEDEN VISITAR LA GRAN PRESA DEL RENACIMIENTO DE ETÍOPA, UNA DE LAS MAYORES PRESAS DEL MUNDO, QUE OFRECE GRANDES OPORTUNIDADES PARA DISFRUTAR DE LAS VISTAS ESCÉNICAS DEL RÍO NILO. ADEMÁS, LOS VISITANTES PUEDEN PASEAR EN BOTES DE FALAFEL, EXPLORAR LA ISLA BOTÁNICA Y EL JARDÍN DE LA COCINA.",
            },
            "span-t-6": { english: "Fayom", spanish: "Fayum" },
            "info-city-6": {
                english:
                    "FAYOUM IS LOCATED ABOUT 100 KILOMETERS SOUTHWEST OF CAIRO AND IS AN INTERESTING TOURIST DESTINATION. THIS CITY IS FAMOUS FOR ITS BEAUTIFUL LAKES, SUCH AS LAKE QARUN AND LAKE MORRIS. TOURISTS CAN ENJOY CRUISES AND FISHING IN THESE LAKES. VISITORS CAN ALSO VISIT THE ANCIENT CITY OF FAYOUM AND EXPLORE ITS HISTORICAL RUINS.",
                spanish:
                    "FAYOUM SE ENCUENTRA A UNOS 100 KILÓMETROS AL SUROESTE DE EL CAIRO Y ES UN DESTINO TURÍSTICO INTERESANTE. ESTA CIUDAD ES FAMOSA POR SUS HERMOSOS LAGOS, COMO EL LAGO QARUN Y EL LAGO MORRIS. LOS TURISTAS PUEDEN DISFRUTAR DE CRUCEROS Y PESCA EN ESTOS LAGOS. LOS VISITANTES TAMBIÉN PUEDEN VISITAR LA ANTIGUA CIUDAD DE FAYOUM Y EXPLORAR SUS RUINAS HISTÓRICAS.",
            },
            "span-t-7": { english: "Giza", spanish: "Guiza" },
            "info-city-7": {
                english:
                    "GIZA IS ONE OF THE MOST IMPORTANT TOURIST CITIES IN EGYPT, AS IT INCLUDES THE FAMOUS GIZA PYRAMIDS. THESE PYRAMIDS ARE CONSIDERED ONE OF THE SEVEN WONDERS OF THE WORLD, AND ARE CONSIDERED ONE OF THE MOST IMPORTANT HISTORICAL MONUMENTS IN THE WORLD. TOURISTS CAN VISIT THE EGYPTIAN MUSEUM IN GIZA TO VIEW MORE ANCIENT EGYPTIAN ARTIFACTS AND ANTIQUITIES.",
                spanish:
                    "GIZA ES UNA DE LAS CIUDADES TURÍSTICAS MÁS IMPORTANTES DE EGIPTO, YA QUE INCLUYE LAS FAMOSAS PIRÁMIDES DE GIZA. ESTAS PIRÁMIDES SON CONSIDERADAS UNA DE LAS SIETE MARAVILLAS DEL MUNDO, Y SON CONSIDERADAS UNO DE LOS MONUMENTOS HISTÓRICOS MÁS IMPORTANTES DEL MUNDO. LOS TURISTAS PUEDEN VISITAR EL MUSEO EGIPCIO EN GIZA PARA VER MÁS ARTEFACTOS Y ANTIGÜEDADES DEL ANTIGUO EGIPCIO.",
            },
            "span-t-8": { english: "Alexandria", spanish: "Alejandría" },
            "info-city-8": {
                english:
                    "ALEXANDRIA IS LOCATED ON THE MEDITERRANEAN COAST, AND IS A GREAT TOURIST DESTINATION TO ENJOY THE BEACHES AND SUNNY WEATHER. THIS CITY IS FAMOUS FOR THE CITADEL OF QAITBAY AND THE FAMOUS LIBRARY OF ALEXANDRIA, WHICH IS ONE OF THE LARGEST LIBRARIES IN THE ANCIENT WORLD. TOURISTS CAN ALSO VISIT MONTAZAH PARK AND ENJOY THE RESTAURANTS AND CAFES ALONG THE ALEXANDRIA CORNICHE.",
                spanish:
                    "ALEJANDRÍA ESTÁ SITUADA EN LA COSTA MEDITERRÁNEA Y ES UN GRAN DESTINO TURÍSTICO PARA DISFRUTAR DE LAS PLAYAS Y EL SOLEADO. ESTA CIUDAD ES FAMOSA POR LA CIUDADELA DE QAITBAY Y LA FAMOSA BIBLIOTECA DE ALEJANDRÍA, QUE ES UNA DE LAS BIBLIOTECAS MÁS GRANDES DEL MUNDO ANTIGUO. LOS TURISTAS TAMBIÉN PUEDEN VISITAR EL PARQUE MONTAZAH Y DISFRUTAR DE LOS RESTAURANTES Y CAFÉS A LO LARGO DE ALEXANDRIA CORNICHE.",
            },
            "book-more": {
                english: "To book more than one package",
                spanish: "Para reservar más de un paquete",
            },
            "ok-book": { english: "Click Here", spanish: "Haga clic aquí" },
            "text-p": {
                english:
                    "You can follow us on social media and find out about the latest news about us",
                spanish:
                    "Puedes seguirnos en las redes sociales y enterarte de las últimas novedades sobre nosotros",
            },
            disc: {
                english: "Egypt, Aswan, Edfu, Alghanimia , Beside 'El-Sayeda-Zainab' Mosque",
                spanish:
                    "Egipto, Asuán, Edfu, Alghanimia , junto a la Mezquita 'El-Sayeda-Zainab'",
            },
            "work-hour": {
                english: "Business Hours: From AM 7:00 To PM 20:00",
                spanish: "Horario comercial: de las 7:00 a. m. a las 20:00 p. m.",
            },
        };
        for (const element in elements) {
            document.querySelector(`#${element}`).innerHTML =
                elements[element][language];
        }
        localStorage.setItem("language", language);
    }
}

const onload = new Translate();