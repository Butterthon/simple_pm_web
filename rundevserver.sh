if [[ ! -e /simple_pm_web/yarn.lock ]]; then
  yarn install
fi
yarn start
