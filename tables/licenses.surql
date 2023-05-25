DEFINE TABLE license SCHEMAFULL
    PERMISSIONS
        FOR select WHERE ($scope = 'user' AND holder.id = $auth.id)
        FOR update, delete WHERE $scope = 'admin'
        FOR create WHERE licensed.pricing = 0.0 OR $scope = 'admin'
;

DEFINE FIELD holder ON license TYPE record<user>;
DEFINE FIELD licensed ON license TYPE record<product>;

DEFINE FIELD created ON TABLE license VALUE $before OR time::now();
DEFINE FIELD updated ON TABLE license VALUE time::now();

DEFINE INDEX ownership ON license FIELDS holder, licensed UNIQUE;