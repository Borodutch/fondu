var app = new Vue({
  el: '#contract-constructor',
  data: {
    name: '',
    symbol: '',
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
  created: function() {
    const contructConstructor = new ContractConstructor();
    contructConstructor.getCodeText()
      .then(res => this.code = res)
  }
})