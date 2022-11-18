import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeladeinicioComponent } from './teladeinicio.component';

describe('TeladeinicioComponent', () => {
  let component: TeladeinicioComponent;
  let fixture: ComponentFixture<TeladeinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeladeinicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeladeinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
