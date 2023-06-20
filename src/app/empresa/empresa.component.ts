import { Component } from '@angular/core';
import { Empresa } from './empresa';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {
  empresa: Empresa[] = [];
  formGroupEmpresa!: FormGroup;

  constructor (private empresaService: EmpresaService, private formBuilder: FormBuilder){
    this.formGroupEmpresa = formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      resp: [''],
      cnpj: ['']
    })
  }

Save(){

    this.empresaService.save(this.formGroupEmpresa.value).subscribe(
      {
        next: data =>{
          this.empresa.push(data);
        }
      }
    )
    }

    loadEmpresas(){
      this.empresaService.getEmpresa().subscribe(
        {
            next:  data =>  this.empresa = data,
            error: msg  => console.log("Erro ao chamar o endpont " + msg)
        }
      )
  }

  ngOnInit(): void {
    this.loadEmpresas();
  }

}
