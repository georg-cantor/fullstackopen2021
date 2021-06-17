
Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

Let's review what happens when the page https://studies.cs.helsinki.fi/exampleapp/spa is opened on the browser.

```mermaid
sequenceDiagram
    participant B AS browser
    participant S AS server
    B->>S: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    S-->>B: HTML-code
    B->>S: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    S-->>B: main.css
    B->>S: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    S-->>B: spa.js
    Note over B: The browser starts executing js-code <br> that requests JSON data from server
    B-->>S: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    S-->>B: data.json:[{"content":"DeathNote","date":"2021-05-19T18:00:45.796Z"},...]
    Note over B: The browser executes the event handler <br> that renders new notes to display
```
