# [Fondu](https://fondu.io) website code

The whole frontend code of the beloved ETH smart-contract constructor.

## Installation and local launch

1. Clone this repo: `git clone https://github.com/Borodutch/fondu`
2. Launch the [backend](https://github.com/Borodutch/fondu-backend) locally (or connect to https://backend.fondu.io)
3. Create `.env` with the environment variables listed below
4. Run `yarn`
5. Run `yarn start`

## Environment variables

| Name      | Description                 |
| --------- | --------------------------- |
| `BACKEND` | URL of the backend database |

Also, please, consider looking at `.env.sample`.

## Available Scripts

- `yarn start` — runs the app in the development mode
- `yarn build` — builds the app for production to the `docs` folder
- `yarn update` — builds the app and pushes the commit

## Continuous integration

Any commit pushed to `main` with `yarn update` gets deployed to [fondu.io](https://fondu.io).
