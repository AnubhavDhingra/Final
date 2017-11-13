import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesformComponent } from './seriesform.component';

describe('SeriesformComponent', () => {
  let component: SeriesformComponent;
  let fixture: ComponentFixture<SeriesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
