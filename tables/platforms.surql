DEFINE TABLE platform SCHEMAFULL
    PERMISSIONS
        FOR update, delete, create WHERE $scope = 'admin'
        FOR select FULL
;

DEFINE FIELD name ON platform VALUE id[0];
DEFINE FIELD arch ON platform VALUE id[1];

IF not(platform:['windows', 'x86-64'].id) THEN
    CREATE platform:['windows', 'x86-64'];
END;

IF not(platform:['windows', 'arm-64'].id) THEN
    CREATE platform:['windows', 'arm-64'];
END;

IF not(platform:['windows', 'x86-32'].id) THEN
    CREATE platform:['windows', 'x86-32'];
END;

IF not(platform:['linux', 'x86-64'].id) THEN
    CREATE platform:['linux', 'x86-64'];
END;

IF not(platform:['linux', 'arm-64'].id) THEN
    CREATE platform:['linux', 'arm-64'];
END;

IF not(platform:['linux', 'x86-32'].id) THEN
    CREATE platform:['linux', 'x86-32'];
END;

IF not(platform:['macosx', 'x86-64'].id) THEN
    CREATE platform:['macosx', 'x86-64'];
END;

IF not(platform:['macosx', 'arm-64'].id) THEN
    CREATE platform:['macosx', 'arm-64'];
END;

IF not(platform:['macosx', 'x86-32'].id) THEN
    CREATE platform:['macosx', 'x86-32'];
END;