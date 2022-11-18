import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialmedComponent } from './inicialmed.component';

describe('InicialmedComponent', () => {
  let component: InicialmedComponent;
  let fixture: ComponentFixture<InicialmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
