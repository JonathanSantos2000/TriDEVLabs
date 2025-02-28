import { Component, Input, OnInit } from '@angular/core';
import { SobreNosService } from 'src/app/services/sobre-nos.service';
import { SobreNos } from 'src/app/Shared/models/sobre';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.css'],
})
export class SectionAboutComponent implements OnInit {
  sobres: SobreNos[] = [];

  constructor(private sobreNosService: SobreNosService) {
    this.sobres = sobreNosService.getAll();
  }

  ngOnInit(): void {}
}
