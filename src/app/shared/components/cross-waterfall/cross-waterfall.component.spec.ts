import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossWaterfallComponent } from './cross-waterfall.component';

describe('CrossWaterfallComponent', () => {
  let component: CrossWaterfallComponent;
  let fixture: ComponentFixture<CrossWaterfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossWaterfallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossWaterfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
