import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // Usuario de prueba
  private mockUser: User = {
    id: '1',
    cedula: '12345678',
    nombre: 'Usuario Prueba'
  };

  constructor() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  login(cedula: string, password: string, remember: boolean): Observable<User> {
    // Simulación de login
    return of(this.mockUser).pipe(
      delay(1000), // Simular delay de red
      tap(user => {
        if (remember) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        this.currentUserSubject.next(user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  

  register(data: RegisterData): Observable<User> {
    // Simulación de registro
    return of(this.mockUser).pipe(
      delay(1000), // Simular delay de red
      tap(user => {
        this.currentUserSubject.next(user);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}

export interface RegisterData {
  cedula: string;
  fullName: string;
  phone: string;
  city: string;
  password: string;
}
