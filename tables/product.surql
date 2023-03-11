DEFINE TABLE product SCHEMAFULL
    PERMISSIONS
        FOR select WHERE 
            -- For public record, product must be published, (and either discoverable or user must have proof of existance)
            (published AND (discoverable OR id = $product_id OR slug = $product_slug));
        FOR create, update, delete NONE;


################
#### FIELDS ####
################

DEFINE FIELD title          ON product TYPE string ASSERT $value != NONE;
DEFINE FIELD description    ON product TYPE string ASSERT $value != NONE;
-- Slug will need to start & end with letter or number, can contain a `-` in between words (?) and has to be lowercase.
DEFINE FIELD slug           ON product TYPE string ASSERT $value != NONE AND $value = /^[a-z0-9]+(?:-[a-z0-9]+)+$/;

-- Logo is required, rest can have a fallback.
DEFINE FIELD logo           ON product TYPE string ASSERT $value != NONE;
DEFINE FIELD thumbnail      ON product TYPE string;
DEFINE FIELD background     ON product TYPE string;

-- State of product
DEFINE FIELD published      ON product TYPE boolean VALUE {
    IF (is_bool($value)) THEN
        RETURN $value;
    ELSE IF (is_bool($before)) THEN
        RETURN $before;
    ELSE
        RETURN false;
    END;
}

DEFINE FIELD discoverable   ON product TYPE boolean VALUE {
    IF (is_bool($value)) THEN
        RETURN $value;
    ELSE IF (is_bool($before)) THEN
        RETURN $before;
    ELSE
        RETURN true;
    END;
}

-- Get some historical data :)
DEFINE FIELD created        ON product VALUE $before OR time::now();
DEFINE FIELD updated        ON product VALUE time::now(); -- will only change when you update the record.


#################
#### INDEXES ####
#################

DEFINE INDEX slug ON product COLUMNS slug UNIQUE;