export default (subtotal, province = 'on') => {
  const taxes = {
    ab: 5,
    bc: 12,
    ma: 13,
    nb: 15,
    nfld: 15,
    nwt: 5,
    ns: 15,
    nun: 5,
    on: 13,
    pei: 15,
    qc: 15,
    sk: 11,
    yuk: 5,
  }

  return subtotal * (taxes[province] / 100)
}
