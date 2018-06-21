const ContractOptions = {
  Timed: 'Timed', // TimedCrowdsale: openingTime, closingTime
  Refundable: 'Refundable', // RefundableCrowdsale: goal
  IncreasingPrice: 'IncreasingPrice', // IncreasingPriceCrowdsale: initialRate, finalRate
  Capped: 'Capped', // CappedCrowdsale: cap
  Whitelisted: 'Whitelisted', // Whitelisted
}

class ContractConstructor {
  /**
   * Constructor method for the ContractConstructor
   * @param {[ContractOptions]} contractOptions Options for this contract — should not contain duplicates
   * @param {[[any]]} contractParams list of lists of params per each contractOption
   */
  constructor(name, symbol, decimals, rate, wallet, contractOptions, contractParams) {
    this.name = name || 'My Token'
    this.symbol = (symbol || 'MYT').toUpperCase()
    this.decimals = decimals || 18
    this.rate = rate || 250
    this.wallet = wallet || '0x281055afc982d96fab65b3a49cac8b878184cb16'
    this.contractOptions = contractOptions || []
    this.contractParams = contractParams || []
  }

  /**
   * Method to get a zip file with the contract code
   * @return zip file with all the required code
   */
  getCode() {
    let token = ''
    let crowdsale = ''
    let migration = ''
    let deploy = ''
    let packageLock = ''
    let packageFile = ''
    let truffleConfig = ''
    let truffle = ''
    let migrations = ''
    return this.getToken()
      .then((response) => {
        token = response;
        return this.getCrowdsale()
      })
      .then((response) => {
        crowdsale = response;
        return this.getMigration()
      })
      .then((response) => {
        migration = response;
        return axios.get('contract-builder/template/deploy.sh', { responseType: "blob" })
      })
      .then((response) => {
        deploy = response.data
        return axios.get('contract-builder/template/package-lock.json', { responseType: "blob" })
      })
      .then((response) => {
        packageLock = response.data
        return axios.get('contract-builder/template/package.json', { responseType: "blob" })
      })
      .then((response) => {
        packageFile = response.data
        return axios.get('contract-builder/template/truffle-config.js', { responseType: "blob" })
      })
      .then((response) => {
        truffleConfig = response.data
        return axios.get('contract-builder/template/truffle.js', { responseType: "blob" })
      })
      .then((response) => {
        truffle = response.data
        return axios.get('contract-builder/template/contracts/Migrations.sol', { responseType: "blob" })
      })
      .then((response) => {
        migrations = response.data
        // Generate zip
        var zip = new JSZip();
        // Get generated files
        zip.file(`contracts/${this.symbol}Token.sol`, token)
        zip.file(`contracts/${this.symbol}Crowdsale.sol`, crowdsale)
        zip.file('migrations/1_initial_migration.js', migration)
        // Add dummy migration to silence truffle error
        zip.file('contracts/Migrations.sol', migrations)
        // Get template files
        zip.file('deploy.sh', deploy)
        zip.file('package-lock.json', packageLock)
        zip.file('package.json', packageFile)
        zip.file('truffle-config.js', truffleConfig)
        zip.file('truffle.js', truffle)
        
        // Return data
        return zip.generateAsync({ type: "blob" });
      })
  }

  /**
   * Method to get a string representaion of Token.sol, Crowdsale.sol and migrations.js
   * @return same contracts as getCode() but as one string for a visual representation
   */
  getCodeText() {
    let token = ''
    let crowdsale = ''
    let migration = ''
    return this.getToken()
      .then((response) => {
        token = response;
        return this.getCrowdsale()
      })
      .then((response) => {
        crowdsale = response;
        return this.getMigration()
      })
      .then((response) => {
        migration = response;

        return `### Token.sol\n\n${token}\n\n### Crodwsale.sol\n\n${crowdsale}\n\n### 1_initial_migration.js\n\n${migration}`
      })
  }

  /**
   * Function to get modified token file
   */
  getToken() {
    return axios.get('contract-builder/template/contracts/Token.sol')
      .then((response) => {
        return response.data
          .replace(/{{symbol}}/g, this.symbol)
          .replace(/{{name}}/g, this.name)
          .replace(/{{decimals}}/g, this.decimals)
      })
  }

  /**
   * Function to get modified token file
   */
  getCrowdsale() {
    return axios.get('contract-builder/template/contracts/Crowdsale.sol')
      .then((response) => {
        return response.data
          .replace(/{{symbol}}/g, this.symbol)
          .replace(/{{contractImports}}/g, this.getContractImports())
          .replace(/{{contractOptions}}/g, this.getContractOptions())
          .replace(/{{contractParams}}/g, this.getContractParams())
          .replace(/{{contractConstructors}}/g, this.getContractConstructors())
      })
  }

