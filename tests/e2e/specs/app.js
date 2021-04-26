describe('App', () => {
  it('renders selected currency select', () => {
    cy.visit('/');
    let currencySelect = cy.get('[data-testid=currency-select]');
    currencySelect.should('exist');
  });

  it('renders selected option on option click', () => {
    cy.visit('/');
    let currencySelect = cy.get('[data-testid=currency-select]');
    let optionsContainer = currencySelect.find(".options");
    let option0 = optionsContainer.children().first();
    option0.click();
    cy.get('.selection > .chip').should('have.length', 1);
  });

  it('closes selected option on close button', () => {
    cy.visit('/');
    let currencySelect = cy.get('[data-testid=currency-select]');
    let optionsContainer = currencySelect.find(".options");
    let option0 = optionsContainer.children().first();
    option0.click();
    let selectedOption0 = cy.get('.selection > .chip').first();
    selectedOption0.find('.close-btn').click();
    cy.get('.selection > .chip').should('have.length', 0);
  })
});
