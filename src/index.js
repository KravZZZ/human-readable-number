module.exports = function toReadable (n) {
    const arr = ['zero', 'one', 'two', 'three', 'four',
      'five','six','seven','eight','nine','ten','eleven',
      'twelve','thirteen','fourteen','fifteen','sixteen',
      'seventeen','eighteen','nineteen','twenty','thirty',
      'forty','fifty','sixty','seventy','eighty','ninety'
    ]

    if(n <= 20){return arr[n]}

    let str = n + ''

    function reedNumber(str){
      let num = Number(str)
      if(num === 0){return ''}
      if(num <= 20){return ' ' + arr[num]}
      if(num < 100){return ' ' + arr[18 + Number(str.slice(-2,-1))] + reedNumber(str.slice(-1))}
      return ' ' + arr[Number(str[0])] + ' hundred' + reedNumber(str.slice(-2))
    }

    let res = reedNumber(str.slice(-3))
    const arr2 = ['thousand','million','billion']

    for(let i = 0; str.length > 3; i++){
      str = str.slice(0, -3)
      let temp = reedNumber(str.slice(-3))
      if (temp.length > 0){
        res = temp + ' ' + arr2[i] + res
      }
    }

    return res.slice(1)

}
