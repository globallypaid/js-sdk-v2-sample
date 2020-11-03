const form = document.forms.namedItem('example5-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cardNumber = form['cc_number'].value;
    const cvv = form['cvv'].value;
    const zipCode = form['zip_code'].value;
    const expiration = form['expiration'].value;

    gpg.createToken(cardNumber, cvv, expiration, zipCode).then(response => {
        console.log(response);
        const token = document.getElementById('token');
        token.innerText = response.id;

        // Do whatever you need with the token.
        // Send a request to yours backend to perform a charge request

    }).catch(error => {
        console.log(error);
    });
});
