function checkCashRegister(price, cash, cid) {
  let change = (cash - price)*100;
  let status;
  //console.log(change);
  let totalCid = 0;
  for(let i = 0; i < cid.length; i++){
    totalCid += cid[i][1] *100;
  }
  if(change > totalCid) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }else if(change === totalCid){
    return {status: "CLOSED", change: cid};
  }else{
    let result = [];
    cid = cid.reverse();
    let currencyUnit = {
      "ONE HUNDRED": 10000,
      "TWENTY": 2000,
      "TEN": 1000,
      "FIVE": 500,
      "ONE": 100,
      "QUARTER": 25,
      "DIME": 10,
      "NICKEL": 5,
      "PENNY": 1
      };
    //console.log(currencyUnit)
    let moneyHolder = [];
    for(let elem of cid){
      moneyHolder = [elem[0], 0];
      elem[1] *= 100;
      //console.log(elem[0])
      while(change >= currencyUnit[elem[0]] && elem[1] > 0){
        //console.log(currencyUnit[elem[0]]);
        change -= currencyUnit[elem[0]];
        elem[1] -= currencyUnit[elem[0]];
        moneyHolder[1] += currencyUnit[elem[0]];
      }
      if(moneyHolder[1] > 0){
        moneyHolder[1] /= 100;
        result.push(moneyHolder);
      }
    }
    console.log(result);
    if(change > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }else{
      return {status: "OPEN", change: result}
    }
  }
}