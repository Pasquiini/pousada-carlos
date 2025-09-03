import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Definimos uma interface para tipar nosso objeto de imagem, o que é uma boa prática.
interface Imagem {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  // Array com TODAS as imagens da sua galeria.
  // IMPORTANTE: Você precisará substituir os caminhos pelas suas imagens.
  todasAsImagens: Imagem[] = [
    { url: 'galeria/1.jpeg', alt: 'Descrição da foto 1' },
    { url: 'galeria/2.jpeg', alt: 'Descrição da foto 2' },
    { url: 'galeria/3.jpeg', alt: 'Descrição da foto 3' },
    { url: 'galeria/4.jpeg', alt: 'Descrição da foto 4' },
    { url: 'galeria/5.jpeg', alt: 'Descrição da foto 5' },
    { url: 'galeria/6.jpeg', alt: 'Descrição da foto 6' },
    { url: 'galeria/7.jpeg', alt: 'Descrição da foto 7' },
    { url: 'galeria/8.jpeg', alt: 'Descrição da foto 8' },
    { url: 'galeria/9.jpeg', alt: 'Descrição da foto 9' },
    // Adicidas as suas mais de 30 imagens...
    { url: 'galeria/10.jpeg', alt: 'Descrição da foto 10' },
    { url: 'galeria/11.jpeg', alt: 'Descrição da foto 11' },
    { url: 'galeria/12.jpeg', alt: 'Descrição da foto 12' },
    { url: 'galeria/13.jpeg', alt: 'Descrição da foto 12' },
    { url: 'galeria/14.jpeg', alt: 'Descrição da foto 12' },
    { url: 'galeria/15.jpeg', alt: 'Descrição da foto 12' },
    { url: 'galeria/16.jpeg', alt: 'Descrição da foto 12' },
    { url: 'galeria/17.jpeg', alt: 'Descrição da foto 12' },
    { url: 'galeria/18.jpeg', alt: 'Descrição da foto 12' },
    { url: 'galeria/19.jpeg', alt: 'Descrição da foto 12' },
    { url: 'galeria/20.jpeg', alt: 'Descrição da foto 12' },
    { url: 'galeria/21.jpeg', alt: 'Descrição da foto 12' },
  ];

  // Array que armazena apenas as imagens que estão visíveis na página.
  imagensVisiveis: Imagem[] = [];

  // Variável para controlar a imagem selecionada no lightbox.
  // Se for `null`, o lightbox está fechado.
  imagemSelecionada: Imagem | null = null;

  // Define quantas imagens carregar por vez.
  private imagensPorVez = 9;

  constructor() { }

  // O `ngOnInit` é um método que é executado assim que o componente é iniciado.
  ngOnInit(): void {
    // Carregamos o primeiro lote de imagens.
    this.imagensVisiveis = this.todasAsImagens.slice(0, this.imagensPorVez);
  }

  /**
   * Adiciona o próximo lote de imagens à lista de imagens visíveis.
   */
  carregarMaisImagens(): void {
    const totalVisivel = this.imagensVisiveis.length;
    const novoLote = this.todasAsImagens.slice(totalVisivel, totalVisivel + this.imagensPorVez);
    this.imagensVisiveis.push(...novoLote);
  }

  /**
   * Define a imagem clicada para ser exibida no lightbox.
   * @param imagem A imagem que o usuário clicou.
   */
  abrirLightbox(imagem: Imagem): void {
    this.imagemSelecionada = imagem;
  }

  /**
   * Fecha o lightbox, definindo a imagem selecionada como nula.
   */
  fecharLightbox(): void {
    this.imagemSelecionada = null;
  }
}
