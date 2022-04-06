import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-example',
  templateUrl: './plotly-example.component.html',
  styleUrls: ['./plotly-example.component.css']
})
export class PlotlyExampleComponent implements OnInit {
  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        /* { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' }, */
    ],
    layout: {width: 620, height: 440, title: 'A Fancy Plot'}
};
  constructor() { }

  ngOnInit(): void {
  }

}
