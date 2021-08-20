import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { MediaMedianaModaService } from './media-mediana-moda.service';

@Component({
  selector: 'app-media-mediana-moda',
  templateUrl: './media-mediana-moda.component.html',
  styleUrls: ['./media-mediana-moda.component.css'],
  providers: [MediaMedianaModaService]
})
export class MediaMedianaModaComponent implements OnInit {
  @Input() public modelo: string;
  datos: string;
  Form: FormGroup = new FormGroup({});
  columnaC: FormControl = new FormControl('');
  llegaronDatos: boolean = false;
  media: string = '';
  mediana: string = '';
  moda: string = '';

  constructor(private MediaMedianaModaService: MediaMedianaModaService) { }


  ngOnInit(): void {
    this.Form.addControl('columna', this.columnaC);
  }
  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable



  validar(files) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    console.log(mimeType);
    if (mimeType.match(/application\/vnd.ms-excel/) == null && mimeType.match(/application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet/) == null) {
      Swal.fire({
        'title': 'Error de Archivo',
        'text': 'Debe escojer un archivo de tipo csv o xlsx!!',
        'icon': 'error'
      });
      return;
    }
    else {
      this.file = files[0];
      console.log(this.file)
    }
  }
  onUpload() {
    console.log(this.Form.value.columna);
    this.datos = this.Form.value.columna;
    this.loading = !this.loading;
    console.log(this.file);
    this.MediaMedianaModaService
      .subirArchivo(this.file!, this.datos)
      .subscribe((resp: any) => {
        console.log(resp);
        this.llegaronDatos = true;
        this.media = resp.media;
        this.mediana = resp.mediana;
        this.moda = resp.moda;
      });
  }

}
