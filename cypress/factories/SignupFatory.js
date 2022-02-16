var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {

  deliver: function() {

    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '67822342234',
  
      address: {
        postalcode: '58030902',
        street: 'Avenida Amazonas',
        number: '111',
        details: 'Ap 404',
        district: 'Estados',
        city_state: 'João Pessoa/PB'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data;

  }
}