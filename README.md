# Friend Finder

Fill out a simple survey to receive your friend match results.

## Page Load

[Home Page Link](https://friend-finder-firebaugh.herokuapp.com/)

![Home Page Screen Shot](/screen_shots/home.JPG)

User can go ahead and click "Go to Survey" to begin, "API Friends List" to see the current friends list data, or "GitHub Repo" which will bring them here.

## API Friends List

[API Friends List Link](https://friend-finder-firebaugh.herokuapp.com/api/friends)

![API Friends List Sample](/screen_shots/friends_api.JPG)

Above shows the API Friends List link in JSON. In this image some of the initialized friend data has been minimized to highlight data that has been inserted using the hosted survey page.

## Survey

[Survey Page Link](https://friend-finder-firebaugh.herokuapp.com/survey)

![Survey Page Screen Shot](/screen_shots/empty_survey.JPG)

The above image shoes the empty survey that populates on this next page. The user must fill out all of the input fields, as well as answer each of the ten questions, or he/she will receive an alert about this. At the bottom, the user clicks a submit button to see results, depending on their data, such as:

![Example Results](/screen_shots/results.JPG)

### How it Works

Every time a new user fills out the survey, his/her data is stored in the API. Every time a user fills out the survey a calculation is made to compare the responses of the survey to other friends in the API to find his/her best match. Upon clicking submit this best match is displayed for the user in a modal

### Technologies

Bootstrap, jQuery, Node.js, Express.js, body-parser

### Future Development

During original development the focus was learning Express.js, and therefore the front-end of this site has a lot of room for improvement via more styling and personalization. On a similar note, more questions, answer choices, and improved matching logic/technology could be added to improve this application for users to mimic a dating website.
