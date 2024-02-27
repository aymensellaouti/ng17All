import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DefaultImagePipe } from "../pipes/default-image.pipe";

@Component({
    selector: 'app-cv-card',
    standalone: true,
    templateUrl: './cv-card.component.html',
    styleUrls: ['./cv-card.component.css'],
    imports: [NgIf, RouterLink, DefaultImagePipe]
})
export class CvCardComponent {
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {}
  cv: Cv | null = null;

  ngOnInit() {
    this.cvService.selectCv$.subscribe((cv) => (this.cv = cv));
  }
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embauche(this.cv)) {
        this.toastr.success(
          `${this.cv?.firstname} ${this.cv?.name} a été pré embauché`
        );
      } else {
        this.toastr.warning(
          `${this.cv?.firstname} ${this.cv?.name} est déjà pré embauché`
        );
      }
    }
  }
}
