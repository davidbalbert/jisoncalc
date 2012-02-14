%left '+' '-'
%left '*' '/'

%%

target
      : expression    { return $1; }
      ;

expression
    : expression '+' expression       { $$ = $1 + $3; }
    | expression '-' expression       { $$ = $1 - $3; }
    | expression '*' expression       { $$ = $1 * $3; }
    | expression '/' expression       { $$ = $1 / $3; }
    | NUMBER                          { $$ = Number(yytext); }
    ;

%%
