import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = "http://localhost:8080/empresa";
  constructor(private http: HttpClient) { }

  save(newempresa:Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.url, newempresa);
  }

  getEmpresa(): Observable<Empresa[]> {

    return this.http.get<Empresa[]>(this.url);
}


remove(empresa:Empresa): Observable<void>{
  return this.http.delete<void>(this.url + "/" + empresa.id);

}
}
