
all: build up

up:
	docker compose -f docker-compose.yml up -d

build:
	mkdir -p postgres
	mkdir -p frontend/node_modules/
	docker compose -f docker-compose.yml build

down:
	docker compose -f docker-compose.yml down -v

clean: down 
	docker compose -f docker-compose.yml --rmi all

re: down up
