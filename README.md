# jellynettle

## The Assignment
**Parameters**
  * Must use react
  * Must use redux
  * Must be completed in a week
  * Must use some type of auth
  * Is a solo project but must be approved.


### The Database
**1. The Users table**
  * Posts -has many
  * Comments -has many (Future update)
  * Replies -has many (Future update)
  * Friends -has many (A self-referencing many to many relationship with users.)
  * Friend Requests -has many
  * Likes (Future update)
  * images (Future update)
  * Groups -has many
  * Members -has many
  * Group Join Requests -has many
  * GroupPosts -has many
  * GroupComments -has many (Future update)
  * GroupReplies -has many (Future update)


**2. The Posts Comments and Replies Tables**
  * Posts -has many Comments
  * Posts -belongs to Users
  * Comments -has many Replies
  * Comments -belongs to Posts
  * Comments -belongs to Users
  * Replies -belongs to Comments
  * Replies -belongs to Users


**3. The Groups Table, and it's Posts/Comments/Replies/Members/JoinRequests**
  * Group -belongs to User
  * Group Posts -has many Comments
  * Group Posts -belongs to Users
  * Group Posts -belongs to Groups
  * Group Comments -has many Replies
  * Group Comments -belongs to Posts
  * Group Comments -belongs to Users
  * Group Replies -belongs to Comments
  * Group Replies -belongs to Users
  * Members -belongs to Users
  * Members -belongs to Groups
  * Group Requests -belongs to Users
  * Group Requests -belongs to Groups


**4. The Friends and Friend Requests Tables**
  * Friends -has many Users (A self-referencing many to many relationship with users.)
  * Friend Requests -belongs to users

**5. Technologies**
  * PostgreSQL
  * Sequelize

**6. Challenges**
  * Initially I did not want to seperate group posts and posts into separate tables. The issue was that  posts could or could not reference a group, to avoid null values in my database, I created 3 additional tables for group posts, comments and replies.
  * Users needed to reference Friends which needed to reference Users. It was difficult to wrap my head around at first, but proved to be really easy to query on the backend server.


![Image of DB schema](./JellyNettle-1.jpg)

### Server
**1. Technologies**
  * Express.js/async-handler/bearer-token
  * Jsonwebtoken
  * Csurf (Future Update)
  * Per-env
  * Bcrypt
  * Cors
  * Uuid
  * Nodemon
  * Dotenv
  * Dotenv-cli

**2. Challenges**
  * Given the time crunch, I had to work extra hard during the creation of the project. I set myself a large scope and had to narrow it down to the core features necessary for the website.
  * I ended up needing to write quite a lot of routes. Had I been more experienced, I could have better used my redux store to reduce the amount of fetch requests and routers I needed.
  * Auth was not new to me, but I was less experienced with jsonwebtoken than other technologies going into this assignment.

### The UI/UX
**1. Technologies**
  * React
  * Redux
  * Material UI
  * CSS

**2. Users are greeted with a landing page**
  * Users can make use of a restricted top navigation bar.
  * Before logging in, users were given the opportunity to learn about JellyNettle.
  * Sign up page included a community standards pop up.
  * Sign up page was easy to use and included a pop up calendar for inputting their birth date.
  * Sign up page has a dynamically changing error header if a user fails to sign up properly, giving them a clear description of why sign up failed.
  * Login and signup both has links at the bottom, navigating between one another if a user either does not have an account, or already has one.
  * Login has a dynamically changing error header if user fails to login properly, giving them a clear description of why login failed.

**3. Challenges**
  * I was tasked with using React and Redux, technology I had only been introduced to last week. It was difficult to debug given I did not fully understand everything going into the project.
  * It taught me quite a lot about the technologies. Had I knew more about React and Redux, I could have further split components and organized my code better. Things I know now which I can use in the future.
  * The, "About" page rose issues as well. I used a lot of CSS and CSS transitions to make elements slide into view on scroll. React was helpful in allowing me to keep track of the users "Scroll Top," value using React refs and a class component.
  * I ended up using more manual CSS styling than I wanted to. Material UI was helpful in helping me create clean and useful React components, but I found myself wanting to customize those more. To practice, and show knowledge in both Material UI styling and CSS, I used both.

 ### Features
 **1. Users can sign up**
  * Users can customize their account.
  * Write in their own gender identity.
  * Create their own custom username.
  * Alter their personal info at any time.
  * Write their own profile desciptions to introduce themselves.

 **2. Users can find each other and groups**
  * Use the search bar on the top navigation bar to find one another.
  * Use the search bar on the top navigation bar to find groups to join.


 **3. Users can Create posts**
  * Users can create posts, which can only be viewed by their friends.
  * Users can create group posts, which can only be viewed by other group members.

 **4. Users Can join and create groups**
  * Users can meet each other in groups, by looking through the group side bar, which lists the current users in the group.
  * Users can request to join groups.
  * Users can accept or decline join requests.
  * Users can create groups add a group description, and name them.

 **5. Users can add each other as friends**
  * Users can request to be each other's friends.
  * Users can accept or decline a friend request.

  **6. Users recieve notifications**
  * Users recieve notifications on each friend request.
  * Users recieve notifications on each group join request.
  * Users can accept or decline those requests from the notifications pop up.

  **7. The hate speech AI.**
  * A python server was created to house the AI. I have not incorperated this yet, but it's ready to be used in a future update.
