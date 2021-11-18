Cypress.Commands.add('login', () => {
  cy.token().then(response => {
    const { token, user } = response.body.data.login

    window.localStorage.setItem('token', token);
    window.localStorage.setItem('user', JSON.stringify(user))
  })
})

Cypress.Commands.add('token', () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}`,
    body: {
      "operationName": "login",
      "variables": {
        "email": "wellington-test-cy@cypress.com",
        "password": "Qw3rt*"
      },
      "query": "mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      id\n      handle\n      avatar\n      fullname\n      __typename\n    }\n    __typename\n  }\n}\n"
    }
  })
})
