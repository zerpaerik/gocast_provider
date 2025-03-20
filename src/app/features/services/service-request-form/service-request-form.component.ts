import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceRequest } from '../models/service-request.model';
import { ServiceService } from '../services/service.service';
import { SubService } from '../models/sub-service.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-request-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="service-page">
      <header class="header">
        <div class="header-content">
          <img src="assets/images/logob.png" alt="GoCast Logo" class="header-logo">
        </div>
      </header>

      <div class="main-content">
        <div class="navigation-section">
          <button class="back-button" (click)="goBack()">
            <span class="back-icon">←</span> Volver
          </button>
          <h2 class="section-title">Servicio de Grúa - Llena tu información</h2>
          <a href="tel:+00000000000" class="contact-button">
            Contacta GoCast: +00-000-0000000
          </a>
        </div>

        <div class="form-container">
          <div class="map-section">
            <img src="assets/images/map.png" alt="Mapa" class="map-preview">
            <button class="location-button" (click)="useCurrentLocation()">
              <i class="location-icon">📍</i> Utilizar ubicación
            </button>
          </div>

          <form [formGroup]="requestForm" (ngSubmit)="onSubmit()" class="form-section">
            <div class="form-group">
              <label for="name">
                Nombre
                <span class="info-icon" title="Tu nombre completo">ⓘ</span>
              </label>
              <input 
                type="text" 
                id="name"
                formControlName="name" 
                placeholder="Ingresa tu nombre completo">
            </div>

            <div class="form-group">
              <label for="vehicle">
                Vehículo
                <span class="info-icon" title="Marca y modelo de tu vehículo">ⓘ</span>
              </label>
              <input 
                type="text" 
                id="vehicle"
                formControlName="vehicle" 
                placeholder="Marca y modelo de tu vehículo">
            </div>

            <div class="form-group">
              <label for="plate">
                Placa
                <span class="info-icon" title="Número de placa de tu vehículo">ⓘ</span>
              </label>
              <input 
                type="text" 
                id="plate"
                formControlName="plate" 
                placeholder="Número de placa">
            </div>

            <div class="form-group">
              <label for="location">
                Ubicación del vehículo a auxiliar
                <span class="info-icon" title="Ubicación del vehículo">ⓘ</span>
              </label>
              <input 
                type="text" 
                id="location"
                formControlName="location" 
                placeholder="Puedes escribir aquí"
                [readonly]="false">
            </div>

            <div class="form-group">
              <label for="phone">
                Teléfono de contacto
                <span class="info-icon" title="Número de teléfono">ⓘ</span>
              </label>
              <input 
                type="tel" 
                id="phone"
                formControlName="phone" 
                placeholder="+58 412-351-8784">
            </div>

            <div class="form-group">
              <label for="additionalInfo">
                Mensaje adicional (max. 500 letras)
                <span class="info-icon" title="Información adicional">ⓘ</span>
              </label>
              <textarea 
                id="additionalInfo"
                formControlName="additionalInfo" 
                placeholder="Cualquier información adicional que tu proveedor necesite"
                rows="4">
              </textarea>
            </div>

            <button type="submit" class="submit-button" [disabled]="!requestForm.valid">
              Pedir servicio
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .service-page {
      min-height: 100vh;
      background-color: #3F51B5;
      color: white;
    }

    .header {
      background-color: white;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .navigation-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .back-button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      color: white;
      font-size: 1rem;
      cursor: pointer;
    }

    .back-icon {
      margin-right: 0.5rem;
    }

    .section-title {
      font-size: 1.2rem;
      font-weight: normal;
      margin: 0;
    }

    .contact-button {
      background-color: #2196F3;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-size: 0.9rem;
    }

    .form-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      background-color: #2C3E99;
      border-radius: 8px;
      padding: 2rem;
    }

    .map-section {
      position: relative;
    }

    .map-preview {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }

    .location-button {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .form-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
    }

    .info-icon {
      color: #90CAF9;
      cursor: help;
    }

    input, textarea {
      padding: 0.75rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 0.9rem;
    }

    input::placeholder, textarea::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    .submit-button {
      background-color: #2196F3;
      color: white;
      padding: 1rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 1rem;
    }

    .submit-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `]
})
export class ServiceRequestFormComponent implements OnInit, OnDestroy {
  requestForm: FormGroup;
  private subscription: Subscription = new Subscription();
  selectedService: SubService | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private serviceService: ServiceService
  ) {
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      vehicle: ['', Validators.required],
      plate: ['', Validators.required],
      location: [''],
      phone: ['', Validators.required],
      additionalInfo: ['']
    });
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const serviceId = params['id'];
      if (serviceId) {
        const service = this.serviceService.getServiceById(serviceId);
        this.selectedService = service || null;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  goBack() {
    this.router.navigate(['/services/roadside']);
  }

  useCurrentLocation() {
    // Aquí iría la lógica para obtener la ubicación actual
    this.requestForm.patchValue({
      location: 'Ubicación actual'
    });
  }

  onSubmit() {
    if (this.requestForm.valid) {
      const serviceRequest: ServiceRequest = {
        ...this.requestForm.value,
        serviceId: this.selectedService?.id || '',
        serviceType: this.selectedService?.title || '',
        status: 'pending',
        timestamp: new Date().toISOString()
      };
      
      // Guardar la solicitud y navegar al detalle
      this.router.navigate(['/services/request-detail'], { 
        state: { serviceRequest } 
      });
    }
  }
}
