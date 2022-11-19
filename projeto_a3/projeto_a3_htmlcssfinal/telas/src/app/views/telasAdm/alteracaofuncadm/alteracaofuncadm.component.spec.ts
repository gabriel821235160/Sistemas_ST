import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaofuncadmComponent } from './alteracaofuncadm.component';

describe('AlteracaofuncadmComponent', () => {
  let component: AlteracaofuncadmComponent;
  let fixture: ComponentFixture<AlteracaofuncadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaofuncadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaofuncadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
