import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BodegaService } from '../../services/bodega.service';

@Component({
  selector: 'app-bodega-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bodega-form.component.html'
})
export class BodegaFormComponent {
  private bodegaService = inject(BodegaService);

  @Output() registrada = new EventEmitter<void>();

  mensaje = '';
  error = '';

  form = inject(FormBuilder).nonNullable.group({
    nombre: ['', [Validators.required]],
    ubicacion: ['', [Validators.required]]
  });

  submit() {
    this.mensaje = '';
    this.error = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.bodegaService.create(this.form.getRawValue()).subscribe({
      next: (bodega) => {
        this.mensaje = `Bodega "${bodega.nombre}" registrada correctamente`;
        this.form.reset();
        this.registrada.emit();
      },
      error: () => {
        this.error = 'No se pudo registrar la bodega';
      }
    });
  }
}
