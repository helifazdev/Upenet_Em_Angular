import { Component } from '@angular/core';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css']
})
export class ArquivoComponent {
  concursos = [
    //Concursos 2024
        { // Processo de Ingresso IFPE 2024.1
          ano:2024,
          nome: 'Processo de Ingresso IFPE 2024.1',
          link: 'http://www.upenet.com.br/ingresso_ifpe_2024.1/',
          imagem: 'http://www.upenet.com.br/ingresso_ifpe_2024.1/midia/logo_ifpe.jpg',
          atencao: 'Inscrições Prorrogadas',
          ativo_arquivo: true,// marque como false se não estiver ativo no arquivo
          ativo: true  // marque como false se não estiver ativo na página inicial
        },

        { // Residência Médica 2024
          ano:2024,
          nome: 'Residência Médica - 2024',
          link: 'http://www.upenet.com.br/concursos/24_Resid_Med/',
          imagem: 'http://upenet.com.br/midia/SES_PE_2024.png',
          atencao: 'Inscrições Prorrogadas',
          ativoarquivo: true,// marque como false se não estiver ativo no arquivo
          ativo: true  // marque como false se não estiver ativo na página inicial
        },

        { // Residência Multiprofissional - 2024
          ano:2024,
          nome: 'Residência Multiprofissional - 2024',
          link: 'http://www.upenet.com.br/concursos/24_Resid_Mult/',
          imagem: 'http://upenet.com.br/midia/SES_PE_2024.png',
          atencao: 'Inscrições Prorrogadas',
          ativoarquivo: true,// marque como false se não estiver ativo no arquivo
          ativo: true  // marque como false se não estiver ativo na página inicial
        },

    //Concursos 2023
        { // Seleção de Gestor Escolar - Secretaria de Educação e Esportes - 2023
          ano:2023,
          nome: 'Seleção de Gestor Escolar - Secretaria de Educação e Esportes - 2023',
          link: 'http://www.upenet.com.br/concursos/23_SEE/',
          imagem: 'http://www.upenet.com.br/midia/SEE.png',
          atencao: 'Inscrições Prorrogadas',
          ativoarquivo: true,// marque como false se não estiver ativo no arquivo
          ativo: true  // marque como false se não estiver ativo na página inicial
        },

        { // UPE - Seleção Pública Simplificada - Saúde - 2023
          ano:2023,
          nome: 'UPE - Seleção Pública Simplificada - Saúde - 2023',
          link: 'http://www.upenet.com.br/concursos/23_UPE_Saude/23_UPE_Saude.html',
          imagem: 'http://www.upenet.com.br/midia/Upe.jpg',
          atencao: 'Inscrições reabertas - Biomédicos',
          ativoarquivo: true,// marque como false se não estiver ativo no arquivo
          ativo: true  // marque como false se não estiver ativo na página inicial
        },

        { // UPE - Seleção Pública Simplificada - Ouricuri e Surubim - 2023
          ano:2023,
          nome: 'UPE - Seleção Pública Simplificada - Ouricuri e Surubim - 2023',
          link: 'http://www.upenet.com.br/concursos/23_UPE-Ouricuri-Surubim/23_Ouricuri-Surubim.html',
          imagem: 'http://www.upenet.com.br/midia/Upe.jpg',
          atencao: '2ª Convocação',
          ativoarquivo: true,// marque como false se não estiver ativo no arquivo
          ativo: true  // marque como false se não estiver ativo na página inicial
        },

        { // Guarda Municipal - São João - 2023
          ano:2023,
          nome: 'Guarda Municipal - São João - 2023',
          link: 'http://www.upenet.com.br/concursos/23_S_Joao/23_S_Joao.html',
          imagem: 'https://www.saojoao.pe.gov.br/imagens/logo.png',
          atencao: 'Resultado da Avaliação Psicologica Pós recursos',
          ativoarquivo: true,// marque como false se não estiver ativo no arquivo
          ativo: true  // marque como false se não estiver ativo na página inicial
        },

    //Concursos 2022
        { // SAD/SERES - 2022
          ano:2022,
          nome: 'SAD/SERES - 2022',
          link: 'http://www.upenet.com.br/concursos/22_SAD_SERES/22_Justica.html',
          imagem: 'http://www.upenet.com.br/midia/seres.JPG',
          atencao: '10ª Convocação',
          ativoarquivo: true,// marque como false se não estiver ativo no arquivo
          ativo: true  // marque como false se não estiver ativo na página inicial
        },



      ];

      get concursosAtivoarquivo() {
        return this.concursos.filter(concurso => concurso.ativoarquivo);
      }
      get concursoAno () {
        return this.concursos.filter(concurso => concurso.ano);
      }
    }
