const cardSimpleCustomized = gpg.createForm('card-simple', {
    style: {
        base: {
            width: '560px',
            buttonColor: 'white',
            buttonBackground: '#558b2f',
            inputColor: '#558b2f',
            color: '#558b2f'
        }
    }
});

cardSimpleCustomized.mount('example3');

cardSimpleCustomized.on('TOKEN_CREATION',
    (token) => {
        cardSimpleCustomized.showSuccess();
        console.log(token);
        // Do whatever you need with the token.
        // Send a request to yours backend to perform a charge request
    },
    (error) => {
        cardSimpleCustomized.showError(error.message);
        console.log(error);
    }
);
