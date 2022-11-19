import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemfuncComponent } from './listagemfunc.component';

describe('ListagemfuncComponent', () => {
  let component: ListagemfuncComponent;
  let fixture: ComponentFixture<ListagemfuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemfuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
