

export default function createAuthForm(form, { handleAuth }) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // *** make form data and call handleAuth with email and password
        handleAuth(
            FormData.get('email'),
            FormData.get('password')
        );
    });

    return () => { };
}