import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lucro',
  templateUrl: './lucro.component.html',
  styleUrls: ['./lucro.component.scss']
})

export class LucroComponent{
  dateMoviment: string;
  coin : string;
  proft : string;
  profitPercentage : string;

}