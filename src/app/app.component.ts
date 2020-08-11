import { Component, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  linearModel: tf.Sequential;
  prediction: any;
  title = 'tfjs-angular';

  ngOnInit() {
    this.trainNewModel();
  }

  async trainNewModel() {
    //Create a model for linear regression
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    

  }

}
