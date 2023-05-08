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