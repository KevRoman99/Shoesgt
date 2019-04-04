import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsShoesComponent } from './details-shoes.component';

describe('DetailsShoesComponent', () => {
  let component: DetailsShoesComponent;
  let fixture: ComponentFixture<DetailsShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
