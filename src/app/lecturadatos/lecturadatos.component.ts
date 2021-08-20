import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { LecturadatosService } from './lecturadatos.service';

@Component({
  selector: 'app-lecturadatos',
  templateUrl: './lecturadatos.component.html',
  styleUrls: ['./lecturadatos.component.css'],
  providers: [LecturadatosService]
})
export class LecturadatosComponent implements OnInit {
  @Input() public modelo: string;
  datos: string;
  Form: FormGroup = new FormGroup({});
  columnaxC: FormControl = new FormControl('');
  columnayC: FormControl = new FormControl('');
  llegaronDatos: boolean = false;
  datosImg: string = '';
  graficaImg: string = '';
  constructor(private LecturadatosService: LecturadatosService) { }

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
    console.log(this.Form.value.columnax);
    this.datos = this.Form.value.columnax + '/' + this.Form.value.columnay;
    this.loading = !this.loading;
    console.log(this.file);
    this.LecturadatosService
      .subirArchivo(this.file!, this.datos)
      .subscribe((resp: any) => {
        console.log(resp);
        this.llegaronDatos = true;
        this.datosImg = 'http://34.67.213.198:3000/images/' + resp.datos;
        this.graficaImg = 'http://34.67.213.198:3000/images/' + resp.grafica;
      });
  }
}
