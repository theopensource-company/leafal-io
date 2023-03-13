DEFINE TABLE log SCHEMAFULL;

DEFINE FIELD record ON TABLE log TYPE string ASSERT $value = /.+:.+/;
DEFINE FIELD from ON TABLE log;
DEFINE FIELD to ON TABLE log;
DEFINE FIELD changed ON TABLE log TYPE string ASSERT $value != NONE;
DEFINE FIELD details ON TABLE log FLEXIBLE TYPE object;

DEFINE FIELD created ON TABLE log VALUE $before OR time::now();
