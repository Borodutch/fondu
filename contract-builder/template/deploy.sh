#!/bin/bash

# Get options
testrpc=true
staging=false
release=false
while getopts 'tsr' flag; do
  case "${flag}" in
    s) staging=true ;;
    r) release=true ;;
  esac
done
if [ "$staging" = true ]; then
  echo 'Trying to deploy contract to the test Ethereum blockchain...'
elif [ "$release" = true ]; then
  echo '[Warning!] Trying to deploy contract to the real Ethereum blockchain...'
else
  echo 'Trying to deploy contract to the local test Ethereum blockchain (testrpc)...'
fi

# Install Node
if ! which node >/dev/null; then
  case "$OSTYPE" in
    linux*)
      echo "OS detected: Linux / WSL, installing Node" 
      curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
      sudo apt-get install -y nodejs
      sudo apt-get install -y build-essential
      echo "Installing geth"
      sudo apt-get install software-properties-common
      sudo add-apt-repository -y ppa:ethereum/ethereum
      sudo apt-get update
      sudo apt-get install ethereum
      ;;
    darwin*)
      echo "OS detected: Mac OS, installing homebrew" 
      /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      echo "Installing node"
      brew install node
      echo "Installing geth"
      brew tap ethereum/ethereum
      brew install ethereum
      ;;
    *)
      echo "Unknown OS (not ubuntu or macos), aborting. Please, look into deploy.sh and figure out what to do on your own. Sorry."
      exit 1
      ;;
  esac
fi

# Install geth
if [ "$staging" = true ] || [ "$release" = true ]; then
  if ! which node >/dev/null; then
    echo "Installing geth"
    case "$OSTYPE" in
      linux*)
        sudo apt-get install software-properties-common
        sudo add-apt-repository -y ppa:ethereum/ethereum
        sudo apt-get update
        sudo apt-get install ethereum
        ;;
      darwin*)
        brew tap ethereum/ethereum
        brew install ethereum
        ;;
    esac
  fi
fi

# Install testrpc
if [ "$staging" != true ] && [ "$release" != true ]; then
  if ! which testrpc >/dev/null; then
    echo "Installing testrpc"
    npm install -g ethereumjs-testrpc
  fi
fi

# Install truffle
if ! which truffle >/dev/null; then
  npm install -g truffle
fi

# Kill any geth or testrpc running
pkill -f testrpc
pkill -f geth

# Run geth or testrpc or geth in the background
if [ "$staging" = true ]; then
  geth --testnet --rpc --rpcapi="db,eth,net,web3,personal,web3" --light &
elif [ "$release" = true ]; then
  geth --rpc --rpcapi="db,eth,net,web3,personal,web3" --light &
else
  testrpc &
fi

# Install node packages
npm i

# Wait till everything is in sync on test and\or main blockchain
if [ "$staging" = true ] || [ "$release" = true ]; then
  echo "Waiting 60 seconds for the blockchain to sync with the --light flag"
fi

# Deploy contracts
if [ "$staging" = true ] || [ "$release" = true ]; then
  echo "Deploying contracts to geth isn't done yet..."
else
  echo 'Deploying contracts to rpc...'
  truffle migrate --reset
fi