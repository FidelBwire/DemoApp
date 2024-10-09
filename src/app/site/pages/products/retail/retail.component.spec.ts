/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetailComponent } from './retail.component';

describe('RetailComponent', () => {
  let component: RetailComponent;
  let fixture: ComponentFixture<RetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
