DEFINE SCOPE user SESSION 30d
    SIGNIN (
        SELECT * FROM user WHERE (username = $identifier OR email = $identifier) AND crypto::argon2::compare(password, $password)
    )
    SIGNUP (
        CREATE user CONTENT {
            username: $username,
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            password: crypto::argon2::generate($password)
        }
    )
;