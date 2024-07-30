import { PropProduct } from "../zustand/interfaces";

export const base64ToImg = (product: PropProduct): PropProduct => {
  if (product.imagenes.length > 0) {
    const base64String = product.imagenes[0].data; // Usar el primer elemento del array de imágenes
    const contentType = product.imagenes[0].type; // Usar el primer elemento del array de imágenes

    // Decodificar la cadena Base64 a un array de bytes
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Crear un Blob a partir del array de bytes
    const blob = new Blob([byteArray], { type: contentType });
    // Crear una URL de objeto a partir del Blob
    const objectURL = URL.createObjectURL(blob);
    // Agregar la URL de la imagen al producto
    product.imageUrl = objectURL;
  }
  return product;
};
