import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuariofuncComponent } from './prontuariofunc.component';

describe('ProntuariofuncComponent', () => {
  let component: ProntuariofuncComponent;
  let fixture: ComponentFixture<ProntuariofuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntuariofuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProntuariofuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
