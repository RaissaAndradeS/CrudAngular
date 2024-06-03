
### Visão Geral do Angular 

- O que é o Angular? <br>
É um framework JavaScript desenvolvido pelo Google para criação aplicações Web SPA baseada em componentes.

CLI - Command Line Interface: <br>
```npm i -g @angular/cli``` <br>
``` ng new minha-app```<br>

TypeScript linguagem desenvolvida pela microsoft, é compilado para JavaScript. 
TypeScript é orientada a objetos e de tipagem forte.
TypeScript é um superset do JavaScript: tem tudo do java e acrescenta umas funcionalidades a mais. 

### Árvore de componentes 

Começa a aplicação com componente principal que do angular por padrão é appcomponent e a nossa será o MyApp, essa é a raiz da aplicação.
E a partir desse componente, vamos referenciar outros componentes, o header que dentro terá um nav e content que tem um contentTitlem e ProductCrud e vários outros...

### Conceitos essencias do Angular 

Inicialização da APP

```main.ts``` -> Primeiro arquivo usado para inicializar a aplicação em Angular. 

A aplicação é organizada em uma árvore de componentes.

``` AppModule``` -> Será usado para inicializar a aplicação.

```AppComponent ``` -> Criado por padrão.

### O que é um componente?

Componente Angular -> é um pedaço dentro da aplicação que representa um componente visual que contém: HTML, CSS, TS. 
Por via de regra teremos 3 arquivos, home.component.css, home.component.html e home.component.ts. 
E é gerado uma tag ````<app-home></app-home>````

### Organização usando módulo 

AppModule - A <br>
XModule - B, C, D <br>
YModule - E, F, G, H <br>
ZModule - I, J, K, L, M  <br>

### Anatomia do Módulo 

Declarations : Components, Diretivas, Pipes <br>
Exports: Components, Diretivas, Pipes <br>
Imports: Module A, Module B, Module C <br>
Providers: Service A, Service B, Service C <br>
Bootstrap: App Component <br>

