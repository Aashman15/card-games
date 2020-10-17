import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFarasComponent } from './show-faras.component';

describe('ShowFarasComponent', () => {
  let component: ShowFarasComponent;
  let fixture: ComponentFixture<ShowFarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFarasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
