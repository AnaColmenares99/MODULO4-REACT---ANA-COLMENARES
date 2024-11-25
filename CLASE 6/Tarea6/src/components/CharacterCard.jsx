import React from "react";

function CharacterCard({ name, image, gender, status }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", maxWidth: "200px", textAlign: "center" }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{name}</h3>
      <p><strong>Género:</strong> {gender}</p>
      <p><strong>Estado:</strong> {status}</p>
    </div>
  );
}

export default CharacterCard;
