import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare const webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  error = true;

  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  text = '';
  tempWords: any;

  constructor(private router: Router) { }

  init(): void {
    this.recognition.interimResults = true;
    this.recognition.lang = 'es-ES';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  start(): void {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      } else {
        this.wordConcat();
        this.recognition.start();
        if (this.text.trim() !== 'hola') {
          this.stop();
          this.text = 'ERROR!!!';
          this.error = true;
        } else {
          this.stop();
          this.router.navigateByUrl('details');
          window.open('https://www.youtube.com/channel/UCBOEbPRBeq0pJJnUlyNrz2g');
          this.error = true;
        }
      }
    });
  }
  stop(): void {
    this.text = '';
    this.recognition.stop();
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
  }

  wordConcat(): void {
    this.text = this.text + this.tempWords + ' ';
    this.tempWords = ' ';
  }
}
