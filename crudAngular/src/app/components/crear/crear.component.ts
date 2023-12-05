import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear Producto';
  id: string | null; 


  constructor(private fb: FormBuilder, private router: Router, private _produtoService: ProductoService, private route: ActivatedRoute) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
      this.esEditar();
  }

  agregarProducto(): void {
    console.log(this.productoForm);

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('nombre')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      cantidad: this.productoForm.get('cantidad')?.value,
      precio: this.productoForm.get('precio')?.value
    }

    if (this.id !== null) {
      this._produtoService.editProducto(this.id, PRODUCTO).subscribe(data => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto Actualizado exitosamente",
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      });
    } else {
      console.log(PRODUCTO);
      this._produtoService.createProducto(PRODUCTO).subscribe(data => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto guardado exitosamente",
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }

  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto';
      this._produtoService.getProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          nombre: data.nombre,
          categoria: data.categoria,
          cantidad: data.cantidad,
          precio: data.precio
        })
      })
    }
  }

}
