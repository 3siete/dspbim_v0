export interface Proyecto {
  id: number;
  nombre: string;
  introduccion: string;
  descripcion: string;
  servicios: string;
  LOD: number;
  area: string;
  imagenUrl?: string; // El signo de interrogación indica que esta propiedad es opcional
  // Puedes agregar métodos también, aunque es menos común en interfaces de modelos de datos.
}
