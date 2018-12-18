import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroProvider } from '../../providers/cadastro/cadastro';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  itens = [];
  id: string;
  name: string;

  constructor(public navCtrl: NavController, public cadastro: CadastroProvider) {
    this.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  getAll() {
    this.itens = [];
    this.cadastro.getAll().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        this.itens.push(data[i]);
      }
    })
  }

  adicionarNome() {
    if (this.id = null) {
      this.cadastro.Create(this.name).subscribe(data => {
        this.name = "";
        this.getAll();
      })
    }
    else {
      this.cadastro.Update(this.id, this.name).subscribe(data => {
        this.id = null;
        this.name = "";
        this.getAll();
      })
    }
  }

  editarNome(item) {
    this.id = item.id;
    this.getAll();
  }

  excluirNome(item) {
    this.cadastro.Delete(item.id).subscribe(data => {
      this.getAll();
    })
  }
}
