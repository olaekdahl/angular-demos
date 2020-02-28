import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatclientComponent } from './chatclient.component';
import { FormsModule } from '@angular/forms';

describe('ChatclientComponent', () => {
  let component: ChatclientComponent;
  let fixture: ComponentFixture<ChatclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatclientComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
