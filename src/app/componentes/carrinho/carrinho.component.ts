import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
  }

  removerCarrinho(id: number) {
    this.carrinhoService.remover(id);
  }

  adicionarCarrinho(produto: Produto) {
    this.carrinhoService.adicionar(produto);
  }

  get itens() {
    return this.carrinhoService.itens;
  }

  get total() {
    return this.carrinhoService.total;
  }

}
