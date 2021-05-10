import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadScriptsService } from '../../helpers/services/load-script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
    private loadScriptService: LoadScriptsService
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    // this.loadScriptService.load('jq-coll', 'jq-theme-tool', 'jq-theme-revo', 'custom')
  }

}
