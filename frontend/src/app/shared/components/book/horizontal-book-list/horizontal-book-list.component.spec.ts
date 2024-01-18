import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBookListComponent } from './horizontal-book-list.component';

describe('HorizontalBookListComponent', () => {
  let component: HorizontalBookListComponent;
  let fixture: ComponentFixture<HorizontalBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalBookListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