  /**
   * Function to get crowdsale import statements
   */
  getContractImports() {
    let result = ''
    if (this.contractOptions.includes(ContractOptions.Timed))
      result = `${result}\nimport "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";`
    if (this.contractOptions.includes(ContractOptions.Refundable))
      result = `${result}\nimport "../node_modules/openzeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol";`
    if (this.contractOptions.includes(ContractOptions.IncreasingPrice))
      result = `${result}\nimport "../node_modules/openzeppelin-solidity/contracts/crowdsale/price/IncreasingPriceCrowdsale.sol";`
    if (this.contractOptions.includes(ContractOptions.Capped))
      result = `${result}\nimport "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";`
    if (this.contractOptions.includes(ContractOptions.Whitelisted))
      result = `${result}\nimport "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/WhitelistedCrowdsale.sol";`
    return result
  }

  /**
   * Function to get crowdsale options statements
   */
  getContractOptions() {
    let result = ''
    if (this.contractOptions.includes(ContractOptions.Timed))
      result = `${result}, TimedCrowdsale`
    if (this.contractOptions.includes(ContractOptions.Refundable))
      result = `${result}, RefundableCrowdsale`
    if (this.contractOptions.includes(ContractOptions.IncreasingPrice))
      result = `${result}, IncreasingPriceCrowdsale`
    if (this.contractOptions.includes(ContractOptions.Capped))
      result = `${result}, CappedCrowdsale`
    if (this.contractOptions.includes(ContractOptions.Whitelisted))
      result = `${result}, WhitelistedCrowdsale`
    return result
  }

  /**
   * Function to get crowdsale options params
   */
  getContractParams() {
    let result = ''
    if (this.contractOptions.includes(ContractOptions.Timed))
      result = `${result},\n    uint256 _openingTime,\n    uint256 _closingTime`
    if (this.contractOptions.includes(ContractOptions.Refundable))
      result = `${result},\n    uint256 _goal`
    if (this.contractOptions.includes(ContractOptions.IncreasingPrice))
      result = `${result},\n    uint256 _initialRate,\n    uint256 _finalRate`
    if (this.contractOptions.includes(ContractOptions.Capped))
      result = `${result},\n    uint256 _cap`
    return result
  }

  /**
   * Function to get crowdsale constructors
   */
  getContractConstructors() {
    let result = ''
    if (this.contractOptions.includes(ContractOptions.Timed))
      result = `${result}\n    TimedCrowdsale(_openingTime, _closingTime)`
    if (this.contractOptions.includes(ContractOptions.Refundable))
      result = `${result}\n    RefundableCrowdsale(_goal)`
    if (this.contractOptions.includes(ContractOptions.IncreasingPrice))
      result = `${result}\n    IncreasingPriceCrowdsale(_initialRate, _finalRate)`
    if (this.contractOptions.includes(ContractOptions.Capped))
      result = `${result}\n    CappedCrowdsale(_cap)`
    return result
  }

  /**
   * Function to get modified migration file
   */
  getMigration() {
    return axios.get('contract-builder/template/migrations/1_initial_migration.js')
      .then((response) => {
        return response.data
          .replace(/{{symbol}}/g, this.symbol)
          .replace(/{{rate}}/g, this.rate)
          .replace(/{{wallet}}/g, this.wallet)
          .replace(/{{migrationConstants}}/g, this.getMigrationConstants())
          .replace(/{{migrationConstructorParams}}/g, this.getMigrationConstructorParams())
      })
  }

  /**
   * Function to get migration constants
   */
  getMigrationConstants() {
    let result = ''
    if (this.contractOptions.includes(ContractOptions.Timed)) {
      const options = this.contractParams[this.contractOptions.indexOf(ContractOptions.Timed)];
      result = `${result}\n    const openingTime = (new Date(${options[0] || '2024, 04, 07'})).getTime/1000;\n    const closingTime = (new Date(${options[1] || '2025, 04, 07'})).getTime/1000;`
    }
    if (this.contractOptions.includes(ContractOptions.Refundable)) {
      const options = this.contractParams[this.contractOptions.indexOf(ContractOptions.Refundable)];
      result = `${result}\n    const goal = ${options[0] || 1000};`
    }
    if (this.contractOptions.includes(ContractOptions.IncreasingPrice)) {
      const options = this.contractParams[this.contractOptions.indexOf(ContractOptions.IncreasingPrice)];
      result = `${result}\n    const initialRate = ${options[0] || 500};\n    const finalRate = ${options[1] || 250};`
    }
    if (this.contractOptions.includes(ContractOptions.Capped)) {
      const options = this.contractParams[this.contractOptions.indexOf(ContractOptions.Capped)];
      result = `${result}\n    const cap = ${options[0] || 1000000};`
    }
    return result
  }

  /**
   * Function to get migration constructor params
   */
  getMigrationConstructorParams() {
    let result = ''
    if (this.contractOptions.includes(ContractOptions.Timed)) 
      result = `${result}\n                openingTime,\n                closingTime,`
    if (this.contractOptions.includes(ContractOptions.Refundable))
      result = `${result}\n                goal,`
    if (this.contractOptions.includes(ContractOptions.IncreasingPrice))
      result = `${result}\n                initialRate,\n                finalRate,`
    if (this.contractOptions.includes(ContractOptions.Capped))
      result = `${result}\n                cap,`
    return result
  }
}