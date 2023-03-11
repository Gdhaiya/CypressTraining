describe('Drag', function () {

    it('Drag', function () {
        cy.visit('https://demoqa.com/droppable');
        cy.get('#draggable').drag('#droppable', { force: true });
    })


}) 