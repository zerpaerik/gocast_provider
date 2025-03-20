import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="login-page">
      <header class="header">
        <div class="header-content">
          <img src="assets/images/logob.png" alt="GoCast Logo" class="header-logo">
        </div>
      </header>

      <div class="main-content">
        <div class="logo-container">
          <img src="assets/images/logow.png" alt="GoCast Logo" class="logo">
        </div>

        <div class="login-form-container">
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="cedula">ID</label>
              <div class="input-container">
                <input 
                  type="text" 
                  id="cedula" 
                  formControlName="cedula" 
                  placeholder="Correo o cédula">
                <span class="info-icon">i</span>
              </div>
              <span class="error-text" *ngIf="showError('cedula')">Este campo es requerido</span>
            </div>
            
            <div class="form-group">
              <label for="password">Contraseña</label>
              <div class="input-container">
                <input 
                  type="password" 
                  id="password" 
                  formControlName="password" 
                  placeholder="••••••••••••">
                <span class="info-icon">i</span>
              </div>
              <span class="error-text" *ngIf="showError('password')">Este campo es requerido</span>
            </div>

            <div class="remember-container">
              <label class="switch">
                <input type="checkbox" formControlName="remember">
                <span class="slider"></span>
              </label>
              <span class="remember-text">Recuérdame</span>
            </div>

            <button type="submit" [disabled]="loginForm.invalid || isLoading">
              Ingresar
            </button>

            <div class="forgot-password">
              <a routerLink="/auth/register">¿No tienes cuenta? Registrate en GoCast</a>
            </div>

            <div class="forgot-password">
              <a (click)="goToForgotPassword()">¿Olvidaste tu contraseña?</a>
            </div>

            <div class="error-message" *ngIf="errorMessage">
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      background-color: #3F51B5;
    }

    .header {
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
      width: 100%;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .logo-container {
      margin-bottom: 2rem;
      text-align: center;
    }

    .logo {
      width: 200px;
      height: auto;
    }

    .login-form-container {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-size: 0.9rem;
    }

    .input-container {
      position: relative;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    input:focus {
      outline: none;
      border-color: #3F51B5;
    }

    .info-icon {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: #666;
      cursor: help;
      font-style: italic;
    }

    .remember-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 24px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
      border-radius: 24px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: #3F51B5;
    }

    input:checked + .slider:before {
      transform: translateX(16px);
    }

    .remember-text {
      color: #666;
      font-size: 0.9rem;
    }

    button {
      width: 100%;
      padding: 1rem;
      background: #3F51B5;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover:not(:disabled) {
      background: #303F9F;
    }

    button:disabled {
      background: #9FA8DA;
      cursor: not-allowed;
    }

    .forgot-password {
      text-align: center;
      margin-top: 1rem;
    }

    .forgot-password a {
      color: #3F51B5;
      text-decoration: none;
      font-size: 0.9rem;
    }

    .forgot-password a:hover {
      text-decoration: underline;
    }

    .error-message {
      color: #f44336;
      font-size: 0.9rem;
      margin-top: 1rem;
      text-align: center;
    }

    .error-text {
      color: #f44336;
      font-size: 0.8rem;
      margin-top: 0.25rem;
      display: block;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      cedula: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  showError(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const { cedula, password, remember } = this.loginForm.value;

      this.authService.login(cedula, password, remember).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.errorMessage = 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

  goToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}
