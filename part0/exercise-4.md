
Next let's examine how adding a new note is done.

The note page contains a `form element`.

When the button on the form is clicked, the browser will send the user input to the server. Let's open the Network tab and see what submitting the form looks like:

```mermaid
sequenceDiagram
    participant B AS browser
    participant S AS server
    B->>S: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note over S: server access the data sent by browser, <br>then creates a new note object, <br>and adds it to an array called notes.
    S-->>B: HTTP status code 302, which means a URL redirect.
    Note over B: browser will reload the Notes page.
    B->>S: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    S-->>B: HTML-code
    B->>S: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    S-->>B: main.css
    B->>S: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    S-->>B: main.js
    Note over B: The browser starts executing js-code <br> that requests JSON data from server
    B-->>S: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    S-->>B: data.json:[{"content":"DeathNote","date":"2021-05-19T18:00:45.796Z"},...]
    Note over B: The browser executes the event handler <br> that renders new notes to display
```
