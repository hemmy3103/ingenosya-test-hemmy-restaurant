import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCommandeComponent } from './fiche-commande.component';

describe('FicheCommandeComponent', () => {
  let component: FicheCommandeComponent;
  let fixture: ComponentFixture<FicheCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
