#   Defines the profile of a 'maker', a company, person or brand involved in *making* a product.
#   This is used to make a mini-profile for a developer, publisher or manufacturer of a product.

DEFINE TABLE maker SCHEMAFULL
    -- TODO: permissions for maker profile's owners
    PERMISSIONS
        FOR update, delete, create WHERE $scope = 'admin'
;

DEFINE FIELD slug   ON TABLE maker TYPE string ASSERT $value != NONE;
DEFINE FIELD name   ON TABLE maker TYPE string ASSERT $value != NONE;
DEFINE FIELD logo   ON TABLE maker TYPE string;

DEFINE EVENT maker_updated ON TABLE maker WHEN $event = "UPDATE" THEN {
    IF ($before.name != $after.name) THEN
        CREATE log CONTENT {
            record: $after.id,
            from: $before.name,
            to: $after.name,
            changed: "name"
        }
    END;

    IF ($before.logo != $after.logo) THEN
        CREATE log CONTENT {
            record: $after.id,
            from: $before.logo,
            to: $after.logo,
            changed: "logo"
        }
    END;
};

#################
#### INDEXES ####
#################

DEFINE INDEX slug ON maker COLUMNS slug UNIQUE;