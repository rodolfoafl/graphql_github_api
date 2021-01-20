(this.webpackJsonpgraphql_github_api=this.webpackJsonpgraphql_github_api||[]).push([[0],{59:function(e,c,t){},70:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t(4),r=t.n(a),s=t(51),o=t.n(s),i=(t(59),t(16)),l=t(17),d=t(37),j=t.n(d),u=function(e){var c=e.repo,t=c.name,a=c.owner,r=c.createdAt,s=c.url,o=c.isPrivate,i=c.isArchived,l=c.pushedAt,d=c.primaryLanguage;return Object(n.jsx)("div",{className:"card card-body mb-3 text-light",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-9",children:[Object(n.jsxs)("h5",{children:["Nome: ",t]}),Object(n.jsxs)("h5",{className:"mb-4",children:["Usu\xe1rio: ",a.login]}),Object(n.jsxs)("h6",{className:"mb-4",children:["Linguagem Principal:"," ",null!==d&&d.name]}),Object(n.jsxs)("h6",{children:["Criado em: ",Object(n.jsx)(j.a,{format:"DD/MM/YYYY",children:r})]}),Object(n.jsxs)("h6",{className:"mb-4",children:["Atualizado em: ",Object(n.jsx)(j.a,{format:"DD/MM/YYYY",children:l})]}),Object(n.jsxs)("h6",{children:["Arquivado: ",i?"Sim":"N\xe3o"]}),Object(n.jsx)("h6",{children:o?"Privado":"P\xfablico"})]}),Object(n.jsx)("div",{className:"col-md-3",children:Object(n.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"btn btn-secondary",children:"GitHub"})})]})})},b=t(38);function m(){var e=Object(b.a)(["\n  query OrderRepos(\n    $login: String!\n    $results: Int!\n    $orderField: RepositoryOrderField!\n    $orderDirection: OrderDirection!\n  ) {\n    repositoryOwner(login: $login) {\n      repositories(\n        first: $results\n        orderBy: { field: $orderField, direction: $orderDirection }\n      ) {\n        totalCount\n        edges {\n          node {\n            id\n            name\n            url\n            owner {\n              login\n            }\n            isPrivate\n            isArchived\n            createdAt\n            updatedAt\n            pushedAt\n            primaryLanguage {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return m=function(){return e},e}function h(){var e=Object(b.a)(["\n  query FilterRepos($query: String!, $number_of_repos: Int!) {\n    search(query: $query, type: REPOSITORY, first: $number_of_repos) {\n      repositoryCount\n      edges {\n        node {\n          ... on Repository {\n            id\n            name\n            url\n            owner {\n              login\n            }\n            isPrivate\n            isArchived\n            createdAt\n            updatedAt\n            pushedAt\n            primaryLanguage {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return h=function(){return e},e}var p=Object(l.gql)(h()),O=Object(l.gql)(m()),x=function(){var e=Object(l.useLazyQuery)(p),c=Object(i.a)(e,2),t=c[0],r=c[1],s=r.loading,o=r.error,d=r.data,j=Object(l.useLazyQuery)(O),b=Object(i.a)(j,2),m=b[0],h=b[1],x=h.loading,v=h.error,f=h.data,N=Object(a.useState)(""),g=Object(i.a)(N,2),k=g[0],y=g[1],A=Object(a.useState)(5),C=Object(i.a)(A,2),S=C[0],M=C[1],R=Object(a.useState)(5),D=Object(i.a)(R,2),E=D[0],P=D[1],_=Object(a.useState)(""),w=Object(i.a)(_,2),q=w[0],F=w[1],$=Object(a.useState)(!1),L=Object(i.a)($,2),Y=L[0],H=L[1],z=Object(a.useState)(!1),I=Object(i.a)(z,2),T=I[0],B=I[1],U=Object(a.useState)("NAME-ASC"),Q=Object(i.a)(U,2),G=Q[0],J=Q[1],V=Object(a.useState)(!1),Z=Object(i.a)(V,2),K=Z[0],W=Z[1],X=function(){var e="user:rodolfoafl ";return""!==k&&(e+="in:name ".concat(k," ")),Y&&(e+="is:private "),T&&(e+="archived:".concat(T," ")),""!==q&&(e+="language:".concat(q," ")),e};return Object(a.useEffect)((function(){var e={login:"rodolfoafl",results:E,orderField:G.split("-")[0],orderDirection:G.split("-")[1]};m({variables:e})}),[E,G,m]),Object(a.useEffect)((function(){var e={query:X(),number_of_repos:S};t({variables:e})}),[S,t]),Object(n.jsx)("div",{className:"mt-4",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("form",{className:"bg-secondary text-light p-3",id:"searchForm",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"repoName",children:"Buscar por nome do reposit\xf3rio"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"repoName",placeholder:"Reposit\xf3rio",name:"repoName",value:k,onChange:function(e){return y(e.target.value)}})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("label",{htmlFor:"maxResults",className:"col-md-12",children:"N\xfamero de resultados:"})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("select",{className:"custom-select col-md-12",id:"maxResults",name:"maxResults",onChange:function(e){return M(Number(e.target.value))},value:S,children:[Object(n.jsx)("option",{defaultValue:"",disabled:!0,children:"Selecione o n\xfamero de resultados"}),Object(n.jsx)("option",{value:"5",children:"5"}),Object(n.jsx)("option",{value:"10",children:"10"}),Object(n.jsx)("option",{value:"20",children:"20"}),Object(n.jsx)("option",{value:"50",children:"50"}),Object(n.jsx)("option",{value:"100",children:"100"})]})})]})}),Object(n.jsxs)("div",{className:"form-group",id:"separator",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("label",{className:"col-md-12",children:"Op\xe7\xf5es de filtro: "})}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{className:"form-check-input",type:"checkbox",value:"private",checked:Y,onChange:function(e){return H(e.target.checked)}}),"Privado"]}),Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{className:"form-check-input",type:"checkbox",value:"archived",checked:T,onChange:function(e){return B(e.target.checked)}}),"Arquivado"]}),Object(n.jsxs)("div",{className:"row mt-2",children:[Object(n.jsx)("div",{className:"col-md-12 mb-2",children:Object(n.jsx)("small",{children:"Linguagem Principal:"})}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios1",value:"c",checked:"c"===q,onChange:function(e){return F(e.target.value)}}),"C"]}),Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios2",value:"c#",checked:"c#"===q,onChange:function(e){return F(e.target.value)}}),"C#"]})]}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios3",value:"javascript",checked:"javascript"===q,onChange:function(e){return F(e.target.value)}}),"JavaScript"]}),Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios4",value:"php",checked:"php"===q,onChange:function(e){return F(e.target.value)}}),"PHP"]}),Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios5",value:"",checked:""===q,onChange:function(e){return F(e.target.value)}}),"Qualquer"]})]})]})]})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mt-2",onClick:function(e){return function(e){e.preventDefault(),W(!1);var c={query:X(),number_of_repos:S};t({variables:c})}(e)},children:"Buscar"})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("label",{htmlFor:"orderMaxResults",className:"col-md-12",children:"N\xfamero de resultados:"})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("select",{className:"custom-select col-md-12",id:"orderMaxResults",name:"orderMaxResults",onChange:function(e){return P(Number(e.target.value))},value:E,children:[Object(n.jsx)("option",{defaultValue:"",disabled:!0,children:"Selecione o n\xfamero de resultados"}),Object(n.jsx)("option",{value:"5",children:"5"}),Object(n.jsx)("option",{value:"10",children:"10"}),Object(n.jsx)("option",{value:"20",children:"20"}),Object(n.jsx)("option",{value:"50",children:"50"}),Object(n.jsx)("option",{value:"100",children:"100"})]})})]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("label",{htmlFor:"sortMethod",className:"col-md-12",children:"M\xe9todo de ordena\xe7\xe3o:"})}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"sortMethodOptions",id:"sortMethodOptions1",value:"NAME-ASC",checked:"NAME-ASC"===G,onChange:function(e){return J(e.target.value)}}),"Alfabeticamente (A-Z)"]}),Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"sortMethodOptions",id:"sortMethodOptions3",value:"NAME-DESC",checked:"NAME-DESC"===G,onChange:function(e){return J(e.target.value)}}),"Alfabeticamente (Z-A)"]}),Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"sortMethodOptions",id:"sortMethodOptions2",value:"PUSHED_AT-ASC",checked:"PUSHED_AT-ASC"===G,onChange:function(e){return J(e.target.value)}}),"Atualiza\xe7\xe3o (Push) - Mais Antigo"]}),Object(n.jsxs)("label",{className:"form-check-label col-md-12",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"sortMethodOptions",id:"sortMethodOptions4",value:"PUSHED_AT-DESC",checked:"PUSHED_AT-DESC"===G,onChange:function(e){return J(e.target.value)}}),"Atualiza\xe7\xe3o (Push) - Mais Recente"]})]})]})}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){return function(e){e.preventDefault(),W(!0);var c={login:"rodolfoafl",results:E,orderField:G.split("-")[0],orderDirection:G.split("-")[1]};m({variables:c})}(e)},children:"Ordenar"})]})}),Object(n.jsx)("div",{className:"col",children:K?Object(n.jsxs)(n.Fragment,{children:[x?Object(n.jsx)("p",{children:"Loading..."}):Object(n.jsx)("h4",{children:"Mostrando ".concat(E,".")}),v&&Object(n.jsxs)("p",{children:["Error: ",v.message]}),f&&f.repositoryOwner.repositories.edges.map((function(e){return Object(n.jsx)(u,{repo:e.node},e.node.id)}))]}):Object(n.jsxs)(n.Fragment,{children:[s?Object(n.jsx)("p",{children:"Loading..."}):Object(n.jsx)("h4",{children:function(e){var c=0;if(e){if(void 0!==e.search&&(c=e.search.repositoryCount),c>0){var t=c;return"Mostrando ".concat(S>=c?c:S," de ").concat(t,".")}return"Nenhum reposit\xf3rio encontrado."}}(d)}),o&&Object(n.jsxs)("p",{children:["Error: ",o.message]}),d&&d.search.edges.map((function(e){return Object(n.jsx)(u,{repo:e.node},e.node.id)}))]})})]})})},v=new l.ApolloClient({uri:"https://api.github.com/graphql",headers:{authorization:"Bearer 094fd9e951273189bac9b47e5ae25211d64b86ef","Content-Type":"application/json",Accept:"application/json"},cache:new l.InMemoryCache}),f=function(){return Object(n.jsx)(l.ApolloProvider,{client:v,children:Object(n.jsxs)("div",{className:"container mt-2",children:[Object(n.jsx)("h1",{className:"text-center",children:"GraphQL GitHub API"}),Object(n.jsx)(x,{})]})})};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.44842779.chunk.js.map