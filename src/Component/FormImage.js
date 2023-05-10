import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null); // Créer un état pour stocker le fichier sélectionné

  const handleFileInput = event => {
    setSelectedFile(event.target.files[0]); // Mettre à jour l'état avec le fichier sélectionné
  };

  const handleSubmit = event => {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    const formData = new FormData(); // Créer un nouvel objet FormData pour stocker les données du fichier

    formData.append("image", selectedFile); // Ajouter le fichier sélectionné à l'objet FormData sous le nom "image"

    // Envoyer une requête POST à l'API backend avec les données du fichier
    fetch("http://127.0.0.1:3000/images", {
      method: "POST",
      body: formData // Inclure l'objet FormData dans le corps de la requête
    })
      .then(response => {
        console.log(response); // Afficher la réponse de l'API dans la console
      })
      .catch(error => {
        console.error(error); // Afficher une erreur si la requête échoue
      });
  };
//   form
};
