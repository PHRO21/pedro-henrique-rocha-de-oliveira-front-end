import { Autor } from '../autor/autor';
export interface LivroOutput{
  id?: number;
  titulo: string;
  anoLancamento: string;
  autores: Autor[];
}
