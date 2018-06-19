var JSZip = require("jszip");

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
    this.name = name
    this.symbol = symbol
    this.decimals = decimals
    this.rate = rate
    this.wallet = wallet
    this.contractOptions = contractOptions
    this.contractParams = contractParams
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

        // Generate zip
        var zip = new JSZip();
        zip.file('Token.sol', token)
        zip.file('Crowdsale.sol', crowdsale)
        zip.file('1_initial_migration.js', migration)
        
        // Return data
        return zip.generateAsync({ type:"base64" });
      })
  }

  /**
   * Function to get modified token file
   */
  getToken() {
    return axios.get('contract-builder/template/contracts/Token.sol')
      .then((response) => {
        return response.data
      })
  }

  /**
   * Function to get modified token file
   */
  getCrowdsale() {
    return axios.get('contract-builder/template/contracts/Crowdsale.sol')
      .then((response) => {
        return response.data
      })
  }

  /**
   * Function to get modified migration file
   */
  getMigration() {
    return axios.get('contract-builder/template/migrations/1_initial_migration.js')
      .then((response) => {
        return response.data
      })
  }
}