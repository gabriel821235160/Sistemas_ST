import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrofuncComponent } from './cadastrofunc.component';

describe('CadastrofuncComponent', () => {
  let component: CadastrofuncComponent;
  let fixture: ComponentFixture<CadastrofuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrofuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrofuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
