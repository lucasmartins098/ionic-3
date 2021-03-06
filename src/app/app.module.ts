import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { FeedPageModule } from '../pages/feed/feed.module';
import { HttpModule } from "@angular/http";
import { MovieProvider } from '../providers/movie/movie';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { FilmesDetalhesPageModule } from '../pages/filmes-detalhes/filmes-detalhes.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { CadastroProvider } from '../providers/cadastro/cadastro';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    FeedPageModule,
    HttpModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmesDetalhesPageModule,
    CadastroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    CadastroProvider
  ]
})
export class AppModule {}
