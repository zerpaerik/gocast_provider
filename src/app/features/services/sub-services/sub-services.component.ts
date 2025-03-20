import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { SubService } from '../models/sub-service.model';

@Component({
  selector: 'app-sub-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="services-page">
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
          <h1 class="section-title">Selecciona el servicio que necesitas</h1>
          <a href="tel:+00000000000" class="contact-button">
            Contacta GoCast: +00-000-0000000
          </a>
        </div>

        <div class="services-grid">
          <div *ngFor="let service of services" class="service-card" (click)="onServiceSelect(service)">
            <div class="card-image">
              <img [src]="service.imageUrl" [alt]="service.title">
              <div class="service-tag">{{ service.tag }}</div>
            </div>
            <div class="card-content">
              <h3>{{ service.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .services-page {
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: #3F51B5;
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
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
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
      gap: 0.5rem;
      background: none;
      border: none;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      padding: 0.5rem;
      opacity: 0.9;
      transition: opacity 0.3s;
    }

    .back-button:hover {
      opacity: 1;
    }

    .back-icon {
      font-size: 1.2rem;
    }

    .section-title {
      color: white;
      font-size: 1.2rem;
      font-weight: normal;
      margin: 0;
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

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .service-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      position: relative;
    }

    .service-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card-image {
      position: relative;
      width: 100%;
      height: 180px;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .service-tag {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: white;
      color: #3F51B5;
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .card-content {
      padding: 1rem;
      text-align: center;
    }

    .card-content h3 {
      margin: 0;
      color: #333;
      font-size: 1.1rem;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .main-content {
        padding: 1rem;
      }

      .navigation-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      .contact-button {
        width: 100%;
        text-align: center;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .service-card {
        max-width: none;
      }
    }
  `]
})
export class SubServicesComponent implements OnInit {
  services: SubService[] = [];

  constructor(
    private router: Router,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.services = this.serviceService.getRoadsideServices();
  }

  onServiceSelect(service: SubService): void {
    this.serviceService.setSelectedService(service);
    this.router.navigate([service.route]);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
