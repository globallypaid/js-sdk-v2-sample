const cardSimple = gpg.createForm('card-simple', {
    style: {
        base: {
            width: '560px'
        }
    }
});

cardSimple.mount('example1');

cardSimple.on('TOKEN_CREATION',
    (token) => {
        cardSimple.showSuccess();
        console.log(token);
        // Do whatever you need with the token.
        // Send a request to yours backend to perform a charge request
    },
    (error) => {
        cardSimple.showError(error.message);
        console.log(error);
    }
);
