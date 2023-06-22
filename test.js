describe('Teste de conteúdo dos elementos', function() {
    let userData; // Variable to store the user data
  
    before(function(done) {
      // Fetch user data before running the tests
      fetch('https://randomuser.me/api/?nat=BR')
        .then(response => response.json())
        .then(data => {
          userData = data.results[0]; // Store the user data
          done();
        });
    });
  
    it('Deve definir o atributo src de profileImageElement corretamente', function() {
      // Your assertion code
    });
  
    it('Deve definir o conteúdo de nameElement corretamente', function() {
      // Your assertion code
    });
  
    it('Deve definir o conteúdo de emailElement corretamente', function() {
      // Your assertion code
      assert.equal(emailElement.textContent, 'Email: ' + userData.email);
    });
  
    it('Deve definir o conteúdo de phoneElement corretamente', function() {
      // Your assertion code
    });
  
    it('Deve definir o conteúdo de cityElement corretamente', function() {
      // Your assertion code
    });
  
    it('Deve definir o conteúdo de countryElement corretamente', function() {
      // Your assertion code
    });
  });
  