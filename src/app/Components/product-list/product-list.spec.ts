import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
describe('hero component:', () => {
  let fixture: ComponentFixture<ProductListComponent>,
    component: ProductListComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });
  it('expect component to be created ', () => {
    expect(component).toBeTruthy();
  });
});
