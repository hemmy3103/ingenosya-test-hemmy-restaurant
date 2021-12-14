import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheRepasComponent } from './fiche-repas.component';

describe('FicheRepasComponent', () => {
  let component: FicheRepasComponent;
  let fixture: ComponentFixture<FicheRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
