
document.addEventListener('DOMContentLoaded', () => {
    const episodesData = {
        1: [
            {
                title_es: "El Himno Nacional",
                title_en: "The National Anthem",
                description_es: "El primer ministro Michael Callow se enfrenta a un impactante dilema cuando la querida princesa Susannah es secuestrada.",
                description_en: "Prime Minister Michael Callow faces a shocking dilemma when the beloved Princess Susannah is kidnapped.",
                img: "BlackMirrorImagenes/BlackMirrorTemp1Ep1.webp"
            },
            {
                title_es: "Quince Millones de Méritos",
                title_en: "Fifteen Million Merits",
                description_es: "En un mundo donde la gente debe pedalear en bicicletas estáticas para ganar méritos, un hombre ayuda a una mujer a participar en un concurso de talentos.",
                description_en: "In a world where people must ride stationary bikes to earn merits, a man helps a woman enter a talent show.",
                img: "BlackMirrorImagenes/BlackMirrorTemp1Ep2.webp"
            },
            {
                title_es: "Tu Historia Completa",
                title_en: "The Entire History of You",
                description_es: "En un futuro cercano, todos tienen acceso a un implante de memoria que graba todo lo que hacen, ven y oyen.",
                description_en: "In the near future, everyone has access to a memory implant that records everything they do, see and hear.",
                img: "BlackMirrorImagenes/BlackMirrorTemp1Ep3.webp"
            }
        ],
        2: [
            {
                title_es: "Ahora Mismo Vuelvo",
                title_en: "Be Right Back",
                description_es: "Después de que su novio muere, una mujer solitaria utiliza un servicio que le permite comunicarse con una versión de IA de él.",
                description_en: "After her boyfriend is killed, a lonely woman uses a service that lets her communicate with an AI version of him.",
                img: "BlackMirrorImagenes/BlackMirrorTemp2Ep1.webp"
            },
            {
                title_es: "Oso Blanco",
                title_en: "White Bear",
                description_es: "Una mujer se despierta sin memoria y es perseguida por personas que la graban con sus teléfonos.",
                description_en: "A woman wakes up with no memory and is hunted by people filming her on their phones.",
                img: "BlackMirrorImagenes/BlackMirrorTemp2Ep2.webp"
            },
            {
                title_es: "El Momento Waldo",
                title_en: "The Waldo Moment",
                description_es: "Un comediante que da voz a un personaje de dibujos animados se ve envuelto en la política cuando su personaje se postula para un cargo.",
                description_en: "A comedian who voices a cartoon character finds himself unwillingly drawn into politics when his character runs for office.",
                img: "BlackMirrorImagenes/BlackMirrorTemp2Ep3.webp"
            },
            {
                title_es: "Blanca Navidad",
                title_en: "White Christmas",
                description_es: "Tres historias interconectadas sobre tecnología y oscuridad durante la temporada navideña.",
                description_en: "Three interconnected tales of technology and darkness during the Christmas season.",
                img: "BlackMirrorImagenes/BlackMirrorTemp2Ep4.webp"
            }
        ],
        3: [
            {
                title_es: "Caída en Picada",
                title_en: "Nosedive",
                description_es: "En un mundo donde todos se califican entre sí, una mujer está desesperada por aumentar su puntuación para la boda de su amiga.",
                description_en: "In a world where everyone rates each other, a woman is desperate to boost her score for her friend's wedding.",
                img: "BlackMirrorImagenes/BlackMirrorTemp3Ep1.webp"
            },
            {
                title_es: "Playtesting",
                title_en: "Playtest",
                description_es: "Un viajero estadounidense se inscribe para probar un nuevo y revolucionario sistema de juego, pero la experiencia es demasiado real.",
                description_en: "An American traveler signs up to test a revolutionary new gaming system, but the experience is all too real.",
                img: "BlackMirrorImagenes/BlackMirrorTemp3Ep2.webp"
            },
            {
                title_es: "Cállate y Baila",
                title_en: "Shut Up and Dance",
                description_es: "Un adolescente es chantajeado para que realice una serie de tareas siniestras después de que un hacker se apodera de su computadora portátil.",
                description_en: "A teenager is blackmailed into performing a series of sinister tasks after a hacker takes over his laptop.",
                img: "BlackMirrorImagenes/BlackMirrorTemp3Ep3.webp"
            },
            {
                title_es: "San Junípero",
                title_en: "San Junipero",
                description_es: "En una ciudad costera en 1987, dos mujeres jóvenes forman un poderoso vínculo que parece desafiar las leyes del tiempo y el espacio.",
                description_en: "In a seaside town in 1987, two young women form a powerful bond that seems to defy the laws of time and space.",
                img: "BlackMirrorImagenes/BlackMirrorTemp3Ep4.webp"
            },
            {
                title_es: "La Ciencia de Matar",
                title_en: "Men Against Fire",
                description_es: "Un soldado en un futuro post-apocalíptico caza y extermina a una raza de mutantes salvajes.",
                description_en: "A soldier in a post-apocalyptic future hunts and exterminates a race of feral mutants.",
                img: "BlackMirrorImagenes/BlackMirrorTemp3Ep5.webp"
            },
            {
                title_es: "Odio Nacional",
                title_en: "Hated in the Nation",
                description_es: "Una detective de la policía y su compañero experto en tecnología investigan una serie de muertes misteriosas relacionadas con las redes sociales.",
                description_en: "A police detective and her tech-savvy partner investigate a string of mysterious deaths with a link to social media.",
                img: "BlackMirrorImagenes/BlackMirrorTemp3Ep6.webp"
            }
        ],
        4: [
            {
                title_es: "USS Callister",
                title_en: "USS Callister",
                description_es: "Un programador solitario crea una simulación de Star Trek en la que es el capitán de su propia nave espacial.",
                description_en: "A reclusive programmer creates a Star Trek-esque simulation where he is the captain of his own spaceship.",
                img: "BlackMirrorImagenes/BlackMirrorTemp4Ep1.webp"
            },
            {
                title_es: "Arkangel",
                title_en: "Arkangel",
                description_es: "Después de que su hija casi se pierde, una madre soltera le implanta un dispositivo de vigilancia avanzado.",
                description_en: "After her daughter nearly goes missing, a single mother has an advanced surveillance device implanted in her.",
                img: "BlackMirrorImagenes/BlackMirrorTemp4Ep2.webp"
            },
            {
                title_es: "Cocodrilo",
                title_en: "Crocodile",
                description_es: "Una mujer se esfuerza por mantener en secreto un oscuro secreto de su pasado mientras un investigador de seguros investiga un accidente.",
                description_en: "A woman goes to great lengths to keep a dark secret from her past while an insurance investigator probes an accident.",
                img: "BlackMirrorImagenes/BlackMirrorTemp4Ep3.webp"
            },
            {
                title_es: "Hang the DJ",
                title_en: "Hang the DJ",
                description_es: "En un mundo donde un sistema de citas dicta la duración de cada relación, una pareja se pregunta si están destinados a estar juntos.",
                description_en: "In a world where a dating system dictates the length of every relationship, a couple questions if they're meant to be together.",
                img: "BlackMirrorImagenes/BlackMirrorTemp4Ep4.webp"
            },
            {
                title_es: "Cabeza de Metal",
                title_en: "Metalhead",
                description_es: "En un mundo post-apocalíptico, una mujer intenta sobrevivir mientras es perseguida por un implacable perro robótico.",
                description_en: "In a post-apocalyptic world, a woman tries to survive while being hunted by a relentless robotic dog.",
                img: "BlackMirrorImagenes/BlackMirrorTemp4Ep5.webp"
            },
            {
                title_es: "Black Museum",
                title_en: "Black Museum",
                description_es: "Una joven visita un museo que alberga una colección de artefactos criminológicos y descubre la horrible historia detrás de cada uno.",
                description_en: "A young woman visits a museum that houses a collection of criminological artifacts and learns the horrifying story behind each one.",
                img: "BlackMirrorImagenes/BlackMirrorTemp4Ep6.webp"
            }
        ],
        5: [
            {
                title_es: "Striking Vipers",
                title_en: "Striking Vipers",
                description_es: "Dos amigos de la universidad se reencuentran en la vida posterior y descubren que su relación ha cambiado de formas inesperadas.",
                description_en: "Two college friends reunite in later life and find their relationship has changed in unexpected ways.",
                img: "BlackMirrorImagenes/BlackMirrorTemp5Ep1.webp"
            },
            {
                title_es: "Smithereens",
                title_en: "Smithereens",
                description_es: "Un conductor de viajes compartidos toma como rehén a un empleado de una empresa de redes sociales, lo que desencadena un enfrentamiento internacional.",
                description_en: "A rideshare driver takes an employee of a social media company hostage, setting off an international standoff.",
                img: "BlackMirrorImagenes/BlackMirrorTemp5Ep2.webp"
            },
            {
                title_es: "Rachel, Jack and Ashley Too",
                title_en: "Rachel, Jack and Ashley Too",
                description_es: "Una adolescente solitaria se obsesiona con una muñeca robótica basada en su estrella del pop favorita.",
                description_en: "A lonely teenager becomes obsessed with a robotic doll based on her favorite pop star.",
                img: "BlackMirrorImagenes/BlackMirrorTemp5Ep3.webp"
            }
        ],
        6: [
            {
                title_es: "Joan es Horrible",
                title_en: "Joan Is Awful",
                description_es: "Una mujer descubre que su vida ha sido adaptada a una serie de televisión sin su permiso.",
                description_en: "A woman discovers that her life has been adapted into a television series without her permission.",
                img: "BlackMirrorImagenes/BlackMirrorTemp6Ep1.webp"
            },
            {
                title_es: "Loch Henry",
                title_en: "Loch Henry",
                description_es: "Una joven pareja viaja a un tranquilo pueblo escocés para comenzar a trabajar en un documental sobre la naturaleza, pero se ven envueltos en una jugosa historia local que involucra eventos impactantes del pasado.",
                description_en: "A young couple travel to a sleepy Scottish town to start work on a genteel nature documentary, but find themselves drawn to a juicy local story involving shocking events of the past.",
                img: "BlackMirrorImagenes/BlackMirrorTemp6Ep2.webp"
            },
            {
                title_es: "Beyond the Sea",
                title_en: "Beyond the Sea",
                description_es: "En un 1969 alternativo, dos hombres en una peligrosa misión de alta tecnología luchan con las consecuencias de una tragedia impensable.",
                description_en: "In an alternate 1969, two men on a perilous high-tech mission wrestle with the consequences of an unimaginable tragedy.",
                img: "BlackMirrorImagenes/BlackMirrorTemp6Ep3.webp"
            },
            {
                title_es: "Mazey Day",
                title_en: "Mazey Day",
                description_es: "Una joven estrella con problemas es acechada por los paparazzi mientras lidia con las consecuencias de un incidente de atropello y fuga.",
                description_en: "A troubled starlet is dogged by invasive paparazzi while dealing with the consequences of a hit-and-run incident.",
                img: "BlackMirrorImagenes/BlackMirrorTemp6Ep4.webp"
            },
            {
                title_es: "Demonio 79",
                title_en: "Demon 79",
                description_es: "Norte de Inglaterra, 1979. Una mansa asistente de ventas se le dice que debe cometer actos terribles para evitar un desastre.",
                description_en: "Northern England, 1979. A meek sales assistant is told she must commit terrible acts to prevent disaster.",
                img: "BlackMirrorImagenes/BlackMirrorTemp6Ep5.webp"
            }
        ],
        7: [
            {
                title_es: "Una pareja cualquiera",
                title_en: "Any given couple",
                description_es: "Cuando una maestra se debate entre la vida y la muerte, su esposo la inscribe en un procedimiento experimental para salvarla. Pero todo tiene un precio…",
                description_en: "When a teacher is torn between life and death, her husband enrolls her in an experimental procedure to save her. But everything has a price...",
                img: "BlackMirrorImagenes/BlackMirrorTemp7Ep1.webp"
            },
            {
                title_es: "Bete Noire",
                title_en: "Bete Noire",
                description_es: "Una joven se altera cuando una vieja conocida se incorpora a la empresa donde trabaja, sobre todo porque percibe algo raro en ella que nadie más parece notar.",
                description_en: "A young woman gets upset when an old acquaintance joins the company where she works, especially since she perceives something strange about her that no one else seems to notice.",
                img: "BlackMirrorImagenes/BlackMirrorTemp7Ep2.webp"
            },
            {
                title_es: "Hotel Reverie",
                title_en: "Hotel Reverie",
                description_es: "La adaptación de alta tecnología de una película clásica transporta a su famosa protagonista a otra dimensión, donde debe seguir el guión si quieren volver a casa.",
                description_en: "The high-tech adaptation of a classic film transports its famous protagonist to another dimension, where she must follow the script if she wants to return home.",
                img: "BlackMirrorImagenes/BlackMirrorTemp7Ep3.webp"
            },
            {
                title_es: "Juego",
                title_en: "Game",
                description_es: "En el Londres del futuro, un excéntrico sospechoso de un asesinato es vinculado con un pelculiar videojuego de los 90, que alberga a una sociedad de seres vivientes digitales.",
                description_en: "In future London, an eccentric murder suspect is linked to a peculiar 90s video game, which houses a society of digital living beings.",
                img: "BlackMirrorImagenes/BlackMirrorTemp7Ep4.webp"
            },
            {
                title_es: "Apología",
                title_en: "Apology",
                description_es: "Un hombre solitario descubre un sistema revolucionario que permite a los usuarios introducirse en fotos antiguas pero despierta emociones intensas en el proceso.",
                description_en: "A lonely man discovers a revolutionary system that allows users to enter old photos but awakens intense emotions in the process.",
                img: "BlackMirrorImagenes/BlackMirrorTemp7Ep5.webp"
            },
            {
                title_es: "USS Callister: Infinito",
                title_en: "USS Callister: Infinite",
                description_es: "Nanette Cole y la tripulación de USS Callister se quedan varados en un universo virtual infinito en el que deben luchar contra 30 millones de jugadores para sobrevivir.",
                description_en: "Nanette Cole and the crew of the USS Callister are stranded in an infinite virtual universe where they must fight 30 million players to survive.",
                img: "BlackMirrorImagenes/BlackMirrorTemp7Ep6.webp"
            }
        ]
    };

    const seasonItems = document.querySelectorAll('.season-item');
    const episodeOverlay = document.querySelector('.episode-overlay');
    const episodeCarousel = document.querySelector('.episode-carousel');
    const closeCarouselBtn = document.querySelector('.close-carousel-btn');
    const prevEpisodeBtn = document.querySelector('.prev-episode');
    const nextEpisodeBtn = document.querySelector('.next-episode');
    let currentSeason = null;
    let currentEpisodeIndex = 0;

    const createEpisodeCard = (episode) => {
        const card = document.createElement('div');
        card.classList.add('episode-card');
        const lang = document.documentElement.getAttribute('data-lang') || 'es';
        const title = lang === 'es' ? episode.title_es : episode.title_en;
        const description = lang === 'es' ? episode.description_es : episode.description_en;

        card.innerHTML = `
            <img src="${episode.img}" alt="${title}">
            <div class="episode-info">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        `;
        return card;
    };

    const showEpisodes = (season) => {
        currentSeason = season;
        const episodes = episodesData[season];
        if (!episodes) return;

        episodeCarousel.innerHTML = '';
        episodes.forEach(episode => {
            const card = createEpisodeCard(episode);
            episodeCarousel.appendChild(card);
        });

        currentEpisodeIndex = 0;
        updateCarouselPosition();
        episodeOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const updateCarouselPosition = () => {
        const cardWidth = episodeCarousel.querySelector('.episode-card').offsetWidth;
        const offset = -currentEpisodeIndex * cardWidth;
        episodeCarousel.style.transform = `translateX(${offset}px)`;
    };

    const closeCarousel = () => {
        episodeOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    seasonItems.forEach(item => {
        item.addEventListener('click', () => {
            const season = item.getAttribute('data-season');
            showEpisodes(season);
        });
    });

    closeCarouselBtn.addEventListener('click', closeCarousel);

    prevEpisodeBtn.addEventListener('click', () => {
        const episodes = episodesData[currentSeason];
        if (currentEpisodeIndex > 0) {
            currentEpisodeIndex--;
        } else {
            currentEpisodeIndex = episodes.length - 1;
        }
        updateCarouselPosition();
    });

    nextEpisodeBtn.addEventListener('click', () => {
        const episodes = episodesData[currentSeason];
        if (currentEpisodeIndex < episodes.length - 1) {
            currentEpisodeIndex++;
        } else {
            currentEpisodeIndex = 0;
        }
        updateCarouselPosition();
    });

    window.addEventListener('resize', () => {
        if (episodeOverlay.classList.contains('active')) {
            updateCarouselPosition();
        }
    });
});
