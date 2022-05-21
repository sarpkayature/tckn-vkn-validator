function validateVKN(vkn) {
  let v1 = 0;
  let v2 = 0;
  let v3 = 0;
  let v4 = 0;
  let v5 = 0;
  let v6 = 0;
  let v7 = 0;
  let v8 = 0;
  let v9 = 0;
  let v11 = 0;
  let v22 = 0;
  let v33 = 0;
  let v44 = 0;
  let v55 = 0;
  let v66 = 0;
  let v77 = 0;
  let v88 = 0;
  let v99 = 0;
  let v_last_digit = 0;
  let sum = 0;

  if (vkn.length == 10) {
    v1 = (Number(vkn.charAt(0)) + 9) % 10;

    v2 = (Number(vkn.charAt(1)) + 8) % 10;

    v3 = (Number(vkn.charAt(2)) + 7) % 10;

    v4 = (Number(vkn.charAt(3)) + 6) % 10;

    v5 = (Number(vkn.charAt(4)) + 5) % 10;

    v6 = (Number(vkn.charAt(5)) + 4) % 10;
    v7 = (Number(vkn.charAt(6)) + 3) % 10;
    v8 = (Number(vkn.charAt(7)) + 2) % 10;
    v9 = (Number(vkn.charAt(8)) + 1) % 10;
    v_last_digit = Number(vkn.charAt(9));

    v11 = (v1 * 512) % 9;
    v22 = (v2 * 256) % 9;
    v33 = (v3 * 128) % 9;
    v44 = (v4 * 64) % 9;
    v55 = (v5 * 32) % 9;
    v66 = (v6 * 16) % 9;
    v77 = (v7 * 8) % 9;
    v88 = (v8 * 4) % 9;
    v99 = (v9 * 2) % 9;

    if (v1 != 0 && v11 == 0) v11 = 9;
    if (v2 != 0 && v22 == 0) v22 = 9;
    if (v3 != 0 && v33 == 0) v33 = 9;
    if (v4 != 0 && v44 == 0) v44 = 9;
    if (v5 != 0 && v55 == 0) v55 = 9;
    if (v6 != 0 && v66 == 0) v66 = 9;
    if (v7 != 0 && v77 == 0) v77 = 9;
    if (v8 != 0 && v88 == 0) v88 = 9;
    if (v9 != 0 && v99 == 0) v99 = 9;

    sum = v11 + v22 + v33 + v44 + v55 + v66 + v77 + v88 + v99;

    if (sum % 10 == 0) sum = 0;
    else sum = 10 - (sum % 10);

    if (sum == v_last_digit) return true;
    else return false;
  } else return false;
}

module.exports.validateVKN = this.validateVKN;

function validateTCKN(tckn) {
  const isEleven = /^[0-9]{11}$/.test(tckn);
  let totalX = 0;
  for (let i = 0; i < 10; i++) {
    totalX += Number(tckn.substr(i, 1));
  }
  const isRuleX = totalX % 10 == tckn.substr(10, 1);
  let totalY1 = 0;
  let totalY2 = 0;
  for (let i = 0; i < 10; i += 2) {
    totalY1 += Number(tckn.substr(i, 1));
  }
  for (let i = 1; i < 10; i += 2) {
    totalY2 += Number(tckn.substr(i, 1));
  }
  const isRuleY = (totalY1 * 7 - totalY2) % 10 == tckn.substr(9, 0);
  if (isEleven && isRuleX && isRuleY) {
    return true;
  }
  return false;
}

module.exports.validateTCKN = validateTCKN;
