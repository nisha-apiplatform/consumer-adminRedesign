import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBasicComponent } from './create-basic.component';

describe('CreateBasicComponent', () => {
  let component: CreateBasicComponent;
  let fixture: ComponentFixture<CreateBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBasicComponent]
    });
    fixture = TestBed.createComponent(CreateBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
