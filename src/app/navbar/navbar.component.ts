import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  navigateTo(page: string): void {
    // Adicione a lógica de navegação aqui, por exemplo, navegar para a página selecionada
    console.log(`Navigating to ${page}`); }

  constructor() {}

  ngOnInit(): void {
    // Inicialize os elementos do Bootstrap, incluindo os dropdowns
    // Certifique-se de importar 'bootstrap' no início deste arquivo
    // import 'bootstrap';
  }
}
