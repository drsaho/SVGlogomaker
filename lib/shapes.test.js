const {Circle, Square, Triangle} = require("./shapes")

// Triangle test
describe('Triangle', () => {
  test('Triangle is rendered', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
  });
});

// Circle test
describe('Circle', () => {
  test('Circle is rendered', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue">`);
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
