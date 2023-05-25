import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAclGroupComponent } from './create-acl-group.component';

describe('CreateAclGroupComponent', () => {
  let component: CreateAclGroupComponent;
  let fixture: ComponentFixture<CreateAclGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAclGroupComponent]
    });
    fixture = TestBed.createComponent(CreateAclGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
