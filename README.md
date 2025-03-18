# Application Mobile Complexe Santa Lucia - Une Expérience de Shopping en React Native

L'Application Mobile du Complexe Santa Lucia est une application React Native qui offre une expérience de shopping fluide pour le complexe commercial Santa Lucia. L'application comprend l'authentification des utilisateurs, la navigation des produits, la gestion de carte de fidélité et la diffusion de contenu promotionnel.

Cette application mobile sert de plateforme numérique pour le complexe commercial Santa Lucia, permettant aux clients de parcourir différentes catégories de produits. L'application met en place un système de navigation moderne avec à la fois une navigation par pile (stack) et par onglet inférieur (bottom tab) pour offrir une expérience utilisateur intuitive. Elle inclut des fonctionnalités telles que l'authentification des utilisateurs (connexion/inscription), la récupération de mot de passe, la gestion du profil, la numérisation de produits et un système de carte de fidélité numérique.

## Structure du Répertoire
```
.
├── src/                          # Dossier de code source
│   ├── components/               # Composants UI réutilisables
│   ├── constants/               # Constantes de l'application et configuration du thème
│   ├── datas/                  # Fichiers de données JSON pour les produits et images
│   ├── navigation/             # Configuration de la navigation (Stack et Bottom Tab)
│   ├── redux/                  # Gestion d'état avec Redux
│   ├── Screens/               # Écrans et vues de l'application
│   ├── styles/                # Styles globaux et utilitaires responsives
│   └── types/                 # Définitions de types TypeScript
├── android/                    # Code spécifique à la plateforme Android
├── ios/                       # Code spécifique à la plateforme iOS
├── __tests__/                 # Fichiers de test
└── app.json                   # Configuration de l'application
```

## Instructions d'Utilisation
### Prérequis
- Node.js (v14 ou version supérieure)
- Gestionnaire de paquets npm ou yarn
- React Native CLI
- Xcode (pour le développement iOS)
- Android Studio (pour le développement Android)
- JDK 11 ou version plus récente

### Installation
1. Cloner le dépôt :
```bash
git clone <repository-url>
cd ComplexeSantaLucia_App
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

3. Installer les dépendances iOS :
```bash
cd ios
pod install
cd ..
```

### Lancer l'application
1. Démarrer le bundler Metro :
```bash
npm start
# ou
yarn start
```

2. Lancer sur iOS :
```bash
npm run ios
# ou
yarn ios
```

3. Lancer sur Android :
```bash
npm run android
# ou
yarn android
```

### Exemples Détailés
1. Flux d'Authentification :
```javascript
// Utilisation de l'écran de connexion
import LoginScreen from './src/Screens/auth/LoginScreen';

// Naviguer vers l'écran de connexion
navigation.navigate('Login');
```

2. Navigation des produits :
```javascript
// Accéder aux données des produits
import productData from './src/datas/shoes.json';
```

### Dépannage
1. Problèmes de Build
- Effacer le cache du bundler Metro :
```bash
npm start -- --reset-cache
```

2. Problèmes iOS
- Nettoyer la build Xcode :
```bash
cd ios
xcodebuild clean
```

3. Problèmes Android
- Nettoyer la build Gradle :
```bash
cd android
./gradlew clean
```

## Flux de Données
L'application suit un modèle de flux de données unidirectionnel en utilisant Redux pour la gestion de l'état. Les données circulent depuis le store Redux à travers les composants React et sont mises à jour via des actions et des réducteurs.

```ascii
Entrée de l'utilisateur -> Actions -> Réducteur -> Store -> Composants UI
     ^                                          |
     |__________________________________________|
```

Interactions clés des composants :
1. Le flux d'authentification gère les identifiants de l'utilisateur et la gestion des sessions
2. Les données des produits sont chargées depuis des fichiers JSON locaux et gérées dans le store Redux
3. L'état de la navigation est géré par React Navigation
4. Les composants UI reçoivent les données via Redux connect/hooks
5. Les appels API sont gérés par des actions Redux

## Infrastructure
L'application utilise les composants clés suivants pour l'infrastructure :

### Configuration Android
- Version des outils de build : 35.0.0
- SDK minimum : 24
- SDK cible : 35
- Version NDK : 27.1.12297006

### Configuration iOS
- Utilise Swift pour les modules natifs
- Implémente le pont React Native
- Configure les permissions et capacités de l'application

## Déploiement
### Prérequis
- Compte Apple Developer valide (pour iOS)
- Compte Google Play Developer valide (pour Android)
- Certificats de signature et profils de provisionnement

### Étapes de Build
1. Build de Release iOS :
```bash
cd ios
xcodebuild -workspace ComplexeSantaLucia_App.xcworkspace -scheme ComplexeSantaLucia_App -configuration Release
```

2. Build de Release Android :
```bash
cd android
./gradlew assembleRelease
```