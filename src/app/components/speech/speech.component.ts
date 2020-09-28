import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styles: [
  ]
})
export class SpeechComponent implements OnInit {

  constructor(public speech: SpeechService) {
    this.speech.init();
  }

  ngOnInit(): void {
  }

  startService(): void {
    this.speech.text = '';
    this.speech.start();
    this.speech.error = false;
  }

}
