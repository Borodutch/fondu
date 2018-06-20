const upd = function() {
  this.updateCode()
}

var app = new Vue({
  el: '#contract-constructor',
  data: {
    name: null,
    symbol: null,
    decimals: null,

    rate: null,
    wallet: '',
    timed: false,
    startDate: null,
    endDate: null,
    refundable: false,
    goal: null,
    increasingPrice: false,
    startRate: null,
    endRate: null,
    capped: false,
    cap: null,
    whitelisted: false,

    supply: null,
    code: 'Loading...'
  },
  created: upd,
  watch: {
    name: upd,
    symbol: upd,
    decimals: upd,
    rate: upd,
    wallet: upd,
    timed: upd,
    startDate: upd,
    endDate: upd,
  },
  methods: {
    updateCode: function() {
      const contructConstructor =
        new ContractConstructor(
          this.name,
          this.symbol,
          this.decimals,
          this.rate,
          this.wallet,
          this.getContractOptions(),
          this.getContractParams());
      contructConstructor.getCodeText()
        .then(res => this.code = res)
    },
    download: function() {
      const contructConstructor = new ContractConstructor();
      contructConstructor.getCode()
        .then(res => saveAs(res, 'code.zip'))
    },
    getContractOptions: function() {
      const options = [];
      if (this.timed) options.push(ContractOptions.Timed)
      return options;
    },
    getContractParams: function() {
      const params = [];
      if (this.timed) params.push([this.startDate, this.endDate])
      console.log(params)
      return params;
    }
  },
})