import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialadmComponent } from './inicialadm.component';

describe('InicialadmComponent', () => {
  let component: InicialadmComponent;
  let fixture: ComponentFixture<InicialadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
