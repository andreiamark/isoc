import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddRestaurantComponent } from './pop-up-add-restaurant.component';

describe('PopUpAddRestaurantComponent', () => {
  let component: PopUpAddRestaurantComponent;
  let fixture: ComponentFixture<PopUpAddRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpAddRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAddRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
