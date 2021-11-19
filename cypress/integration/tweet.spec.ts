describe('Twitter Clone - Tweet', () => {

  beforeEach(() => {
    cy.intercept({
          method: 'GET',
          hostname: 'res.cloudinary.com'
        },{
          statusCode: 200,
          fixture: 'logo-naruto'
        }).as('cloudinary');
  });

  it('Ao clicar em Tweet, realizar um novo post.', () => {


    cy.login();

    // visiting one web page
    cy.visit('/');

    cy.get('div.new-tweet textarea[type="text"]').type('Realizando um novo post. #DesafioFinal');
    cy.get('div.new-tweet-action button').click();

    /*
    * Validar autenticação
    * */
    cy.wait(5000).then(() => {
      cy.get('div.sc-fzozJi .tweet-info .tweet-info-user span')
        .eq(2)
        .should('have.text', 'a few seconds ago');
    })
  });
});
