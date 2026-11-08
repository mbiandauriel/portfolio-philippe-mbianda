# Portfolio – Philippe MBIANDA

Site statique (HTML5, CSS3, JavaScript vanilla), 100 % en français, responsive, avec mode clair et sombre.
Aucune dépendance à installer ; seule la police Google Fonts (Inter, Manrope) est chargée en ligne.

## Structure

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js            ← coordonnées, chemins d'images et PROJETS (données)
├── assets/
│   ├── images/profile/     ← photo de profil
│   ├── images/projects/    ← leboudi/ et oktopus/
│   ├── images/general/
│   ├── documents/          ← CV en PDF
│   └── icons/favicon.svg
└── README.md
```

## Lancer le site en local

- Simple : double-cliquer sur `index.html`.
- Recommandé : dans le dossier `portfolio`, lancer `python3 -m http.server 8000` puis ouvrir <http://localhost:8000>.

## Photo de profil

Remplacer `assets/images/profile/philippe-mbianda.jpg` en gardant le même nom (ou modifier `CONFIG.images.profile` au début de `js/script.js`). Format portrait recommandé (≈ 4:5), l'image n'est jamais déformée (`object-fit: cover`).

## Images et descriptions des projets

Tout se trouve dans le tableau `PROJECTS` de `js/script.js`.

1. Déposer les images dans `assets/images/projects/<nom-du-projet>/` avec des noms explicites.
2. Copier un objet projet existant et renseigner : `title`, `categories` (`batiments`, `structures`, `vrd`), `period`, `summary`, `overview`, `specs`, `contributions`, `challenge`, `tools`, `images`.
3. Pour chaque image : `src`, `alt` (description en français), `caption`. Ajouter `type: 'plan'` pour un plan (affiché sans recadrage).
4. Un projet avec `images: []` affiche un visuel neutre « Visuels à venir » (cas de la résidence R+1, faute de visuels fournis).

Les cartes, filtres, modale et visionneuse se mettent à jour automatiquement.

## Changer le bleu principal

Dans `css/style.css`, section `:root`, modifier `--primary-color`, `--primary-dark` et `--primary-light`. Le bleu actuel (`#0758d5`) a été mesuré sur la chemise de la photo de profil.

## Modifier les coordonnées

- Courriel, téléphone, LinkedIn : objet `CONFIG.contact` dans `js/script.js` (appliqué à la section Contact et au formulaire).
- Le pied de page, les métadonnées SEO et `og:image` sont dans `index.html`.

## Modes clair et sombre

Le thème est porté par l'attribut `data-theme` de `<html>`. Au premier chargement, il suit la préférence du système (`prefers-color-scheme`) ; le choix fait avec le bouton de la barre de navigation est ensuite mémorisé dans `localStorage` (clé `pm-theme`). Les couleurs des deux thèmes sont définies par des variables CSS ; les photos ne sont pas modifiées.

## Formulaire de contact

Il n'y a pas de serveur : après validation, le formulaire ouvre la messagerie de l'utilisateur avec le message prérempli (`mailto:`). Rien n'est envoyé automatiquement, et le site l'indique. Pour un envoi réel, brancher un service comme Formspree ou Netlify Forms.

## Déploiement

Le dossier est autonome : le téléverser tel quel sur un hébergeur statique (Netlify, Vercel, GitHub Pages, Cloudflare Pages ou tout hébergement web). Après la mise en ligne, mettre à jour `og:image` dans `index.html` avec l'URL absolue de l'image pour de bons aperçus de partage.

## Confidentialité des plans

Les plans de l'immeuble OKTOPUS sont des extraits de plans d'exécution et leur cartouche mentionne le nom du maître d'ouvrage. Avant publication, vérifier auprès de la SGC et du client que leur diffusion est autorisée, ou flouter/recadrer les cartouches.
