import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpPageComponent } from './np-page.component';

describe('NpPageComponent', () => {
  let component: NpPageComponent;
  let fixture: ComponentFixture<NpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
