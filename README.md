# FOODZ

## Requirements
* Node.js = 18.x.x

## Installation
* pnpm install
* cd server
* pnpm install

## Running the app [local]
* pnpm run dev
* cd server
* pnpm run dev

## Running Storybook [local]
* pnpm run storybook

## React UI Library
[flowbite](https://flowbite.com/blocks/)

## production
* pnpm run build
* pm2 start --name foodz-app pnpm -- start

* scp -r data ubuntu@217.182.170.219:/home/ubuntu/www/foodz/source/data

## troubleshooting
* lsof -i tcp:{PORT} // check if port is in use
* kill -9 {PID} // kill process
* pkill -f node

docker-compose -f build
docker-compose up -d

## Ressources

(Scrapping)[https://www.youtube.com/watch?v=qo_fUjb02ns]

//////////////////////////////////////////
certbot:
image: certbot/certbot
entrypoint: "/bin/sh -c 'trap exit TERM; while :; do certbot renew; sleep 12h & wait $${!}; done;'"
volumes:
- ./production/certbot/conf:/etc/letsencrypt
- ./production/certbot/www:/var/www/certbot
//////////////////////////////////////////