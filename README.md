
# Refnux example

## How to use

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/master | tar -xz --strip=2 next.js-master/examples/with-refnux
cd with-refnux
```

Install it and run:

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```


## The idea behind the example

This example, just like `with-react` and `with-mobx` examples, shows how to manage a global state in your web-application. 
In this case we are using refnux which is an alternative, simpler, purely functional store state manager.

We have two very similar pages (page1.js, page2.js). They both

- show the current application state, including a simple counter value
- have a link to jump from one page to the other
- have an 'increment' button to increment the state of the counter 
(it triggers the `counterIncrement` action)

When running the example, please, increment the counter and note how moving from page 1 to page 2 and back the state is persisted. 
Reloading any of the pages will restore the initial state coming from the server.


### Implementation details

Each page is wrapped in a Provider component which takes a store object as parameter. 
Its job is to provide the store to `connect`-ed child components. 
Page components are connected to the state using refnux `connect` function.

In the `store/` directory you can see a simple implmentation of

- a `getStore` function: it returns a new store on the server or 
the existing store on the client. The store is initialized with an initial state.
- a `counterIncrement` action that increments the counter state

One could easily write a couple of actions to save and the state (or part of it) to
localStorage, making the state persistent on page reload.

If you have any comment / question / pull requests please refer to the [original repository](https://github.com/davibe/next.js-example-with-refnux) where this example is developed and maintained.