import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  toggleMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    console.log(navbarCollapse);
    if (navbarCollapse) {
      navbarCollapse.classList.toggle('show');
    }
  }

  constructor( private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToUsuarios() {
    this.router.navigate(['/listar-usuarios']);
  }
  navigateToProductos() {
    this.router.navigate(['/listar-productos']);
  }
  navigateToCamera() {
    this.router.navigate(['/camera']);
  }
 
}
