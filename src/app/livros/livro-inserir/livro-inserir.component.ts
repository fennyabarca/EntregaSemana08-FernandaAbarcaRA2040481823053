import { Component, EventEmitter, Output } from '@angular/core';

import { NgForm } from '@angular/forms';

import { LivroService } from '../livro.service';

@Component({
selector: 'app-livro-inserir',
templateUrl: './livro-inserir.component.html',
styleUrls: ['./livro-inserir.component.css'],
})

export class LivroInserirComponent {
  constructor(public livroService: LivroService) {};

    incrementa = 0;

  onAdicionarLivro(form: NgForm) {
    if(form.invalid) {
      return;
    }
    else {
      this.incrementa= this.incrementa + 1;
    }



    this.livroService.adicionarLivro(
      this.incrementa,
      form.value.titulo,
      form.value.autor,
      form.value.paginas
    )
    form.resetForm()

  }
}
