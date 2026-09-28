export interface ProjectLink {
  demo?: string;
  code?: string;
  report?: string;
}

export interface ProjectKpi {
  value: string;
  label: string;
}

export interface ProjectStep {
  title: string;
  text: string;
  image?: string;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
  image?: string;
}

export interface ProjectGalleryItem {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  serviceId: number;
  title: string;
  tagline: string;
  cover: string;
  date: string;
  role: string;
  stack: string[];
  links: ProjectLink;
  context: string[];
  kpis: ProjectKpi[];
  steps: ProjectStep[];
  challenges: ProjectChallenge[];
  lessons: string[];
  limits: string[];
  next: string[];
  gallery: ProjectGalleryItem[];
}

const atlasSlug = "economie-numerique-togo";
const accesElectriciteSlug = "acces-electricite-togo";
const accesEauPotableSlug = "acces-eau-potable-togo";
const healthMapSlug = "health-map";

function filePath(file: string) {
  return `images/data_analysis/${file}`;
}

export const projects: Project[] = [
  {
    slug: atlasSlug,
    serviceId: 3,
    title: "Atlas de l'économie numérique du Togo",
    tagline:
      "Où l'accès aux services numériques manque-t-il au Togo ? Un diagnostic par préfecture et par canton, construit à partir de données ouvertes.",
    cover: filePath("economie-numerique-tg/project4.png"),
    date: "Septembre 2026",
    role: "Togo AI Lab · Data challenge Économie numérique (Défi 1) · Septembre 2026 · Projet individuel (données, dashboard, rapport)",
    stack: ["Python", "pandas", "GeoPandas", "Streamlit", "Plotly", "Folium"],
    links: {
      demo: "https://togo-diagnostic-acces-numerique.streamlit.app/",
    },
    context: [
      "Au Togo, on envoie de l'argent et on paie avec son téléphone grâce au « mobile money ». Cela passe par des agents installés dans les villes et les villages, et par les agences des opérateurs Togocom et Moov.",
      "La question du défi était simple : ces services sont-ils accessibles à tous, ou concentrés à quelques endroits ? Pour y répondre, j'ai croisé des données ouvertes (agences, centres de données, près de 20 000 agents mobile money) avec le recensement de 2022 (8 095 498 habitants), puis j'en ai tiré des priorités d'action.",
    ],
    kpis: [
      {
        value: "58 %",
        label:
          "des 93 sites recensés (agences et datacenters) sont dans la seule région Maritime, celle de Lomé",
      },
      {
        value: "×12,7",
        label:
          "d'écart en points mobile money pour 10 000 habitants entre Tchaoudjo (58,7) et Kpendjal (4,6)",
      },
      {
        value: "12 sur 39",
        label: "préfectures sans aucun site recensé",
      },
      {
        value: "59,5 km",
        label:
          "entre le canton le plus isolé (Mandouri) et le point d'accès le plus proche",
      },
    ],
    steps: [
      {
        title: "Auditer les données.",
        text: "Six fichiers, vérifiés avant toute analyse : doublons, fichier vide, valeurs « Nsp » (ne sait pas), accolades héritées de l'export.",
      },
      {
        title: "Construire un pipeline propre.",
        text: "Nettoyage, fusions et calculs sont faits une seule fois en amont (pandas, GeoPandas), puis exportés en Parquet et GeoJSON. Le dashboard se contente de lire ces tables, ce qui le rend rapide et reproductible.",
      },
      {
        title: "Concevoir les indicateurs.",
        text: `Quatre lectures, chacune reposant sur une seule variable mesurée, sans score composite :

la répartition des sites par région ;
les points mobile money pour 10 000 habitants, par préfecture ;
le lien entre population et nombre de sites (corrélation r = 0,935) ;
la distance au point d'accès le plus proche, par canton.

Pour cette dernière, je n'avais pas les frontières des cantons. J'ai donc approximé le centre de chaque canton par la position moyenne de ses agents mobile money, puis mesuré (en mètres, projection UTM 31N) la distance jusqu'au point d'accès actif le plus proche. Les cantons sont ensuite classés en quatre groupes égaux.`,
      },
      {
        title: "Concevoir le dashboard.",
        text: "Sept pages, avec une phrase de conclusion par page. Les textes d'interprétation sont calculés à partir des données, et chaque graphique complexe a un bouton « ? » qui explique comment le lire.",
      },
      {
        title: "Formuler les recommandations.",
        text: "Cinq recommandations, chacune reliée à la figure qui la justifie.",
      },
    ],
    challenges: [
      {
        problem:
          "Un fichier qui comptait chaque agence deux fois\n\nle fichier « Télécom » (90 lignes) était la fusion exacte des fichiers Togocom (62) et Moov (28).",
        solution:
          "vérification ligne à ligne, puis un seul des deux jeux conservé. Sinon, tous les totaux étaient doublés.",
      },
      {
        problem:
          "Lomé écrasait la carte de chaleur\n\navec le nombre brut d'agents, Lomé (32,9 % des agents) était la seule zone visible.",
        solution:
          "j'ai comparé trois pondérations. Le logarithme faisait apparaître Kara presque aussi « chaude » que Lomé (94 %), alors qu'elle compte 6,4 % des agents. J'ai retenu la racine carrée (Kara à 61 %), qui révèle les pôles secondaires sans gommer l'écart réel.",
        image: filePath("lome-avant-apres.png"),
      },
      {
        problem:
          "Aucune donnée de couverture réseau\n\nimpossible de mesurer le signal téléphonique.",
        solution:
          "un indicateur de distance à un point d'accès physique, nommé pour ce qu'il mesure, avec la limite affichée en haut de la page concernée.",
      },
      {
        problem:
          "Un fichier CANAL+ vide\n\naucune ligne dans les données ouvertes.",
        solution:
          "l'absence est affichée (« 0 agence recensée »), pas masquée, et la cinquième recommandation demande ce recensement.",
      },
    ],
    lessons: [
      "Une donnée absente est un résultat, pas un trou à cacher.",
      "Un choix de visualisation change ce qu'on croit lire : il faut en tester plusieurs et revérifier les proportions réelles.",
      "Un indicateur doit porter le nom de ce qu'il mesure, pas celui de ce qu'on aurait aimé mesurer.",
    ],
    limits: [
      "Mesurer la couverture radio du réseau cellulaire.",
      "Calculer une densité au km² (pas de frontières administratives).",
      "Diagnostiquer le réseau CANAL+.",
    ],
    next: [
      "Les frontières officielles des 39 préfectures et des 372 cantons.",
      "Des données de couverture par opérateur.",
      "Des mises à jour régulières des sources, pour suivre l'évolution du réseau.",
    ],
    gallery: [
      {
        src: filePath("vue-ensemble.png"),
        caption: "Vue d'ensemble : les quatre écarts côte à côte",
      },
      {
        src: filePath("infrastructure-telecom.png"),
        caption:
          "Infrastructure télécom : 93 sites, dont 58 % en région Maritime",
      },
      {
        src: filePath("mobile-money.png"),
        caption:
          "Mobile money : carte de densité et classement des préfectures",
      },
      {
        src: filePath("infrastructures-demographie.png"),
        caption:
          "Infrastructures et démographie : chaque point est une préfecture",
      },
      {
        src: filePath("proximite.png"),
        caption:
          "Proximité : les cantons classés en quatre groupes de distance",
      },
      {
        src: filePath("recommandations.png"),
        caption:
          "Recommandations : cinq actions, chacune reliée à sa figure d'origine",
      },
      {
        src: filePath("rapport.png"),
        caption: "Rapport : les diapositives de synthèse",
      },
    ],
  },
  {
    slug: accesElectriciteSlug,
    serviceId: 3,
    title: "Électricité, énergie propre et forêts au Togo, un diagnostic croisé",
    tagline:
      "Peut-on électrifier les campagnes togolaises sans faire reculer les forêts ?",
    cover: filePath("project1.png"),
    date: "Août 2026",
    role: "Analyse des données, développement du tableau de bord, rédaction du rapport.",
    stack: [
      "Python",
      "pandas",
      "GeoPandas",
      "Plotly",
      "Streamlit",
      "Parquet",
      "GeoJSON",
    ],
    links: {},
    context: [
      "Le Togo veut garantir l'accès à l'électricité pour tous d'ici 2030. Les villes sont bien desservies, les campagnes beaucoup moins. En 2017, 89,4 % des ménages cuisinaient surtout au bois ou au charbon de bois, ce qui pèse sur les forêts.",
      "Ce projet répond à un défi du Togo AI Lab, qui propose régulièrement des défis d'analyse de données ouvertes (des données publiques, réutilisables librement). À partir de six jeux de données, je devais construire un tableau de bord interactif et proposer des pistes concrètes : électrifier les villages, développer les énergies propres, protéger les forêts.",
    ],
    kpis: [
      {
        value: "71,5 points",
        label:
          "d'écart d'accès à l'électricité entre villes et campagnes en 2022, contre 38,1 en 1998",
      },
      {
        value: "87,7 %",
        label:
          "des émissions de 2018 viennent de l'agriculture et des terres, contre 6,2 % pour l'énergie",
      },
      {
        value: "51,8 %",
        label:
          "des ménages cuisinaient surtout au bois en 2017, contre 48,2 % en 2014",
      },
      {
        value: "53",
        label:
          "forêts classées cartographiées, soit 915 km², dont 20 dans la région des Plateaux",
      },
    ],
    steps: [
      {
        title: "Rassembler les données.",
        text: "J'ai réuni six jeux de données : indicateurs de la Banque mondiale, émissions de gaz à effet de serre (GES, les gaz qui réchauffent le climat), températures de 10 villes, et contours des forêts classées (forêts protégées par un statut officiel).",
      },
      {
        title: "Nettoyer et préparer.",
        text: "J'ai préparé les données en Python, dans un processus appelé ETL (extraire, transformer, charger). Les résultats sont enregistrés dans des fichiers compacts (Parquet pour les tableaux, GeoJSON pour les cartes) que le tableau de bord n'a plus qu'à lire.",
      },
      {
        title: "Construire le tableau de bord.",
        text: "Avec Streamlit (un outil Python pour créer des applications web de données), j'ai réalisé une page d'accueil et six pages thématiques, avec des filtres et une bascule français/anglais.",
      },
      {
        title: "Croiser les constats.",
        text: "J'ai relié les résultats entre eux pour en tirer trois recommandations : mini-réseaux solaires, foyers de cuisson améliorés, surveillance renforcée des forêts les plus exposées.",
      },
      {
        title: "Rédiger le rapport.",
        text: "J'ai résumé la démarche, les résultats et les limites en 10 diapositives.",
      },
    ],
    challenges: [
      {
        problem:
          "Un indicateur « renouvelable » trompeur\n\nL'indicateur « énergie renouvelable » de la Banque mondiale suit à 0,87 (corrélation) la part de bois, charbon et déchets brûlés.",
        solution:
          "Je l'ai présenté comme le reflet de la dépendance au bois, pas du solaire.",
      },
      {
        problem:
          "Un fichier plein de doublons\n\n17 923 lignes sur 81 446 (22 %) étaient des doublons exacts.",
        solution:
          "Suppression des doublons stricts, sans aucun conflit de valeurs restant (63 523 lignes conservées).",
      },
      {
        problem:
          "Deux « secteurs énergie » incomparables\n\nLe secteur Énergie complet (2,52 Mt CO2e en 2018) pèse environ 12 fois la seule production d'électricité (0,21 Mt).",
        solution:
          "Une note explicite dans le tableau de bord, et aucune addition entre les deux.",
      },
      {
        problem:
          "Des forêts presque invisibles sur la carte\n\n16 forêts sur 53 (30 %) ont une superficie calculée sous 0,1 km² (la plus petite : 611 m²), probablement une erreur de tracé.",
        solution:
          "Je les ai signalées, exclues du classement par taille et rendues visibles par des points de taille minimale.",
      },
    ],
    lessons: [
      "Un indicateur au nom rassurant peut cacher l'inverse : je vérifie sa définition avant de conclure.",
      "L'énergie ne pèse que 6,2 % des émissions : une stratégie climat centrée sur elle seule laisserait de côté l'essentiel.",
      "Deux mesures ne font pas une tendance : je montre l'année et la variation, sans tracer de courbe.",
    ],
    limits: [
      "Aucun jeu de données ne descend au niveau du village : mes recommandations restent régionales.",
      "La comparaison entre secteurs repose sur une seule année (2018).",
      "Combustibles de cuisson et coupures électriques n'ont que 2 mesures chacun (2014 et 2017 ; 2009 et 2016).",
    ],
    next: [
      "Ajouter des données localisées au niveau des villages non électrifiés.",
      "Faire vérifier les contours des forêts auprès d'une source officielle.",
      "Croiser températures et forêts, ce qui demande d'associer chaque ville à sa région.",
    ],
    gallery: [
      {
        src: filePath("acces-electricite/accueil.png"),
        caption:
          "Page d'accueil : indicateurs clés, chacun avec son année de mesure.",
      },
      {
        src: filePath("acces-electricite/acces-electricite.png"),
        caption: "Accès à l'électricité : courbes nationale, urbaine et rurale.",
      },
      {
        src: filePath("acces-electricite/energie-menages.png"),
        caption: "Énergie des ménages : combustibles de cuisson en 2014 et 2017.",
      },
      {
        src: filePath("acces-electricite/emissions.png"),
        caption: "Bilan des émissions : part de chaque secteur en 2018.",
      },
      {
        src: filePath("acces-electricite/climat.png"),
        caption: "Climat : température maximale moyenne de Lomé à Dapaong.",
      },
      {
        src: filePath("acces-electricite/forets.png"),
        caption: "Carte des 53 forêts classées, colorées par région.",
      },
      {
        src: filePath("acces-electricite/synthese.png"),
        caption: "Synthèse : trois constats et trois recommandations.",
      },
    ],
  },
  {
    slug: accesEauPotableSlug,
    serviceId: 3,
    title: "Diagnostic de l'accès à l'eau potable au Togo",
    tagline:
      "Où faut-il agir en priorité pour que l'accès à l'eau potable tienne dans la durée au Togo ?",
    cover: filePath("project2.png"),
    date: "Septembre 2026",
    role: "Traitement des données, dashboard, rapport.",
    stack: [
      "Python",
      "pandas",
      "GeoPandas",
      "Shapely",
      "Plotly",
      "Streamlit",
      "Parquet",
      "GeoJSON",
    ],
    links: {},
    context: [
      "Le Togo AI Lab, structure togolaise spécialisée en data, organise un défi tous les 15 jours. Le principe est de construire un tableau de bord et des recommandations à partir de données nationales ouvertes. Ce défi portait sur l'eau potable : cartographier les points d'eau, suivre leur entretien et prioriser les futurs aménagements.",
      "J'ai croisé cinq sources. COSO est un projet d'infrastructures rurales au Nord-Togo (218 microprojets). TdE est l'organisme qui réalise des forages et châteaux d'eau (67 ouvrages). S'y ajoutent un indice de risque d'inondation (FRI) par canton, la population de 2010 et les ventes d'eau de 2018 à 2022. Un canton est une subdivision administrative.",
    ],
    kpis: [
      {
        value: "285",
        label:
          "ouvrages hydrauliques recensés, dont 153 positionnés sur la carte",
      },
      {
        value: "86,5 %",
        label:
          "ouvrages sans plan d'entretien prévu en Savanes, contre 0 % en Kara",
      },
      {
        value: "151",
        label:
          "ouvrages dont le risque d'inondation est extrait à leur position exacte",
      },
      {
        value: "28",
        label:
          "cantons classés par score de priorisation, Boadé en tête (0,74)",
      },
    ],
    steps: [
      {
        title: "Nettoyer et localiser.",
        text: "J'ai extrait région, canton et village depuis un champ texte hiérarchique. J'ai séparé les ouvrages positionnables sur une carte de ceux utilisables seulement en statistiques.",
      },
      {
        title: "Croiser avec le risque d'inondation.",
        text: "Chaque ouvrage a reçu la valeur de risque de la cellule de 1 km où il se trouve. Les seuils viennent des quartiles des 388 cantons du pays.",
      },
      {
        title: "Mesurer maintenance et pression démographique.",
        text: "Le risque de maintenance est la part d'ouvrages sans plan d'entretien. La pression démographique est le nombre d'habitants par ouvrage recensé, par région.",
      },
      {
        title: "Construire un score de priorisation.",
        text: "Trois indicateurs sont ramenés entre 0 et 1, puis moyennés simplement. Je n'ai pas appliqué de pondération, faute de base pour la justifier.",
      },
      {
        title: "Restituer.",
        text: "Un dashboard Streamlit de cinq pages et un rapport PowerPoint de dix pages présentent les résultats. Chaque page rappelle les limites des données.",
      },
    ],
    challenges: [
      {
        problem:
          "Aucune donnée de panne ou d'abandon n'existe dans les sources.",
        solution:
          "J'ai utilisé l'existence d'un plan d'entretien comme indicateur de risque, en le présentant comme tel. Il ne couvre que COSO, car TdE n'a pas ce champ.",
      },
      {
        problem:
          "132 des 218 ouvrages COSO n'ont pas de coordonnées exploitables (59 vides, 73 à 0,0).",
        solution:
          "86 ouvrages sont cartographiés. Les 132 autres restent dans les statistiques par région et par canton.",
      },
      {
        problem:
          "Mes premiers seuils de risque, posés à la main, ne classaient aucun ouvrage en risque élevé.",
        solution:
          "Je les ai recalculés sur les quartiles des 388 cantons. 32 ouvrages passent alors en risque élevé.",
      },
      {
        problem:
          "La région Plateaux affichait 1 375 165 habitants pour 1 seul ouvrage recensé.",
        solution:
          "Je l'ai exclue du graphique et ajouté un indicateur de couverture suffisante. Ce ratio reflète un manque de données, pas une pénurie prouvée.",
      },
    ],
    lessons: [
      "Un ratio n'a de sens que si la couverture des données le permet.",
      "Le risque extrait à la position de l'ouvrage nuance celui du canton. Le maximum est de 0,645 par canton, contre 0,167 sur les ouvrages.",
      "Vérifier chaque étape (seuils, jointures, échantillons) a évité plusieurs conclusions trompeuses.",
    ],
    limits: [
      "Le risque de maintenance est un indicateur indirect, pas un taux de panne.",
      "COSO couvre le Nord et TdE quasi uniquement le Maritime (65 ouvrages sur 67). Le score ne concerne que 28 cantons sur 388.",
      "Aucun canton du Maritime ne peut apparaître dans le score, faute de données de maintenance.",
      "La population officielle date de 2010. Elle est comparée à des ouvrages plus récents.",
      "Les ventes d'eau sont nationales et ne peuvent pas être rattachées à des ouvrages précis.",
    ],
    next: [
      "Obtenir des données de panne ou d'état réel des ouvrages.",
      "Ajouter des sources couvrant les Plateaux et le Maritime.",
      "Actualiser la population avec des données plus récentes.",
    ],
    gallery: [
      {
        src: filePath("acces-eau-potable/carte-ouvrages.png"),
        caption: "Carte des 153 ouvrages, COSO au Nord et TdE au Sud.",
      },
      {
        src: filePath("acces-eau-potable/entretien-regions.png"),
        caption: "Taux d'ouvrages sans plan d'entretien par région.",
      },
      {
        src: filePath("acces-eau-potable/habitants-ouvrage.png"),
        caption: "Habitants par ouvrage, régions à couverture suffisante.",
      },
      {
        src: filePath("acces-eau-potable/risque-inondation.png"),
        caption: "Ouvrages colorés par niveau de risque d'inondation.",
      },
      {
        src: filePath("acces-eau-potable/cantons-prioritaires.png"),
        caption: "Classement des cantons prioritaires et détail du score.",
      },
    ],
  },
  {
    slug: healthMapSlug,
    serviceId: 3,
    title:
      "HealthMap TG — Cartographie des acteurs et infrastructures de santé au Togo",
    tagline:
      "Comment rendre les données de santé au Togo plus faciles à explorer, comparer et comprendre ?",
    cover: filePath("project3.png"),
    date: "",
    role: "Conception, développement web et traitement des données.",
    stack: [
      "Nuxt 3",
      "Vue.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Python",
      "Pandas",
      "Jupyter",
      "Google Colab",
      "Chart.js",
      "Données géospatiales",
    ],
    links: {},
    context: [
      "HealthMap TG est une plateforme web que j'ai conçue pour explorer les acteurs et infrastructures liés à la santé au Togo. Le projet centralise notamment des données sur les pharmacies, les laboratoires et certains acteurs de la HealthTech, c'est-à-dire les entreprises et initiatives qui utilisent le numérique ou la technologie dans le domaine de la santé.",
      "Je suis partie d'un constat : les données disponibles sont dispersées et leur format n'est pas toujours directement exploitable. J'ai donc travaillé à la fois sur l'interface, la structuration des données, leur nettoyage et leur intégration dans une base de données géolocalisées.",
    ],
    kpis: [
      {
        value: "1 228",
        label: "pharmacies présentes dans le jeu de données traité",
      },
      {
        value: "11",
        label:
          "colonnes analysées et structurées dans le jeu de données pharmacies",
      },
      {
        value: "2",
        label: "jeux de données géospatiales traités",
      },
      {
        value: "1",
        label: "dashboard pour explorer les données par catégorie et zone",
      },
    ],
    steps: [
      {
        title: "Identifier les données.",
        text: "J'ai recherché des sources de données ouvertes permettant de documenter le secteur de la santé au Togo. La principale source utilisée est GEODATA Togo, une plateforme nationale de données géographiques permettant notamment de visualiser et télécharger des données sur les infrastructures du pays.",
      },
      {
        title: "Nettoyer et structurer.",
        text: "J'ai utilisé Python et Pandas, une bibliothèque Python dédiée notamment à la manipulation de données tabulaires, pour analyser les fichiers, normaliser les valeurs et gérer les données manquantes. Pour les données géographiques, j'ai extrait les coordonnées latitude/longitude à partir des géométries fournies dans les fichiers sources.",
      },
      {
        title: "Préparer la base.",
        text: "J'ai structuré les données dans PostgreSQL, un système de gestion de bases de données relationnelles, via Supabase, qui fournit notamment une base PostgreSQL et des services backend. Les informations ont été organisées autour d'entités telles que le nom, la catégorie, la commune, la préfecture, les services et les coordonnées géographiques.",
      },
      {
        title: "Construire l'interface.",
        text: "J'ai développé la plateforme avec Nuxt 3, un framework basé sur Vue.js pour créer des applications web, et Tailwind CSS pour construire l'interface. L'interface permet de rechercher, filtrer et consulter les différentes entités enregistrées.",
      },
      {
        title: "Ajouter l'exploration des données.",
        text: "J'ai intégré un dashboard permettant de visualiser la répartition des entités par catégorie et par zone géographique. Les graphiques sont réalisés avec Chart.js, une bibliothèque JavaScript destinée à la visualisation de données.",
      },
    ],
    challenges: [
      {
        problem:
          "Données dispersées\n\nLes informations disponibles sur les acteurs de santé ne sont pas réunies dans une seule source exploitable.",
        solution:
          "J'ai commencé par structurer plusieurs jeux de données disponibles publiquement afin de créer une base commune pour la plateforme.",
      },
      {
        problem:
          "Données brutes difficiles à exploiter\n\nLe fichier pharmacies contenait 1 228 lignes et 11 colonnes, avec notamment des valeurs manquantes et des informations géographiques sous forme de géométrie.",
        solution:
          "J'ai utilisé Python et Pandas pour nettoyer les données, gérer les valeurs manquantes et transformer les coordonnées dans un format directement exploitable par l'application.",
      },
      {
        problem:
          "Besoin de lecture géographique\n\nConnaître le nombre d'entités ne suffit pas à comprendre leur répartition sur le territoire.",
        solution:
          "J'ai conservé les coordonnées géographiques et les informations administratives comme la commune, le canton et la préfecture afin de permettre une analyse par zone.",
      },
      {
        problem:
          "Peu de données disponibles sur certaines catégories\n\nLes données ouvertes disponibles ne couvrent pas encore de manière homogène les pharmacies, laboratoires, établissements de santé et acteurs technologiques.",
        solution:
          "J'ai séparé les données réellement disponibles des informations encore à collecter, plutôt que de compléter artificiellement les données manquantes.",
      },
    ],
    lessons: [
      "La qualité des données conditionne directement la qualité de l'application. Une interface de recherche efficace dépend d'abord de données correctement nettoyées et structurées.",
      "Un projet web peut devenir un projet data. Le traitement des fichiers, la gestion des coordonnées géographiques et l'analyse des distributions ont constitué une partie importante du travail.",
      "Les données géographiques apportent une autre dimension à l'information. Les communes, cantons, préfectures et coordonnées permettent d'aller au-delà d'une simple liste d'acteurs.",
    ],
    limits: [
      "Les données disponibles publiquement ne couvrent pas encore de manière complète toutes les catégories d'acteurs et infrastructures de santé.",
      "Une partie des informations nécessite encore une collecte, une vérification et une mise à jour manuelles.",
    ],
    next: [
      "Ajouter une visualisation cartographique avancée et des analyses spatiales permettant de mieux étudier la répartition territoriale.",
      "Ajouter le calcul de distance entre un utilisateur et les structures de santé disponibles.",
      "Enrichir progressivement la base avec davantage de structures et de sources de données vérifiées.",
    ],
    gallery: [
      {
        src: filePath("health-map/vue-ensemble.png"),
        caption: "Vue d'ensemble de la plateforme HealthMap TG.",
      },
      {
        src: filePath("health-map/dashboard.png"),
        caption:
          "Dashboard présentant la répartition des entités par catégorie.",
      },
      {
        src: filePath("health-map/recherche.png"),
        caption: "Interface de recherche et de filtrage des acteurs de santé.",
      },
      {
        src: filePath("health-map/fiche-entite.png"),
        caption:
          "Vue détaillée d'une entité avec ses informations géographiques et ses services.",
      },
    ],
  },
];
