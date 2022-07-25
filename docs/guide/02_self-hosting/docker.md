---
sidebar_position: 1
---

# Docker
Docker is the easiest way to get started with the self-hosted version of Lago.

## Requirements
1. Install [Docker](https://docs.docker.com/get-docker/) on your machine;
2. Make sure [Docker Compose](https://docs.docker.com/compose/install/) is installed and available (it should be the case if you have chosen to install Docker via Docker Desktop); and
3. Make sure [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is installed on your machine.

## Run the app
To start using Lago, run the following commands in a shell:

```bash
# Get the code
git clone https://github.com/getlago/lago.git

# Go to Lago folder
cd lago

# Set up environment configuration
echo "LAGO_RSA_PRIVATE_KEY=\"`openssl genrsa 2048 | base64`\"" >> .env
source .env

# Start
docker-compose up
```

You can now open your browser and go to [http://localhost](http://localhost) to connect to the application. Lago's API is exposed at [http://localhost:3000](http://localhost:3000).

## Find your API Key
Your API Key can be found directly in the UI:
1. Access the **Developer** section from the sidebar;
2. The first tab of this section is related to your **API keys**; and
3. Click the **Copy** button to copy it to clipboard.

## Configuration

### Version

Docker images are always updated to the last stable version in the `docker-compose.yml` file.
You can use a different tag if needed by checking the [releases list](https://github.com/getlago/lago/releases).

:::caution
We recommend to avoid the usage of `latest` tag, you should use the last tagged version, you can track what are the last version on Dockerhub
- lago-api : https://hub.docker.com/repository/docker/getlago/api
- lago-front : https://hub.docker.com/repository/docker/getlago/front
:::

### Environment variables

Lago uses the following environment variables to configure the components of the application. You can override them to customise your setup.

| Variable | Default value | Description |
|--|--|--|
| POSTGRES_HOST | db | Host name of the postgres server |
| POSTGRES_DB | lago | Name of the postgres database |
| POSTGRES_USER | lago | Database user for postgres connection |
| POSTGRES_PASSWORD | changeme | Database password for postgres connection |
| POSTGRES_PORT | 5432 | Port the postgres database listens to |
| REDIS_HOST | redis | Host name of the redis server |
| REDIS_PORT | 6379 | Port the redis database listens to |
| LAGO_REDIS_CACHE_HOST | redis | Host name of the redis cache server |
| LAGO_REDIS_CACHE_PORT | 6379 | Port the redis cache server listens to |
| LAGO_FRONT_URL | http://localhost | URL of the Lago front-end application.<br/>Used for CORS configuration |
| FRONT_PORT | 80 | Port the front-end application listens to |
| LAGO_API_URL | http://localhost:3000 | URL of the Lago back-end application |
| API_PORT | 3000 | Port the back-end application listens to |
| SECRET_KEY_BASE | your-secret-key-base-hex-64 | Secret key used for session encryption |
| SENTRY_DSN | | Sentry DSN key for error and performance tracking |
| LAGO_RSA_PRIVATE_KEY | | Private key used for webhook signatures |
| LAGO_SIDEKIQ_WEB | | Activate the Sidekiq web UI, disabled by default |
| LAGO_ENCRYPTION_PRIMARY_KEY | | Encryption primary key used to secure sensitive values stored in the database |
| LAGO_ENCRYPTION_DETERMINISTIC_KEY | | Encryption deterministic key used to secure sensitive values stored in the database |
| LAGO_ENCRYPTION_KEY_DERIVATION_SALT | | Encryption key salt used to secure sensitive values stored in the database |
| LAGO_WEBHOOK_ATTEMPTS | 3 | Number of failed attempt before stopping to deliver a webhook |
| LAGO_USE_AWS_S3 | | Use AWS S3 for files storage |
| LAGO_AWS_S3_ACCESS_KEY_ID | | AWS Access Key id that has access to S3 |
| LAGO_AWS_S3_SECRET_ACCESS_KEY | | AWS Secret Access Key that has access to S3 |
| LAGO_AWS_S3_REGION | | AWS S3 Region |
| LAGO_AWS_S3_BUCKET | | AWS S3 Bucket name |
| LAGO_PDF_URL | http://pdf:3000 | PDF Service URL on your infrastructure |
| LAGO_DISABLE_SIGNUP | | Disable Sign up when running Lago in self-hosted |

:::caution
We recommend that you change `POSTGRES_PASSWORD`, `SECRET_KEY_BASE`, `LAGO_RSA_PRIVATE_KEY`, `LAGO_ENCRYPTION_PRIMARY_KEY`, `LAGO_ENCRYPTION_DETERMINISTIC_KEY` and `LAGO_ENCRYPTION_KEY_DERIVATION_SALT` to improve the security of your Lago instance:

- `SECRET_KEY_BASE` can be generated using the `openssl rand -hex 64` command.
- `LAGO_RSA_PRIVATE_KEY` can be generated using the `openssl genrsa 2048 | base64` command.
- `LAGO_ENCRYPTION_PRIMARY_KEY`, `LAGO_ENCRYPTION_DETERMINISTIC_KEY` and `LAGO_ENCRYPTION_KEY_DERIVATION_SALT` can all be gerated using the `cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1` command.

:::

### Components

Lago uses the following containers:

| Container | Role |
|--|--|
| front | Front-end application |
| api | API back-end application |
| api_worker | Asynchronous worker for the API application |
| api_clock | Clock worker for the API application |
| db | Postgres database engine used to store application data |
| redis | Redis database engine used as a queuing system for asynchronous tasks |
| pdf | PDF generation powered by Gotenberg |

You can also use your own database or Redis server. To do so, remove the `db` and `redis` configurations from the `docker-compose.yml` file and update the environment variables accordingly.
