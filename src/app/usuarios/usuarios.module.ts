import { OnInit } from '@angular/core';import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListarUsuariosComponent,
    CrearUsuariosComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})
export class UsuariosModule implements OnInit {
  ngOnInit() {
    console.log('Cargando UsuariosModule');
  }
}
