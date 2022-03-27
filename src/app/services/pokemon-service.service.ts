import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.api;
  }

  public getAll(): Observable<any> {
    const url = `${this.url}?idAuthor=1`;
    return this._http.get(url);
  }

  public getPokemon(id: number): Observable<any> {
    const url = `${this.url}${id}`;
    return this._http.get(url);
  }

  public savePokemon(data: any): Observable<any> {
    const url = `${this.url}?idAuthor=1`;
    return this._http.post(url, data);
  }

  public updatePokemon(id: number, data: any): Observable<any> {
    const url = `${this.url}${id}`;
    return this._http.put(url, data);
  }

  public deletePokemon(id: number): Observable<any> {
    const url = `${this.url}${id}`;
    return this._http.delete(url);
  }

  public countPokemon(): Observable<any> {
    const url = `${this.url}count?idAuthor=1`;
    return this._http.get(url);
  }
}
