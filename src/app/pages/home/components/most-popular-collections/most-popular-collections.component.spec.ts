import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularCollectionsComponent } from './most-popular-collections.component';

describe('MostPopularCollectionsComponent', () => {
  let component: MostPopularCollectionsComponent;
  let fixture: ComponentFixture<MostPopularCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
