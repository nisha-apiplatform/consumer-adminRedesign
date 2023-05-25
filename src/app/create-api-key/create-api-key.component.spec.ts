import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApiKeyComponent } from './create-api-key.component';

describe('CreateApiKeyComponent', () => {
  let component: CreateApiKeyComponent;
  let fixture: ComponentFixture<CreateApiKeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateApiKeyComponent]
    });
    fixture = TestBed.createComponent(CreateApiKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
