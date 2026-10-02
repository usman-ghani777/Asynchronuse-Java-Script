# Asynchronous JavaScript

A small, browser-based learning repository for practicing asynchronous JavaScript. The examples progress from callbacks to Promises and `async`/`await`, with a Todo app that uses asynchronous HTTP requests.

## Examples

| Folder | What it covers | Entry point |
| --- | --- | --- |
| [`callbacks/`](callbacks/) | Passing functions as callbacks, delayed work, and nested asynchronous calls | [`index.html`](callbacks/index.html) |
| [`Promises/`](Promises/) | Creating and consuming a Promise with `.then()` and `.catch()` | [`index.html`](Promises/index.html) |
| [`Async js/`](Async%20js/) | Using `async`/`await` with `fetch()` to request a sample todo from JSONPlaceholder | [`index.html`](Async%20js/index.html) |
| [`Async Project Todo/`](Async%20Project%20Todo/) | A Todo interface with create, list, edit, and delete operations | [`index.html`](Async%20Project%20Todo/index.html) |
| [`Async Await/`](Async%20Await/) | Reserved for a future example; its HTML and JavaScript files are currently empty | — |

## Getting started

No package installation or build step is required. Open an example's `index.html` in a browser. You can also serve the repository with a local development server, such as the Live Server extension in VS Code.

For the callback and Promise examples, open the browser's developer console to see the logged output. The `Async js` example also logs the fetched response there.

## Todo app

The Todo app sends requests to a hosted MockAPI endpoint defined in [`Async Project Todo/script.js`](Async%20Project%20Todo/script.js). An internet connection and an available endpoint are required for the list and CRUD actions to work. The data is remote, not stored by this repository, and may be changed or reset independently of your local files.

## Suggested learning order

1. `callbacks/` — pass a function to run after another operation.
2. `Promises/` — represent completion or failure with a Promise.
3. `Async js/` — wait for a network response with `await`.
4. `Async Project Todo/` — see asynchronous requests used in a small interactive app.

## Requirements

- A modern web browser with JavaScript enabled
- An internet connection for examples that call external APIs
