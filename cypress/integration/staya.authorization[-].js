describe('авторизация на staya', function () {

      it('логин и неверный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('Borisdolls@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('Cobaka20061995');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        })
      }) 