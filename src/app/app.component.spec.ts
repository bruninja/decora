<<<<<<< HEAD
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
=======
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
<<<<<<< HEAD
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
=======
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
<<<<<<< HEAD
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
=======
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
<<<<<<< HEAD
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
=======
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
