import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialfuncComponent } from './inicialfunc.component';

describe('InicialfuncComponent', () => {
  let component: InicialfuncComponent;
  let fixture: ComponentFixture<InicialfuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialfuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
