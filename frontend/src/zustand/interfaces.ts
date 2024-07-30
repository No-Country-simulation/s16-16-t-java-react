export interface PropProduct {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: {
    id: number;
    nombre: string;
  };
  imagenes: {
    id: number;
    data: string;
    type: string;
  }[];
  imageUrl?: string;
}
