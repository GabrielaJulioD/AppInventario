import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private usersService: UsersService
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.usersService.addUser(this.formulario.value);
    console.log(response);
  }

}
