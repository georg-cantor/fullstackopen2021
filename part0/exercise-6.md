Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

```mermaid
sequenceDiagram
    participant B AS browser
    participant S AS server
    Note over B: Browser uses the JavaScript code spa.js <br> it fetched from the server <br> to fetch the form-element from the page and <br> register an event handler for form submit event.
    Note over B: Form is submitted in Browser
    Note over B: Then the event handler creates a new note, <br> adds it to the notes list, <br> rerenders the note list on the page.
    B->>S: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa, <br> which contains the new note as JSON-data containing both the content of the note and the timestamp.
    Note over S: server access the JSON-data sent by browser.
    S-->>B: HTTP status code 201, which means the request has been fulfilled <br> and has resulted in one or more new resources being created.
```
