%%

expression:
    expression '+' expression       { $$ = $1 + $3; console.log($$); }
    | NUMBER                        { $$ = parseInt(yytext); }
    ;

%%
