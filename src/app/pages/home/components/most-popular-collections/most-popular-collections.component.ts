import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-most-popular-collections',
  templateUrl: './most-popular-collections.component.html',
  styleUrls: ['./most-popular-collections.component.css']
})
export class MostPopularCollectionsComponent implements OnInit {

  Categories = [
    {
      _id: 'a12awd14fae1f5a1wd21wa2d1aw5d15',
      name: 'Nintendo64',
      title: 'Nintendo 64',
      description: 'A collection of games, gameplays, emulators, and crackers about nintendo 64 and all that is related with the world of Nintendo 64',
      imgWallpaperUrl: 'https://coolwallpapers.me/picsup/5835607-nintendo-64-hd-wallpapers.jpg',
      imgMainUrl: 'https://fsb.zobj.net/crop.php?r=F02jPcTiOm9xj2Mz8UzD47YURYfaMmkWz-KOsl2igoenVdzNbnZaqHHV4HEPcZDl1xNtXEpiJT28KfxjadF52LueguI8wFdJsLfAdolPeZSnjaeeR4JB2rx3S_OpV6G_0CVdZjz-7l74aA5-'
    },
    {
      _id: 'a12awd14fae1f5a1wd21wa2d1aw5d16',
      name: 'PlayStation2',
      title: 'Play Station 2',
      description: 'A collection of games, gameplays, emulators, and crackers about Play Station 2 and all that is related with the world of Play Station 2',
      imgWallpaperUrl: 'https://cdn.hipwallpaper.com/i/6/90/tsj0r9.jpg',
      imgMainUrl: 'https://i1.wp.com/elpoderdelasideas.com/wp-content/uploads/ps1.png?fit=800%2C450&ssl=1'
    },
    {
      _id: 'a12awd14fae1f5a1wd21wa2d1aw5d16',
      name: 'Otaku',
      title: 'Otakus world',
      description: 'A collection of otaku stuff about the fanstastic world of digital Mangas, Animes and Light Novels and all that is related with this',
      imgWallpaperUrl: 'data:image/jpeg;base64,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',
      imgMainUrl: 'https://play-lh.googleusercontent.com/MmA8QQq2oqEsBVvPU_1MQBsdx0LGSWOl9NKTbGPKdp83XA-1TnE6LVaWNY9A9GsuT3I'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4,
        margin: 25
      }
    }
  }

}
