/* tslint:disable:no-unused-variable */
<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
=======

import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Component: Home', () => {
  it('should create an instance', () => {
    let component = new HomeComponent();
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
    expect(component).toBeTruthy();
  });
});
