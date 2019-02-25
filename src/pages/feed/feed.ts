import { SlidePage } from './../slide/slide';
import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo:"Charles Franca",
    data:"21 Março 1998",
    descricao:"meu primeiro json no typejs",
    qntd_likes: '100',
    qntd_coments: '20',
    time: '20h'
  }

  public lista_filmes = new Array<any>();
  public nomeUsuario:string = "Scalfi O zica do app";

  constructor
  (
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ){}

  ionViewDidLoad() {
    this.movieProvider.getLastesMovies().subscribe(
      data=>{
        const response = (data as any)
        console.log(response);
        this.lista_filmes = response.results;
      }, error => {
        console.log(error);
      }
      )
  }
  
  public returnSlide() {
    this.navCtrl.push(SlidePage);
  }
}
