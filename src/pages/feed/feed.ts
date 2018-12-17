import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmesDetalhesPage } from '../filmes-detalhes/filmes-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Lucas",
    data: "14/12/18",
    descricao: "Descricao Descricao!!!!!!! Descricao Descrição!!!",
    qtd_likes: 12,
    qtd_coments: 4,
    time_coment: "11h ago"
  }
  public lista_filmes = new Array<any>();

  public loader;
  public refresher;
  public isrefresher: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {

  }

  AbreLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando"
    });
    this.loader.present();
  }

  Fechaloading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isrefresher = true;

    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }


  carregarFilmes(){
    this.AbreLoading();
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
        if(this.isrefresher){
          this.refresher.complete();
          this.isrefresher = false;
        }
      }, error => {
        console.log(error);
      }
      )
      this.Fechaloading();
  }

  abrirDetalhes(filme){
    console.log(filme);
    console.log({ id: filme.id });
    this.navCtrl.push(FilmesDetalhesPage, { id: filme.id });
  }

}
