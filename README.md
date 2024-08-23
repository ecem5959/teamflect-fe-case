# Goal CRUD Application Coding Challenge

Welcome to the Goal CRUD Application coding challenge! The objective of this
challenge is to create a goal management application with the following features
and requirements.

## Requirements

### Functional Requirements

1. **Goal Management:**

   - **Create Goal:**
     - Form fields: Title (required), Description, Goal Owner, Start Date, End
       Date, Parent Goal (optional).
     - Use the provided `POST /goals` endpoint to create a goal.
   - **View Goals:**
     - Display a list of all goals.
     - Implement a tree view where users can drag and drop to change the parent
       goal without opening an edit modal.
     - Show goal details including title, description, goal owner, start date,
       end date, parent goal.
     - Use the provided `GET /goals` endpoint to fetch goals.
   - **Update Goal:**
     - Update the details of a goal (title, description, goal owner, start date,
       end date, parent goal).
     - Ensure the goal progress edit UX is intuitive and user-friendly.
     - Use the provided `PUT /goals/:id` endpoint to update a goal.
   - **Delete Goal:**
     - Remove a goal.
     - Use the provided `DELETE /goals/:id` endpoint to delete a goal.

2. **User Management:**
   - **Get Users:**
     - Fetch the list of users to select a goal owner.
     - Use the provided `GET /users` endpoint to fetch users.

### Non-Functional Requirements

1. **Responsive UI:**

   - Ensure the application is responsive and works well on various screen
     sizes.

2. **Animations:**

   - Include smooth and user-friendly animations for UI interactions.

3. **Caching:**
   - Implement caching where appropriate to improve performance.

## Getting Started

### Prerequisites

- Node.js
- npm/yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/teamflect/teamflect-fe-case.git
   ```
2. Navigate to the project directory:
   ```sh
   cd teamflect-fe-case
   ```

### Running the JSON Server

1. Navigate to the server directory:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the JSON server:
   ```sh
   npm start
   ```

### Example Folder Structure

```
teamflect-fe-case/
├── public/
├── server/
│   ├── db.json
│   └── package.json
├── src/
│   ├── components/
│   │   ├── GoalForm.js
│   │   ├── GoalList.js
│   │   └── GoalDetails.js
│   ├── pages/
│   │   ├── GoalPage.js
│   │   └── GoalDetailPage.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── ... other files
```

## API Endpoints

- **POST /goals**
  - Create a new goal.
- **GET /goals**
  - Get a list of all goals.
- **PUT /goals/:id**
  - Update a goal.
- **DELETE /goals/:id**
  - Delete a goal.
- **GET /users**
  - Get a list of all users.

## Evaluation Criteria

- Code quality and organization.
- Proper usage of React and state management.
- Implementation of animations and responsive design.
- Effective use of caching.
- Intuitive and user-friendly goal progress edit UX.
- Correct display of goal progress (start value, target value, and current
  progress).
- Implementation of drag-and-drop functionality in the tree view.

## Submission

- Fork this repository into your own account and complete the challenge.
- Push your solution to the forked repository and send us the repository link.

## Bonus Points

- Use of modern React features (e.g., hooks).
- Implementing unit tests.
- Additional UI/UX improvements.

## Design References

- [Prototype](https://www.figma.com/proto/KQ7UOa6ipI2thE6ZTkFQpB/Case-Study?page-id=0%3A1&node-id=5-433&viewport=2158%2C490%2C0.59&t=uWGJEBYrsvKiMbug-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=5%3A433)
- [Empty State](https://www.figma.com/design/KQ7UOa6ipI2thE6ZTkFQpB/Case-Study?node-id=5-433&t=o2ezZ51WFCAf5vDR-1)
- [New Goal Page](https://www.figma.com/design/KQ7UOa6ipI2thE6ZTkFQpB/Case-Study?node-id=1-388&t=o2ezZ51WFCAf5vDR-1)
- [Edit Goal Page](https://www.figma.com/design/KQ7UOa6ipI2thE6ZTkFQpB/Case-Study?node-id=42-947&t=o2ezZ51WFCAf5vDR-1)
- [Goals Page - Tree View](https://www.figma.com/design/KQ7UOa6ipI2thE6ZTkFQpB/Case-Study?node-id=1-219&t=o2ezZ51WFCAf5vDR-1)
- [Goals Page - List View](https://www.figma.com/design/KQ7UOa6ipI2thE6ZTkFQpB/Case-Study?node-id=5-49&t=o2ezZ51WFCAf5vDR-1)

Good luck, and happy coding!
