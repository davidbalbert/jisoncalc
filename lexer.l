%%

\s+                         { /* eat up whitespace */ }
([1-9][0-9]+|[0-9])         { return 'NUMBER'; }
[a-zA-Z_][a-zA-Z_\d]*       { return 'SYMBOL'; }
"+"                         { return '+'; }
"-"                         { return '-'; }
"*"                         { return '*'; }
"/"                         { return '/'; }
"("                         { return '('; }
")"                         { return ')'; }
"="                         { return '='; }
.                           { print_error(yytext); }

%%

function print_error(str) {
    console.log(str + "is invalid");
    return 1;
}
