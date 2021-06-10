import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-card',
  templateUrl: './tags-card.component.html',
  styleUrls: ['./tags-card.component.css']
})
export class TagsCardComponent implements OnInit {

  Tags = [
    {
      name: 'Action'
    },
    {
      name: 'Drama'
    },
    {
      name: 'Comedy'
    },
    {
      name: 'Youtuber'
    },
    {
      name: 'WindowsOs'
    },
    {
      name: 'LinuxOs'
    },
    {
      name: 'DigitalBook'
    },
    {
      name: 'RealBook'
    },
    {
      name: 'Cosplay'
    },
    {
      name: 'Foro'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
