DEFINE TABLE user SCHEMAFULL
    PERMISSIONS
        FOR select, update, delete WHERE ($scope = 'user' AND id = $auth.id) OR $scope = 'admin'
        FOR create WHERE $scope = 'admin'
;

DEFINE TABLE pubuser AS SELECT username, created FROM user;

DEFINE FIELD username ON TABLE user TYPE string ASSERT $value = /^[a-z0-9](?:[a-z0-9._-]{1,14}[a-z0-9.])$/;
DEFINE FIELD email ON TABLE user TYPE string ASSERT is::email($value);

DEFINE FIELD emailverified ON TABLE user TYPE bool 
    VALUE
        IF $value != NONE THEN $value
        ELSE IF $before != NONE THEN $before
        ELSE false
        END
    PERMISSIONS
        FOR update NONE;

DEFINE FIELD firstname ON TABLE user TYPE string ASSERT $value != NONE;
DEFINE FIELD lastname ON TABLE user TYPE string ASSERT $value != NONE;
DEFINE FIELD password ON TABLE user TYPE string ASSERT $value != NONE
    PERMISSIONS
        FOR select NONE;

DEFINE FIELD created ON TABLE user VALUE $before OR time::now();
DEFINE FIELD updated ON TABLE user VALUE time::now();

DEFINE INDEX username ON TABLE user COLUMNS username UNIQUE;
DEFINE INDEX email ON TABLE user COLUMNS email UNIQUE;

DEFINE EVENT profile_updated ON TABLE user WHEN $event = "UPDATE" THEN {
    IF ($before.username != $after.username) THEN
        CREATE log CONTENT {
            record: $after.id,
            from: $before.username,
            to: $after.username,
            changed: "username"
        }
    END;

    IF ($before.email != $after.email) THEN
        CREATE log CONTENT {
            record: $after.id,
            from: $before.email,
            to: $after.email,
            changed: "email"
        }
    END;

    IF ($before.firstname != $after.firstname) THEN
        CREATE log CONTENT {
            record: $after.id,
            from: $before.firstname,
            to: $after.firstname,
            changed: "firstname"
        }
    END;

    IF ($before.lastname != $after.lastname) THEN
        CREATE log CONTENT {
            record: $after.id,
            from: $before.lastname,
            to: $after.lastname,
            changed: "lastname"
        }
    END;

    IF ($before.password != $after.password) THEN
        CREATE log CONTENT {
            record: $after.id,
            changed: "password"
        }
    END;
};