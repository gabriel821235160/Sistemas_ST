import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastropacComponent } from './cadastropac.component';

describe('CadastropacComponent', () => {
  let component: CadastropacComponent;
  let fixture: ComponentFixture<CadastropacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastropacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastropacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
