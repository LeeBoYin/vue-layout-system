# Overview

Vue Layout System is a pack of Vue components, each one layout component solves one specific problem while sharing similar pattern with other layout components. 

- Your contents are always placed inside `slots`
- Indentation, alignment, gap size are set with corresponding `props`
- Layout components can be nested in other layout components. Just like LEGO bricks, combination is the key to creating various types of layout.
 

## Common Props

All layout components share these props

| Property | Description | Type | Default | note |
| --- | --- | --- | --- | --- |
| indent | indent size of all sides | Number | 0 | spacing scale |
| indentX | indent size of left and right sides | Number | 0 | spacing scale |
| indentY | indent size of top and bottom sides | Number | 0 | spacing scale |
