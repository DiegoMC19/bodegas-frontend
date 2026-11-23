import { Component, Input } from '@angular/core';
import { Bodega } from '../../models/bodega';

@Component({
  selector: 'app-bodega-tabla',
  standalone: true,
  templateUrl: './bodega-tabla.component.html',
  styleUrl: './bodega-tabla.component.css'
})
export class BodegaTablaComponent {
  @Input({ required: true }) bodegas: Bodega[] = [];
}
