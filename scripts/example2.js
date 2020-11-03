const cardExtended = gpg.createForm('card-extended', {
    style: {
        base: {
            width: '560px'
        }
    }
});

cardExtended.mount('example2');

cardExtended.on('TOKEN_CREATION',
    (token) => {
        cardExtended.showSuccess();
        console.log(token);
        // Do whatever you need with the token.
        // Send a request to yours backend to perform a charge request
    },
    (error) => {
        cardExtended.showError(error.message);
        console.log(error);
    }
);
