---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Hello h1

## Hello h2

### Hello h3

#### Hello h4



This is how to write a normal text

_This is how to write italic text_

**This is how to write a bold text**

``This is how to write a code text``

[This is how to write a link text](https://docusaurus.new)

![Example banner](http://placekitten.com/700/300)


:::note

Some **content** with _markdown_ `syntax`. Check this

:::

:::tip

Some **content** with _markdown_ `syntax`. Check this

:::

:::info

Some **content** with _markdown_ `syntax`. Check this

:::

:::caution

Some **content** with _markdown_ `syntax`. Check this

:::

:::danger

Some **content** with _markdown_ `syntax`. Check this

:::

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">Ceci est une pomme 🍎</TabItem>
  <TabItem value="orange">Ceci est une orange 🍊</TabItem>
  <TabItem value="banana">Ceci est une banane 🍌</TabItem>
</Tabs>



```jsx title="The title goes here"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```sql
SELECT *
FROM table_name
WHERE created_at >= 0
```


```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```


<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

