import type { Locale } from "@/i18n";

export interface Article {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

const articlesByLang: Record<Locale, Article[]> = {
  fr: [
    {
      id: "lancement-projet",
      tag: "Actualite",
      title: "Cultural Bridges : un nouveau projet Erasmus+ pour la jeunesse europeenne",
      excerpt: "En decembre 2024, trois organisations de jeunesse d'Espagne, de Pologne et de France lancent un partenariat Erasmus+ KA210-YOU pour renforcer l'interculturalite et l'inclusion sociale.",
      date: "Decembre 2024",
      content: `Le projet Cultural Bridges : Strengthening Interculturality and Social Inclusion among Youth est officiellement lance en decembre 2024. Ce partenariat a petite echelle (KA210-YOU) du programme Erasmus+ reunit trois organisations de jeunesse de trois pays europeens.

L'Associacio Juvenil Ndiatiguia Joves Units (Lleida, Espagne), coordinatrice du projet, UGPA POLSKA (Varsovie, Pologne) et Un Geste pour l'Avenir (Boissy-Saint-Leger, France) unissent leurs forces pour un projet de 18 mois dote d'un budget de 60 000 euros.

L'objectif est ambitieux : creer des espaces de rencontre et d'apprentissage ou 30 jeunes Europeens ages de 18 a 30 ans pourront developper leurs competences interculturelles, lutter contre les stereotypes et devenir des acteurs de l'inclusion dans leurs communautes.

Le projet est structure autour de trois activites principales : des ateliers locaux de preparation, un echange culturel international, et des campagnes de sensibilisation dans les trois pays partenaires.`,
    },
    {
      id: "ateliers-locaux",
      tag: "Activite 1",
      title: "Les ateliers locaux preparent les jeunes a l'echange international",
      excerpt: "De janvier a avril 2025, chaque pays partenaire organise des ateliers de preparation pour les 10 jeunes selectionnes pour l'echange de Varsovie.",
      date: "Janvier - Avril 2025",
      content: `Au cours du premier trimestre 2025, les trois organisations partenaires ont organise des ateliers de preparation dans leurs pays respectifs. Ces sessions avaient pour objectif de preparer les 30 participants -- 10 par pays -- a l'echange culturel prevu a Varsovie en mai.

En Espagne, l'Associacio Juvenil Ndiatiguia Joves Units a organise des sessions sur la communication interculturelle et les bases de l'education non formelle. Les participants ont explore leurs propres identites culturelles et appris a les partager avec d'autres.

En Pologne, UGPA POLSKA a mis l'accent sur la connaissance de soi et la lutte contre les prejuges, avec des exercices pratiques inspires du Theatre de l'Opprime. Les jeunes polonais ont aussi prepare des elements de presentation culturelle pour la future soiree interculturelle.

En France, Un Geste pour l'Avenir a anime des ateliers sur la diversite au sein de la societe francaise, en donnant la parole a des jeunes de differentes origines. Les participants ont partage leurs experiences personnelles face a la discrimination et ont reflechi ensemble sur des solutions.

Ces ateliers ont permis de creer un socle commun de connaissances et d'attentes, tout en renforcant la cohesion au sein de chaque groupe national avant la rencontre internationale.`,
    },
    {
      id: "communique-varsovie",
      tag: "Communique de presse",
      title: "30 jeunes Europeens reunis a Varsovie pour construire des ponts culturels",
      excerpt: "Trente jeunes de trois pays europeens se sont retrouves a Varsovie, du 14 au 18 mai 2025, pour un echange de jeunes Erasmus+ dans le cadre du projet Cultural Bridges.",
      date: "18 mai 2025",
      content: `Trente jeunes issus de trois pays europeens se sont retrouves a Varsovie, en Pologne, du 14 au 18 mai 2025, dans le cadre du projet Erasmus+ "Cultural Bridges". Pendant cinq jours, les participants venus d'Espagne, de Pologne et de France ont pris part a des ateliers intensifs, des activites interculturelles et des apprentissages collaboratifs centres sur la lutte contre le racisme et les discriminations.

"Cultural Bridges depasse le cadre d'un simple evenement. C'est un projet qui vise a former une generation de jeunes convaincus que la diversite est une richesse et non un obstacle", a declare un representant de l'Associacio Juvenil Ndiatiguia Joves Units.

Au cours des cinq journees, les participants ont participe a des ateliers d'education non formelle portant sur l'antiracisme, la lutte contre les discriminations et l'inclusion sociale. Parmi les temps forts, une soiree interculturelle au cours de laquelle chaque delegation nationale a partage ses traditions, sa gastronomie, sa musique et ses recits.

"Nos participants sont revenus en France avec un engagement renouvele en faveur de la lutte contre les discriminations dans leurs contextes locaux", a souligne un representant d'Un Geste pour l'Avenir.`,
    },
    {
      id: "temoignage-participant",
      tag: "Temoignage",
      title: "Ce que j'ai appris sur moi-meme en vivant avec 29 inconnus de 3 pays",
      excerpt: "Je suis arrive a Varsovie terrifie. Ce que je ne m'attendais pas, c'est que cette experience changerait ma facon de me voir.",
      date: "Mai 2025",
      content: `Je suis arrive a Varsovie terrifie. Pas de l'avion, pas de la Pologne, mais de passer cinq jours avec 29 personnes que je n'avais jamais rencontrees. Ce que je ne m'attendais pas, c'est que cette experience changerait ma facon de me voir.

Le premier jour, nous avons fait un jeu de noms, puis un exercice ou nous nous placions sur une carte imaginaire de l'Europe dessinee au sol. Soudain, nous riions. Soudain, les groupes se sont dissous.

Le deuxieme jour, nous avons fait un exercice sur le privilege et la discrimination. Nous etions debout en ligne, et les animateurs lisaient des affirmations : "Faites un pas en avant si vous n'avez jamais ete controle par la police a cause de votre apparence." A la fin, nous etions disperses dans la salle, et le silence etait plus fort que n'importe quel discours sur l'inegalite.

Si je devais choisir un moment qui capture l'esprit de Cultural Bridges, ce serait la soiree interculturelle. Chaque pays a prepare de la nourriture, de la musique, des danses. Mais la vraie magie s'est produite apres : nous sommes restes a parler jusqu'a deux heures du matin, en anglais approximatif, avec des gestes, des applications de traduction, et des rires comblant les vides.

Le dernier jour, nous avons partage un mot resumant l'experience. Les mots choisis -- "famille", "espoir", "courage", "appartenance" -- racontaient l'histoire mieux qu'aucun rapport.

Je suis rentre avec une comprehension differente de moi-meme. J'ai appris que je suis plus courageux que je ne le pensais. J'ai appris que mon histoire compte.`,
    },
    {
      id: "tribune-education",
      tag: "Tribune",
      title: "Pourquoi l'education non formelle est la cle pour combattre le racisme chez les jeunes",
      excerpt: "L'Europe a un probleme de racisme, et l'education traditionnelle seule ne le resout pas. Nous croyons que la reponse reside dans l'education non formelle.",
      date: "Juin 2025",
      content: `L'Europe a un probleme de racisme, et l'education traditionnelle seule ne le resout pas. Au projet Cultural Bridges, nous croyons que la reponse reside dans un passage du discours sur l'inclusion a sa pratique -- et l'education non formelle est la methode qui rend cela possible.

L'education formelle enseigne aux jeunes que le racisme est mal. L'education non formelle leur fait ressentir pourquoi. Il y a une difference profonde entre lire un chapitre de manuel sur la discrimination et se tenir dans une salle avec 29 pairs d'Espagne, de Pologne et de France, en faisant un exercice qui revele comment le privilege opere dans votre propre vie.

Lors de l'echange Cultural Bridges a Varsovie en mai 2025, 30 jeunes participants de trois pays ont passe cinq jours engages dans des ateliers d'education non formelle axes sur l'antiracisme, le dialogue interculturel et l'inclusion sociale.

Des projets comme Cultural Bridges ne sont pas peripheriques a l'agenda antiraciste. Ils en sont le coeur. Ils creent les conditions dans lesquelles les jeunes developpent les competences interculturelles, la pensee critique et l'empathie qu'aucun document politique ne peut legiferer.

Nous appelons les decideurs, les organismes de financement et les organisations de jeunesse a augmenter les investissements dans les programmes d'education non formelle qui privilegient la rencontre interculturelle.`,
    },
    {
      id: "campagne-sensibilisation",
      tag: "Activite 3",
      title: "La campagne de sensibilisation touche des milliers de jeunes dans trois pays",
      excerpt: "De juin 2025 a mars 2026, les partenaires du projet deployent une campagne de sensibilisation multilingue sur les reseaux sociaux et dans leurs communautes.",
      date: "Septembre 2025",
      content: `Suite au succes de l'echange de Varsovie, les trois partenaires de Cultural Bridges ont lance une campagne de sensibilisation ambitieuse dans leurs pays respectifs. Cette troisieme activite du projet vise a multiplier l'impact de l'echange en touchant un public beaucoup plus large.

La campagne comprend la publication de six articles en quatre langues (anglais, francais, espagnol et polonais), des affiches de campagne diffusees dans les reseaux des partenaires, et un pack de contenus pour les reseaux sociaux comprenant des publications pretes a l'emploi pour Instagram et Facebook.

En Espagne, l'Associacio Juvenil Ndiatiguia Joves Units a organise des presentations dans des centres de jeunesse locaux, touchant plus de 200 jeunes avec des temoignages de participants et des ateliers courts inspires de l'echange.

En Pologne, UGPA POLSKA a utilise les reseaux sociaux pour partager des videos et des recits de l'echange, generant un engagement significatif aupres de la communaute locale.

En France, Un Geste pour l'Avenir a organise un evenement communautaire rassemblant des jeunes du quartier pour partager les apprentissages du projet et discuter de l'inclusion dans leur contexte local.

Les participants de l'echange sont devenus de veritables ambassadeurs du projet, partageant leurs experiences dans leurs ecoles, universites et associations.`,
    },
    {
      id: "guide-pedagogique",
      tag: "Publication",
      title: "Un guide d'education interculturelle pour les travailleurs de jeunesse",
      excerpt: "Le projet Cultural Bridges publie un guide pedagogique complet, rassemblant methodes, activites et outils pour l'education interculturelle non formelle.",
      date: "Janvier 2026",
      content: `L'un des livrables majeurs du projet Cultural Bridges est desormais disponible : le Guide d'Education Interculturelle. Ce document, elabore collectivement par les trois organisations partenaires, est destine aux travailleurs de jeunesse, educateurs et animateurs souhaitant integrer l'education interculturelle dans leurs pratiques.

Le guide propose une approche structuree basee sur l'experience du projet, incluant des fondements theoriques sur l'interculturalite, un repertoire d'activites non formelles testees et evaluees lors de l'echange de Varsovie, des conseils pratiques pour l'animation de groupes multiculturels, et des outils d'evaluation des competences interculturelles.

Il est accompagne d'un Pack de Contenu Pedagogique qui fournit des fiches d'activites detaillees, pretes a l'emploi, pour des ateliers sur l'antiracisme, la deconstruction des stereotypes, la communication interculturelle et l'inclusion sociale.

Ces deux documents sont disponibles gratuitement et constituent un heritage durable du projet, utilisable bien au-dela de la periode de financement Erasmus+.`,
    },
    {
      id: "plan-durabilite",
      tag: "Strategie",
      title: "Assurer la perennite de Cultural Bridges au-dela du financement Erasmus+",
      excerpt: "Le plan de durabilite du projet definit comment les resultats et les pratiques de Cultural Bridges continueront a vivre apres mai 2026.",
      date: "Mars 2026",
      content: `A l'approche de la fin du projet, les partenaires de Cultural Bridges ont elabore un plan de durabilite et d'exploitation visant a assurer la perennite des resultats au-dela de la periode de financement.

Le plan repose sur quatre piliers : la diffusion continue des ressources pedagogiques (guide, pack d'activites, articles) via les sites web et reseaux des partenaires ; le maintien du reseau de jeunes ambassadeurs formes lors du projet ; l'integration des methodologies developpees dans les activites regulieres de chaque organisation partenaire ; et la recherche de nouveaux financements pour des projets de suivi.

Les 30 participants de l'echange continuent a etre en contact via un groupe de communication en ligne et plusieurs d'entre eux ont deja pris des initiatives dans leurs communautes, animant des ateliers dans leurs ecoles ou associations.

Le partenariat entre les trois organisations se poursuivra au-dela du projet, avec l'intention de soumettre de nouvelles candidatures Erasmus+ pour approfondir et elargir le travail commence avec Cultural Bridges.

"Ce projet n'est pas une fin, c'est un debut", a declare un representant de l'Associacio Juvenil Ndiatiguia Joves Units. "Les ponts que nous avons construits sont solides, et nous comptons bien continuer a les traverser."`,
    },
  ],
  en: [
    {
      id: "project-launch",
      tag: "News",
      title: "Cultural Bridges: a new Erasmus+ project for European youth",
      excerpt: "In December 2024, three youth organisations from Spain, Poland, and France launch an Erasmus+ KA210-YOU partnership to strengthen interculturality and social inclusion.",
      date: "December 2024",
      content: `The Cultural Bridges project was officially launched in December 2024. This small-scale partnership (KA210-YOU) under the Erasmus+ programme brings together three youth organisations from three European countries.

Associacio Juvenil Ndiatiguia Joves Units (Lleida, Spain), the project coordinator, UGPA POLSKA (Warsaw, Poland), and Un Geste pour l'Avenir (Boissy-Saint-Leger, France) join forces for an 18-month project with a budget of EUR 60,000.

The objective is ambitious: to create spaces for encounter and learning where 30 young Europeans aged 18 to 30 can develop their intercultural skills, fight stereotypes, and become agents of inclusion in their communities.`,
    },
    {
      id: "local-workshops",
      tag: "Activity 1",
      title: "Local workshops prepare young people for the international exchange",
      excerpt: "From January to April 2025, each partner country organises preparatory workshops for the 10 young people selected for the Warsaw exchange.",
      date: "January - April 2025",
      content: `During the first quarter of 2025, the three partner organisations held preparatory workshops in their respective countries. These sessions aimed to prepare the 30 participants -- 10 per country -- for the cultural exchange planned in Warsaw in May.

In Spain, workshops focused on intercultural communication and non-formal education basics. In Poland, UGPA POLSKA emphasised self-awareness and fighting prejudice through Theatre of the Oppressed exercises. In France, Un Geste pour l'Avenir ran workshops on diversity within French society.

These workshops created a common foundation of knowledge and expectations while strengthening cohesion within each national group before the international meeting.`,
    },
    {
      id: "press-release-warsaw",
      tag: "Press release",
      title: "30 Young Europeans Unite in Warsaw to Build Cultural Bridges",
      excerpt: "Thirty young people from three European countries gathered in Warsaw from May 14 to 18, 2025, for a landmark Erasmus+ youth exchange.",
      date: "18 May 2025",
      content: `Thirty young people from three European countries gathered in Warsaw, Poland, from May 14 to 18, 2025, for a landmark youth exchange under the Erasmus+ project "Cultural Bridges." The five-day programme brought together participants from Spain, Poland, and France for intensive workshops, intercultural activities, and collaborative learning focused on combating racism and discrimination.

"Cultural Bridges is about more than a single event. It is about creating a generation of young people who understand that diversity is a strength, not a barrier."

Highlights included an intercultural night where each national group shared traditions, food, music, and stories, as well as collaborative exercises designed to break down stereotypes and build mutual understanding.`,
    },
    {
      id: "participant-testimony",
      tag: "Testimonial",
      title: "What I Learned About Myself by Living with 29 Strangers from 3 Countries",
      excerpt: "I boarded the plane to Warsaw terrified. What I did not expect was that it would change the way I see myself.",
      date: "May 2025",
      content: `I boarded the plane to Warsaw terrified. Not of flying, not of Poland, but of spending five full days with 29 people I had never met. What I did not expect was that it would change the way I see myself.

On day two, we did an exercise about privilege and discrimination. We stood in a line, and the facilitators read statements. By the end, we were spread across the room, and the silence was louder than any speech about inequality I had ever heard.

The intercultural night on day three was the heart of the exchange. Each country prepared food, music, dances. But the real magic happened after -- we stayed up talking until 2am in broken English, with hand gestures, translation apps, and laughter filling the gaps.

On the last day, we each shared one word: "family," "hope," "courage," "belonging." I came home with a different understanding of myself. I learned that 30 people from 3 countries can build something real in just five days.`,
    },
    {
      id: "opinion-nfe",
      tag: "Opinion piece",
      title: "Why Non-Formal Education Is the Key to Fighting Racism Among Youth",
      excerpt: "Europe has a racism problem, and traditional education alone is not solving it. We believe the answer lies in non-formal education.",
      date: "June 2025",
      content: `Europe has a racism problem, and traditional education alone is not solving it. At the Cultural Bridges project, we believe the answer lies in a shift from talking about inclusion to practising it.

Formal education teaches young people that racism is wrong. Non-formal education lets them feel why. There is a profound difference between reading a textbook and standing with 29 peers doing an exercise that reveals how privilege operates in your own life.

Projects like Cultural Bridges are central to the anti-racism agenda. They create conditions under which young people develop intercultural competences, critical thinking, and empathy that no policy document can legislate into existence.

We call on policymakers to increase investment in non-formal education programmes that prioritise intercultural encounter.`,
    },
    {
      id: "awareness-campaign",
      tag: "Activity 3",
      title: "The awareness campaign reaches thousands of young people in three countries",
      excerpt: "From June 2025 to March 2026, project partners deploy a multilingual awareness campaign on social media and in their communities.",
      date: "September 2025",
      content: `Following the success of the Warsaw exchange, the three Cultural Bridges partners launched an ambitious awareness campaign in their respective countries. This third project activity aims to multiply the impact of the exchange by reaching a much wider audience.

The campaign includes six articles in four languages, campaign posters distributed through partner networks, and a social media content pack with ready-to-post publications for Instagram and Facebook.

In Spain, presentations in local youth centres reached over 200 young people. In Poland, social media videos and stories generated significant engagement. In France, a community event brought together local youth to discuss inclusion.

Exchange participants became true project ambassadors, sharing their experiences in schools, universities, and associations.`,
    },
    {
      id: "pedagogical-guide",
      tag: "Publication",
      title: "An intercultural education guide for youth workers",
      excerpt: "The Cultural Bridges project publishes a comprehensive pedagogical guide, gathering methods, activities and tools for non-formal intercultural education.",
      date: "January 2026",
      content: `One of the major deliverables of the Cultural Bridges project is now available: the Intercultural Education Guide. This document, developed collectively by the three partner organisations, is intended for youth workers, educators, and facilitators who wish to integrate intercultural education into their practices.

The guide offers a structured approach based on project experience, including theoretical foundations on interculturality, a repertoire of non-formal activities tested during the Warsaw exchange, practical advice for facilitating multicultural groups, and tools for evaluating intercultural competences.

It is accompanied by a Pedagogical Content Pack providing detailed, ready-to-use activity sheets for workshops on anti-racism, stereotype deconstruction, intercultural communication, and social inclusion.`,
    },
    {
      id: "sustainability-plan",
      tag: "Strategy",
      title: "Ensuring the sustainability of Cultural Bridges beyond Erasmus+ funding",
      excerpt: "The project's sustainability plan defines how Cultural Bridges results and practices will continue to live after May 2026.",
      date: "March 2026",
      content: `As the project approaches its end, the Cultural Bridges partners have developed a sustainability and exploitation plan to ensure the longevity of results beyond the funding period.

The plan rests on four pillars: continued dissemination of pedagogical resources; maintaining the network of trained youth ambassadors; integrating developed methodologies into each partner organisation's regular activities; and seeking new funding for follow-up projects.

The 30 exchange participants remain in contact via an online communication group, and several have already taken initiatives in their communities.

The partnership between the three organisations will continue beyond the project, with the intention of submitting new Erasmus+ applications. "This project is not an end, it's a beginning," said a representative. "The bridges we built are strong, and we intend to keep crossing them."`,
    },
  ],
  es: [
    {
      id: "lanzamiento",
      tag: "Noticia",
      title: "Cultural Bridges: un nuevo proyecto Erasmus+ para la juventud europea",
      excerpt: "En diciembre de 2024, tres organizaciones juveniles de Espana, Polonia y Francia lanzan una asociacion Erasmus+ KA210-YOU para fortalecer la interculturalidad y la inclusion social.",
      date: "Diciembre 2024",
      content: `El proyecto Cultural Bridges se lanzo oficialmente en diciembre de 2024. Esta asociacion a pequena escala (KA210-YOU) del programa Erasmus+ reune a tres organizaciones juveniles de tres paises europeos.

La Associacio Juvenil Ndiatiguia Joves Units (Lleida, Espana), coordinadora del proyecto, UGPA POLSKA (Varsovia, Polonia) y Un Geste pour l'Avenir (Boissy-Saint-Leger, Francia) unen fuerzas para un proyecto de 18 meses con un presupuesto de 60.000 euros.

El objetivo es ambicioso: crear espacios de encuentro y aprendizaje donde 30 jovenes europeos de 18 a 30 anos puedan desarrollar sus competencias interculturales, luchar contra los estereotipos y convertirse en agentes de inclusion en sus comunidades.`,
    },
    {
      id: "talleres-locales",
      tag: "Actividad 1",
      title: "Los talleres locales preparan a los jovenes para el intercambio internacional",
      excerpt: "De enero a abril de 2025, cada pais socio organiza talleres preparatorios para los 10 jovenes seleccionados para el intercambio de Varsovia.",
      date: "Enero - Abril 2025",
      content: `Durante el primer trimestre de 2025, las tres organizaciones socias organizaron talleres preparatorios en sus respectivos paises. Estas sesiones tenian como objetivo preparar a los 30 participantes -- 10 por pais -- para el intercambio cultural previsto en Varsovia en mayo.

En Espana, los talleres se centraron en la comunicacion intercultural y las bases de la educacion no formal. En Polonia, UGPA POLSKA puso enfasis en el autoconocimiento y la lucha contra los prejuicios. En Francia, Un Geste pour l'Avenir realizo talleres sobre la diversidad en la sociedad francesa.

Estos talleres crearon una base comun de conocimientos y expectativas, fortaleciendo la cohesion dentro de cada grupo nacional antes del encuentro internacional.`,
    },
    {
      id: "nota-prensa-varsovia",
      tag: "Nota de prensa",
      title: "30 jovenes europeos se reunen en Varsovia para construir puentes culturales",
      excerpt: "Treinta jovenes de tres paises europeos se reunieron en Varsovia del 14 al 18 de mayo de 2025 para un intercambio juvenil Erasmus+.",
      date: "18 de mayo de 2025",
      content: `Treinta jovenes de tres paises europeos se reunieron en Varsovia, Polonia, del 14 al 18 de mayo de 2025, en el marco del proyecto Erasmus+ "Cultural Bridges". Durante cinco dias, los participantes de Espana, Polonia y Francia tomaron parte en talleres intensivos, actividades interculturales y aprendizajes colaborativos centrados en la lucha contra el racismo y la discriminacion.

"Cultural Bridges va mas alla de un evento puntual. Es un proyecto que busca formar una generacion de jovenes convencidos de que la diversidad es una fortaleza, no una barrera."

Entre los momentos destacados, una noche intercultural donde cada delegacion nacional compartio sus tradiciones, gastronomia, musica e historias, asi como ejercicios colaborativos disenados para romper estereotipos y fomentar la comprension mutua.`,
    },
    {
      id: "testimonio",
      tag: "Testimonio",
      title: "Lo que aprendi sobre mi mismo viviendo con 29 desconocidos de 3 paises",
      excerpt: "Subi al avion hacia Varsovia aterrorizado. Lo que no esperaba era que cambiaria la forma en que me veo a mi mismo.",
      date: "Mayo 2025",
      content: `Subi al avion hacia Varsovia aterrorizado. No del vuelo, no de Polonia, sino de pasar cinco dias con 29 personas que nunca habia conocido. Lo que no esperaba era que cambiaria la forma en que me veo.

El segundo dia hicimos un ejercicio sobre privilegio y discriminacion. Al final, estabamos dispersos por la sala, y el silencio era mas fuerte que cualquier discurso sobre la desigualdad.

La noche intercultural del tercer dia fue el corazon del intercambio. Cada pais preparo comida, musica, bailes. Pero la verdadera magia ocurrio despues: nos quedamos hablando hasta las dos de la manana, en ingles aproximado, con gestos, aplicaciones de traduccion y risas llenando los vacios.

El ultimo dia, cada uno compartio una palabra que resumia la experiencia: "familia", "esperanza", "valor", "pertenencia". Volvi a casa con una comprension diferente de mi mismo.`,
    },
    {
      id: "opinion-enf",
      tag: "Articulo de opinion",
      title: "Por que la educacion no formal es la clave para combatir el racismo entre los jovenes",
      excerpt: "Europa tiene un problema de racismo y la educacion tradicional por si sola no lo esta resolviendo. Creemos que la respuesta esta en la educacion no formal.",
      date: "Junio 2025",
      content: `Europa tiene un problema de racismo y la educacion tradicional por si sola no lo esta resolviendo. En el proyecto Cultural Bridges creemos que la respuesta esta en pasar de hablar de inclusion a practicarla.

La educacion formal ensena a los jovenes que el racismo esta mal. La educacion no formal les hace sentir por que. Hay una diferencia profunda entre leer un capitulo de un libro de texto y estar con 29 companeros haciendo un ejercicio que revela como opera el privilegio en tu propia vida.

Proyectos como Cultural Bridges son centrales en la agenda antirracista. Crean las condiciones bajo las cuales los jovenes desarrollan competencias interculturales, pensamiento critico y empatia.

Hacemos un llamamiento a los responsables politicos para que aumenten la inversion en programas de educacion no formal que prioricen el encuentro intercultural.`,
    },
    {
      id: "campana-sensibilizacion",
      tag: "Actividad 3",
      title: "La campana de sensibilizacion llega a miles de jovenes en tres paises",
      excerpt: "De junio de 2025 a marzo de 2026, los socios del proyecto despliegan una campana de sensibilizacion multilingue.",
      date: "Septiembre 2025",
      content: `Tras el exito del intercambio de Varsovia, los tres socios de Cultural Bridges lanzaron una ambiciosa campana de sensibilizacion en sus respectivos paises. Esta tercera actividad del proyecto busca multiplicar el impacto del intercambio llegando a un publico mucho mas amplio.

La campana incluye seis articulos en cuatro idiomas, carteles de campana distribuidos a traves de las redes de los socios, y un paquete de contenidos para redes sociales con publicaciones listas para Instagram y Facebook.

En Espana, las presentaciones en centros juveniles locales llegaron a mas de 200 jovenes. En Polonia, los videos y relatos en redes sociales generaron un engagement significativo. En Francia, un evento comunitario reunio a jovenes del barrio para discutir sobre inclusion.

Los participantes del intercambio se convirtieron en verdaderos embajadores del proyecto.`,
    },
    {
      id: "guia-pedagogica",
      tag: "Publicacion",
      title: "Una guia de educacion intercultural para trabajadores de juventud",
      excerpt: "El proyecto Cultural Bridges publica una guia pedagogica completa con metodos, actividades y herramientas para la educacion intercultural no formal.",
      date: "Enero 2026",
      content: `Uno de los principales entregables del proyecto Cultural Bridges ya esta disponible: la Guia de Educacion Intercultural. Este documento, elaborado colectivamente por las tres organizaciones socias, esta destinado a trabajadores de juventud, educadores y facilitadores.

La guia ofrece un enfoque estructurado basado en la experiencia del proyecto, incluyendo fundamentos teoricos sobre interculturalidad, un repertorio de actividades no formales probadas en el intercambio de Varsovia, consejos practicos para la facilitacion de grupos multiculturales, y herramientas de evaluacion de competencias interculturales.

Estos documentos estan disponibles gratuitamente y constituyen un legado duradero del proyecto.`,
    },
    {
      id: "plan-sostenibilidad",
      tag: "Estrategia",
      title: "Asegurar la sostenibilidad de Cultural Bridges mas alla de la financiacion Erasmus+",
      excerpt: "El plan de sostenibilidad del proyecto define como los resultados y practicas de Cultural Bridges continuaran vivos despues de mayo de 2026.",
      date: "Marzo 2026",
      content: `Al acercarse el final del proyecto, los socios de Cultural Bridges han elaborado un plan de sostenibilidad y explotacion para asegurar la longevidad de los resultados.

El plan se basa en cuatro pilares: difusion continua de los recursos pedagogicos; mantenimiento de la red de jovenes embajadores formados; integracion de las metodologias desarrolladas en las actividades regulares de cada organizacion; y busqueda de nuevas financiaciones para proyectos de seguimiento.

Los 30 participantes del intercambio siguen en contacto y varios han tomado iniciativas en sus comunidades.

"Este proyecto no es un final, es un comienzo. Los puentes que hemos construido son solidos, y pensamos seguir cruzandolos."`,
    },
  ],
  pl: [
    {
      id: "start-projektu",
      tag: "Aktualnosci",
      title: "Cultural Bridges: nowy projekt Erasmus+ dla europejskiej mlodziezy",
      excerpt: "W grudniu 2024 trzy organizacje mlodziezowe z Hiszpanii, Polski i Francji uruchamiaja partnerstwo Erasmus+ KA210-YOU na rzecz miedzykulturowosci i wlaczenia spolecznego.",
      date: "Grudzien 2024",
      content: `Projekt Cultural Bridges zostal oficjalnie uruchomiony w grudniu 2024 roku. To partnerstwo na mala skale (KA210-YOU) w ramach programu Erasmus+ laczy trzy organizacje mlodziezowe z trzech krajow europejskich.

Associacio Juvenil Ndiatiguia Joves Units (Lleida, Hiszpania), koordynator projektu, UGPA POLSKA (Warszawa, Polska) i Un Geste pour l'Avenir (Boissy-Saint-Leger, Francja) laca sily na 18-miesieczny projekt z budzetem 60 000 euro.

Cel jest ambitny: stworzyc przestrzenie spotkania i nauki, w ktorych 30 mlodych Europejczykow w wieku 18-30 lat moze rozwijac swoje kompetencje miedzykulturowe, walczyc ze stereotypami i stac sie agentami wlaczenia w swoich spolecznosciach.`,
    },
    {
      id: "warsztaty-lokalne",
      tag: "Dzialanie 1",
      title: "Lokalne warsztaty przygotowuja mlodzierz do miedzynarodowej wymiany",
      excerpt: "Od stycznia do kwietnia 2025 kazdy kraj partnerski organizuje warsztaty przygotowawcze dla 10 mlodych osob wybranych do wymiany w Warszawie.",
      date: "Styczen - Kwiecien 2025",
      content: `W pierwszym kwartale 2025 roku trzy organizacje partnerskie przeprowadzily warsztaty przygotowawcze w swoich krajach. Celem sesji bylo przygotowanie 30 uczestnikow -- 10 z kazdego kraju -- do wymiany kulturowej zaplanowanej na maj w Warszawie.

W Hiszpanii warsztaty skupily sie na komunikacji miedzykulturowej i podstawach edukacji pozaformalnej. W Polsce UGPA POLSKA polozyla nacisk na samoswiadomosc i walke z uprzedzeniami. We Francji Un Geste pour l'Avenir prowadzilo warsztaty na temat roznorodnosci we francuskim spoleczenstwie.

Te warsztaty stworzyly wspolna baze wiedzy i oczekiwan, wzmacniajac spojnosc w kazdej grupie narodowej przed miedzynarodowym spotkaniem.`,
    },
    {
      id: "komunikat-warszawa",
      tag: "Komunikat prasowy",
      title: "30 mlodych Europejczykow jednoczy sie w Warszawie, aby budowac mosty kulturowe",
      excerpt: "Trzydziestu mlodych ludzi z trzech krajow europejskich spotkalo sie w Warszawie w dniach 14-18 maja 2025 r. na wymiane mlodziezowa Erasmus+.",
      date: "18 maja 2025",
      content: `Trzydziestu mlodych ludzi z trzech krajow europejskich spotkalo sie w Warszawie w dniach 14-18 maja 2025 roku w ramach projektu Erasmus+ "Cultural Bridges". Przez piec dni uczestnicy z Hiszpanii, Polski i Francji brali udzial w intensywnych warsztatach, dzialaniach miedzykulturowych i wspolnym uczeniu sie, skoncentrowanym na walce z rasizmem i dyskryminacja.

"Cultural Bridges to wiecej niz pojedyncze wydarzenie. To projekt, ktory ma na celu uksztaltowanie pokolenia mlodych ludzi przekonanych, ze roznorodnosc jest sila, a nie bariera."

Wsrod najwazniejszych momentow znalazla sie noc miedzykulturowa, podczas ktorej kazda delegacja narodowa dzielila sie swoimi tradycjami, kuchnia, muzyka i historiami.`,
    },
    {
      id: "swiadectwo-uczestnika",
      tag: "Swiadectwo",
      title: "Czego nauczylem sie o sobie, zyjac z 29 nieznajomymi z 3 krajow",
      excerpt: "Wsiadlem do samolotu do Warszawy przerazony. Nie spodziewalem sie, ze to zmieni sposob, w jaki postrzegam siebie.",
      date: "Maj 2025",
      content: `Wsiadlem do samolotu do Warszawy przerazony. Nie lotow, nie Polski, ale spedzenia pieciu pelnych dni z 29 osobami, ktorych nigdy nie spotkalem. Nie spodziewalem sie, ze to zmieni sposob, w jaki postrzegam siebie.

Drugiego dnia zrobilismy cwiczenie o przywilejach i dyskryminacji. Na koncu bylismy rozrzuceni po sali, a cisza byla glosniejsza niz jakikolwiek przemowienie o nierownosci.

Noc miedzykulturowa trzeciego dnia byla sercem wymiany. Kazdy kraj przygotowal jedzenie, muzyke, tance. Ale prawdziwa magia wydarzyla sie potem -- rozmawialismy do drugiej w nocy, w lamanym angielskim, z gestami, aplikacjami do tlumaczenia i smiechem wypelniajacym luki.

Ostatniego dnia kazdy podzielil sie jednym slowem: "rodzina", "nadzieja", "odwaga", "przynaleznosc". Wrocilem do domu z innym rozumieniem siebie.`,
    },
    {
      id: "opinia-enf",
      tag: "Artykul opiniotworczy",
      title: "Dlaczego edukacja pozaformalna jest kluczem do walki z rasizmem wsrod mlodziezy",
      excerpt: "Europa ma problem z rasizmem, a tradycyjna edukacja sama go nie rozwiazuje. Wierzymy, ze odpowiedz lezy w edukacji pozaformalnej.",
      date: "Czerwiec 2025",
      content: `Europa ma problem z rasizmem, a tradycyjna edukacja sama go nie rozwiazuje. W projekcie Cultural Bridges wierzymy, ze odpowiedz lezy w przejsciu od mowienia o wlaczeniu do jego praktykowania.

Edukacja formalna uczy mlodych ludzi, ze rasizm jest zly. Edukacja pozaformalna pozwala im poczuc dlaczego. Jest ogromna roznica miedzy czytaniem podrecznika a staniem z 29 rowiesnikami i wykonywaniem cwiczenia, ktore ujawnia, jak przywilej dziala w twoim wlasnym zyciu.

Projekty takie jak Cultural Bridges sa centralne dla agendy antyrasistowskiej. Tworza warunki, w ktorych mlodzi ludzie rozwijaja kompetencje miedzykulturowe, krytyczne myslenie i empatie.

Wzywamy decydentow do zwiekszenia inwestycji w programy edukacji pozaformalnej.`,
    },
    {
      id: "kampania-swiadomosciowa",
      tag: "Dzialanie 3",
      title: "Kampania swiadomosciowa dociera do tysiecy mlodych ludzi w trzech krajach",
      excerpt: "Od czerwca 2025 do marca 2026 partnerzy projektu prowadza wielojezyczna kampanie swiadomosciowa w mediach spolecznosciowych i swoich spolecznosciach.",
      date: "Wrzesien 2025",
      content: `Po sukcesie wymiany w Warszawie trzej partnerzy Cultural Bridges uruchomili ambitna kampanie swiadomosciowa w swoich krajach. To trzecie dzialanie projektu ma na celu zwielokrotnienie wplywu wymiany.

Kampania obejmuje szesc artykulow w czterech jezykach, plakaty kampanii dystrybuowane przez sieci partnerow oraz pakiet tresci do mediow spolecznosciowych z gotowymi do publikacji postami na Instagram i Facebook.

W Hiszpanii prezentacje w lokalnych centrach mlodziezowych dotarly do ponad 200 mlodych ludzi. W Polsce filmy i relacje w mediach spolecznosciowych wygenerowaly znaczace zaangazowanie. We Francji wydarzenie spoleczne zgromadzilo lokalnych mlodych ludzi do dyskusji o wlaczeniu.

Uczestnicy wymiany stali sie prawdziwymi ambasadorami projektu.`,
    },
    {
      id: "przewodnik-pedagogiczny",
      tag: "Publikacja",
      title: "Przewodnik po edukacji miedzykulturowej dla pracownikow mlodziezowych",
      excerpt: "Projekt Cultural Bridges publikuje kompleksowy przewodnik pedagogiczny z metodami, dzialaniami i narzedziami do pozaformalnej edukacji miedzykulturowej.",
      date: "Styczen 2026",
      content: `Jeden z glownych rezultatow projektu Cultural Bridges jest juz dostepny: Przewodnik po Edukacji Miedzykulturowej. Ten dokument, opracowany wspolnie przez trzy organizacje partnerskie, jest przeznaczony dla pracownikow mlodziezowych, edukatorow i facilitatorow.

Przewodnik oferuje ustrukturyzowane podejscie oparte na doswiadczeniu projektu, w tym podstawy teoretyczne miedzykulturowosci, repertuar dzialan pozaformalnych przetestowanych podczas wymiany w Warszawie, praktyczne porady dotyczace facilitacji grup wielokulturowych oraz narzedzia do oceny kompetencji miedzykulturowych.

Te dokumenty sa dostepne bezplatnie i stanowia trwale dziedzictwo projektu.`,
    },
    {
      id: "plan-zrownowazonego-rozwoju",
      tag: "Strategia",
      title: "Zapewnienie trwalosci Cultural Bridges po zakonczeniu finansowania Erasmus+",
      excerpt: "Plan zrownowazonego rozwoju projektu okresla, jak wyniki i praktyki Cultural Bridges beda kontynuowane po maju 2026.",
      date: "Marzec 2026",
      content: `W miare zblizania sie konca projektu partnerzy Cultural Bridges opracowali plan zrownowazonego rozwoju i eksploatacji, majacy zapewnic trwalosc wynikow.

Plan opiera sie na czterech filarach: ciagla dystrybucja zasobow pedagogicznych; utrzymanie sieci przeszkolonych mlodych ambasadorow; wlaczenie opracowanych metodologii do regularnych dzialan kazdej organizacji; poszukiwanie nowych zrodel finansowania na projekty kontynuacyjne.

30 uczestnikow wymiany pozostaje w kontakcie, a kilku z nich podjelo juz inicjatywy w swoich spolecznosciach.

"Ten projekt to nie koniec, to poczatek. Mosty, ktore zbudowalismy, sa mocne, i zamierzamy dalej po nich chodzic."`,
    },
  ],
};

export function getArticles(lang: Locale): Article[] {
  return articlesByLang[lang] || articlesByLang.en;
}
