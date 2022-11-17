import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastromedComponent } from './cadastromed.component';

describe('CadastromedComponent', () => {
  let component: CadastromedComponent;
  let fixture: ComponentFixture<CadastromedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastromedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastromedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
