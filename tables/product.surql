DEFINE TABLE product SCHEMAFULL
    PERMISSIONS
        FOR select WHERE 
            -- For public record, product must be published, (and either discoverable or user must have proof of existance)
            (published AND (discoverable OR id = $product_id OR slug = $product_slug)) OR $scope = 'admin'
        FOR create WHERE $scope = 'admin'
        FOR update, delete NONE;


################
#### FIELDS ####
################

-- Slug will need to start & end with letter or number, can contain a `-` in between words (?) and has to be lowercase.
DEFINE FIELD slug           ON TABLE product TYPE string ASSERT $value != NONE;

-- Product branding
DEFINE FIELD title          ON TABLE product TYPE string ASSERT $value != NONE;
DEFINE FIELD tagline        ON TABLE product TYPE string;
DEFINE FIELD overview       ON TABLE product TYPE string ASSERT $value != NONE;
DEFINE FIELD description    ON TABLE product TYPE string ASSERT $value != NONE;

-- Logo is required, rest can have a fallback.
DEFINE FIELD logo           ON TABLE product TYPE string ASSERT $value != NONE;
DEFINE FIELD thumbnail      ON TABLE product TYPE string;
DEFINE FIELD background     ON TABLE product TYPE string;

-- Pricing in currency that will be decided later.
DEFINE FIELD pricing        ON TABLE product TYPE number ASSERT $value != NONE;

-- State of product
DEFINE FIELD published      ON TABLE product TYPE bool ASSERT $value != NONE;

DEFINE FIELD discoverable   ON TABLE product TYPE bool ASSERT $value != NONE;

DEFINE FIELD links ON product TYPE array;
DEFINE FIELD links.* ON product TYPE string;

DEFINE FIELD platforms ON product TYPE array;
DEFINE FIELD platforms.* ON product TYPE platform;

-- TODO: Relate maker profiles.

DEFINE FIELD showcase ON TABLE product TYPE array;
DEFINE FIELD showcase.* ON TABLE product TYPE object;
DEFINE FIELD showcase.*.type ON TABLE product TYPE string ASSERT $value INSIDE ["image", "video"];
DEFINE FIELD showcase.*.source ON TABLE product TYPE string ASSERT $value != NONE;

-- Get some historical data.
DEFINE FIELD created        ON TABLE product VALUE $before OR time::now();
DEFINE FIELD updated        ON TABLE product VALUE time::now(); -- will only change when you update the record.

#################
#### INDEXES ####
#################

DEFINE INDEX slug ON TABLE product COLUMNS slug UNIQUE;