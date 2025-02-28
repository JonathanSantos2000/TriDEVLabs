export class SobreNos {
  id!: string;
  nome!: string;
  urlImg!: string;
  frase!: string;
  contatos?: Contatos[];
}

interface Contatos {
  tipo: string;
  urlContato: string;
}
