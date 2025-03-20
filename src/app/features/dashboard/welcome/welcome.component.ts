import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome-page">
      <header class="header">
        <div class="header-content">
          <img src="assets/images/logob.png" alt="GoCast Logo" class="header-logo">
        </div>
      </header>

      <div class="main-content">
        <div class="logo-container">
          <img src="assets/images/logow.png" alt="GoCast Logo" class="logo">
        </div>

        <h1>Bienvenido</h1>
        
        <div class="description">
          <p>Introducción a nuestro servicio.</p>
          <p>Puedes leer como funciona GoCast</p>
          <p>o puedes utilizar la plataforma</p>
        </div>

        <div class="buttons-container">
          <button class="btn-primary" (click)="onLearnMore()">
            Enséñame
          </button>
          <button class="btn-accent" (click)="onRequestService()">
            Comenzar a usar GoCast
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .welcome-page {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
    }

    .header {
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
      width: 100%;
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .header-logo {
      height: 32px;
      width: auto;
    }

    .main-content {
      flex: 1;
      background-color: #3F51B5;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      text-align: center;
    }

    .logo-container {
      margin: 2rem 0;
      width: 100%;
      max-width: 300px;
      text-align: center;
    }

    .logo {
      width: 100%;
      height: auto;
    }

    h1 {
      color: white;
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-weight: normal;
    }

    .description {
      color: white;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .description p {
      margin: 0.5rem 0;
      font-size: 1rem;
    }

    .buttons-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      max-width: 400px;
    }

    button {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: transform 0.2s, background-color 0.3s;
    }

    button:hover {
      transform: translateY(-2px);
    }

    .btn-primary {
      background-color: white;
      color: #3F51B5;
    }

    .btn-primary:hover {
      background-color: #f5f5f5;
    }

    .btn-accent {
      background-color: #7986CB;
      color: white;
    }

    .btn-accent:hover {
      background-color: #5C6BC0;
    }
  `]
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  onLearnMore() {
    // Implementar la funcionalidad de "Enséñame" más adelante
    console.log('Navegando a la sección de aprendizaje...');
  }

  onRequestService() {
    this.router.navigate(['/services/request']);
  }
}
