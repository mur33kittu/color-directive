# color-directive

###
color-directive is easy to color your element by just passing color without css.


pre-requisites :

npm install @angular/core@5.0.0 rxjs@5.5.9 typescript@2.4.2 typings@2.1.1
npm install color-directive --save

how to use

<div m-color>
  Without color : default to black
</div>
<div m-color [color]="'#fde34f'">
  Pass any color as input
</div>
