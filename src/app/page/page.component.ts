import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnChanges {
  @Input() inputData: number | undefined;
  @Input() liste_articles: any[] | undefined;
  article_liste_new: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputData'] || changes['liste_article']) {
      this.article_liste_new = this.liste_articles?.slice(
        0,
        Number(this.inputData)
      ) as [];
    }
  }
}
