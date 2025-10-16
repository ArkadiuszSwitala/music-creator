import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-as-player',
  templateUrl: './as-player.component.html',
  styleUrl: './as-player.component.scss'
})
export class AsPlayerComponent implements OnInit {
  playing: boolean = false;
  audioContext: AudioContext;
  audioElement: HTMLAudioElement;
  track: any;
  currentSong: any;
  currentSongId: number;

  audioList = [
    {
      cover: 'assets/audio/1_audio/cover1.jpg',
      title: 'You and you friend',
      artist: 'Alex Morph',
      album: 'Curiosum',
      trackUrl: 'assets/audio/1_audio/trap.mp3',
    },
    {
      cover: 'assets/audio/2_audio/cover.jpg',
      title: 'Ambulance',
      artist: 'Core Nick',
      album: 'Unknown',
      trackUrl: 'assets/audio/2_audio/core3.mp3',
    }
  ]

  constructor() {
    this.currentSongId = 0;
    this.audioContext = new AudioContext();
    this.audioElement = document.createElement("audio");
    if (this.audioList.length) {
      this.setSong();
    }
  }

  ngOnInit(): void {
    this.track = this.audioContext.createMediaElementSource(this.audioElement);
    this.track.connect(this.audioContext.destination);
  }

  togglePlay() {
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }

    if (!this.playing) {
      this.audioElement.play();
      this.playing = true;
    } else if (this.playing) {
      this.audioElement.pause();
      this.playing = false;
    }
  }

  setSong(): void {
    this.currentSong = this.audioList[this.currentSongId];
    this.audioElement.src = this.currentSong.trackUrl;
  }

  nextSong() {
    if (this.currentSongId === (this.audioList.length - 1)) {
      this.currentSongId = 0;
    } else {
      this.currentSongId++;
    }
    this.audioElement.pause();
    this.playing = false;
    this.setSong();
  }

  prevSong() {
    if(this.currentSongId === 0) {
      this.currentSongId = this.audioList.length - 1;
    } else {
      this.currentSongId--;
    }
    this.audioElement.pause();
    this.playing = false;
    this.setSong();
  }
}
