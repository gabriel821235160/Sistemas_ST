import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaofuncComponent } from './alteracaofunc.component';

describe('AlteracaofuncComponent', () => {
  let component: AlteracaofuncComponent;
  let fixture: ComponentFixture<AlteracaofuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaofuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaofuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
