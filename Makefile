DEV_COMPOSE_FILE = docker/compose.dev.yml
TEST_COMPOSE_FILE = docker/compose.test.yml
PROD_COMPOSE_FILE = docker/compose.prod.yml

dev-build: 
	docker compose -f ${DEV_COMPOSE_FILE} --env-file .env.development build --no-cache 

dev-start: 
	docker compose -f ${DEV_COMPOSE_FILE} --env-file .env.development up --force-recreate

dev-stop: 
	docker compose -f ${DEV_COMPOSE_FILE} --env-file .env.development down

dev-restart: 
	docker compose -f ${DEV_COMPOSE_FILE} --env-file .env.development restart
