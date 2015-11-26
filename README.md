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

![first](https://cdn.pbrd.co/images/2qzvo8o3.png "First")

## After evaluating first `om/transact!`

![second](https://cdn.pbrd.co/images/2qzuav8x.png "Second")

## After evaluating second `om/transact!`

![third](https://cdn.pbrd.co/images/2qzqT5MM.png "Third")
