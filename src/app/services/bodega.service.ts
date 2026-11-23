import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodega, NuevaBodega } from '../models/bodega';

@Injectable({ providedIn: 'root' })
export class BodegaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/bodegas';

  getAll(): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(this.apiUrl);
  }

  create(bodega: NuevaBodega): Observable<Bodega> {
    return this.http.post<Bodega>(this.apiUrl, bodega);
  }
}
