import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubService } from '../models/sub-service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private roadsideServices: SubService[] = [
    {
      id: '1',
      parentServiceId: 'roadside',
      title: 'Servicio de Grúa',
      description: 'Servicio de grúa para traslado de vehículos',
      imageUrl: 'assets/images/ss1.png',
      route: '/services/roadside/tow',
      tag: 'Asistencia Vial'
    },
    {
      id: '2',
      parentServiceId: 'roadside',
      title: 'Cambio de Llanta',
      description: 'Cambio o reparación de neumáticos',
      imageUrl: 'assets/images/ss2.png',
      route: '/services/roadside/tire',
      tag: 'Asistencia Vial'
    },
    {
      id: '3',
      parentServiceId: 'roadside',
      title: 'Auxiliar Batería',
      description: 'Asistencia con problemas de batería',
      imageUrl: 'assets/images/ss3.png',
      route: '/services/roadside/battery',
      tag: 'Asistencia Vial'
    },
    {
      id: '4',
      parentServiceId: 'roadside',
      title: 'Gasolina',
      description: 'Suministro de combustible de emergencia',
      imageUrl: 'assets/images/ss4.png',
      route: '/services/roadside/fuel',
      tag: 'Asistencia Vial'
    },
    {
      id: '5',
      parentServiceId: 'roadside',
      title: 'Cerrajería',
      description: 'Apertura de puertas y cerraduras',
      imageUrl: 'assets/images/ss2.png',
      route: '/services/roadside/locksmith',
      tag: 'Asistencia Vial'
    },
    {
      id: '6',
      parentServiceId: 'roadside',
      title: 'Mecánica Ligera',
      description: 'Reparaciones mecánicas básicas',
      imageUrl: 'assets/images/ss1.png',
      route: '/services/roadside/mechanic',
      tag: 'Asistencia Vial'
    },
    {
      id: '7',
      parentServiceId: 'roadside',
      title: 'Remolque Pesado',
      description: 'Servicio de grúa para vehículos pesados',
      imageUrl: 'assets/images/ss4.png',
      route: '/services/roadside/heavy-tow',
      tag: 'Asistencia Vial'
    },
    {
      id: '8',
      parentServiceId: 'roadside',
      title: 'Arranque de Motor',
      description: 'Asistencia para arrancar el vehículo',
      imageUrl: 'assets/images/ss1.png',
      route: '/services/roadside/jump-start',
      tag: 'Asistencia Vial'
    }
  ];

  private selectedServiceSubject = new BehaviorSubject<SubService | null>(null);
  selectedService$ = this.selectedServiceSubject.asObservable();

  getRoadsideServices(): SubService[] {
    return this.roadsideServices;
  }

  getSubServices(parentId: string): SubService[] {
    return this.roadsideServices.filter(service => service.parentServiceId === parentId);
  }

  getServiceById(id: string): SubService | undefined {
    return this.roadsideServices.find(service => service.id === id);
  }

  getServiceByRoute(route: string): SubService | undefined {
    return this.roadsideServices.find(service => service.route === route);
  }

  setSelectedService(service: SubService): void {
    this.selectedServiceSubject.next(service);
  }

  getSelectedService(): Observable<SubService | null> {
    return this.selectedService$;
  }
}
