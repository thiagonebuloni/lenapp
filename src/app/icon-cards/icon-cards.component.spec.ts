import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCardsComponent } from './icon-cards.component';

describe('IconCardsComponent', () => {
  let component: IconCardsComponent;
  let fixture: ComponentFixture<IconCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconCardsComponent]
    });
    fixture = TestBed.createComponent(IconCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
