import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheMenuComponent } from './fiche-menu.component';

describe('FicheMenuComponent', () => {
  let component: FicheMenuComponent;
  let fixture: ComponentFixture<FicheMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
