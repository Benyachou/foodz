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

## production
* pnpm run build
* pm2 start --name foodz-app pnpm -- start

## troubleshooting
* lsof -i tcp:{PORT} // check if port is in use
* kill -9 {PID} // kill process
* pkill -f node