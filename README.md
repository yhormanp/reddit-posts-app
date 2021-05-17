# REDDIT POSTS APP

application created using create-react-app and redux to list the first 50 posts from https://www.reddit.com/top.json. There are a few actiosn implemented to validate the read status from each posts, dismiss a post and dismiss all posts.  Split layout was implemented to separate the posts and it's details, included responsive designs

# STRUCTURE
Based on Redux, I created several folders that will contain each important component of Redux like
- Store: Where the initial store is configured
- Actions: Where the actions definitions and the action types are defined
- Reducers: where the combine reducers is implemented and it's respective reducer to execute the process of each action . Actions implemented in the reducer
 * 'DISSMISS_POST': triggered when the user clicked on the acton "dismiss post" on each post.
 * 'DISSMISS_ALL_POSTS': triggered when the user clicked on the bottom button of "Dismiss all posts"
 * 'UPDATE_CURRENT_PAGE_INDEX': update the state of the current page visisted.
 * "FETCH_POSTS": triggered automatically to obtain the list of 50 posts.
 * 'UPDATE_UNREAD_STATUS': every time the user clicked a post , the unread status will be udpated.
 
- Containers: Where the main component to list the posts is created and the state and actions are mapped to props to manage every action trigger in the inner components.
- Services: A service created to get all the 50 posts from  https://www.reddit.com/top.json
- Components: all the Components used in the react application to interact with the posts obtained and trigger the necessary action when it's required.

- Index.js: where the initial configuration of the store is implemented and passed through the Dashboard componentn using the store property and used after this with the Provider of React Redux







!IMPORTANT:
Css-transition-group is used to give the animation effect, but due to some issues with the  animation on each post, I just decided to remove it. For now no animation was implemented.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
