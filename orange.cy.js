describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com/')
    cy.get('input.ytd-searchbox').type('pesta {enter}')
    cy.get('yt-chip-cloud-chip-renderer.yt-chip-cloud-renderer:nth-child(1) > yt-formatted-string:nth-child(1)').should('contain.text', 'All')
  })
})