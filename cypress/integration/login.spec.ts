// login=wellington-test-cy@cypress.com
// password=Qw3rt*
// Refences of code using typescript https://github.com/cypress-io/add-cypress-custom-command-in-typescript/

/// <reference types="cypress" />

/**
  * O que está sendo testado?
  * Twitter Clone, Login
  * Sob quais circunstâncias, condições está sendo testado?
  * Ao autenticar os credencias válidos
  * Qual o resultado esperado?
  * Redirecionar para o Feed(home page)
  * */

describe('Twitter Clone - Login', () => {

  beforeEach(() => {
    cy.intercept({
          method: 'GET',
          hostname: 'res.cloudinary.com'
        },{
          statusCode: 200,
          fixture: 'logo-naruto'
        }).as('cloudinary');
  });

  it('Ao autenticar as credencias válidas, redirecionar para o feed', () => {

    cy.login();

    // visiting one web page
    cy.visit('/');

    /*
    * Validar autenticação
    * */
    cy.get('nav ul li').should('be.visible').and('have.length', 6);
  });
});
