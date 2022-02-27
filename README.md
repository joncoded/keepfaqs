# keepfaqs

- a self-contained component for FAQ accordion lists with "question-answer" pairs:
  - includes optional sidebar for title and tagline
  - items can expand and shrink based on user interaction
- fully accessible (screen-reader friendly for "expanded" and "collapsed" states)
- fully useable out-of-the-box and extensible for both developers and content creators

## installation

- on the command line:

`% npm install`

## usage

- nearly everything lives in the `KeepFAQs` components folder (only `index.css` lives on the root)

- for developers, edit:

  - `index.css` for styling changes
  - `components/KeepFAQs/Header.js`, `components/KeepFAQs/Questions.js` and `components/KeepFAQs/Question.js` for structural changes
  - `components/KeepFAQs/config.js` and `components/KeepFAQs/data.js` for instance-specific changes and localization
  - `components/KeepFAQs/config.js` (header and accessibility) and `components/KeepFAQs/data.js` (questions and answers)

- to incorporate into your own app:
  - simply put `<KeepFAQsHeader />` and `<KeepFAQsQuestions>` anywhere inside the return() on your own `App.js`
  - don't forget to import these components as you see in the `App.js` sample
