import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { SobrePage } from '../sobre/sobre';
import { PerfilPage } from '../perfil/perfil';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = ConfiguracoesPage;
  tab4Root = SobrePage;
  tab5Root = PerfilPage;
  tab6Root = CadastroPage;
  
  constructor() {

  }
}
