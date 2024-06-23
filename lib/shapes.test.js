const {Triangle, Circle, Square}= require('./shapes');

// A test for triangle 
describe('Triangle', () => {
    // A test is created to check a triangle is created
      test('Triangle is rendered', () => {
        const shape = new Triangle();
        var color = ('yellow');
        shape.setColor(color);
        expect(shape.render()).toEqual( `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`);
      });
    });

    //Circle test

    describe('Circle', () => {
        // A test is created to check a Circle is created
          test('Circle is rendered', () => {
            const shape = new Circle();
            var color = ('red');
            shape.setColor(color);
            expect(shape.render()).toEqual( `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`);
          });
        });
//Square test
        describe('Square', () => {
            // A test is created to check a square is created
              test('Circle is rendered', () => {
                const shape = new Square();
                var color = ('blue');
                shape.setColor(color);
                expect(shape.render()).toEqual( `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`);
              });
            });
    



