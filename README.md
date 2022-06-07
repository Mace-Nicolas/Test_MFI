# Test pour Meteo France International, Application Météo

Le but de cette application est d'avoir sur un fond de carte, l'emplacement des villes et en cliquant dessus, leurs prévisions météo sur 3 jours.

## Spécifications

Cette application est développée avec React, OpenLayer pour la carte et HighCharts pour les graphiques.
Les données météo viennent de l'API d'OpenWeather.

## Installation

- Cloner le repo dans votre environnement local

```bash
    git clone https://github.com/Mace-Nicolas/Test_MFI.git
    cd Test_MFI
```

Vous pouvez ensuite choisir de le lancer via Docker ou via NPM:

## Lancement via Docker

Si vous souhaitez utiliser Docker:

- Lancer l'application Docker
- Construire l'image et importer les dépendances:

```bash
docker-compose build
```

- Démarrer le container

```bash
docker-compose up
```

## Lancement via npm

Si vous souhaitez utiliser NPM

- Installer les dépendances

```bash
npm install
```

- Lancer l'environnement local

```bash
npm start
```

Aller à "localhost:3000" dans le navigateur
