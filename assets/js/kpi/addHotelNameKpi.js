export default function (kpi, list) {
  let hpData = [];
  for (let i = 0; i < list.length; i++) {
    let a = Object.assign({}, kpi[i]);
    a.area_name = list[i].area_name;
    a.chain_brand = list[i].chain_brand;
    a.hotel_name = list[i].hotel_name;
    hpData.push(a)
  }
  return hpData
}
