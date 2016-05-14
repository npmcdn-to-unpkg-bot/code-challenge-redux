## Free-Codesmith

### Dev Setup
- Until a better approach is found, you must have `auth-microservice` running locally in order to login when running a local server
  - this means you need to install DynamoDB on your machine and have a dynamo server instance running, just like if it was Mongo

### Windows Quirks
- To run the `build` script, change `export` to `set`. Remember to change it back before committing.

### Style guide
- Prefer putting business logic in action creators rather than in reducers. See [this discussion](https://github.com/reactjs/redux/issues/1171).
- Follow the provided .eslintrc file's style rules. It's configured with the [Airbnb styleguide](https://github.com/airbnb/javascript) and a few tweaks.
