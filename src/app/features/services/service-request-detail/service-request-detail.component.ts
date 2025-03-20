import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface ServiceRequest {
  clientName: string;
  vehicle: string;
  plate: string;
  location: string;
  additionalMessage: string;
}

@Component({
  selector: 'app-service-request-detail',
  templateUrl: './service-request-detail.component.html',
  styleUrls: ['./service-request-detail.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ServiceRequestDetailComponent implements OnInit {
  serviceRequest: ServiceRequest = {
    clientName: 'Aureliano',
    vehicle: 'Corsa',
    plate: 'AB-123',
    location: 'San Bernardino, al lado del Instituto de Oncología',
    additionalMessage: 'Necesito por favor un cambio de batería también'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Aquí se obtendría el detalle del servicio desde el backend
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/services/request']);
    }
  }

  navigateToServiceDetail(serviceId: string) {
    this.router.navigate(['/services/detail', { id: serviceId }]);
  }

  onAcceptService(): void {
    // Implementar lógica para aceptar el servicio
    console.log('Servicio aceptado');
    this.router.navigate(['/services/in-progress']);
  }

  onRejectService(): void {
    // Implementar lógica para rechazar el servicio
    console.log('Servicio rechazado');
    this.router.navigate(['/dashboard/welcome']);
  }
}
