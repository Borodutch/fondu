export interface DeployData extends ServerResponse {
  signer: string
}

export interface ServerResponse {
  abi: string
  bytecode: { object: string }
  contract: string
}

export interface DeployedContract {
  contractAddress: string
  from: string
}
