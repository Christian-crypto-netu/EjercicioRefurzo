export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    cantidad: string;
    precio: string;

    constructor(nombre: string, categoria: string, cantidad: string, precio: string) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}