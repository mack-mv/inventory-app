const { Sauce, Item, User, Order } = require('../models');
// Alex - create tests for Sauce, Item, User, and Order models (npm run test, in terminal to run tests)
describe('Sauce Model', () => {
  it('should create a sauce', async () => {
    const sauce = await Sauce.create({
      name: 'Test Sauce',
      image: 'test_image.jpg'
    });
    expect(sauce.name).toBe('Test Sauce');
    expect(sauce.image).toBe('test_image.jpg');
  });
});

describe('Item Model', () => {
  it('should create an item', async () => {
    const item = await Item.create({
      name: 'Test Item',
      description: 'This is a test item',
      price: 100,
      image: 'test_image.jpg',
    });
    expect(item.name).toBe('Test Item');
    expect(item.description).toBe('This is a test item');
    expect(item.price).toBe(100);
    expect(item.image).toBe('test_image.jpg');
  });
});

describe('User Model', () => {
  it('should create a user', async () => {
    const user = await User.create({
      username: 'testuser',
      email: 'test@example.com',
      password: 'testpassword',
    });
    expect(user.username).toBe('testuser');
    expect(user.email).toBe('test@example.com');
    expect(user.password).toBe('testpassword');
  });
});

describe('Order Model', () => {
  it('should create an order', async () => {
    const order = await Order.create({
      userId: 1,
      products: 'Test Product',
    });
    expect(order.userId).toBe(1);
    expect(order.products).toBe('Test Product');
  });
});