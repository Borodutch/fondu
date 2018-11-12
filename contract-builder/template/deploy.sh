#!/bin/bash

# Get options
testrpc=true
staging=false
release=false
dry=false

PS3="What blockchain would you like to deploy to?
"
options=("Local blockchain (testrpc)" "Ethereum testnet" "Ethereum mainnet" "Dry run (no deploy)")
select opt in "${options[@]}"
do
  case $opt in
    "Local blockchain (testrpc)")
      echo "Deploying to local staging (testrpc)..."
      break
      ;;
    "Ethereum testnet")
      echo "Deploying contract to the Ethereum testnet blockchain (geth --testnet)..."
      staging=true
      break
      ;;
    "Ethereum mainnet")
      echo "[Warning!] Deploying contract to the Ethereum mainnet blockchain (geth)..."
      release=true
      read -p "Are you sure you want to continue? Any mistakes here can as well result in a monetary loss. We mean real money loss. By continuing you accept that no liability whatsoever can be applied to anybody but yourself. Also, make sure you read through the source code you've just downloaded. Please, also note that this feature is in the beta at the moment. So, again, are you sure you want to continue? (y/n)" choice
      case "$choice" in 
        y|Y ) echo "Alright, let's get to it!";;
        n|N )
          echo "Good choice. Bye."
          exit 1
          ;;
        * ) echo "invalid";;
      esac
      break
      ;;
    "Dry run (no deploy)")
      echo "Generating code without deploying anywhere"
      dry=true
      testrpc=false
      break
      ;;
    *) echo "invalid option $REPLY";;
  esac
done

# Need this to fail the script on error for sure
set -e

# Install Node
echo "Detecting OS version to install node..."
if ! which node > /dev/null; then
  case "$OSTYPE" in
    linux*)
      echo "OS detected: Linux / WSL, installing Node" 
      curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
      sudo apt-get install -y nodejs
      sudo apt-get install -y build-essential
      ;;
    darwin*)
      echo "OS detected: Mac OS, installing homebrew" 
      /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      echo "Installing node"
      brew install node
      ;;
    *)
      echo "Unknown OS (not ubuntu or macos), aborting. Please, look into deploy.sh and figure out what to do on your own. Sorry."
      exit 1
      ;;
  esac
fi

# Install geth or testrpc
echo "Detecting OS version to install geth or testrpc..."
if [ "$staging" = true ] || [ "$release" = true ]; then
  if ! which geth > /dev/null; then
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
elif [ "$testrpc" = true ]; then
  if ! which testrpc > /dev/null; then
    echo "Installing testrpc"
    npm install -g ethereumjs-testrpc
  fi
fi

# Install truffle
echo "Installing Truffle..."
if ! which truffle > /dev/null; then
  npm install -g truffle
fi

# Do the dry run and finish the script
if [ "$dry" = true ]; then
  rm -rf build
  truffle compile
  echo "Success! Your compiled contracts can be found in \"build/contracts\"."
  exit 1
fi

# The rest fails OK
set +e

# Kill any geth or testrpc running
echo "Closing all the geth and testrpc connections..."
pkill -f testrpc
pkill -f geth

# Need this to fail the script on error for sure
set -e

# Abort if geth is running
echo "Checking if shutting down get and testrpc worked..."
if [ "$staging" = true ] || [ "$release" = true ]; then
  if pgrep geth > /dev/null 2>&1
  then
    echo 'Looks like you have got geth running already. Please, close it by running "pkill -f geth"'
    exit 1
  fi
fi

# Run geth or testrpc or geth in the background
echo "Starting Ethereum node..."
if [ "$staging" = true ]; then
  echo "Starting geth --testnet"
  geth --testnet --rpc --rpcapi="db,eth,net,web3,personal,web3" --light --verbosity "0" &
elif [ "$release" = true ]; then
  echo "Starting geth"
  geth --rpc --rpcapi="db,eth,net,web3,personal,web3" --light --verbosity "0" &
else
  echo "Starting testrpc"
  testrpc &
fi

# The rest fails OK
set +e

# Install node packages
echo "Fetching OpenZeppelin contracts"
npm i --quiet

# Wait till everything is in sync on test and\or main blockchain
if [ "$staging" = true ] || [ "$release" = true ]; then
  echo "Waiting 60 seconds for the blockchain to sync with the --light flag. If script fails after this, please, run \"geth\" or \"geth --testnet\" separately in the --light mode and make sure it's in sync"
  sleep 60
fi

# Deploy contracts
if [ "$staging" = true ]; then
  echo "Deploying contacts to geth Ethereum testnet"
# Need this to fail the script on error for sure
set -e
  truffle exec scripts/createTestAccount.js
# The rest fails OK
set +e
  truffle migrate --reset --staging
  # Congratulate
  echo 'Congratulations! Your smart contracts were deployed successfully to the Ethereum Testnet; you can now access the running geth --testnet blockchain by executing "truffle console" command. Thank you!'
elif [ "$release" = true ]; then
  echo "Deploying contacts to geth Ethereum mainnet"
  truffle exec scripts/createRealAccount.js
  truffle migrate --reset --release
  # Congratulate
  echo 'Congratulations! Your smart contracts were deployed successfully to the Ethereum Mainnet; you can now access the running geth blockchain by executing "truffle console" command. Thank you!'
else
  echo 'Deploying contracts to testrpc...'
  truffle migrate --reset
  # Congratulate
  echo 'Congratulations! Your smart contracts were deployed successfully to testrpc; you can now access the running testrpc blockchain by executing "truffle console" command. Thank you!'
fi
