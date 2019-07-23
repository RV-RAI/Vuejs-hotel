export default function (price) {
  if(price > 5) {
    return price = 5
  } else if(price < 0) {
    return price = 0.1
  } else {
    return price
  }
}
