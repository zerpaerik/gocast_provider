import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
          <h2>Recuperar Contraseña</h2>
          <p class="instruction-text">Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña.</p>
          
          <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <div class="input-container">
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email" 
                  placeholder="ejemplo@correo.com">
                <span class="info-icon">i</span>
              </div>
              <span class="error-text" *ngIf="showError('email')">
                Ingresa un correo electrónico válido
              </span>
            </div>

            <button type="submit" [disabled]="forgotPasswordForm.invalid || isLoading">
              Enviar Instrucciones
            </button>

            <div class="back-to-login">
              <a (click)="goToLogin()">Volver al inicio de sesión</a>
            </div>

            <div class="error-message" *ngIf="errorMessage">
              {{ errorMessage }}
            </div>

            <div class="success-message" *ngIf="successMessage">
              {{ successMessage }}
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
      height: 40px;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
    }

    .logo-container {
      margin-bottom: 2rem;
    }

    .logo {
      height: 60px;
    }

    .login-form-container {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #333;
      text-align: center;
      margin-bottom: 1rem;
    }

    .instruction-text {
      color: #666;
      text-align: center;
      margin-bottom: 2rem;
      font-size: 0.9rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
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

    .info-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      cursor: help;
    }

    button {
      width: 100%;
      padding: 1rem;
      background-color: #3F51B5;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:disabled {
      background-color: #999;
      cursor: not-allowed;
    }

    .error-text {
      color: #dc3545;
      font-size: 0.8rem;
      margin-top: 0.25rem;
    }

    .back-to-login {
      text-align: center;
      margin-top: 1rem;
    }

    .back-to-login a {
      color: #3F51B5;
      text-decoration: none;
      cursor: pointer;
    }

    .back-to-login a:hover {
      text-decoration: underline;
    }

    .error-message {
      color: #dc3545;
      text-align: center;
      margin-top: 1rem;
    }

    .success-message {
      color: #28a745;
      text-align: center;
      margin-top: 1rem;
    }
  `]
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  showError(field: string): boolean {
    const control = this.forgotPasswordForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const email = this.forgotPasswordForm.get('email')?.value;

      // TODO: Implementar el servicio de recuperación de contraseña
      // this.authService.requestPasswordReset(email).subscribe(
      //   () => {
      //     this.successMessage = 'Se han enviado las instrucciones a tu correo electrónico';
      //     setTimeout(() => {
      //       this.router.navigate(['/auth/reset-password']);
      //     }, 3000);
      //   },
      //   (error) => {
      //     this.errorMessage = 'No se pudo procesar tu solicitud. Por favor, intenta nuevamente.';
      //     this.isLoading = false;
      //   }
      // );

      // Simulación temporal
      setTimeout(() => {
        this.successMessage = 'Se han enviado las instrucciones a tu correo electrónico';
        setTimeout(() => {
          this.router.navigate(['/auth/reset-password']);
        }, 3000);
      }, 1500);
    }
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}