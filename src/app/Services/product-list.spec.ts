import { Product } from '../DataTypes/product';
import { ProductListService } from './product-list.service';

describe('test list service', () => {
  let serv: ProductListService;
  beforeEach(() => {
    serv = new ProductListService();
  });
  //
  it('test if the array of products length is 9', () => {
    expect(serv.Products).toHaveSize(9);
  });
  it('test if the array of categories length is 5', () => {
    expect(serv.Categories).toHaveSize(5);
  });
});
