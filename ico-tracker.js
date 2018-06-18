var erc20Abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  }
];

var app = new Vue({
  el: '#ico-tracker',
  data: {
    totalSupply: 0,
    ethPrice: 0,
    error: '',
  },
  computed: {
    progress: function() {
      if (this.error) return this.error;
      if (!this.totalSupply || !this.ethPrice) return 'Loading...';

      var eth = this.totalSupply / 250;
      var usd = eth * this.ethPrice;
      var percentage = usd / 250000 * 100;
      var n = Math.floor(percentage / 5);
      var temp = '';
      for (var i = 0; i < n; i++) {
        temp = temp + '■';
      }
      for (var i = n; i < 20; i++) {
        temp = temp + '☐';
      }
      return '[' + temp + '] ' + percentage.toFixed(2) + '% to $250,000';
    },
    raised: function() {
      if (this.error) return 'Please, reload the page to see ICO stats';
      if (!this.totalSupply || !this.ethPrice) return '';

      return 'Raised: ' + (this.totalSupply / 250) + ' ETH ($' + (this.totalSupply / 250 * this.ethPrice).toFixed(2) + ' or ' + this.totalSupply + ' FDU)'
    }
  },
  created: function() {
    try {
      var provider = new Web3.providers.HttpProvider('https://api.myetherapi.com/eth');
      provider.sendAsync = provider.send;
      var web3 = new Web3(provider);
    } catch (err) {
      this.error = err.message;
      return;
    }
    // Fetch total supply
    var token = web3.eth.contract(erc20Abi).at('0x176afbcd4cf9fb7c41ecf5ec0267b87f018f12f8');
    this.totalSupply = token.totalSupply().dividedBy('1000000000000000000').toNumber();
    // Fetch eth price
    axios.get('https://api.coinmarketcap.com/v2/ticker/1027/')
      .then(function(response) {
        this.ethPrice = response.data.data.quotes.USD.price;
      }.bind(this))
      .catch(function(err) {
        this.error = err.message;
      });
  }
})