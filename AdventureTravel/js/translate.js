class translate {
    constructor() {
        document.getElementById("english").addEventListener("click", () => {
            this.translate("english");
        });
        document.getElementById("spanish").addEventListener("click", () => {
            this.translate("spanish");
        });
        this.translate(localStorage.getItem("language"));
    }
    translate(language) {
        if (language == "spanish") {
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("cities").innerHTML = "THE IMPORTANT CITIES";
            document.getElementById("transportation").innerHTML = "TRANSFERS";
            document.getElementById("contact").innerHTML = "Contact Us";
            document.getElementById("who-us").innerHTML = "quienes somos?";
            document.getElementById("an-1").innerHTML = "Somos un distinguido equipo interesado en brindar servicios de turismo y alojamiento a viajeros e interesados en Egipto y la civilización de Egipto.";
            document.getElementById("more").innerHTML = "Aprende más";
            document.getElementById("title-services").innerHTML = "Servicios";
            document.getElementById("p-srv-1").innerHTML = "Nuestros servicios ofrecen una amplia gama de actividades relacionadas con los viajes, desde viajes en avión hasta reservas de hotel y alquiler de coches. Entendemos que sus viajes son importantes para usted y nos esforzamos por brindarle la mejor experiencia posible. Ya sea que esté buscando un lugar para quedarse, un vehículo para alquilar o simplemente quiera explorar nuevos lugares, tenemos algo para usted.";
            document.getElementById("title-box-1").innerHTML = "reserva de hoteles";
            document.getElementById("p-box-srv-1").innerHTML = "Ofrecemos reservas de hotel en varias ciudades y regiones, incluidas El Cairo y Giza, y en todo Egipto. Solo tienes que elegir el hotel, el número de días de estancia y el número de habitaciones, y nosotros nos encargamos del resto.";
            document.getElementById("title-box-2").innerHTML = "El alquiler de coches";
            document.getElementById("p-box-srv-2").innerHTML = "Te ofrecemos el servicio de elegir el coche que quieres y te lo alquilamos al vendedor";
            document.getElementById("title-box-3").innerHTML = "Orientación turística";
            document.getElementById("p-box-srv-3").innerHTML = "Nuestra empresa proporciona una guía turística completa para visitar que se adapte a sus necesidades, presupuesto y la naturaleza del lugar al que se dirige.";
            document.getElementById("title-box-4").innerHTML = "Hacer planes de visita";
            document.getElementById("p-box-srv-4").innerHTML = "Todo lo que tiene que hacer es elegir los lugares que desea visitar y monitoreamos el clima para brindarle los mejores días para visitar.";
            document.getElementById("desing-h3").innerHTML = "Nuestro servicio viene con...";
            document.getElementById("desing-ul-li-1").innerHTML = "Recepción y despedida en el aeropuerto.";
            document.getElementById("desing-ul-li-2").innerHTML = "Comprobación periódica del tiempo";
            document.getElementById("desing-ul-li-3").innerHTML = "los precios razonables";
            document.getElementById("desing-ul-li-4").innerHTML = "Orientación turística";
            document.getElementById("desing-ul-li-5").innerHTML = "Asegurar el mejor servicio posible";
            document.getElementById("title-gallary").innerHTML = "Galería";
            document.getElementById("p-title-gallary").innerHTML = "Puedes visitar muchos lugares hermosos, tomar fotografías y comprar recuerdos.";
            document.getElementById("title-informtion").innerHTML = "información";
            document.getElementById("p-title-informtion").innerHTML = "Aquí hay información sobre Egipto que debe saber antes de visitar Egipto";
            document.getElementById("long-text-informtion").innerHTML = "El antiguo Egipto es una civilización antigua en el noreste de África. La antigua civilización egipcia se centró en las orillas del río Nilo en lo que ahora se conoce como la República Árabe de Egipto. Egipto estuvo dividido en varias partes hasta el año 3100 a.C. Un rey llamado 'Narmer Mines' salió de la ciudad de 'Thebes' para unir el Alto Egipto y el Bajo Egipto, y de aquí comenzó la antigua civilización de Egipto. El Reino de Egipto se extendió hasta apoderarse del mayor porcentaje del Levante y Nubia hasta convertirse en uno de los imperios más grandes a lo largo de los tiempos hasta nuestros días, pero Egipto no gozó de total seguridad, ya que muchos colonos intentaron ocupar Egipto a causa de su riqueza, poder y prosperidad comercial. El cual pasó por varias etapas y alcanzó su apogeo en el Egipto moderno y por esta razón la codicia de los colonizadores fue aumentando día a día ya que muchos reinos y tribus intentaron apoderarse de Egipto, incluidos los hicsos, nubios, asirios, persas, aqueménidas y macedonios bajo el liderazgo de Alejandro Magno, hasta llegar al Reino Ptolemaico que se construyó Después de la muerte de Alejandro Magno, el Reino Ptolemaico siguió floreciendo, pero como todos los países, tuvo sus problemas, ya que la persecución de los cristianos continuó debido a la enseñanzas de su religión, y la situación continuó hasta la conquista islámica de Egipto, donde los musulmanes no diferenciaron entre ellos y los cristianos, y permitieron que cualquiera practicara su religión libremente sin temor por sus vidas, pero el éxito de la civilización se debe en parte , la antigua planta egipcia se atribuía a su capacidad para adaptarse a las condiciones agrícolas del valle del Nilo. La inundación prevista del Nilo y el riego controlado en el valle fértil dieron como resultado la producción de un excedente de cultivos, lo que ayudó a aumentar la densidad de población y el desarrollo social y cultural. Nota importante La civilización del antiguo Egipto es más larga de lo que se menciona en cualquier libro, pero los eruditos estiman la edad de cualquier imperio desde el inicio de la unión de sus provincias, como mencionamos Egipto estaba dividido en muchas partes, por lo que la civilización del antiguo Egipto se aprecia, a partir de la unificación del Rey Mina para el país. Otra nota: esta no era la primera vez que unificaba a Egipto bajo una sola bandera. Hay un rey llamado 'Escorpión', como dicen los eruditos, y él es el primero en unir a Egipto bajo una sola bandera, pero no hay información al respecto. Porque la escritura se descubrió en 3150 a. C., y él unificó el país antes de que se descubriera la escritura, y por lo tanto no hay información sobre él en los registros históricos, excepto por una cosa simple que no se menciona, y hay una cosa simple que la gente debería ser conciente de. No hay país que goce de paz permanente. En medio de la luz hay un punto Pequeño es corrupción e ignorancia, como si cuanto más grande el estado, más grande el punto y expandido";
            document.getElementById("title-cities").innerHTML = "LAS CIUDADES MÁS IMPORTANTES";
            document.getElementById("city-h4-1-content").innerHTML = "Cairo";
            document.getElementById("city-p-1-content").innerHTML = "Cairo es una ciudad bulliciosa y un destino de visita obligada para cualquiera que viaje a Egipto. La ciudad es un crisol de culturas, con una rica historia que data de miles de años. Desde las famosas pirámides de Giza hasta el vibrante mercado de Khan El Khalili";
            document.getElementById("city-h4-2-content").innerHTML = "Hurgada";
            document.getElementById("city-p-2-content").innerHTML = "Se encuentra en la Gobernación del Mar Rojo y es uno de los mejores destinos turísticos de Egipto para los amantes del buceo y el esnórquel, ya que se caracteriza por pintorescos arrecifes de coral y hermosos peces.";
            document.getElementById("title-transfres").innerHTML = "TRASLADOS Y RECOGIDAS";
            document.getElementById("p-transfres").innerHTML = "Contamos con una variedad de autos para transportarte al lugar que desees, de acuerdo a tus deseos";
            document.getElementById("text-p").innerHTML = "Puedes seguirnos en las redes sociales y enterarte de las últimas novedades sobre nosotros";
            document.getElementById("disc").innerHTML = "Egipto, Asuán, Edfu, Alghanimia , junto a la Mezquita 'El-Sayeda-Zainab'";
            document.getElementById("work-hour").innerHTML = "Horario comercial: de las 7:00 a. m. a las 20:00 p. m.";

        } else if (language == "english") {
            document.getElementById("home").innerHTML = "Home";
            document.getElementById("cities").innerHTML = "THE IMPORTANT CITIES";
            document.getElementById("transportation").innerHTML = "TRANSFERS";
            document.getElementById("contact").innerHTML = "Contact Us";
            document.getElementById("who-us").innerHTML = "Who are we?";
            document.getElementById("an-1").innerHTML = "We are a distinguished team interested in providing tourism and accommodation services to travelers and those interested in Egypt and the civilization of Egypt.";
            document.getElementById("more").innerHTML = "Learn More";
            document.getElementById("title-services").innerHTML = "Services";
            document.getElementById("p-srv-1").innerHTML = "Our services offer a comprehensive range of travel-related activities, from air travel to hotel booking and car rental. We understand that your travels are important to you , and we strive to provide the best possible experience for you. Whether you're looking for a place to stay, a vehicle to rent, or just want to explore new places, we have something for you.";
            document.getElementById("title-box-1").innerHTML = "Booking of hotels";
            document.getElementById("p-box-srv-1").innerHTML = "We offer hotel reservations in various cities and regions, including Cairo and Giza, and all over Egypt. All you have to do is choose the hotel, the number of days you will stay in, and the number of rooms, and we take care of the rest.";
            document.getElementById("title-box-2").innerHTML = "The Cars Rental";
            document.getElementById("p-box-srv-2").innerHTML = "We offer you the service of choosing the car you want and we rent it to you from the seller";
            document.getElementById("title-box-3").innerHTML = "Tourist guidance";
            document.getElementById("p-box-srv-3").innerHTML = "Our company provides a comprehensive tourist guide to visit that suits your needs, budget and the nature of the place you are going to.";
            document.getElementById("title-box-4").innerHTML = "Making visit plans";
            document.getElementById("p-box-srv-4").innerHTML = "All you have to do is choose the places you want to visit and we monitor the weather to provide the best days to visit";
            document.getElementById("desing-h3").innerHTML = "Our service comes with...";
            document.getElementById("desing-ul-li-1").innerHTML = "Reception and farewell at the airport.";
            document.getElementById("desing-ul-li-2").innerHTML = "Regular check of the weather";
            document.getElementById("desing-ul-li-3").innerHTML = "the Reasonable Prices";
            document.getElementById("desing-ul-li-4").innerHTML = "Tourist guidance";
            document.getElementById("desing-ul-li-5").innerHTML = "Ensure the best possible service";
            document.getElementById("title-gallary").innerHTML = "Gallery";
            document.getElementById("p-title-gallary").innerHTML = "You can visit many beautiful places, take pictures and buy souvenirs";
            document.getElementById("title-informtion").innerHTML = "informtion";
            document.getElementById("p-title-informtion").innerHTML = "Here is some information about Egypt that you should know before visiting Egypt";
            document.getElementById("long-text-informtion").innerHTML = "Ancient Egypt is an ancient civilization in northeastern Africa. The ancient Egyptian civilization was centered on the banks of the Nile River in what is now known as the Arab Republic of Egypt. Egypt was divided into several parts until the year 3100 BC. A king called Narmer Mines came out of the city of Thebes to unite Upper Egypt And Lower Egypt, and from here began the ancient civilization of Egypt. The Kingdom of Egypt extended until it took over the largest percentage of the Levant and Nubia until it became one of the largest empires throughout the ages until our present time, but Egypt did not enjoy complete security, as many colonists tried to occupy Egypt because of its wealth, power and commercial prosperity. Which passed through several stages and reached its peak in modern Egypt and for this reason the greed of the colonizers was increasing day by day as many kingdoms and tribes tried to seize Egypt, including the Hyksos, Nubians, Assyrians, Persians, Achaemenids and Macedonians under the leadership of Alexander the Great, until we reached the Ptolemaic Kingdom that was built After the death of Alexander the Great, the Ptolemaic Kingdom continued to flourish, but like all countries, it had its problems, as the persecution of Christians continued because of the teachings of their religion, and the situation continued until the Islamic conquest of Egypt, where Muslims did not differentiate between them and Christians, and they allowed anyone to practice their religion freely without fear for their lives, but the success of civilization is due In part, the ancient Egyptian plant was attributed to its ability to adapt to the farming conditions of the Nile Valley. The predicted flooding of the Nile and controlled irrigation in the fertile valley resulted in the production of a surplus of crops, which helped increase population density, and social and cultural development. Important note The civilization of ancient Egypt is longer than mentioned in any book, but scholars estimate the age of any empire from the beginning of the union of its provinces, as we mentioned Egypt It was divided into many parts, so the civilization of ancient Egypt is appreciated, starting from the unification of King Mina for the country. Another note: This was not the first time to unify Egypt under one banner. There is a king called Scorpion, as scholars say, and he is the first to unite Egypt under one banner, but there is no information about that. Because writing was discovered in 3150 BC, and he unified the country before writing was discovered, and therefore there is no information about him in the historical records except for a simple thing that is not mentioned, and there is a simple thing that people should be aware of. There is no country that enjoys permanent peace. In the midst of the light there is a point Small is corruption and ignorance, as if the larger the state, the bigger the point and expanded";
            document.getElementById("title-cities").innerHTML = "THE IMPORTANT MOST CITIES";
            document.getElementById("city-h4-1-content").innerHTML = "Cairo";
            document.getElementById("city-p-1-content").innerHTML = "It is the capital of Egypt and its largest city, and it is characterized by its ancient history and unique culture that make it one of the most interesting cities in the world.";
            document.getElementById("city-h4-2-content").innerHTML = "Hurgada";
            document.getElementById("city-p-2-content").innerHTML = "It is located in the Red Sea Governorate and is one of the best tourist destinations in Egypt for diving and snorkeling lovers, as it is characterized by picturesque coral reefs and beautiful fish.";
            document.getElementById("title-transfres").innerHTML = "TRANSFERS AND PICK UPS";
            document.getElementById("p-transfres").innerHTML = "We have a variety of cars to transport you to the place you want, according to your wishes";
            document.getElementById("text-p").innerHTML = "You can follow us on social media and find out about the latest news about us";
            document.getElementById("disc").innerHTML = "Egypt, Aswan, Edfu, Alghanimia , Beside 'El-Sayeda-Zainab' Mosque";
            document.getElementById("work-hour").innerHTML = "Business Hours: From AM 7:00 To PM 20:00";
        }
        localStorage.setItem("language", language);
    }
}
onloud = new translate
