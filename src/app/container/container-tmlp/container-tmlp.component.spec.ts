import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTmlpComponent } from './container-tmlp.component';

describe('ContainerTmlpComponent', () => {
  let component: ContainerTmlpComponent;
  let fixture: ComponentFixture<ContainerTmlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTmlpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerTmlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
