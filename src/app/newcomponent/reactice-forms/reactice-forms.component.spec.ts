import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ReacticeFormsComponent } from "./reactice-forms.component";

describe("ReacticeFormsComponent", () => {
  let component: ReacticeFormsComponent;
  let fixture: ComponentFixture<ReacticeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReacticeFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacticeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
