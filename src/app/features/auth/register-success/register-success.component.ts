import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-success',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="success-container">
      <div class="logo-header">
        <img src="assets/images/logow.png" alt="GoCast Logo" class="logo">
      </div>

      <div class="success-content">
        <h2>Correo de confirmación enviado</h2>
        <p>Puedes comenzar a utilizar GoCast, pero algunos servicios no estarán disponibles hasta que confirmes tu correo</p>
        
        <button class="start-button" (click)="goToDashboard()">
          Comenzar a usar GoCast
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #3F51B5;
    }

    .success-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .logo-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .logo {
      height: 50px;
      margin: 1rem 0;
    }

    .success-content {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      text-align: center;
    }

    h2 {
      color: #333;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      color: #666;
      margin-bottom: 2rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .start-button {
      background-color: #4C5FD5;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 1rem 2rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .start-button:hover {
      background-color: #3F51B5;
    }

    @media (max-width: 480px) {
      .success-content {
        padding: 1.5rem;
      }

      .start-button {
        width: 100%;
      }
    }
  `]
})
export class RegisterSuccessComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
