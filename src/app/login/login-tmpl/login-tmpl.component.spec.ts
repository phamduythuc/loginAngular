import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTmplComponent } from './login-tmpl.component';

describe('LoginTmplComponent', () => {
  let component: LoginTmplComponent;
  let fixture: ComponentFixture<LoginTmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
