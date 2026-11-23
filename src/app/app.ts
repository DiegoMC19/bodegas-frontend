import { Component, OnInit, inject } from '@angular/core';
import { BodegaFormComponent } from './components/bodega-form/bodega-form.component';
import { BodegaTablaComponent } from './components/bodega-tabla/bodega-tabla.component';
import { Bodega } from './models/bodega';
import { BodegaService } from './services/bodega.service';

@Component({
  selector: 'app-root',
  imports: [BodegaFormComponent, BodegaTablaComponent],
  templateUrl: './app.html'
})
export class App implements OnInit {
  private bodegaService = inject(BodegaService);

  bodegas: Bodega[] = [];
  error = '';

  ngOnInit() {
    this.cargarBodegas();
  }

  cargarBodegas() {
    this.bodegaService.getAll().subscribe({
      next: (data) => {
        this.bodegas = data;
        this.error = '';
      },
      error: () => {
        this.error = 'No se pudo conectar con el backend';
      }
    });
  }
}
