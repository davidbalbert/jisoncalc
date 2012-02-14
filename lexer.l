%%

\s+                           { /* eat up whitespace */ }
"PI"                          { return 'PI'; }
[eE]                          { return 'E'; }
([1-9]\d+|\d)(\.\d+)?(e\d+)?  { return 'NUMBER'; }
[a-zA-Z_][a-zA-Z_\d]*         { return 'SYMBOL'; }
[-+*/()=^]                    { return yytext; }
.                             { print_error(yytext); }

%%

function print_error(str) {
    console.log(str + "is invalid");
    return 1;
}
