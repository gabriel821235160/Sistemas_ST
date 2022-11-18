import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaomedComponent } from './alteracaomed.component';

describe('AlteracaomedComponent', () => {
  let component: AlteracaomedComponent;
  let fixture: ComponentFixture<AlteracaomedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaomedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaomedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
