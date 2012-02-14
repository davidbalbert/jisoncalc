%{
  var symbols = {}
%}

%right '='
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
    | '(' expression ')'              { $$ = $2; }
    | SYMBOL '=' expression           { $$ = symbols[$1] = $3; }
    | NUMBER                          { $$ = Number(yytext); }
    | SYMBOL                          { $$ = symbols[$1]; }
    ;

%%
