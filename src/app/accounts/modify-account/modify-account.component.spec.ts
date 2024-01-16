import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAccountComponent } from './modify-account.component';

describe('ModifyAccountComponent', () => {
  let component: ModifyAccountComponent;
  let fixture: ComponentFixture<ModifyAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyAccountComponent]
    });
    fixture = TestBed.createComponent(ModifyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
