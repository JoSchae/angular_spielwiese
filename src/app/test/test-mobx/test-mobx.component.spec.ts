import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMobxComponent } from './test-mobx.component';

describe('TestMobxComponent', () => {
  let component: TestMobxComponent;
  let fixture: ComponentFixture<TestMobxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMobxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMobxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
