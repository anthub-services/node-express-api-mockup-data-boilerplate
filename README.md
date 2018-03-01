# Node Express API Mockup Data Boilerplate
This project is based on the
[Node API and Client Boilerplate](https://github.com/anthub-services/node-api-and-client-boilerplate).
Required node version is `9.2.1`.
The API app is powered by [Express](https://expressjs.com/)
and as API service for the [Create React App Boilerplate](https://github.com/anthub-services/create-react-app-boilerplate).

## Other API App Boilerplate

- [Node Express API Boilerplate](https://github.com/anthub-services/node-express-api-boilerplate) –
 API server powered by [Express](https://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/) database

## Starting the App

Copy `.env.dist` to `.env` and change the values of the environment variables if needed.

```
PORT=7770
ALLOW_ORIGIN=http://localhost:7771
JWT_SECRET=jwtsecretcode
```

Then run the following commands:

```
yarn
yarn start
```

Access the app at <http://localhost:7770>.

## Docker

Download and install the [Docker Community Edition](https://www.docker.com/community-edition).

## Bash Commands

On the `root` directory of the project, run the following commands:

Note: To view the Docker containers, open another terminal then enter `docker ps`.
To manage separate Docker instance for API, open another terminal console and run the commands below.

### Docker

| Command                                | Description                                      |
|----------------------------------------|--------------------------------------------------|
| `./bin/install`                        | Build the Docker container                       |
| `./bin/start`                          | Start the service                                |
| `./bin/stop`                           | Stop the service                                 |
| `./bin/console <container ID or Name>` | Access the terminal console of the API container |

## Users

Use the following credentials to test different API responses. Default password for all accounts is `password`.

- **Admin User:** `admin@email.com` - can access all applications
- **Admin User witout Settings page:** `admin_no_settings@email.com` - no access on admin Settings page
- **User redirected to internal page:** `referrer@email.com` – when `redirect.url` is set without the domain,
user shall be redirected to internal page if no location path (referrer) found on the Sign In page
- **User redirected to external page:** `redirect@email.com` – when `redirect.external` and `redirect.url` are set,
user shall be redirected to external page if no location path (referrer) found on the Sign In page
- **Blocked User:** `blocked@email.com` – user is signed in but the account is blocked
- **Unauthorized User:** simply enter wrong `email` and/or `password`
