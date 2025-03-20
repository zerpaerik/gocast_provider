import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="register-container">
      <div class="logo-header">
        <img src="assets/images/logow.png" alt="GoCast Logo" class="logo">
      </div>

      <div class="register-content">
        <h2>Registrate en GoCast</h2>
        <p class="subtitle">Ingresa tus datos y te enviaremos un correo de confirmación para finalizar tu registro</p>

        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label>Número de identificación (Cédula)</label>
            <div class="input-group">
              <input 
                type="text" 
                formControlName="cedula" 
                placeholder="Correo o cédula">
              <i class="info-icon">i</i>
            </div>
          </div>

          <div class="form-group">
            <label>Nombre completo (Obligatorio)</label>
            <div class="input-group">
              <input 
                type="text" 
                formControlName="fullName" 
                placeholder="Nombre completo">
              <i class="info-icon">i</i>
            </div>
          </div>

          <div class="form-group">
            <label>Número de teléfono móvil (Obligatorio)</label>
            <div class="input-group">
              <input 
                type="tel" 
                formControlName="phone" 
                placeholder="Número de teléfono">
              <i class="info-icon">i</i>
            </div>
          </div>

          <div class="form-group">
            <label>Ciudad</label>
            <div class="input-group">
              <input 
                type="text" 
                formControlName="city" 
                placeholder="Ciudad">
              <i class="info-icon">i</i>
            </div>
          </div>

          <div class="form-group">
            <label>Contraseña (Obligatoria)</label>
            <div class="input-group">
              <input 
                type="password" 
                formControlName="password" 
                placeholder="••••••••••••">
              <i class="info-icon">i</i>
            </div>
          </div>

          <div class="form-group">
            <label>Confirmar contraseña (Obligatoria)</label>
            <div class="input-group">
              <input 
                type="password" 
                formControlName="confirmPassword" 
                placeholder="••••••••••••">
              <i class="info-icon">i</i>
            </div>
          </div>

          <button type="submit" class="register-button" [disabled]="registerForm.invalid || isLoading">
            Registrarme ahora
          </button>

          <div class="login-link">
            <a routerLink="/auth/login">Haz login aquí</a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #3F51B5;
    }

    .register-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .logo-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .logo {
      height: 50px;
      margin: 1rem 0;
    }

    .register-content {
      background: white;
      border-radius: 8px;
      padding: 2rem;
    }

    h2 {
      color: #333;
      text-align: center;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 2rem;
      font-size: 0.9rem;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-size: 0.9rem;
    }

    .input-group {
      position: relative;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      color: #333;
    }

    input::placeholder {
      color: #999;
    }

    .info-icon {
      position: absolute;
      right: 12px;
      color: #666;
      font-style: normal;
      font-size: 0.8rem;
      width: 16px;
      height: 16px;
      border: 1px solid #666;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: help;
    }

    .register-button {
      width: 100%;
      padding: 1rem;
      background-color: #4C5FD5;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 1rem;
      transition: background-color 0.3s;
    }

    .register-button:disabled {
      background-color: #99a1d8;
      cursor: not-allowed;
    }

    .login-link {
      text-align: center;
      margin-top: 1rem;
    }

    .login-link a {
      color: #4C5FD5;
      text-decoration: none;
      font-size: 0.9rem;
    }

    .login-link a:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      .register-content {
        padding: 1.5rem;
      }

      input {
        font-size: 0.9rem;
      }
    }
  `]
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      cedula: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  showError(field: string): boolean {
    const control = this.registerForm.get(field);
    return !!(control && control.errors && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          this.router.navigate(['/auth/register-success']);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.message || 'Error al registrar. Por favor intente nuevamente.';
        }
      });
    }
  }
}
