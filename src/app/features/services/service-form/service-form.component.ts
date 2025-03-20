import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <header class="header">
        <div class="header-content">
          <img src="assets/images/logob.png" alt="GoCast Logo" class="logo">
        </div>
      </header>

      <div class="main-content">
        <div class="top-section">
          <div class="welcome-text">
            <h1>Hola, [Nombre]</h1>
            <p>Tienes un servicio pendiente</p>
          </div>
          <button class="contact-button">
            Contacta GoCast: +00-000-0000000
          </button>
        </div>

        <div class="service-card">
          <h2>Nuevo servicio</h2>
          <div class="service-image">
            <img src="assets/images/srv1.png" alt="Servicio de Grúa">
          </div>
          <h3>Servicio de Grúa</h3>
          <button class="view-service-btn" (click)="onServiceSelect('1')">Ver servicio</button>        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .header {
      background-color: white;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .logo {
      height: 32px;
      width: auto;
    }

    .main-content {
      flex: 1;
      background-color: #3F51B5;
      padding: 20px;
    }

    .top-section {
      max-width: 1200px;
      margin: 0 auto 40px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0 20px;
      color: white;
    }

    .welcome-text {
      h1 {
        font-size: 24px;
        margin: 0;
        margin-bottom: 5px;
      }

      p {
        margin: 0;
      }
    }

    .contact-button {
      background-color: #5C6BC0;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      white-space: nowrap;
    }

    .service-card {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      max-width: 400px;
      margin: 0 auto;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h2 {
        color: #333;
        font-size: 20px;
        margin-bottom: 20px;
      }

      .service-image {
        margin: 20px 0;
        img {
          max-width: 100%;
          height: auto;
        }
      }

      h3 {
        color: #3F51B5;
        font-size: 18px;
        margin-bottom: 20px;
      }

      .view-service-btn {
        background-color: #3F51B5;
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 25px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
          background-color: #303F9F;
        }
      }
    }

    @media (max-width: 768px) {
      .top-section {
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
        text-align: center;
      }
    }
  `]
})
export class ServiceFormComponent {
  constructor(private router: Router) {}

  navigateToServiceRequestDetail(serviceId: string) {
    this.router.navigate(['/services/request', { id: serviceId }]);
  }

  onServiceSelect(serviceId: string): void {
    this.router.navigate(['/services/request/:id', { id: serviceId }]);
  }
}
