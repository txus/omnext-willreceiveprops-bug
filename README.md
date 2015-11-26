# Bug with willReceiveProps in om.next

Using `alpha24`.

Expected: after a mutation transaction, willReceiveProps should be called on the component with the new props.

Actual: willReceiveProps seems to be delayed one transaction always.

Steps to reproduce:

```
boot dev
```

Go to `localhost:3000`

Connect to nREPL and evaluate the `comment`ed lines in `app.cljs` one by one. Here's how it looks:

## Initial state

![1](http://pasteboard.co/2qzvo8o3.png)

## After evaluating first `om/transact!`

![2](http://pasteboard.co/2qzuav8x.png)

## After evaluating second `om/transact!`

![3](http://pasteboard.co/2qzqT5MM.png)
