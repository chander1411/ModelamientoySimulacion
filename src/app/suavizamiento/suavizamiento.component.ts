import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { SuavizamientoService } from './suavizamiento.service';

@Component({
  selector: 'app-suavizamiento',
  templateUrl: './suavizamiento.component.html',
  styleUrls: ['./suavizamiento.component.css'],
  providers: [SuavizamientoService]
})
export class SuavizamientoComponent implements OnInit {

  @Input() public modelo: string;
  datos: string;
  Form: FormGroup = new FormGroup({});
  columnatiempoC: FormControl = new FormControl('');
  columnadatosC: FormControl = new FormControl('');
  alfaC: FormControl = new FormControl('');
  llegaronDatos: boolean = false;
  datosImg: string = '';
  graficaImg: string = '';
  constructor(private SuavizamientoService: SuavizamientoService) { }

  ngOnInit(): void {
    this.Form.addControl('columnatiempo', this.columnatiempoC);
    this.Form.addControl('columnadatos', this.columnadatosC);
    this.Form.addControl('alfa', this.alfaC);
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
    this.datos = this.Form.value.columnatiempo + '/' + this.Form.value.columnadatos + '/' + this.Form.value.alfa;
    this.loading = !this.loading;
    console.log(this.file);
    this.SuavizamientoService
      .subirArchivo(this.file!, this.datos)
      .subscribe((resp: any) => {
        console.log(resp);
        this.llegaronDatos = true;
        this.datosImg = 'http://34.67.213.198:3000/images/' + resp.datos;
      });
  }
}
