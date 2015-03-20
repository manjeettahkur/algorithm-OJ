function groupByCommas(n) {
  return String(n).replace(/(\d{3})/g, ',$`');
}

