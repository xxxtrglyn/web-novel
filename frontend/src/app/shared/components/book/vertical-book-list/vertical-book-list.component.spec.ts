import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBookListComponent } from './vertical-book-list.component';

describe('VerticalBookListComponent', () => {
  let component: VerticalBookListComponent;
  let fixture: ComponentFixture<VerticalBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalBookListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerticalBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
