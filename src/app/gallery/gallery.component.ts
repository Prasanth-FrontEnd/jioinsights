import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  starRating: any = 0;
  movies: any[] = [
    {
      title: 'Trance',
      image: 'trance.jpeg',
      certificate: 'U/A',
      rating: 4
    },
    {
      title: 'Psycho',
      image: 'psycho.jpg',
      certificate: 'A',
      rating: 3.5
    },
    {
      title: 'A Murder',
      image: '369.jpg',
      certificate: 'U',
      rating: 2
    },
    {
      title: 'A Murder',
      image: 'breathe.jpg',
      certificate: 'U',
      rating: 2
    }
  ];

  tvShows: any[] = [
    {
      title: 'Castle',
      image: 'castle1.jpg',
      certificate: '',
      rating: 4
    },
    {
      title: 'Gotham',
      image: 'gotham1.jpg',
      certificate: '',
      rating: 3
    },
    {
      title: 'Friends',
      image: 'friends.jpg',
      certificate: '',
      rating: 4
    },
    {
      title: '100',
      image: '100th.jpg',
      certificate: '',
      rating: 4.5
    },
  ];

  webSeries: any[] = [
    {
      title: 'Money Heist',
      image: 'heist.jpg',
      certificate: '',
      rating: 5
    },
    {
      title: 'Mentalist',
      image: 'mentalist.jpg',
      certificate: '',
      rating: 4.5
    },
    {
      title: 'Elementary',
      image: 'elementary.jpg',
      certificate: '',
      rating: 3
    },
    {
      title: 'POI',
      image: 'poi.jpg',
      certificate: '',
      rating: 4.5
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
