module.exports = {
  properties: {
    desc: {
      name: 'description: ',
      type: 'string'
    },
    js: {
      name: 'does this component have js? ',
      validator: /y[es]*|n[o]?/i,
      warning: 'Must respond with yes or no',
      default: 'no'
    },
    css: {
      name: 'does this component have css? ',
      validator: /y[es]*|n[o]?/i,
      warning: 'Must respond with yes or no',
      default: 'no'
    },
    html: {
      name: 'does this component have html? ',
      validator: /y[es]*|n[o]?/i,
      warning: 'Must respond with yes or no',
      default: 'no'
    }
  }
}