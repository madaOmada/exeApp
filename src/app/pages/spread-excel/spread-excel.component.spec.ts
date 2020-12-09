import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadExcelComponent } from './spread-excel.component';

describe('SpreadExcelComponent', () => {
  let component: SpreadExcelComponent;
  let fixture: ComponentFixture<SpreadExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
