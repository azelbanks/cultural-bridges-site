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
      tag: "Actualité",
      title: "Cultural Bridges : un nouveau projet Erasmus+ pour la jeunesse européenne",
      excerpt: "En décembre 2024, trois organisations de jeunesse d'Espagne, de Pologne et de France lancent un partenariat Erasmus+ KA210-YOU pour renforcer l'interculturalité et l'inclusion sociale.",
      date: "Décembre 2024",
      content: `Le projet Cultural Bridges : Strengthening Interculturality and Social Inclusion among Youth est officiellement lancé en décembre 2024. Ce partenariat à petite échelle (KA210-YOU) du programme Erasmus+ réunit trois organisations de jeunesse de trois pays européens.

L'Associació Juvenil Ndiatiguia Joves Units (Lleida, Espagne), coordinatrice du projet, UGPA POLSKA (Varsovie, Pologne) et Un Geste pour l'Avenir (Morsang-sur-Orge, France) unissent leurs forces pour un projet de 18 mois doté d'un budget de 60 000 euros.

L'objectif est ambitieux : créer des espaces de rencontre et d'apprentissage où 30 jeunes Européens âgés de 18 à 30 ans pourront développer leurs compétences interculturelles, lutter contre les stéréotypes et devenir des acteurs de l'inclusion dans leurs communautés.

Le projet est structuré autour de trois activités principales : des ateliers locaux de préparation, un échange culturel international, et des campagnes de sensibilisation dans les trois pays partenaires.`,
    },
    {
      id: "ateliers-locaux",
      tag: "Activité 1",
      title: "Les ateliers locaux préparent les jeunes à l'échange international",
      excerpt: "De janvier à avril 2025, chaque pays partenaire organise des ateliers de préparation pour les 10 jeunes sélectionnés pour l'échange de Varsovie.",
      date: "Janvier – Avril 2025",
      content: `Au cours du premier trimestre 2025, les trois organisations partenaires ont organisé des ateliers de préparation dans leurs pays respectifs. Ces sessions avaient pour objectif de préparer les 30 participants — 10 par pays — à l'échange culturel prévu à Varsovie en mai.

En Espagne, l'Associació Juvenil Ndiatiguia Joves Units a organisé des sessions sur la communication interculturelle et les bases de l'éducation non formelle. Les participants ont exploré leurs propres identités culturelles et appris à les partager avec d'autres.

En Pologne, UGPA POLSKA a mis l'accent sur la connaissance de soi et la lutte contre les préjugés, avec des exercices pratiques inspirés du Théâtre de l'Opprimé. Les jeunes polonais ont aussi préparé des éléments de présentation culturelle pour la future soirée interculturelle.

En France, Un Geste pour l'Avenir a animé des ateliers sur la diversité au sein de la société française, en donnant la parole à des jeunes de différentes origines. Les participants ont partagé leurs expériences personnelles face à la discrimination et ont réfléchi ensemble sur des solutions.

Ces ateliers ont permis de créer un socle commun de connaissances et d'attentes, tout en renforçant la cohésion au sein de chaque groupe national avant la rencontre internationale.`,
    },
    {
      id: "communique-varsovie",
      tag: "Communiqué de presse",
      title: "30 jeunes Européens réunis à Varsovie pour construire des ponts culturels",
      excerpt: "Trente jeunes de trois pays européens se sont retrouvés à Varsovie, du 14 au 18 mai 2025, pour un échange de jeunes Erasmus+ dans le cadre du projet Cultural Bridges.",
      date: "18 mai 2025",
      content: `Trente jeunes issus de trois pays européens se sont retrouvés à Varsovie, en Pologne, du 14 au 18 mai 2025, dans le cadre du projet Erasmus+ « Cultural Bridges ». Pendant cinq jours, les participants venus d'Espagne, de Pologne et de France ont pris part à des ateliers intensifs, des activités interculturelles et des apprentissages collaboratifs centrés sur la lutte contre le racisme et les discriminations.

« Cultural Bridges dépasse le cadre d'un simple événement. C'est un projet qui vise à former une génération de jeunes convaincus que la diversité est une richesse et non un obstacle », a déclaré un représentant de l'Associació Juvenil Ndiatiguia Joves Units.

Au cours des cinq journées, les participants ont participé à des ateliers d'éducation non formelle portant sur l'antiracisme, la lutte contre les discriminations et l'inclusion sociale. Parmi les temps forts, une soirée interculturelle au cours de laquelle chaque délégation nationale a partagé ses traditions, sa gastronomie, sa musique et ses récits.

« Nos participants sont revenus en France avec un engagement renouvelé en faveur de la lutte contre les discriminations dans leurs contextes locaux », a souligné un représentant d'Un Geste pour l'Avenir.`,
    },
    {
      id: "temoignage-participant",
      tag: "Témoignage",
      title: "Ce que j'ai appris sur moi-même en vivant avec 29 inconnus de 3 pays",
      excerpt: "Je suis arrivé à Varsovie terrifié. Ce que je ne m'attendais pas, c'est que cette expérience changerait ma façon de me voir.",
      date: "Mai 2025",
      content: `Je suis arrivé à Varsovie terrifié. Pas de l'avion, pas de la Pologne, mais de passer cinq jours avec 29 personnes que je n'avais jamais rencontrées. Ce que je ne m'attendais pas, c'est que cette expérience changerait ma façon de me voir.

Le premier jour, nous avons fait un jeu de noms, puis un exercice où nous nous placions sur une carte imaginaire de l'Europe dessinée au sol. Soudain, nous riions. Soudain, les groupes se sont dissous.

Le deuxième jour, nous avons fait un exercice sur le privilège et la discrimination. Nous étions debout en ligne, et les animateurs lisaient des affirmations : « Faites un pas en avant si vous n'avez jamais été contrôlé par la police à cause de votre apparence. » À la fin, nous étions dispersés dans la salle, et le silence était plus fort que n'importe quel discours sur l'inégalité.

Si je devais choisir un moment qui capture l'esprit de Cultural Bridges, ce serait la soirée interculturelle. Chaque pays a préparé de la nourriture, de la musique, des danses. Mais la vraie magie s'est produite après : nous sommes restés à parler jusqu'à deux heures du matin, en anglais approximatif, avec des gestes, des applications de traduction, et des rires comblant les vides.

Le dernier jour, nous avons partagé un mot résumant l'expérience. Les mots choisis — « famille », « espoir », « courage », « appartenance » — racontaient l'histoire mieux qu'aucun rapport.

Je suis rentré avec une compréhension différente de moi-même. J'ai appris que je suis plus courageux que je ne le pensais. J'ai appris que mon histoire compte.`,
    },
    {
      id: "tribune-education",
      tag: "Tribune",
      title: "Pourquoi l'éducation non formelle est la clé pour combattre le racisme chez les jeunes",
      excerpt: "L'Europe a un problème de racisme, et l'éducation traditionnelle seule ne le résout pas. Nous croyons que la réponse réside dans l'éducation non formelle.",
      date: "Juin 2025",
      content: `L'Europe a un problème de racisme, et l'éducation traditionnelle seule ne le résout pas. Au projet Cultural Bridges, nous croyons que la réponse réside dans un passage du discours sur l'inclusion à sa pratique — et l'éducation non formelle est la méthode qui rend cela possible.

L'éducation formelle enseigne aux jeunes que le racisme est mal. L'éducation non formelle leur fait ressentir pourquoi. Il y a une différence profonde entre lire un chapitre de manuel sur la discrimination et se tenir dans une salle avec 29 pairs d'Espagne, de Pologne et de France, en faisant un exercice qui révèle comment le privilège opère dans votre propre vie.

Lors de l'échange Cultural Bridges à Varsovie en mai 2025, 30 jeunes participants de trois pays ont passé cinq jours engagés dans des ateliers d'éducation non formelle axés sur l'antiracisme, le dialogue interculturel et l'inclusion sociale.

Des projets comme Cultural Bridges ne sont pas périphériques à l'agenda antiraciste. Ils en sont le cœur. Ils créent les conditions dans lesquelles les jeunes développent les compétences interculturelles, la pensée critique et l'empathie qu'aucun document politique ne peut légiférer.

Nous appelons les décideurs, les organismes de financement et les organisations de jeunesse à augmenter les investissements dans les programmes d'éducation non formelle qui privilégient la rencontre interculturelle.`,
    },
    {
      id: "campagne-sensibilisation",
      tag: "Activité 3",
      title: "La campagne de sensibilisation touche des milliers de jeunes dans trois pays",
      excerpt: "De juin 2025 à mars 2026, les partenaires du projet déploient une campagne de sensibilisation multilingue sur les réseaux sociaux et dans leurs communautés.",
      date: "Septembre 2025",
      content: `Suite au succès de l'échange de Varsovie, les trois partenaires de Cultural Bridges ont lancé une campagne de sensibilisation ambitieuse dans leurs pays respectifs. Cette troisième activité du projet vise à multiplier l'impact de l'échange en touchant un public beaucoup plus large.

La campagne comprend la publication de six articles en quatre langues (anglais, français, espagnol et polonais), des affiches de campagne diffusées dans les réseaux des partenaires, et un pack de contenus pour les réseaux sociaux comprenant des publications prêtes à l'emploi pour Instagram et Facebook.

En Espagne, l'Associació Juvenil Ndiatiguia Joves Units a organisé des présentations dans des centres de jeunesse locaux, touchant plus de 200 jeunes avec des témoignages de participants et des ateliers courts inspirés de l'échange.

En Pologne, UGPA POLSKA a utilisé les réseaux sociaux pour partager des vidéos et des récits de l'échange, générant un engagement significatif auprès de la communauté locale.

En France, Un Geste pour l'Avenir a organisé un événement communautaire rassemblant des jeunes du quartier pour partager les apprentissages du projet et discuter de l'inclusion dans leur contexte local.

Les participants de l'échange sont devenus de véritables ambassadeurs du projet, partageant leurs expériences dans leurs écoles, universités et associations.`,
    },
    {
      id: "guide-pedagogique",
      tag: "Publication",
      title: "Un guide d'éducation interculturelle pour les travailleurs de jeunesse",
      excerpt: "Le projet Cultural Bridges publie un guide pédagogique complet, rassemblant méthodes, activités et outils pour l'éducation interculturelle non formelle.",
      date: "Janvier 2026",
      content: `L'un des livrables majeurs du projet Cultural Bridges est désormais disponible : le Guide d'Éducation Interculturelle. Ce document, élaboré collectivement par les trois organisations partenaires, est destiné aux travailleurs de jeunesse, éducateurs et animateurs souhaitant intégrer l'éducation interculturelle dans leurs pratiques.

Le guide propose une approche structurée basée sur l'expérience du projet, incluant des fondements théoriques sur l'interculturalité, un répertoire d'activités non formelles testées et évaluées lors de l'échange de Varsovie, des conseils pratiques pour l'animation de groupes multiculturels, et des outils d'évaluation des compétences interculturelles.

Il est accompagné d'un Pack de Contenu Pédagogique qui fournit des fiches d'activités détaillées, prêtes à l'emploi, pour des ateliers sur l'antiracisme, la déconstruction des stéréotypes, la communication interculturelle et l'inclusion sociale.

Ces deux documents sont disponibles gratuitement et constituent un héritage durable du projet, utilisable bien au-delà de la période de financement Erasmus+.`,
    },
    {
      id: "plan-durabilite",
      tag: "Stratégie",
      title: "Assurer la pérennité de Cultural Bridges au-delà du financement Erasmus+",
      excerpt: "Le plan de durabilité du projet définit comment les résultats et les pratiques de Cultural Bridges continueront à vivre après mai 2026.",
      date: "Mars 2026",
      content: `À l'approche de la fin du projet, les partenaires de Cultural Bridges ont élaboré un plan de durabilité et d'exploitation visant à assurer la pérennité des résultats au-delà de la période de financement.

Le plan repose sur quatre piliers : la diffusion continue des ressources pédagogiques (guide, pack d'activités, articles) via les sites web et réseaux des partenaires ; le maintien du réseau de jeunes ambassadeurs formés lors du projet ; l'intégration des méthodologies développées dans les activités régulières de chaque organisation partenaire ; et la recherche de nouveaux financements pour des projets de suivi.

Les 30 participants de l'échange continuent à être en contact via un groupe de communication en ligne et plusieurs d'entre eux ont déjà pris des initiatives dans leurs communautés, animant des ateliers dans leurs écoles ou associations.

Le partenariat entre les trois organisations se poursuivra au-delà du projet, avec l'intention de soumettre de nouvelles candidatures Erasmus+ pour approfondir et élargir le travail commencé avec Cultural Bridges.

« Ce projet n'est pas une fin, c'est un début », a déclaré un représentant de l'Associació Juvenil Ndiatiguia Joves Units. « Les ponts que nous avons construits sont solides, et nous comptons bien continuer à les traverser. »`,
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

Associació Juvenil Ndiatiguia Joves Units (Lleida, Spain), the project coordinator, UGPA POLSKA (Warsaw, Poland), and Un Geste pour l'Avenir (Morsang-sur-Orge, France) join forces for an 18-month project with a budget of EUR 60,000.

The objective is ambitious: to create spaces for encounter and learning where 30 young Europeans aged 18 to 30 can develop their intercultural skills, fight stereotypes, and become agents of inclusion in their communities.

The project is structured around three main activities: local preparatory workshops, an international cultural exchange, and awareness campaigns in all three partner countries.`,
    },
    {
      id: "local-workshops",
      tag: "Activity 1",
      title: "Local workshops prepare young people for the international exchange",
      excerpt: "From January to April 2025, each partner country organises preparatory workshops for the 10 young people selected for the Warsaw exchange.",
      date: "January – April 2025",
      content: `During the first quarter of 2025, the three partner organisations held preparatory workshops in their respective countries. These sessions aimed to prepare the 30 participants — 10 per country — for the cultural exchange planned in Warsaw in May.

In Spain, Associació Juvenil Ndiatiguia Joves Units organised sessions on intercultural communication and the basics of non-formal education. Participants explored their own cultural identities and learned how to share them with others.

In Poland, UGPA POLSKA placed emphasis on self-awareness and fighting prejudice, using practical exercises inspired by the Theatre of the Oppressed. Polish participants also prepared cultural presentation elements for the upcoming intercultural evening.

In France, Un Geste pour l'Avenir facilitated workshops on diversity within French society, giving voice to young people from different backgrounds. Participants shared their personal experiences of discrimination and reflected together on solutions.

These workshops created a common foundation of knowledge and expectations, while strengthening cohesion within each national group before the international meeting.`,
    },
    {
      id: "press-release-warsaw",
      tag: "Press release",
      title: "30 Young Europeans Unite in Warsaw to Build Cultural Bridges",
      excerpt: "Thirty young people from three European countries gathered in Warsaw from May 14 to 18, 2025, for a landmark Erasmus+ youth exchange.",
      date: "18 May 2025",
      content: `Thirty young people from three European countries gathered in Warsaw, Poland, from May 14 to 18, 2025, for a landmark youth exchange under the Erasmus+ project "Cultural Bridges." The five-day programme brought together participants from Spain, Poland, and France for intensive workshops, intercultural activities, and collaborative learning focused on combating racism and discrimination.

"Cultural Bridges is about more than a single event. It is about creating a generation of young people who understand that diversity is a strength, not a barrier," said a representative of Associació Juvenil Ndiatiguia Joves Units.

Over the course of five days, participants took part in non-formal education workshops addressing anti-racism, anti-discrimination, and social inclusion. Highlights included an intercultural night where each national group shared traditions, food, music, and stories from their communities, as well as collaborative exercises designed to break down stereotypes and build mutual understanding.

"Our participants returned to France with a renewed commitment to fighting discrimination in their local contexts," noted a representative of Un Geste pour l'Avenir.`,
    },
    {
      id: "participant-testimony",
      tag: "Testimonial",
      title: "What I Learned About Myself by Living with 29 Strangers from 3 Countries",
      excerpt: "I boarded the plane to Warsaw terrified. What I did not expect was that it would change the way I see myself.",
      date: "May 2025",
      content: `I boarded the plane to Warsaw terrified. Not of flying, not of Poland, but of spending five full days with 29 people I had never met. What I did not expect was that it would change the way I see myself.

On the first day, we played a name game, then did a mapping exercise where we placed ourselves on an imaginary map of Europe drawn on the floor. Suddenly, we were laughing. Suddenly, the clusters dissolved.

On day two, we did an exercise about privilege and discrimination. We stood in a line, and the facilitators read statements: "Take a step forward if you have never been stopped by police because of how you look." By the end, we were spread across the room, and the silence was louder than any speech about inequality I had ever heard.

If I had to choose one moment that captured the spirit of Cultural Bridges, it would be the intercultural night on day three. Each country prepared food, music, and dances. But the real magic happened afterwards — we stayed up talking until 2am in broken English, with hand gestures, translation apps, and laughter filling the gaps where words failed.

On the last day, we sat in a circle and each shared one word that summed up the experience. The words people chose — "family," "hope," "courage," "belonging" — told the story better than any report could.

I came home with a different understanding of myself. I learned that I am braver than I thought. I learned that my story matters.`,
    },
    {
      id: "opinion-nfe",
      tag: "Opinion piece",
      title: "Why Non-Formal Education Is the Key to Fighting Racism Among Youth",
      excerpt: "Europe has a racism problem, and traditional education alone is not solving it. We believe the answer lies in non-formal education.",
      date: "June 2025",
      content: `Europe has a racism problem, and traditional education alone is not solving it. At the Cultural Bridges project, we believe the answer lies in a shift from talking about inclusion to practising it — and non-formal education is the method that makes this possible.

Formal education teaches young people that racism is wrong. Non-formal education lets them feel why. There is a profound difference between reading a textbook chapter on discrimination and standing in a room with 29 peers from Spain, Poland, and France, doing an exercise that reveals how privilege operates in your own life. The first informs. The second transforms.

During the Cultural Bridges youth exchange in Warsaw in May 2025, 30 young participants from three countries spent five days engaged in non-formal education workshops focused on anti-racism, intercultural dialogue, and social inclusion.

Projects like Cultural Bridges are not peripheral to the anti-racism agenda. They are central to it. They create the conditions under which young people develop the intercultural competences, critical thinking, and empathy that no policy document can legislate into existence.

We call on policymakers, funding bodies, and youth organisations to increase investment in non-formal education programmes that prioritise intercultural encounter. The evidence is clear. The methodology is proven. The young people are ready.`,
    },
    {
      id: "awareness-campaign",
      tag: "Activity 3",
      title: "The awareness campaign reaches thousands of young people in three countries",
      excerpt: "From June 2025 to March 2026, project partners deploy a multilingual awareness campaign on social media and in their communities.",
      date: "September 2025",
      content: `Following the success of the Warsaw exchange, the three Cultural Bridges partners launched an ambitious awareness campaign in their respective countries. This third project activity aims to multiply the impact of the exchange by reaching a much wider audience.

The campaign includes the publication of six articles in four languages (English, French, Spanish, and Polish), campaign posters distributed through partner networks, and a social media content pack with ready-to-post publications for Instagram and Facebook.

In Spain, Associació Juvenil Ndiatiguia Joves Units organised presentations in local youth centres, reaching over 200 young people with participant testimonials and short workshops inspired by the exchange.

In Poland, UGPA POLSKA used social media to share videos and stories from the exchange, generating significant engagement from the local community.

In France, Un Geste pour l'Avenir organised a community event bringing together neighbourhood youth to share the project's learnings and discuss inclusion in their local context.

Exchange participants became true project ambassadors, sharing their experiences in their schools, universities, and associations.`,
    },
    {
      id: "pedagogical-guide",
      tag: "Publication",
      title: "An intercultural education guide for youth workers",
      excerpt: "The Cultural Bridges project publishes a comprehensive pedagogical guide, gathering methods, activities, and tools for non-formal intercultural education.",
      date: "January 2026",
      content: `One of the major deliverables of the Cultural Bridges project is now available: the Intercultural Education Guide. This document, developed collectively by the three partner organisations, is intended for youth workers, educators, and facilitators who wish to integrate intercultural education into their practices.

The guide offers a structured approach based on the project's experience, including theoretical foundations on interculturality, a repertoire of non-formal activities tested and evaluated during the Warsaw exchange, practical advice for facilitating multicultural groups, and tools for evaluating intercultural competences.

It is accompanied by a Pedagogical Content Pack providing detailed, ready-to-use activity sheets for workshops on anti-racism, stereotype deconstruction, intercultural communication, and social inclusion.

Both documents are available free of charge and constitute a lasting legacy of the project, usable well beyond the Erasmus+ funding period.`,
    },
    {
      id: "sustainability-plan",
      tag: "Strategy",
      title: "Ensuring the sustainability of Cultural Bridges beyond Erasmus+ funding",
      excerpt: "The project's sustainability plan defines how Cultural Bridges results and practices will continue to live after May 2026.",
      date: "March 2026",
      content: `As the project approaches its end, the Cultural Bridges partners have developed a sustainability and exploitation plan to ensure the longevity of results beyond the funding period.

The plan rests on four pillars: continued dissemination of pedagogical resources (guide, activity pack, articles) through partner websites and networks; maintaining the network of youth ambassadors trained during the project; integrating the methodologies developed into each partner organisation's regular activities; and seeking new funding for follow-up projects.

The 30 exchange participants remain in contact via an online communication group, and several have already taken initiatives in their communities, facilitating workshops in their schools or associations.

The partnership between the three organisations will continue beyond the project, with the intention of submitting new Erasmus+ applications to deepen and expand the work begun with Cultural Bridges.

"This project is not an end, it's a beginning," said a representative of Associació Juvenil Ndiatiguia Joves Units. "The bridges we built are strong, and we intend to keep crossing them."`,
    },
  ],
  es: [
    {
      id: "lanzamiento",
      tag: "Noticia",
      title: "Cultural Bridges: un nuevo proyecto Erasmus+ para la juventud europea",
      excerpt: "En diciembre de 2024, tres organizaciones juveniles de España, Polonia y Francia lanzan una asociación Erasmus+ KA210-YOU para fortalecer la interculturalidad y la inclusión social.",
      date: "Diciembre 2024",
      content: `El proyecto Cultural Bridges se lanzó oficialmente en diciembre de 2024. Esta asociación a pequeña escala (KA210-YOU) del programa Erasmus+ reúne a tres organizaciones juveniles de tres países europeos.

La Associació Juvenil Ndiatiguia Joves Units (Lleida, España), coordinadora del proyecto, UGPA POLSKA (Varsovia, Polonia) y Un Geste pour l'Avenir (Morsang-sur-Orge, Francia) unen fuerzas para un proyecto de 18 meses con un presupuesto de 60 000 euros.

El objetivo es ambicioso: crear espacios de encuentro y aprendizaje donde 30 jóvenes europeos de 18 a 30 años puedan desarrollar sus competencias interculturales, luchar contra los estereotipos y convertirse en agentes de inclusión en sus comunidades.

El proyecto se estructura en torno a tres actividades principales: talleres locales de preparación, un intercambio cultural internacional y campañas de sensibilización en los tres países socios.`,
    },
    {
      id: "talleres-locales",
      tag: "Actividad 1",
      title: "Los talleres locales preparan a los jóvenes para el intercambio internacional",
      excerpt: "De enero a abril de 2025, cada país socio organiza talleres preparatorios para los 10 jóvenes seleccionados para el intercambio de Varsovia.",
      date: "Enero – Abril 2025",
      content: `Durante el primer trimestre de 2025, las tres organizaciones socias organizaron talleres preparatorios en sus respectivos países. Estas sesiones tenían como objetivo preparar a los 30 participantes — 10 por país — para el intercambio cultural previsto en Varsovia en mayo.

En España, los talleres se centraron en la comunicación intercultural y las bases de la educación no formal. Los participantes exploraron sus propias identidades culturales y aprendieron a compartirlas con los demás.

En Polonia, UGPA POLSKA puso énfasis en el autoconocimiento y la lucha contra los prejuicios, con ejercicios prácticos inspirados en el Teatro del Oprimido. Los jóvenes polacos también prepararon elementos de presentación cultural para la futura noche intercultural.

En Francia, Un Geste pour l'Avenir realizó talleres sobre la diversidad en la sociedad francesa, dando voz a jóvenes de diferentes orígenes. Los participantes compartieron sus experiencias personales frente a la discriminación y reflexionaron juntos sobre soluciones.

Estos talleres crearon una base común de conocimientos y expectativas, fortaleciendo la cohesión dentro de cada grupo nacional antes del encuentro internacional.`,
    },
    {
      id: "nota-prensa-varsovia",
      tag: "Nota de prensa",
      title: "30 jóvenes europeos se reúnen en Varsovia para construir puentes culturales",
      excerpt: "Treinta jóvenes de tres países europeos se reunieron en Varsovia del 14 al 18 de mayo de 2025 para un intercambio juvenil Erasmus+.",
      date: "18 de mayo de 2025",
      content: `Treinta jóvenes de tres países europeos se reunieron en Varsovia, Polonia, del 14 al 18 de mayo de 2025, en el marco del proyecto Erasmus+ «Cultural Bridges». Durante cinco días, los participantes de España, Polonia y Francia tomaron parte en talleres intensivos, actividades interculturales y aprendizajes colaborativos centrados en la lucha contra el racismo y la discriminación.

«Cultural Bridges va más allá de un evento puntual. Es un proyecto que busca formar una generación de jóvenes convencidos de que la diversidad es una fortaleza, no una barrera», declaró un representante de la Associació Juvenil Ndiatiguia Joves Units.

Entre los momentos destacados, una noche intercultural donde cada delegación nacional compartió sus tradiciones, gastronomía, música e historias, así como ejercicios colaborativos diseñados para romper estereotipos y fomentar la comprensión mutua.

«Nuestros participantes regresaron a Francia con un compromiso renovado en la lucha contra la discriminación en sus contextos locales», señaló un representante de Un Geste pour l'Avenir.`,
    },
    {
      id: "testimonio",
      tag: "Testimonio",
      title: "Lo que aprendí sobre mí mismo viviendo con 29 desconocidos de 3 países",
      excerpt: "Subí al avión hacia Varsovia aterrorizado. Lo que no esperaba era que cambiaría la forma en que me veo a mí mismo.",
      date: "Mayo 2025",
      content: `Subí al avión hacia Varsovia aterrorizado. No del vuelo, no de Polonia, sino de pasar cinco días con 29 personas que nunca había conocido. Lo que no esperaba era que cambiaría la forma en que me veo.

El segundo día hicimos un ejercicio sobre privilegio y discriminación. Nos pusimos en fila y los facilitadores leían afirmaciones: «Da un paso adelante si nunca te han parado la policía por tu aspecto.» Al final, estábamos dispersos por la sala, y el silencio era más fuerte que cualquier discurso sobre la desigualdad.

La noche intercultural del tercer día fue el corazón del intercambio. Cada país preparó comida, música, bailes. Pero la verdadera magia ocurrió después: nos quedamos hablando hasta las dos de la mañana, en inglés aproximado, con gestos, aplicaciones de traducción y risas llenando los vacíos.

El último día, cada uno compartió una palabra que resumía la experiencia: «familia», «esperanza», «valor», «pertenencia». Volví a casa con una comprensión diferente de mí mismo. Aprendí que soy más valiente de lo que pensaba. Aprendí que mi historia importa.`,
    },
    {
      id: "opinion-enf",
      tag: "Artículo de opinión",
      title: "Por qué la educación no formal es la clave para combatir el racismo entre los jóvenes",
      excerpt: "Europa tiene un problema de racismo y la educación tradicional por sí sola no lo está resolviendo. Creemos que la respuesta está en la educación no formal.",
      date: "Junio 2025",
      content: `Europa tiene un problema de racismo y la educación tradicional por sí sola no lo está resolviendo. En el proyecto Cultural Bridges creemos que la respuesta está en pasar de hablar de inclusión a practicarla — y la educación no formal es el método que lo hace posible.

La educación formal enseña a los jóvenes que el racismo está mal. La educación no formal les hace sentir por qué. Hay una diferencia profunda entre leer un capítulo de un libro de texto sobre discriminación y estar en una sala con 29 compañeros de España, Polonia y Francia, haciendo un ejercicio que revela cómo opera el privilegio en tu propia vida.

Proyectos como Cultural Bridges no son periféricos en la agenda antirracista. Son centrales. Crean las condiciones bajo las cuales los jóvenes desarrollan competencias interculturales, pensamiento crítico y empatía que ningún documento político puede legislar.

Hacemos un llamamiento a los responsables políticos, organismos de financiación y organizaciones juveniles para que aumenten la inversión en programas de educación no formal que prioricen el encuentro intercultural.`,
    },
    {
      id: "campana-sensibilizacion",
      tag: "Actividad 3",
      title: "La campaña de sensibilización llega a miles de jóvenes en tres países",
      excerpt: "De junio de 2025 a marzo de 2026, los socios del proyecto despliegan una campaña de sensibilización multilingüe.",
      date: "Septiembre 2025",
      content: `Tras el éxito del intercambio de Varsovia, los tres socios de Cultural Bridges lanzaron una ambiciosa campaña de sensibilización en sus respectivos países. Esta tercera actividad del proyecto busca multiplicar el impacto del intercambio llegando a un público mucho más amplio.

La campaña incluye la publicación de seis artículos en cuatro idiomas (inglés, francés, español y polaco), carteles de campaña distribuidos a través de las redes de los socios, y un paquete de contenidos para redes sociales con publicaciones listas para Instagram y Facebook.

En España, la Associació Juvenil Ndiatiguia Joves Units organizó presentaciones en centros juveniles locales, llegando a más de 200 jóvenes con testimonios de participantes y talleres cortos inspirados en el intercambio.

En Polonia, UGPA POLSKA utilizó las redes sociales para compartir vídeos y relatos del intercambio, generando un engagement significativo en la comunidad local.

En Francia, Un Geste pour l'Avenir organizó un evento comunitario reuniendo a jóvenes del barrio para compartir los aprendizajes del proyecto y discutir sobre inclusión en su contexto local.

Los participantes del intercambio se convirtieron en verdaderos embajadores del proyecto, compartiendo sus experiencias en sus escuelas, universidades y asociaciones.`,
    },
    {
      id: "guia-pedagogica",
      tag: "Publicación",
      title: "Una guía de educación intercultural para trabajadores de juventud",
      excerpt: "El proyecto Cultural Bridges publica una guía pedagógica completa con métodos, actividades y herramientas para la educación intercultural no formal.",
      date: "Enero 2026",
      content: `Uno de los principales entregables del proyecto Cultural Bridges ya está disponible: la Guía de Educación Intercultural. Este documento, elaborado colectivamente por las tres organizaciones socias, está destinado a trabajadores de juventud, educadores y facilitadores que deseen integrar la educación intercultural en sus prácticas.

La guía ofrece un enfoque estructurado basado en la experiencia del proyecto, incluyendo fundamentos teóricos sobre interculturalidad, un repertorio de actividades no formales probadas y evaluadas durante el intercambio de Varsovia, consejos prácticos para la facilitación de grupos multiculturales, y herramientas de evaluación de competencias interculturales.

Va acompañada de un Pack de Contenido Pedagógico que proporciona fichas de actividades detalladas, listas para usar, para talleres sobre antirracismo, deconstrucción de estereotipos, comunicación intercultural e inclusión social.

Ambos documentos están disponibles gratuitamente y constituyen un legado duradero del proyecto, utilizable mucho más allá del periodo de financiación Erasmus+.`,
    },
    {
      id: "plan-sostenibilidad",
      tag: "Estrategia",
      title: "Asegurar la sostenibilidad de Cultural Bridges más allá de la financiación Erasmus+",
      excerpt: "El plan de sostenibilidad del proyecto define cómo los resultados y prácticas de Cultural Bridges continuarán vivos después de mayo de 2026.",
      date: "Marzo 2026",
      content: `Al acercarse el final del proyecto, los socios de Cultural Bridges han elaborado un plan de sostenibilidad y explotación para asegurar la longevidad de los resultados más allá del periodo de financiación.

El plan se basa en cuatro pilares: difusión continua de los recursos pedagógicos (guía, pack de actividades, artículos) a través de los sitios web y redes de los socios; mantenimiento de la red de jóvenes embajadores formados durante el proyecto; integración de las metodologías desarrolladas en las actividades regulares de cada organización socia; y búsqueda de nuevas financiaciones para proyectos de seguimiento.

Los 30 participantes del intercambio siguen en contacto a través de un grupo de comunicación en línea y varios de ellos ya han tomado iniciativas en sus comunidades, facilitando talleres en sus escuelas o asociaciones.

La asociación entre las tres organizaciones continuará más allá del proyecto, con la intención de presentar nuevas candidaturas Erasmus+ para profundizar y ampliar el trabajo iniciado con Cultural Bridges.

«Este proyecto no es un final, es un comienzo», declaró un representante de la Associació Juvenil Ndiatiguia Joves Units. «Los puentes que hemos construido son sólidos, y pensamos seguir cruzándolos.»`,
    },
  ],
  pl: [
    {
      id: "start-projektu",
      tag: "Aktualności",
      title: "Cultural Bridges: nowy projekt Erasmus+ dla europejskiej młodzieży",
      excerpt: "W grudniu 2024 trzy organizacje młodzieżowe z Hiszpanii, Polski i Francji uruchamiają partnerstwo Erasmus+ KA210-YOU na rzecz międzykulturowości i włączenia społecznego.",
      date: "Grudzień 2024",
      content: `Projekt Cultural Bridges został oficjalnie uruchomiony w grudniu 2024 roku. To partnerstwo na małą skalę (KA210-YOU) w ramach programu Erasmus+ łączy trzy organizacje młodzieżowe z trzech krajów europejskich.

Associació Juvenil Ndiatiguia Joves Units (Lleida, Hiszpania), koordynator projektu, UGPA POLSKA (Warszawa, Polska) i Un Geste pour l'Avenir (Morsang-sur-Orge, Francja) łączą siły na 18-miesięczny projekt z budżetem 60 000 euro.

Cel jest ambitny: stworzyć przestrzenie spotkania i nauki, w których 30 młodych Europejczyków w wieku 18–30 lat może rozwijać swoje kompetencje międzykulturowe, walczyć ze stereotypami i stać się agentami włączenia w swoich społecznościach.

Projekt jest zorganizowany wokół trzech głównych działań: lokalnych warsztatów przygotowawczych, międzynarodowej wymiany kulturowej oraz kampanii świadomościowych we wszystkich trzech krajach partnerskich.`,
    },
    {
      id: "warsztaty-lokalne",
      tag: "Działanie 1",
      title: "Lokalne warsztaty przygotowują młodzież do międzynarodowej wymiany",
      excerpt: "Od stycznia do kwietnia 2025 każdy kraj partnerski organizuje warsztaty przygotowawcze dla 10 młodych osób wybranych do wymiany w Warszawie.",
      date: "Styczeń – Kwiecień 2025",
      content: `W pierwszym kwartale 2025 roku trzy organizacje partnerskie przeprowadziły warsztaty przygotowawcze w swoich krajach. Celem sesji było przygotowanie 30 uczestników — 10 z każdego kraju — do wymiany kulturowej zaplanowanej na maj w Warszawie.

W Hiszpanii Associació Juvenil Ndiatiguia Joves Units zorganizowała sesje dotyczące komunikacji międzykulturowej i podstaw edukacji pozaformalnej. Uczestnicy eksplorowali własne tożsamości kulturowe i uczyli się, jak je dzielić z innymi.

W Polsce UGPA POLSKA położyła nacisk na samoświadomość i walkę z uprzedzeniami, wykorzystując ćwiczenia praktyczne inspirowane Teatrem Uciśnionych. Polscy uczestnicy przygotowali również elementy prezentacji kulturowej na przyszły wieczór międzykulturowy.

We Francji Un Geste pour l'Avenir prowadziło warsztaty na temat różnorodności we francuskim społeczeństwie, dając głos młodym ludziom z różnych środowisk. Uczestnicy dzielili się swoimi osobistymi doświadczeniami z dyskryminacją i wspólnie szukali rozwiązań.

Te warsztaty stworzyły wspólną bazę wiedzy i oczekiwań, wzmacniając spójność w każdej grupie narodowej przed międzynarodowym spotkaniem.`,
    },
    {
      id: "komunikat-warszawa",
      tag: "Komunikat prasowy",
      title: "30 młodych Europejczyków jednoczy się w Warszawie, aby budować mosty kulturowe",
      excerpt: "Trzydziestu młodych ludzi z trzech krajów europejskich spotkało się w Warszawie w dniach 14–18 maja 2025 r. na wymianę młodzieżową Erasmus+.",
      date: "18 maja 2025",
      content: `Trzydziestu młodych ludzi z trzech krajów europejskich spotkało się w Warszawie w dniach 14–18 maja 2025 roku w ramach projektu Erasmus+ „Cultural Bridges". Przez pięć dni uczestnicy z Hiszpanii, Polski i Francji brali udział w intensywnych warsztatach, działaniach międzykulturowych i wspólnym uczeniu się, skoncentrowanym na walce z rasizmem i dyskryminacją.

„Cultural Bridges to więcej niż pojedyncze wydarzenie. To projekt, który ma na celu ukształtowanie pokolenia młodych ludzi przekonanych, że różnorodność jest siłą, a nie barierą", powiedział przedstawiciel Associació Juvenil Ndiatiguia Joves Units.

Wśród najważniejszych momentów znalazła się noc międzykulturowa, podczas której każda delegacja narodowa dzieliła się swoimi tradycjami, kuchnią, muzyką i historiami, a także ćwiczenia zespołowe zaprojektowane w celu przełamywania stereotypów i budowania wzajemnego zrozumienia.

„Nasi uczestnicy wrócili do Francji z odnowionym zaangażowaniem w walkę z dyskryminacją w swoich lokalnych kontekstach", podkreślił przedstawiciel Un Geste pour l'Avenir.`,
    },
    {
      id: "swiadectwo-uczestnika",
      tag: "Świadectwo",
      title: "Czego nauczyłem się o sobie, żyjąc z 29 nieznajomymi z 3 krajów",
      excerpt: "Wsiadłem do samolotu do Warszawy przerażony. Nie spodziewałem się, że to zmieni sposób, w jaki postrzegam siebie.",
      date: "Maj 2025",
      content: `Wsiadłem do samolotu do Warszawy przerażony. Nie lotów, nie Polski, ale spędzenia pięciu pełnych dni z 29 osobami, których nigdy nie spotkałem. Nie spodziewałem się, że to zmieni sposób, w jaki postrzegam siebie.

Pierwszego dnia zagraliśmy w grę z imionami, a potem wykonaliśmy ćwiczenie, w którym ustawiliśmy się na wyimaginowanej mapie Europy narysowanej na podłodze. Nagle się śmialiśmy. Nagle grupki się rozwiązały.

Drugiego dnia zrobiliśmy ćwiczenie o przywilejach i dyskryminacji. Staliśmy w linii, a prowadzący odczytywali stwierdzenia: „Zrób krok do przodu, jeśli nigdy nie zostałeś zatrzymany przez policję ze względu na swój wygląd." Na końcu byliśmy rozrzuceni po sali, a cisza była głośniejsza niż jakiekolwiek przemówienie o nierówności.

Gdybym miał wybrać jeden moment oddający ducha Cultural Bridges, byłby to wieczór międzykulturowy trzeciego dnia. Każdy kraj przygotował jedzenie, muzykę, tańce. Ale prawdziwa magia wydarzyła się potem — rozmawialiśmy do drugiej w nocy, w łamanym angielskim, z gestami, aplikacjami do tłumaczenia i śmiechem wypełniającym luki.

Ostatniego dnia każdy podzielił się jednym słowem podsumowującym doświadczenie: „rodzina", „nadzieja", „odwaga", „przynależność". Wróciłem do domu z innym rozumieniem siebie. Nauczyłem się, że jestem odważniejszy, niż myślałem. Nauczyłem się, że moja historia ma znaczenie.`,
    },
    {
      id: "opinia-enf",
      tag: "Artykuł opiniotwórczy",
      title: "Dlaczego edukacja pozaformalna jest kluczem do walki z rasizmem wśród młodzieży",
      excerpt: "Europa ma problem z rasizmem, a tradycyjna edukacja sama go nie rozwiązuje. Wierzymy, że odpowiedź leży w edukacji pozaformalnej.",
      date: "Czerwiec 2025",
      content: `Europa ma problem z rasizmem, a tradycyjna edukacja sama go nie rozwiązuje. W projekcie Cultural Bridges wierzymy, że odpowiedź leży w przejściu od mówienia o włączeniu do jego praktykowania — a edukacja pozaformalna jest metodą, która to umożliwia.

Edukacja formalna uczy młodych ludzi, że rasizm jest zły. Edukacja pozaformalna pozwala im poczuć dlaczego. Jest ogromna różnica między czytaniem podręcznika o dyskryminacji a staniem w sali z 29 rówieśnikami z Hiszpanii, Polski i Francji, wykonując ćwiczenie, które ujawnia, jak przywilej działa w twoim własnym życiu.

Projekty takie jak Cultural Bridges nie są peryferyjne dla agendy antyrasistowskiej. Są dla niej centralne. Tworzą warunki, w których młodzi ludzie rozwijają kompetencje międzykulturowe, krytyczne myślenie i empatię, których żaden dokument polityczny nie może uchwalić.

Wzywamy decydentów, instytucje finansujące i organizacje młodzieżowe do zwiększenia inwestycji w programy edukacji pozaformalnej, które stawiają na spotkanie międzykulturowe.`,
    },
    {
      id: "kampania-swiadomosciowa",
      tag: "Działanie 3",
      title: "Kampania świadomościowa dociera do tysięcy młodych ludzi w trzech krajach",
      excerpt: "Od czerwca 2025 do marca 2026 partnerzy projektu prowadzą wielojęzyczną kampanię świadomościową w mediach społecznościowych i swoich społecznościach.",
      date: "Wrzesień 2025",
      content: `Po sukcesie wymiany w Warszawie trzej partnerzy Cultural Bridges uruchomili ambitną kampanię świadomościową w swoich krajach. To trzecie działanie projektu ma na celu zwielokrotnienie wpływu wymiany poprzez dotarcie do znacznie szerszej publiczności.

Kampania obejmuje publikację sześciu artykułów w czterech językach (angielskim, francuskim, hiszpańskim i polskim), plakaty kampanii dystrybuowane przez sieci partnerów oraz pakiet treści do mediów społecznościowych z gotowymi do publikacji postami na Instagram i Facebook.

W Hiszpanii Associació Juvenil Ndiatiguia Joves Units zorganizowała prezentacje w lokalnych centrach młodzieżowych, docierając do ponad 200 młodych ludzi z relacjami uczestników i krótkimi warsztatami inspirowanymi wymianą.

W Polsce UGPA POLSKA wykorzystała media społecznościowe do udostępniania filmów i relacji z wymiany, generując znaczące zaangażowanie społeczności lokalnej.

We Francji Un Geste pour l'Avenir zorganizowało wydarzenie społeczne, gromadząc młodych ludzi z okolicy, aby dzielić się zdobytą wiedzą i dyskutować o włączeniu w lokalnym kontekście.

Uczestnicy wymiany stali się prawdziwymi ambasadorami projektu, dzieląc się swoimi doświadczeniami w szkołach, na uczelniach i w stowarzyszeniach.`,
    },
    {
      id: "przewodnik-pedagogiczny",
      tag: "Publikacja",
      title: "Przewodnik po edukacji międzykulturowej dla pracowników młodzieżowych",
      excerpt: "Projekt Cultural Bridges publikuje kompleksowy przewodnik pedagogiczny z metodami, działaniami i narzędziami do pozaformalnej edukacji międzykulturowej.",
      date: "Styczeń 2026",
      content: `Jeden z głównych rezultatów projektu Cultural Bridges jest już dostępny: Przewodnik po Edukacji Międzykulturowej. Ten dokument, opracowany wspólnie przez trzy organizacje partnerskie, jest przeznaczony dla pracowników młodzieżowych, edukatorów i facylitatorów, którzy chcą włączyć edukację międzykulturową do swoich praktyk.

Przewodnik oferuje ustrukturyzowane podejście oparte na doświadczeniu projektu, w tym podstawy teoretyczne międzykulturowości, repertuar działań pozaformalnych przetestowanych i zewaluowanych podczas wymiany w Warszawie, praktyczne porady dotyczące facylitacji grup wielokulturowych oraz narzędzia do oceny kompetencji międzykulturowych.

Towarzyszy mu Pakiet Treści Pedagogicznych zawierający szczegółowe, gotowe do użycia karty aktywności do warsztatów na temat antyrasizmu, dekonstrukcji stereotypów, komunikacji międzykulturowej i włączenia społecznego.

Oba dokumenty są dostępne bezpłatnie i stanowią trwałe dziedzictwo projektu, możliwe do wykorzystania daleko poza okresem finansowania Erasmus+.`,
    },
    {
      id: "plan-zrownowazonego-rozwoju",
      tag: "Strategia",
      title: "Zapewnienie trwałości Cultural Bridges po zakończeniu finansowania Erasmus+",
      excerpt: "Plan zrównoważonego rozwoju projektu określa, jak wyniki i praktyki Cultural Bridges będą kontynuowane po maju 2026.",
      date: "Marzec 2026",
      content: `W miarę zbliżania się końca projektu partnerzy Cultural Bridges opracowali plan zrównoważonego rozwoju i eksploatacji, mający zapewnić trwałość wyników poza okresem finansowania.

Plan opiera się na czterech filarach: ciągła dystrybucja zasobów pedagogicznych (przewodnik, pakiet aktywności, artykuły) poprzez strony internetowe i sieci partnerów; utrzymanie sieci młodych ambasadorów przeszkolonych w ramach projektu; włączenie opracowanych metodologii do regularnych działań każdej organizacji partnerskiej; poszukiwanie nowych źródeł finansowania na projekty kontynuacyjne.

30 uczestników wymiany pozostaje w kontakcie poprzez grupę komunikacyjną online, a kilku z nich podjęło już inicjatywy w swoich społecznościach, prowadząc warsztaty w szkołach lub stowarzyszeniach.

Partnerstwo między trzema organizacjami będzie kontynuowane poza projektem, z zamiarem składania nowych wniosków Erasmus+ w celu pogłębienia i rozszerzenia pracy rozpoczętej w ramach Cultural Bridges.

„Ten projekt to nie koniec, to początek", powiedział przedstawiciel Associació Juvenil Ndiatiguia Joves Units. „Mosty, które zbudowaliśmy, są mocne, i zamierzamy dalej po nich chodzić."`,
    },
  ],
};

export function getArticles(lang: Locale): Article[] {
  return [...(articlesByLang[lang] || articlesByLang.en)].reverse();
}
