import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { RegresionlinealService } from './regresionlineal.service';

@Component({
  selector: 'app-regresionlineal',
  templateUrl: './regresionlineal.component.html',
  styleUrls: ['./regresionlineal.component.css'],
  providers: [RegresionlinealService]
})
export class RegresionlinealComponent implements OnInit {
  @Input() public modelo: string;
  datos: string;
  Form: FormGroup = new FormGroup({});
  columnaxC: FormControl = new FormControl('');
  columnayC: FormControl = new FormControl('');
  llegaronDatos: boolean = false;
  valores: string = ''
  datosImg: string = '';
  graficaImg: string = '';
  constructor(private RegresionlinealService: RegresionlinealService) { }

  ngOnInit(): void {
    this.Form.addControl('columnax', this.columnaxC);
    this.Form.addControl('columnay', this.columnayC);
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
    this.datos = this.Form.value.columnay;
    this.loading = !this.loading;
    console.log(this.file);
    this.RegresionlinealService
      .subirArchivo(this.file!, this.datos)
      .subscribe((resp: any) => {
        console.log(resp);
        this.llegaronDatos = true;
        this.valores = resp.valores;
        this.graficaImg = 'http://34.67.213.198:3000/images/' + resp.grafica;
        this.datosImg = 'http://34.67.213.198:3000/images/' + resp.dataframe;
      });
  }
}
