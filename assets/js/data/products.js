const products = [
  {
    id: 1,
    category: "laptops",
    categoryName: "Ordinateurs Portables",
    reference: "LP-2023-001",
    name: "ProBook Elite X7",
    price: 1299.99,
    image: "assets/images/products/cd6463f5-f47a-4eae-bee8-a463a0862a3b.jpg",
    images: [
      "assets/images/products/e5ecd4db-e43d-4904-9b31-46240e1d6e71.jpg",
      "assets/images/products/10188222-63a4-4591-bec5-0d581cd48781.jpg",
      "assets/images/products/cd6463f5-f47a-4eae-bee8-a463a0862a3b.jpg"
    ],
    shortDescription: "Ordinateur portable professionnel avec écran 15.6\", processeur i7 et 16Go de RAM",
    description: `
      <h2 class="text-xl font-bold mb-4">ProBook Elite X7 - La puissance au service des professionnels</h2>
      <p class="mb-4">Le ProBook Elite X7 est conçu pour les professionnels exigeants qui ont besoin de performance et de fiabilité. Avec son design élégant et ses composants haut de gamme, il répond à tous vos besoins informatiques.</p>

      <h3 class="text-lg font-semibold mb-2">Caractéristiques techniques :</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>Processeur Intel Core i7-11800H (8 cœurs, 16 threads)</li>
        <li>Mémoire RAM 16 Go DDR4-3200 MHz (extensible à 32 Go)</li>
        <li>Stockage SSD NVMe 512 Go</li>
        <li>Écran 15.6" IPS Full HD (1920 x 1080) anti-reflets</li>
        <li>Carte graphique NVIDIA GeForce RTX 3050 4 Go GDDR6</li>
        <li>Wi-Fi 6, Bluetooth 5.1, USB 3.2, HDMI, Thunderbolt 4</li>
        <li>Batterie 65 Wh avec autonomie jusqu"à 10 heures</li>
        <li>Windows 11 Pro</li>
      </ul>

      <p class="mb-4">Idéal pour les professionnels qui travaillent sur des applications exigeantes comme la retouche photo, la conception 3D ou l"analyse de données. Sa batterie longue durée vous permet de travailler toute la journée sans vous soucier de la recharge.</p>

      <p>Livraison gratuite et garantie 2 ans incluse.</p>
    `
  },
  {
    id: 2,
    category: "laptops",
    categoryName: "Ordinateurs Portables",
    reference: "LP-2023-002",
    name: "UltraBook Air S5",
    price: 899.99,
    image: "assets/images/products/7903a55a-e03e-438b-a869-db22b6e318f6.jpg",
    images: [
      "assets/images/products/6859e9ed-2b04-41c1-9d92-b272460f5e45.jpg",
      "assets/images/products/97047bf1-d923-4321-8675-dc4f37943780.jpg"
    ],
    shortDescription: "Ultrabook léger avec écran 13.3\", processeur i5 et 8Go de RAM",
    description: `
      <h2 class="text-xl font-bold mb-4">UltraBook Air S5 - Légèreté et performance</h2>
      <p class="mb-4">L"UltraBook Air S5 est le compagnon idéal pour les professionnels en déplacement. Avec seulement 1,1 kg et une épaisseur de 14 mm, il se glisse facilement dans votre sac tout en offrant des performances remarquables.</p>

      <h3 class="text-lg font-semibold mb-2">Caractéristiques techniques :</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>Processeur Intel Core i5-1135G7 (4 cœurs, 8 threads)</li>
        <li>Mémoire RAM 8 Go LPDDR4X (soudée)</li>
        <li>Stockage SSD NVMe 256 Go</li>
        <li>Écran 13.3" IPS Full HD (1920 x 1080) brillant</li>
        <li>Carte graphique Intel Iris Xe</li>
        <li>Wi-Fi 6, Bluetooth 5.0, 2x USB-C, 1x USB-A</li>
        <li>Batterie 55 Wh avec autonomie jusqu"à 12 heures</li>
        <li>Windows 11 Home</li>
      </ul>

      <p class="mb-4">Parfait pour les étudiants, enseignants et professionnels qui privilégient la mobilité. Son châssis en aluminium offre à la fois légèreté et robustesse pour vous accompagner partout.</p>

      <p>Livraison gratuite et garantie 2 ans incluse.</p>
    `
  },
  {
    id: 3,
    category: "desktops",
    categoryName: "Ordinateurs de Bureau",
    reference: "DT-2023-001",
    name: "WorkStation Pro X9",
    price: 1799.99,
    image: "assets/images/products/a92bea96-4c0a-4b7b-9831-0e4ef7e1dbc9.jpg",
    images: [
      "assets/images/products/301b84db-d680-4376-aed8-f3b5ea2442d2.jpg",
      "assets/images/products/22bda7c0-ab4c-4e2a-b721-5fd88c2e9a8f.jpg"
    ],
    shortDescription: "Station de travail haut de gamme avec processeur i9, 32Go de RAM et carte graphique RTX",
    description: `
      <h2 class="text-xl font-bold mb-4">WorkStation Pro X9 - Puissance et fiabilité</h2>
      <p class="mb-4">La WorkStation Pro X9 est notre solution la plus puissante pour les professionnels qui ont besoin d"une performance maximale. Conçue pour les tâches les plus exigeantes, elle excelle dans tous les domaines.</p>

      <h3 class="text-lg font-semibold mb-2">Caractéristiques techniques :</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>Processeur Intel Core i9-12900K (16 cœurs, 24 threads)</li>
        <li>Mémoire RAM 32 Go DDR5-4800 MHz (extensible à 128 Go)</li>
        <li>Stockage SSD NVMe 1 To + HDD 2 To</li>
        <li>Carte graphique NVIDIA GeForce RTX 3080 10 Go GDDR6X</li>
        <li>Boîtier ATX avec refroidissement liquide</li>
        <li>Wi-Fi 6E, Bluetooth 5.2, USB 3.2, HDMI, DisplayPort</li>
        <li>Alimentation 850W Gold</li>
        <li>Windows 11 Pro</li>
      </ul>

      <p class="mb-4">Idéale pour les professionnels de la création 3D, du montage vidéo 4K/8K, du développement et de la virtualisation. Sa capacité de refroidissement avancée garantit des performances optimales même sous charge intensive.</p>

      <p>Livraison gratuite, installation sur site et garantie 3 ans incluses.</p>
    `
  },
  {
    id: 4,
    category: "desktops",
    categoryName: "Ordinateurs de Bureau",
    reference: "DT-2023-002",
    name: "FamilyPC Compact",
    price: 699.99,
    image: "assets/images/products/2af96c72-1b3b-44a9-9233-9d655668b392.jpg",
    images: [
      "assets/images/products/a504d987-663f-446c-b449-3cbf1d806340.jpg",
      "assets/images/products/2af96c72-1b3b-44a9-9233-9d655668b392.jpg",
    ],
    shortDescription: "PC familial compact avec processeur i3, 8Go de RAM et stockage SSD",
    description: `
      <h2 class="text-xl font-bold mb-4">FamilyPC Compact - L"ordinateur idéal pour toute la famille</h2>
      <p class="mb-4">Le FamilyPC Compact est la solution parfaite pour un usage familial quotidien. Son format compact s"intègre facilement dans votre espace de vie tout en offrant les performances nécessaires pour toutes vos activités.</p>

      <h3 class="text-lg font-semibold mb-2">Caractéristiques techniques :</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>Processeur Intel Core i3-10100 (4 cœurs, 8 threads)</li>
        <li>Mémoire RAM 8 Go DDR4-2666 MHz (extensible à 32 Go)</li>
        <li>Stockage SSD 256 Go</li>
        <li>Carte graphique Intel UHD Graphics 630</li>
        <li>Boîtier Micro-ATX compact</li>
        <li>Wi-Fi 5, Bluetooth 5.0, USB 3.0, HDMI</li>
        <li>Alimentation 300W</li>
        <li>Windows 11 Home</li>
      </ul>

      <p class="mb-4">Parfait pour la navigation web, le travail bureautique, le streaming vidéo et les jeux légers. Son démarrage rapide et son fonctionnement silencieux en font un compagnon idéal pour tous les membres de la famille.</p>

      <p>Livraison gratuite et garantie 2 ans incluse.</p>
    `
  },
  {
    id: 5,
    category: "peripherals",
    categoryName: "Périphériques",
    reference: "PH-2023-001",
    name: "Clavier mécanique RGB Pro",
    price: 129.99,
    image: "assets/images/products/477dbb34-da56-4e49-a247-ec50f99b485f.jpg",
    images: [
      "assets/images/products/c956f1a3-cf2b-484b-a3a8-f8d6973add1d.jpg",
      "assets/images/products/898cf070-3520-4b6d-a194-275888c4506a.jpg"
    ],
    shortDescription: "Clavier mécanique avec switches Blue, rétroéclairage RGB et repose-poignets",
    description: `
      <h2 class="text-xl font-bold mb-4">Clavier mécanique RGB Pro - Précision et confort</h2>
      <p class="mb-4">Notre clavier mécanique RGB Pro offre une expérience de frappe incomparable, idéale pour les gamers et les professionnels qui passent de longues heures sur leur clavier.</p>

      <h3 class="text-lg font-semibold mb-2">Caractéristiques techniques :</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>Switches mécaniques Blue (tactiles et cliquants)</li>
        <li>105 touches avec disposition AZERTY</li>
        <li>Rétroéclairage RGB personnalisable par touche</li>
        <li>Châssis en aluminium brossé</li>
        <li>Repose-poignets détachable en similicuir</li>
        <li>Anti-ghosting complet et N-key rollover</li>
        <li>Connexion USB avec câble tressé de 1,8m</li>
        <li>Touches macro programmables et mémoire intégrée</li>
      </ul>

      <p class="mb-4">Ce clavier combine robustesse, réactivité et confort pour une utilisation intensive. Les switches Blue offrent un retour tactile satisfaisant et un son cliquant caractéristique qui plaît aux dactylographes et aux gamers.</p>

      <p>Livraison gratuite et garantie 2 ans incluse.</p>
    `
  },
  {
    id: 6,
    category: "peripherals",
    categoryName: "Périphériques",
    reference: "PH-2023-002",
    name: "Moniteur UltraWide 34\"",
    price: 449.99,
    image: "assets/images/products/4fbe509f-d69e-4bef-83bb-4fef9c04fed9.jpg",
    images: [
      "assets/images/products/ae1c9919-94d8-4696-8e58-d398a5e19741.jpg",
      "assets/images/products/aefc5345-8148-410b-bd18-b2982a8b1beb.jpg"
    ],
    shortDescription: "Moniteur incurvé UltraWide 34\" WQHD avec taux de rafraîchissement de 144Hz",
    description: `
      <h2 class="text-xl font-bold mb-4">Moniteur UltraWide 34\" - Immersion totale</h2>
      <p class="mb-4">Notre moniteur UltraWide 34\" offre un espace de travail étendu et une immersion exceptionnelle pour vos jeux et contenus multimédias.</p>

      <h3 class="text-lg font-semibold mb-2">Caractéristiques techniques :</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>Écran 34\" VA incurvé (1800R)</li>
        <li>Résolution WQHD 3440 x 1440</li>
        <li>Format 21:9 UltraWide</li>
        <li>Taux de rafraîchissement 144Hz</li>
        <li>Temps de réponse 1ms (MPRT)</li>
        <li>HDR400 avec 95% DCI-P3</li>
        <li>AMD FreeSync Premium et compatible G-Sync</li>
        <li>Connectivité: 2x HDMI 2.0, 1x DisplayPort 1.4, USB-C</li>
        <li>Haut-parleurs intégrés 2x 5W</li>
        <li>Support ergonomique réglable en hauteur, inclinaison et pivot</li>
      </ul>

      <p class="mb-4">Parfait pour les professionnels multitâches, les créatifs et les gamers. Son format ultra-large remplace efficacement deux écrans traditionnels tout en offrant une expérience visuelle sans bordure centrale.</p>

      <p>Livraison gratuite et garantie 3 ans incluse avec politique zéro pixel mort.</p>
    `
  }
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(product => product.id === parseInt(id));
}

function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

function getAllCategories() {
  const categories = [...new Set(products.map(product => product.category))];
  return categories.map(category => {
    const sample = products.find(product => product.category === category);
    return {
      id: category,
      name: sample.categoryName
    };
  });
}