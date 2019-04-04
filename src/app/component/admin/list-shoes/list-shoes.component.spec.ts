import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShoesComponent } from './list-shoes.component';

describe('ListShoesComponent', () => {
  let component: ListShoesComponent;
  let fixture: ComponentFixture<ListShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
