import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '../../DataTypes/product';
import { CartListService } from '../../Services/cart-list.service';
import { ProductListService } from '../../Services/product-list.service';
import { ProductsComponent } from './products.component';
import { By } from '@angular/platform-browser';

describe('Test Product component event', () => {
  let comp: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let item: Product;
  let cartServ: jasmine.SpyObj<CartListService>;
  let prodServ: jasmine.SpyObj<ProductListService>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
    });
    item = {
      ID: 'string',
      Name: 'string',
      Price: 200,
      Img: 'string',
      rate: 12,
    };
    // /////
    cartServ = jasmine.createSpyObj(['addToCart']);
    cartServ.addToCart.and.callFake;
    comp = new ProductsComponent(prodServ, cartServ);
  });
  it('test if event is clicked', () => {
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#test'));
    fixture.detectChanges();
    expect(cartServ.addToCart).toHaveBeenCalled();
  });
});
