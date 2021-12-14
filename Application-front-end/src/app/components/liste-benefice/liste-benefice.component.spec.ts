import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBeneficeComponent } from './liste-benefice.component';

describe('ListeBeneficeComponent', () => {
  let component: ListeBeneficeComponent;
  let fixture: ComponentFixture<ListeBeneficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBeneficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBeneficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
