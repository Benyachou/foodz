rm -rf node_modules
rm pnpm-lock.yaml
npm cache clear --force
pnpm install
killall -9 node # kill all node processes