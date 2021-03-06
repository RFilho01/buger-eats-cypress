/// <reference types="cypress" />

import signup from '../pages/SignUpPage';
import signupFactory from '../factories/SignupFactory';

describe('Signup', () => {

  it('User should be deliver', function () {
    var deliver = signupFactory.deliver();
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.modalContentShouldBe(expectedMessage);
  });

  it('Invalid document', function () {
    var deliver = signupFactory.deliver();
    deliver.cpf = '000000141AA';

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe('Oops! CPF inválido');
  });

  it('Invalid email', function () {
    var deliver = signupFactory.deliver();
    deliver.email = 'user.com.br';

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe('Oops! Email com formato inválido.');
  });


  context('Required fields', function () {

    const messages = [
      { field: 'nome', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP' },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    ]

    before(function () {
      signup.go();
      signup.submit();
    });

    messages.forEach(function (msg) {
      it(`${msg.field} is required`, function () {
        signup.alertMessageShouldBe(msg.output);
      });
    });
  });

});