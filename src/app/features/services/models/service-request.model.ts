export interface ServiceRequest {
  id: number;
  clientName: string;
  serviceType: string;
  location: string;
  status: 'pending' | 'accepted' | 'completed' | 'rejected';
  description: string;
  createdAt: Date;
  vehicleInfo?: {
    brand: string;
    model: string;
    year: string;
    color: string;
  };
}

export const MOCK_SERVICES: ServiceRequest[] = [
  {
    id: 1,
    clientName: 'Juan Pérez',
    serviceType: 'Servicio de Grúa',
    location: 'Av. Principal, Los Palos Grandes',
    status: 'pending',
    description: 'Vehículo no enciende, necesita traslado',
    createdAt: new Date(),
    vehicleInfo: {
      brand: 'Toyota',
      model: 'Corolla',
      year: '2020',
      color: 'Blanco'
    }
  },
  {
    id: 2,
    clientName: 'María González',
    serviceType: 'Servicio de Grúa',
    location: 'Calle 5, La Castellana',
    status: 'pending',
    description: 'Accidente menor, necesita traslado a taller',
    createdAt: new Date(),
    vehicleInfo: {
      brand: 'Honda',
      model: 'Civic',
      year: '2019',
      color: 'Gris'
    }
  }
];
