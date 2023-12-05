import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listProductos: Producto[] = [];

  constructor(private _productoService: ProductoService) {
    
  }

  ngOnInit(): void {
      this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(id: any) {
    this._productoService.deleteProducto(id).subscribe(data => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto eliminado exitosamente",
        showConfirmButton: false,
        timer: 1500
      });
      this.obtenerProductos();
    }, error => {
      console.log(error);
    });
  }
}
