DEFINE TABLE log SCHEMAFULL;

DEFINE FIELD record ON TABLE log TYPE string ASSERT $value = /.+:.+/;
DEFINE FIELD from ON TABLE log TYPE option<record>;
DEFINE FIELD to ON TABLE log TYPE option<record>;
DEFINE FIELD changed ON TABLE log TYPE string;
DEFINE FIELD details ON TABLE log FLEXIBLE TYPE option<object>;

DEFINE FIELD created ON TABLE log VALUE $before OR time::now();
