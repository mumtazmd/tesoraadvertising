import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHighlightComponent } from './about-highlight.component';

describe('AboutHighlightComponent', () => {
  let component: AboutHighlightComponent;
  let fixture: ComponentFixture<AboutHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
