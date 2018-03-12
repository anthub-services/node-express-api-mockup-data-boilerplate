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

| Command                                | Description                                                            |
|----------------------------------------|------------------------------------------------------------------------|
| `./bin/install`                        | Build the Docker container and start the app                           |
| `./bin/reinstall`                      | Rebuild the Docker container with the current branch and start the app |
| `./bin/start`                          | Start the service                                                      |
| `./bin/stop`                           | Stop the service                                                       |
| `./bin/console <container ID or Name>` | Access the terminal console of the API container                       |

## Users

Use the following credentials to test different API responses. Default password for all accounts is `password`.

| Name              | Email                  | Description |
|-------------------|------------------------|-------------|
| Super Admin User  | `superadmin@email.com` | Has wildcard access |
| Admin User        | `admin@email.com`      | Has wildcard access but `Admin › Users › Delete` is excluded |
| Common User       | `user@email.com`       | Can access `My Profile`, `Admin › Dashboard`, `Users`, `Users › View, and Settings` |
| Referrer User     | `referrer@email.com`   | When `redirect` is set without the domain, e.i. `/admin/dashboard`, user shall be redirected to internal page if no location path (referrer) found on the Sign In page |
| Redirect User     | `redirect@email.com`   | When `redirect` is set with complete URL, e.i. `https://github.com/anthub-services`, user shall be redirected to external page if no location path (referrer) found on the Sign In page |
| Blocked User      | `blocked@email.com`    | User is signed in but the account is blocked |
| Unauthorized User | `<any invalid email>`  | Simply enter wrong `email` and/or `password` |

## Docker Boilerplates

The following boilerplates can be used to install and run the API and client boilerplates in a Docker container.

[Docker for Node API Mockup Data and Client Boilerplates](https://github.com/anthub-services/docker-for-node-api-mockup-data-and-client-boilerplates)
<br />
[Docker for Node API and Client Boilerplates](https://github.com/anthub-services/docker-for-node-api-and-client-boilerplates)
<br />
[Docker for Rails API and Client Boilerplates](https://github.com/anthub-services/docker-for-rails-api-and-client-boilerplates)
