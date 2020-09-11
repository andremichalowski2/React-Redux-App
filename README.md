# Module Project: Async Redux - React Redux App
  This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored asyncronous action creators in Redux. In your project you will demonstrate proficiency of these subjects and principles by building an app from scratch that consumes and API of your choosing, and displays data fetched from that API.

## Introduction
  This is the chance to let your skills shine! You have learned _sooo_ much the last month, and now you get to put all of your hard-earned skills to work. Choose an open api ([this list](https://github.com/public-apis/public-apis) has a lot of great ones - look for ones with `Auth: no` and `HTTPS: yes` - or just do a google search for `open apis`). Protip - don't take too long choosing an API. Pick one that looks interesting, and get building.
  Once you have chosen an API to consume, build an app that makes sense for the data you will be retrieving. Have fun with this. You get to be the creative mind. You get to make all the decisions here. I'm excited to see what you build!

----------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Instructions

### Task 1: Project Set Up

  Task 1A: Set-up
    - [x] Create a forked copy of this project.
    - [x] Clone your OWN version of the repository in your terminal.
    - [x] CD into the project base directory `cd React-Redux-App`.
    - [x] Create a new branch: git checkout -b `<firstName-lastName>`.
    - [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.

  Task 1B: Dependencies
    - [x] Push commits: git push origin `<firstName-lastName>`.
    - [x] Add your team lead as collaborator on Github.
    - [x] Run `npx create-react-app app --use-npm` to make a CRA app.
    - [x] CD into the react app `cd app`.
    - [x] Start up the app using `npm start`.

### Task 2: Minimum Viable Product

Task 2A: 
  (Ryan Hamblins Codesandbox: https://codesandbox.io/s/kitty-fahcts-forked-jzzel)
  - [x] Build a React Redux app
    - [x] Create store
      - [x] Wrap App with Provider and pass store

    - [x] Build Component
      - [x] Connect state with "Connect" and "mapStateToProps" 
        - [x] Create actions file with actions
        - [x] Pass action through connect
        - [x] Route state and actions through props to components (from connect)

    - [x] Middleware
    - [x] Thunk

    - Future workflow: 
        base component
        reducer
        actions
        hoc components

Task 2B: 
  - [x] Fetch data inside an async action creator from an API of your choosing
    - https://documenter.getpostman.com/view/10808728/SzS8rjbc
    - https://official-joke-api.appspot.com/jokes/ten

Task 2C; 
  - [x] Add the data from the API to the Redux store
Task 2D; 
  - [x] Display the data from the store in a component
Task 2E; 
  - [x] _Some_ styling must be applied. It can be basic, but the app must not only use browser default stylings

----------------------------------------------------------------------------------------------------------------------------------------------------------------

### Task 3: Exit Ticket 

- [x] Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/LsYPZfuJtZMmcYg9a/fs3PghBeYnx3L8).

The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 4: Stretch Problems

Take the app as far as you can go! Styling, redux hooks, another API, an input to fetch data dynamically, etc. Work on it, improve it until the end of the day. If you find yourself finishing with time left to spare, jump on with your TL or fellow student to ask them what feature they think you should build next. Good luck!

## Task 5: Submission Format
* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
* [ ] Fill out your module retrospective form [here](https://forms.lambdaschool.com/module-retrospective) with a link to your PR


