import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOauthComponent } from './create-oauth.component';

describe('CreateOauthComponent', () => {
  let component: CreateOauthComponent;
  let fixture: ComponentFixture<CreateOauthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOauthComponent]
    });
    fixture = TestBed.createComponent(CreateOauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
