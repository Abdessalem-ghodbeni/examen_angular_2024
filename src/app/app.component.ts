import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CSA_examen';

  myVlaue!: number;
  constructor() {
    console.log('gg', this.myVlaue);
  }

  liste_article: any[] = [
    {
      titre: 'Le championnat du monde',
      contenu: 'Le champion du monde de cette année est ....',
      auteur: 'Med Taher',
      date: '12/12/2005',
    },
    {
      titre: 'Les nouveaux parents',
      contenu: 'Les nouveaux parents....',
      auteur: 'Ahmed Said',
      date: '11/11/2018',
    },
    {
      titre: 'Comment écrire votre CV',
      contenu: 'Pour réussir à décraucher un emploi ...',
      auteur: 'Marie Elsa',
      date: '02/04/2017',
    },

    {
      titre: 'Comment avoir m5 in 10 hours',
      contenu: 'Pour réussir à décraucher un emploi ...',
      auteur: 'Marie Elsa',
      date: '02/04/2017',
    },
    {
      titre: 'how giving children',
      contenu: 'pssttt  ...',
      auteur: 'bella 2024',
      date: '02/04/2017',
    },
  ];
}
