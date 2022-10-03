describe('[+] авторизация на staya', function () {

      it('[+] логин и пароль верные', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('Borisdolls@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('Cobaka20061994');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        })
      })