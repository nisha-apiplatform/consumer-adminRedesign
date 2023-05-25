import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHmacAuthComponent } from './create-hmac-auth.component';

describe('CreateHmacAuthComponent', () => {
  let component: CreateHmacAuthComponent;
  let fixture: ComponentFixture<CreateHmacAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHmacAuthComponent]
    });
    fixture = TestBed.createComponent(CreateHmacAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
