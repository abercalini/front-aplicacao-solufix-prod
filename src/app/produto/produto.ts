export class Produto {
  codigo: number;
  nome: string;
  descricao: string;
  codigoBarra: string;
  observacao: string;
  categoria = new Categoria();
  caminhoFoto: string;
}

export class Categoria {
  codigo: number;
}
