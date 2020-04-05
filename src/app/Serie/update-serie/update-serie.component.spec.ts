import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSerieComponent } from './update-serie.component';

describe('UpdateSerieComponent', () => {
  let component: UpdateSerieComponent;
  let fixture: ComponentFixture<UpdateSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
