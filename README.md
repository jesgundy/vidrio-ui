# Jot

Jot is an uber simple scratchpad for writing in the browser. It combines the [Cloud9 Ace Code Editor](http://ace.c9.io/) with a few modest features (outlined below) to specifically solve a unique gap in my workflow.

Jot is intended for modern, desktop browsers only (and currently, runs best in Chrome). If something isn't working or you want to float some ideas for changes, either [file a ticket](https://github.com/jesgundy/jot/issues) or [hollar at me on Twitter](https://twitter.com/jesgundy).

## Features

### Syntax

Two flavors: plain **text** and **markdown**. Clicking the label swaps it back and forth.

### Local Storage

If yoour browser supports it, your content is stored locally while you type. TheCommand-s/ctrl-s is remapped mostly to keep me from going crazy while I mash the save hotkey over and over while I write out of habit.

* **DO NOT** depend on Jot for storing your content. Clearing your cache will blow away local storage and any content you had saved here. Jot is intended to be a zero-barrier way to start taking notes quickly, not a long term storage space for notes.*

### Export

Clicking the copy icon at the top will copy the contents of the editor to the clipboard. If the syntax is set to markdown, Jot will first convert your content to html, and apply some basic typographic styles to it (super handy for composing well organized emails and pasting it into your client).

### Printing

Jot also has a few custom printing settings. Most noticably, the document will print with extra padding to the right hand side (which I like for taking notes). It will also convert markdown to html before printing, which prints it out with basic but clean typographic styles.

## Misc

### License

MIT
