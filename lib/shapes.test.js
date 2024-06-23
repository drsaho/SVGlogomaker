const { Triangle, Circle, Square } = require('./shapes');

// Triangle test
describe('Triangle', () => {
  test('Triangle is rendered', () => {
    const shape = new Triangle();
    shape.setColor('yellow');
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="yellow" />`);
  });
});

// Circle test
describe('Circle', () => {
  test('Circle is rendered', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="80" fill="red" />`);
  });
});

// Square test
describe('Square', () => {
  test('Square is rendered', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="blue" />`);
  });
});
