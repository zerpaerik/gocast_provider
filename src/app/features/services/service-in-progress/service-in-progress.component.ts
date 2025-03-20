import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-in-progress',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
      <header class="header">
        <div class="header-content">
          <img src="assets/images/logob.png" alt="GoCast Logo" class="logo">
        </div>
      </header>

      <div class="main-content">
        <div class="service-request-container">
          <div class="contact-client">
            Contacta a tu cliente: +00-000-0000000
          </div>

          <div class="service-card">
            <img src="assets/images/srv2.png" alt="Servicio de Grúa">
            <h3>Servicio de Grúa</h3>
          </div>

          <button class="btn-gps">Ver ubicación GPS</button>

          <div class="form-group">
            <label>Nombre</label>
            <div class="field-value">{{ serviceRequest.clientName }}</div>
          </div>

          <div class="form-group">
            <label>Vehículo</label>
            <div class="field-value">{{ serviceRequest.vehicle }}</div>
          </div>

          <div class="form-group">
            <label>Placa</label>
            <div class="field-value">{{ serviceRequest.plate }}</div>
          </div>

          <div class="form-group">
            <label>Ubicación del vehículo a auxiliar</label>
            <div class="field-value">{{ serviceRequest.location }}</div>
          </div>

          <div class="form-group">
            <label>Mensaje adicional (max. 500 letras)</label>
            <textarea 
              class="field-value textarea"
              [(ngModel)]="serviceRequest.additionalMessage"
              maxlength="500"
              rows="4">
            </textarea>
          </div>

          <button class="btn-accept" (click)="onFinishService()">Finalizar servicio</button>
          <button class="btn-reject" (click)="onCancelService()">Cancelar servicio</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: #3F51B5;
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

      .logo {
        height: 32px;
        width: auto;
      }
    }

    .main-content {
      flex: 1;
      padding: 1rem;
    }

    .service-request-container {
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      color: white;

      .contact-client {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        padding: 0.75rem;
        border-radius: 4px;
        text-align: center;
        margin-bottom: 1.5rem;
      }

      .service-card {
        background-color: white;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
        margin-bottom: 1.5rem;

        img {
          width: 200px;
          height: auto;
          margin-bottom: 0.5rem;
        }

        h3 {
          color: #000;
          margin: 0;
          font-weight: normal;
        }
      }

      .btn-gps {
        width: 100%;
        padding: 0.75rem;
        background-color: #6C7AE0;
        color: white;
        border: none;
        border-radius: 4px;
        margin-bottom: 1.5rem;
        cursor: pointer;

        &:hover {
          background-color: #5C6BC0;
        }
      }

      .form-group {
        margin-bottom: 1rem;

        label {
          display: block;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .field-value {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 0.75rem;
          border-radius: 4px;
          color: white;
          min-height: 20px;

          &.textarea {
            width: 100%;
            border: none;
            resize: vertical;
            min-height: 100px;
            box-sizing: border-box;
            font-family: inherit;
            font-size: inherit;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;

            &:focus {
              outline: none;
              background-color: rgba(255, 255, 255, 0.15);
            }
          }
        }
      }

      .btn-accept, .btn-reject {
        width: 100%;
        padding: 0.75rem;
        border: none;
        border-radius: 4px;
        margin-bottom: 0.75rem;
        cursor: pointer;
        font-size: 1rem;
      }

      .btn-accept {
        background-color: #6C7AE0;
        color: white;

        &:hover {
          background-color: #5C6BC0;
        }
      }

      .btn-reject {
        background-color: #FF4081;
        color: white;

        &:hover {
          background-color: #F50057;
        }
      }
    }
  `]
})
export class ServiceInProgressComponent {
  serviceRequest = {
    clientName: 'Aureliano',
    vehicle: 'Corsa',
    plate: 'AB-123',
    location: 'San Bernardino, al lado del Instituto de Oncología',
    additionalMessage: 'Necesito por favor un cambio de batería también'
  };

  constructor(private router: Router) {}

  onFinishService(): void {
    this.router.navigate(['/services/rating']);
  }

  onCancelService(): void {
    // Aquí puedes agregar la lógica para cancelar el servicio
    this.router.navigate(['/dashboard/welcome']);
  }
}
