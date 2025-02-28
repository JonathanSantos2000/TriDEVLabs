import { Injectable } from '@angular/core';
import type { SobreNos } from '../Shared/models/sobre';
import { sobreNos } from '../Shared/data/sobreNos';

@Injectable({
  providedIn: 'root',
})
export class SobreNosService {
  constructor() {}

  getAll(): SobreNos[] {
    return sobreNos;
  }
}
