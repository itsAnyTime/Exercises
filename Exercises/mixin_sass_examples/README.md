# Mixins

#### In _header.scss add:
`height:100vh;`
 `display:flex;`
`justify-content: center;`
`align-items:center;`


```sass
header {
    background-color: skyblue;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items:center;
        button {
            background-color: $primyriBtn;
            color: $textColor;
            &:hover{
                background-color: yellow;
            }
        }
}
```

#### Then, add @mixin:
```
@mixin flexCenter {
    display:flex;
    justify-content: center;
    align-items:center;
    height:100vh;
}

header {
    background-color: skyblue;    
    @include flexCenter();
    button {
        background-color: $primyriBtn;
        color: $textColor;
        &:hover{
            background-color: yellow;
        }
    }
}
```
#### Next, go to style.scss and add .contact class:
```
@import './variables';
@import './header';

.contact {
    @include flexCenter();
}
```
#### We can change FLEX in row and column:

##### _headers.scss
```
@mixin flexCenter($direction) {
    …
    flex-direction: $direction;
}

header {
    …    
    @include flexCenter(column);
…

style.scss
.contact {
    @include flexCenter(row);
}
```

#### May be we want to change background color!
##### _header.scss
```
@mixin flexCenter($direction, $background) {
    …
    background-color: $background;
}

header {
    // background-color: skyblue;    
    @include flexCenter(column, red);

style.scss
.contact {
    @include flexCenter(row, yellow);
}
```

#### Extensions

##### Go to _header.scss file and edit it:
```
header {
    height: 100vh;    
    background-color: skyblue;    
    button {
        background-color: $primyriBtn;
        color: $textColor;
        &:hover{
            background-color: yellow;
        }
    }
}

style.scss
.contact {
    @extend header;
}
```

##### It inherits from header. Also, we can override the style:
```
.contact {
    @extend header;
    background-color: greenyellow;
    width: 100%-20%;
}
```

#### “If, ELSE IF” statements. 
##### We have:

##### index.html:
```
<header>Hello my WORLD!</header>
```
##### style.scss
```
@mixin text-style($size) {
    font-size: $size;
    color: blue;
}

header {
    @include text-style(10px);
}
```
##### We add conditions:
```
@mixin text-style($size) {
    font-size: $size;
    @if $size > 30px {
        color: blue;
    }
    
}

header {
    @include text-style(40px);
}
```
#### Or we can add additional conditions:
```
@mixin text-style($size) {
    font-size: $size;
    @if $size > 30px {
        color: blue;
    } @else if $size == 30px {
        color:red
    } @else {
        color:green;
    }
    
}

header {
    @include text-style(20px);
}
```

##### Next EXAMPLE (If):

##### Comment previous codes then add:
##### index.html
```
<section class="page page--center">
        <div>
          <h1>4. Triangle</h1>
    
          <div class="triangle-example"></div>
        </div>
      </section>
```


##### _header.scss
```
@mixin triangle($direction, $color: #000) {
    width: 0; 
    height: 0; 

    @if $direction == up {
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 50px solid $color;
    } @else {
        @error "Unknown direction #{$direction}.";
    }
}
```
#### style.scss
```
.triangle-example {
    &::before,
    &::after {
        display: block;
        content: '';
        margin: 8px;
    }

    &::before {
        @include triangle(up);
    }

    // &::after {
    //     @include triangle(down);
    // }
}
```

#### Maps
##### style.scss
```
$font-sizes: (
    xs: 12px,
    sm: 14px,
    m: 16px,
    l: 32px,
    xl: 48px,
    xxl: 61px
);

@mixin font-size($size) {
    @if map-has-key($font-sizes, $size) {
        font-size: map-get($font-sizes, $size);
    } @else {
        @error '#{$size} is not defined. Use #{$font-sizes}';
    }
}

.text-xxl {
    @include font-size(xxl);
}
```

#### index.html
```
<p class="text-xxl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus repellat officia animi minima eum esse magni minus placeat dignissimos in, odit voluptas, quas hic aut quia dolor reprehenderit. Voluptates.
      </p>
```


Created: 02.09.2020