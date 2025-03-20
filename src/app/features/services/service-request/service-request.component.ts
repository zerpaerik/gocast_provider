import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRequest, MOCK_SERVICES } from '../models/service-request.model';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {
  pendingServices: ServiceRequest[] = MOCK_SERVICES;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onServiceClick(serviceId: number): void {
    this.router.navigate(['/services/request', serviceId]);
  }
}
