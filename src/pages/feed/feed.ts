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
  public page = 1;

  public loader;
  public refresher;
  public isrefresher: boolean = false;
  public infiniteScroll;

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


  carregarFilmes(newpage: boolean = false){
    this.AbreLoading();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data=>{
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);

          if(newpage){
            this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
            console.log(this.page);
            console.log(this.lista_filmes);
            this.infiniteScroll.complete();
          }else{
            this.lista_filmes = objeto_retorno.results;
          }

          this.Fechaloading();
          if(this.isrefresher){
              this.refresher.complete();
              this.isrefresher = false;
          }
      }, error => {
          console.log(error);
          this.Fechaloading();
          if(this.isrefresher){
              this.refresher.complete();
              this.isrefresher = false;
          }
      }
    )
  }

  abrirDetalhes(filme){
    console.log(filme);
    console.log({ id: filme.id });
    this.navCtrl.push(FilmesDetalhesPage, { id: filme.id });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

}
