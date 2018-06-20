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
    this.symbol = symbol || 'MYT'
    this.decimals = decimals || 18
    this.rate = rate || 250
    this.wallet = wallet || '0x0'
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
        
        // Generate zip
        var zip = new JSZip();
        zip.file('Token.sol', token)
        zip.file('Crowdsale.sol', crowdsale)
        zip.file('1_initial_migration.js', migration)
        
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
    return result
  }

  /**
   * Function to get crowdsale options statements
   */
  getContractOptions() {
    let result = ''
    if (this.contractOptions.includes(ContractOptions.Timed))
      result = `${result}, TimedCrowdsale`
    return result
  }

  /**
   * Function to get crowdsale options params
   */
  getContractParams() {
    let result = ''
    if (this.contractOptions.includes(ContractOptions.Timed))
      result = `${result},\n    uint256 _openingTime,\n    uint256 _closingTime`
    return result
  }

  /**
   * Function to get crowdsale constructors
   */
  getContractConstructors() {
    let result = ''
    if (this.contractOptions.includes(ContractOptions.Timed))
      result = `${result}\n    TimedCrowdsale(_openingTime, _closingTime)`
    return result
  }

  /**
   * Function to get modified migration file
   */
  getMigration() {
    return axios.get('contract-builder/template/migrations/1_initial_migration.js')
      .then((response) => {
        return response.data
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
      result = `${result}\n    const openingTime = (new Date(${options[0]})).getTime/1000;\n    const closingTime = (new Date(${options[1]})).getTime/1000;`
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
    return result
  }
}