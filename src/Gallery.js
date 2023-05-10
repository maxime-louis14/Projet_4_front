import React from "react"; // Importation du module React pour utiliser les fonctionnalités de React
import Imgix from "react-imgix"; // Importation du module react-imgix pour utiliser le composant Imgix

const images = [
  "forest1",
  "forest2",
  "forest3",
  "mountain1",
  "mountain2",
  "mountain3",
  "river1",
  "river2",
  "river3"
]; // Tableau contenant les noms de chaque image

const buildURL = imagePath => // Définition de la fonction buildURL qui prend en argument le nom d'une image
  `https://assets.imgix.net/tutorials/${imagePath}.webp`; // Retourne l'URL de l'image à partir de son nom

export const Gallery = () => ( // Définition du composant Gallery
  <div className="gallery"> {/* Utilisation du composant div pour créer une section */}
    {images.map(image => ( // Utilisation de la méthode map pour itérer sur chaque nom d'image dans le tableau
      <Imgix // Utilisation du composant Imgix pour afficher chaque image
        sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw" // Attribut sizes pour définir la taille de l'image
        src={buildURL(image)} // Attribut src pour définir l'URL de l'image en appelant la fonction buildURL avec le nom de l'image en argument
        key={image} // Attribut key pour identifier chaque image de manière unique (utilisé pour la performance de React)
        imgixParams={{ // Attribut imgixParams pour définir les paramètres de l'image
          fit: "crop", // Paramètre fit pour définir comment ajuster l'image dans sa zone de coupe
          fm: "jpg" // Paramètre fm pour définir le format de l'image
        }}
        width="600" // Attribut width pour définir la largeur de l'image
        height="600" // Attribut height pour définir la hauteur de l'image
      />
    ))}
  </div>
);
