import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyModalPage } from './my-modal.page';
import { IonicModule } from '@ionic/angular';

describe('MyModalPage', () => {
  let component: MyModalPage;
  let fixture: ComponentFixture<MyModalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyModalPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});