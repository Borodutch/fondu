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
    refundable: upd,
    goal: upd,
    increasingPrice: upd,
    startRate: upd,
    endRate: upd,
    capped: upd,
    cap: upd,
    whitelisted: upd,
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
      const contructConstructor =
        new ContractConstructor(
          this.name,
          this.symbol,
          this.decimals,
          this.rate,
          this.wallet,
          this.getContractOptions(),
          this.getContractParams());
      contructConstructor.getCode()
        .then(res => saveAs(res, 'code.zip'))
    },
    getContractOptions: function() {
      const options = []
      if (this.timed) {
        options.push(ContractOptions.Timed)
        if (this.refundable) options.push(ContractOptions.Refundable)
        if (this.increasingPrice) options.push(ContractOptions.IncreasingPrice)
      }
      if (this.capped) {
        options.push(ContractOptions.Capped)
      }
      if (this.whitelisted) {
        options.push(ContractOptions.Whitelisted)
      }
      return options
    },
    getContractParams: function() {
      const params = []
      if (this.timed) {
        params.push([this.startDate, this.endDate])
        if (this.refundable) params.push([this.goal])
        if (this.increasingPrice) params.push([this.startRate, this.endRate])
      }
      if (this.capped) {
        params.push([this.cap])
      }
      if (this.whitelisted) {
        params.push([])
      }
      return params
    }
  },
})