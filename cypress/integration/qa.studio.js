describe('автотесты для формы логина и пароля', function () {

it('восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('Boris@yandex.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitRestoreButton > .exitIcon');
      })
  

it('логин и пароль верные', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitRestoreButton > .exitIcon');
      })

it('логин верный и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitRestoreButton > .exitIcon');
      })


it('логин верный и пароль неверный', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('Boris@yandex.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
      })
})