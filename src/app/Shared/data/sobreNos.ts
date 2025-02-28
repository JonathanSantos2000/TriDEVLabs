import type { SobreNos } from '../models/sobre';

export const sobreNos: SobreNos[] = [
  {
    id: '1',
    nome: 'Breno',
    urlImg: 'em_breve.png',
    frase:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc non malesuada fermentum. Nullam lacus felis, viverra ac suscipit vitae, tempus id dui.',
  },
  {
    id: '2',
    nome: 'Jonathan Costa',
    urlImg: 'Jonathan.png',
    frase:
      'Desenvolvedor web apaixonado, formando em Sistemas para Internet, em  busca de desafios inovadores para aplicar conhecimentos em programação,  design e banco de dados.',
      contatos:[{
        tipo: 'Portifolio',
        urlContato:'https://jonathan-costa-portfolio.netlify.app/'
      }]
  },
  {
    id: '3',
    nome: 'Mateus Rosa',
    urlImg: 'Mateus.jpg',
    frase:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar nunc non malesuada fermentum. Nullam lacus felis, viverra ac suscipit vitae, tempus id dui..',
  },
];
