DEFINE TABLE admin SCHEMAFULL
  PERMISSIONS
    FOR select, update, delete, create WHERE $scope = 'admin';

DEFINE FIELD name ON TABLE admin TYPE string ASSERT array::len(string::words($value)) > 1;
DEFINE FIELD email ON TABLE admin TYPE string ASSERT string::is::email($value);
DEFINE FIELD password ON TABLE admin TYPE string PERMISSIONS FOR select NONE;

DEFINE FIELD created ON TABLE admin TYPE datetime VALUE $before OR time::now();
DEFINE FIELD updated ON TABLE admin TYPE datetime VALUE time::now();

REMOVE INDEX email ON TABLE admin;
DEFINE INDEX email ON TABLE admin COLUMNS email UNIQUE;

DEFINE EVENT admin_updated ON TABLE user WHEN $event = "UPDATE" THEN {
    IF ($before.email != $after.email) THEN
        CREATE log CONTENT {
            record: $after.id,
            from: $before.email,
            to: $after.email,
            changed: "email"
        }
    END;

    IF ($before.name != $after.name) THEN
        CREATE log CONTENT {
            record: $after.id,
            from: $before.name,
            to: $after.name,
            changed: "name"
        }
    END;

    IF ($before.password != $after.password) THEN
        CREATE log CONTENT {
            record: $after.id,
            changed: "password"
        }
    END;
};