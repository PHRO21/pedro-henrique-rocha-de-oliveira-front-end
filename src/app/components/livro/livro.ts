import { Autor } from './../autor/autor';
export interface Livro{
  id?: number;
  titulo: string;
  anoLancamento: string;
  autores: Autor[];
}
