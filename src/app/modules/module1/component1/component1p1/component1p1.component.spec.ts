import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Component1p1Component } from "./component1p1.component";

describe("Component1p1Component", () => {
  let component: Component1p1Component;
  let fixture: ComponentFixture<Component1p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component1p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
