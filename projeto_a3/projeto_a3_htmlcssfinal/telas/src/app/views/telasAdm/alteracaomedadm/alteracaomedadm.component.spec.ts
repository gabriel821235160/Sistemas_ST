import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaomedadmComponent } from './alteracaomedadm.component';

describe('AlteracaomedadmComponent', () => {
  let component: AlteracaomedadmComponent;
  let fixture: ComponentFixture<AlteracaomedadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaomedadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaomedadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
