// pruebacy.js
describe('Cuentas', function () {
    var a = 1 + 1;
    var b = 2;
    it('Vamos a ver que se sume bien', function () {
        expect(a == b).to.equal(true);
    });
    it('Vamos a ver que reste bien', function () {
        expect(a - b).to.equal(0);
    })
})

beforeEach(function () {
    cy.visit('https://www.youtube.com/watch?v=qWUKHCkPXfE&ab_channel=PabloSebasti%C3%A1nSoifer');
   })
    aftarEach(function () {
        cy.log("Poniendo datos en tu estado original");
    })
it('Search dresses',function () {
            indexPage.search('drass');
            articlesPage.veryfyArticle('"dress"');
            it('Search hats',function(){
            idexPage.search('hat');
            articlasPage.varifyArticla('" hat"');
                })
  })