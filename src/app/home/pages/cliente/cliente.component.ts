import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cliente } from '../../../interfaces/cliente';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export default class ClienteComponent {
  
  listaCliente: any
  formUsuario: FormGroup = new FormGroup({});
  isUpdate: boolean = false;

  constructor(private usuarioService: UsersService){
    this.listar()
  }

  ngOnInit():void {
    this.formUsuario = new FormGroup({
      nombre: new FormControl(''),
      paterno: new FormControl(''),
      materno: new FormControl(''),
      tipoDocumento: new FormControl(''),
      numeroDocumento: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      genero: new FormControl(''),
    })
  }

  listar(){
    this.usuarioService.listar().subscribe(resp => {
      if(resp){
        this.listaCliente = resp
      }
    })
  }

  nuevoCliente(){
    this.isUpdate = false;
    this.formUsuario.reset();
  }

  selectItem(item?: any){
    this.isUpdate = true;
    this.formUsuario.controls['nombre'].setValue(item.nombre)
    this.formUsuario.controls['paterno'].setValue(item.paterno)
    this.formUsuario.controls['materno'].setValue(item.materno)
    this.formUsuario.controls['tipoDocumento'].setValue(item.tipoDocumento)
    this.formUsuario.controls['numeroDocumento'].setValue(item.numeroDocumento)
    this.formUsuario.controls['fechaNacimiento'].setValue(item.fechaNacimiento)
    this.formUsuario.controls['genero'].setValue(item.genero)
  }

}
