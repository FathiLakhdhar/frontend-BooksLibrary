/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LangueComponent } from './langue.component';

describe('LangueComponent', () => {
  let component: LangueComponent;
  let fixture: ComponentFixture<LangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
