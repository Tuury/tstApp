import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargasPage } from './descargas.page';

describe('DescargasPage', () => {
  let component: DescargasPage;
  let fixture: ComponentFixture<DescargasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
