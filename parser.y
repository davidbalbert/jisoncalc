%left '+' '-'
%left '*' '/'
%left UMINUS

%%

target
      : expression    { return $1; }
      ;

expression
    : expression '+' expression       { $$ = $1 + $3; }
    | expression '-' expression       { $$ = $1 - $3; }
    | expression '*' expression       { $$ = $1 * $3; }
    | expression '/' expression       { $$ = $1 / $3; }
    | '-' expression %prec UMINUS     { $$ = - $2; }
    | NUMBER                          { $$ = Number(yytext); }
    ;

%%
