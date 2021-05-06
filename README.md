# Quiz App

### How to initialize?

Run `npm i axios sass react-router-dom react-transition-group` to install all dependencies 

### Axios

In the `baseURL` field that is in the file `src/axios/axiosConfig.js`, paste the link to your firebase realtime database

### Firebase

Database scheme: 
```
quizes: {
  [Any key name]: {
    answers: {
      0: id: 1 text: [Any answer]
      1: id: 2 text: [Any answer]
      2: id: 3 text: [Any answer]
      3: id: 4 text: [Any answer]
    }
    id: 1
    question: [Any question]
    rightAnswerId: 1
}
```
