import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="service-page">
    <header class="header">
        <div class="header-content">
          <img src="assets/images/logob.png" alt="GoCast Logo" class="header-logo">
        </div>
      </header>

      <div class="main-content">
        <div class="welcome-section">
          <button class="back-button" (click)="goBack()">
            ← Volver
          </button>
          <h1>{{ getServiceTitle() }}</h1>
          <p class="subtitle">Detalles del servicio seleccionado</p>
        </div>

        <div class="contact-info">
          <a href="tel:+00000000000" class="contact-button">
            Contacta GoCast: +00-000-0000000
          </a>
        </div>

        <div class="detail-container">
          <div class="service-info">
            <h2>{{ getSubServiceTitle() }}</h2>
            <p>{{ getServiceDescription() }}</p>
            
            <!-- Aquí irá el formulario de solicitud de servicio -->
            <div class="coming-soon">
              <p>El formulario de solicitud estará disponible próximamente</p>
              <button class="primary-button" (click)="goBack()">
                Volver a servicios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .service-page {
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
      padding: 0 2rem;
    }

    .header-logo {
      height: 32px;
      width: auto;
    }

    .main-content {
      flex: 1;
      background-color: #3F51B5;
      padding: 2rem;
    }

    .welcome-section {
      max-width: 1200px;
      margin: 0 auto 2rem;
      color: white;
    }

    .back-button {
      background: none;
      border: none;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      padding: 0;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.9;
      transition: opacity 0.3s;
    }

    .back-button:hover {
      opacity: 1;
    }

    h1 {
      font-size: 2rem;
      margin: 0;
      font-weight: normal;
    }

    .subtitle {
      font-size: 1.1rem;
      margin: 0.5rem 0 0;
      opacity: 0.9;
    }

    .contact-info {
      max-width: 1200px;
      margin: 0 auto 2rem;
      text-align: right;
    }

    .contact-button {
      display: inline-block;
      background-color: #2196F3;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-size: 0.9rem;
      transition: background-color 0.3s;
    }

    .contact-button:hover {
      background-color: #1976D2;
    }

    .detail-container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 8px;
      padding: 2rem;
    }

    .service-info {
      max-width: 800px;
      margin: 0 auto;
    }

    h2 {
      color: #333;
      margin: 0 0 1rem;
      font-size: 1.5rem;
    }

    .service-info p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .coming-soon {
      text-align: center;
      padding: 2rem;
      background: #f5f5f5;
      border-radius: 4px;
      margin-top: 2rem;
    }

    .primary-button {
      background-color: #3F51B5;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .primary-button:hover {
      background-color: #303F9F;
    }

    @media (max-width: 768px) {
      .detail-container {
        margin: 0 1rem;
        padding: 1rem;
      }
    }
  `]
})
export class ServiceDetailComponent implements OnInit {
  serviceId: string = '';
  subServiceId: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.serviceId = this.route.snapshot.params['id'];
    this.subServiceId = this.route.snapshot.params['subId'];
  }

  getServiceTitle(): string {
    switch (this.serviceId) {
      case 'roadside':
        return 'Asistencia Vial';
      case 'medical':
        return 'Asistencia Médica';
      case 'pets':
        return 'Mascotas';
      default:
        return 'Servicio';
    }
  }

  getSubServiceTitle(): string {
    switch (this.subServiceId) {
      case 'tow':
        return 'Servicio de Grúa';
      case 'battery':
        return 'Asistencia de Batería';
      case 'fuel':
        return 'Suministro de Combustible';
      case 'tire':
        return 'Servicio de Neumáticos';
      case 'locksmith':
        return 'Servicio de Cerrajería';
      case 'mechanic':
        return 'Mecánica Ligera';
      default:
        return 'Servicio Específico';
    }
  }

  getServiceDescription(): string {
    switch (this.subServiceId) {
      case 'tow':
        return 'Servicio de grúa para el traslado de su vehículo a cualquier punto de la ciudad. Disponible 24/7.';
      case 'battery':
        return 'Asistencia con problemas de batería, incluyendo arranque con cables y diagnóstico básico.';
      case 'fuel':
        return 'Entrega de combustible de emergencia cuando su vehículo se quede sin gasolina.';
      case 'tire':
        return 'Cambio de neumáticos y reparación de pinchazos en el lugar.';
      case 'locksmith':
        return 'Servicio de cerrajería automotriz para casos de llaves perdidas o problemas con el acceso al vehículo.';
      case 'mechanic':
        return 'Servicios de mecánica básica en el sitio para problemas menores que pueden ser resueltos sin necesidad de taller.';
      default:
        return 'Descripción del servicio no disponible.';
    }
  }

  goBack() {
    this.router.navigate(['/services', this.serviceId]);
  }
}
