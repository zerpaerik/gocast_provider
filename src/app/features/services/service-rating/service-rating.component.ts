import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
    <header class="header">
    <div class="header-content">
      <img src="assets/images/logob.png" alt="GoCast Logo" class="logo">
    </div>
  </header>

  <div class="main-content">
    <div class="service-request-container">
    <div class="service-card">
            <img src="assets/images/srv2.png" alt="Servicio de Grúa">
            <h3>Servicio de Grúa</h3>
          </div>

      <div class="rating-content">
        <h2>Califica a tu cliente</h2>
        
        <div class="stars">
          <span 
            *ngFor="let star of [1,2,3,4,5]" 
            class="star"
            [class.active]="star <= rating"
            (click)="setRating(star)"
          >
            ★
          </span>
        </div>

        <div class="message-section">
          <label>Mensaje adicional (max. 500 letras)</label>
          <textarea 
            [(ngModel)]="comments"
            placeholder="Cualquier información adicional que tu cliente necesite"
            maxlength="500"
            rows="4">
          </textarea>
        </div>

        <button class="btn-finish" (click)="onFinish()">Finalizar servicio</button>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
      background-color: #3F51B5;
      display: flex;
      flex-direction: column;
    }

    .service-request-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  color: white;

  .contact-client {
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    padding: 0.75rem;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .service-card {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    margin-bottom: 1.5rem;

    img {
      width: 200px;
      height: auto;
      margin-bottom: 0.5rem;
    }

    h3 {
      color: #000;
      margin: 0;
      font-weight: normal;
    }
  }

  .btn-gps {
    width: 100%;
    padding: 0.75rem;
    background-color: #6C7AE0;
    color: white;
    border: none;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: #5C6BC0;
    }
  }

  .form-group {
    margin-bottom: 1rem;

    label {
      display: block;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .field-value {
      background-color: rgba(255, 255, 255, 0.1);
      padding: 0.75rem;
      border-radius: 4px;
      color: white;
      min-height: 20px;
    }
  }

  .btn-accept, .btn-reject {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    margin-bottom: 0.75rem;
    cursor: pointer;
    font-size: 1rem;
  }

  .btn-accept {
    background-color: #6C7AE0;
    color: white;

    &:hover {
      background-color: #5C6BC0;
    }
  }

  .btn-reject {
    background-color: #FF4081;
    color: white;

    &:hover {
      background-color: #F50057;
    }
  }
}

    .header {
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .logo {
      height: 32px;
      width: auto;
    }
  }
}

    .service-image {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .service-label {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.9rem;
      }
    }

    .rating-content {
      flex: 1;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      h2 {
        color: white;
        text-align: center;
        font-weight: normal;
        margin: 0;
      }
    }

    .stars {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .star {
      font-size: 2.5rem;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.3);
      transition: color 0.2s ease;

      &.active {
        color: #82B1FF;
      }
    }

    .message-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
      }

      textarea {
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 4px;
        padding: 0.75rem;
        color: white;
        resize: none;
        font-family: inherit;
        font-size: inherit;
        min-height: 100px;

        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        &:focus {
          outline: none;
          background-color: rgba(255, 255, 255, 0.15);
        }
      }
    }

    .btn-finish {
      width: 100%;
      padding: 0.75rem;
      background-color: #82B1FF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      margin-top: auto;

      &:hover {
        background-color: #6C7AE0;
      }
    }
  `]
})
export class ServiceRatingComponent {
  rating: number = 0;
  comments: string = '';

  constructor(private router: Router) {}

  setRating(value: number): void {
    this.rating = value;
  }

  onFinish(): void {
    // Aquí puedes agregar la lógica para guardar la calificación
    this.router.navigate(['/dashboard/welcome']);
  }
}
