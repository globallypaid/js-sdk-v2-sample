const cardExtendedCustomized = gpg.createForm('card-extended', {
    style: {
        base: {
            width: '560px',
            buttonColor: 'white',
            buttonBackground: '#0097a7',
            inputColor: '#0097a7',
            color: '#0097a7'
        }
    }
});

cardExtendedCustomized.mount('example4');

cardExtendedCustomized.on('TOKEN_CREATION',
    (token) => {
        cardExtendedCustomized.showSuccess();
        console.log(token);
        // Do whatever you need with the token.
        // Send a request to yours backend to perform a charge request
    },
    (error) => {
        cardExtendedCustomized.showError(error.message);
        console.log(error);
    }
);
