import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCollectionsComponent } from './last-collections.component';

describe('LastCollectionsComponent', () => {
  let component: LastCollectionsComponent;
  let fixture: ComponentFixture<LastCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
