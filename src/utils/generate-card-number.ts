let pseudoRandom: () => number = Math.random;

const visaPrefixList: string[] = [
  '4539',
  '4556',
  '4916',
  '4532',
  '4929',
  '40240071',
  '4485',
  '4716',
  '4',
];

const mastercardPrefixList: string[] = ['51', '52', '53', '54', '55'];

const amexPrefixList: string[] = ['34', '37'];

const discoverPrefixList: string[] = new Array('6011');

const dinersPrefixList: string[] = ['300', '301', '302', '303', '36', '38'];

const enRoutePrefixList: string[] = ['2014', '2149'];

const jcbPrefixList: string[] = new Array('35');

const voyagerPrefixList: string[] = new Array('8699');

function strrev(str: any): string {
  if (!str) return '';
  let revstr = '';
  for (let i = str.length - 1; i >= 0; i--) revstr += str.charAt(i);
  return revstr;
}

function completed_number(prefix: any, length: number) {
  let ccnumber = prefix;

  // generate digits

  while (ccnumber.length < length - 1) {
    ccnumber += Math.floor(pseudoRandom() * 10);
  }

  // reverse number and convert to int

  const reversedCCnumberString = strrev(ccnumber);

  const reversedCCnumber = [];
  for (let i = 0; i < reversedCCnumberString.length; i++) {
    reversedCCnumber[i] = parseInt(reversedCCnumberString.charAt(i));
  }

  // calculate sum

  let sum = 0;
  let pos = 0;

  while (pos < length - 1) {
    let odd = reversedCCnumber[pos] * 2;
    if (odd > 9) {
      odd -= 9;
    }

    sum += odd;

    if (pos != length - 2) {
      sum += reversedCCnumber[pos + 1];
    }
    pos += 2;
  }

  // calculate check digit

  const checkdigit = ((Math.floor(sum / 10) + 1) * 10 - sum) % 10;
  ccnumber += checkdigit;

  return ccnumber;
}

function credit_card_number(prefixList: any, length: any, howMany: any) {
  const result = [];
  for (let i = 0; i < howMany; i++) {
    const randomArrayIndex = Math.floor(pseudoRandom() * prefixList.length);
    const ccnumber = prefixList[randomArrayIndex];
    result.push(completed_number(ccnumber, length));
  }

  return result;
}

interface scheme {
  prefixList: string[];
  digitCount: number;
}

const schemes = {
  VISA: {
    prefixList: visaPrefixList,
    digitCount: 16,
  },
  MasterCard: {
    prefixList: mastercardPrefixList,
    digitCount: 16,
  },
  Amex: {
    prefixList: amexPrefixList,
    digitCount: 15,
  },
  Diners: {
    prefixList: dinersPrefixList,
    digitCount: 16,
  },
  Discover: {
    prefixList: discoverPrefixList,
    digitCount: 16,
  },
  EnRoute: {
    prefixList: enRoutePrefixList,
    digitCount: 16,
  },
  JCB: {
    prefixList: jcbPrefixList,
    digitCount: 16,
  },
  Voyager: {
    prefixList: voyagerPrefixList,
    digitCount: 16,
  },
};

export function generateCreditCard(cardScheme: string, howMany: number): any[] {
  pseudoRandom = pseudoRandom;
  const amount: number = howMany || 1;

  switch (cardScheme) {
    case 'VISA':
      return credit_card_number(
        schemes['VISA'].prefixList,
        schemes['VISA'].digitCount,
        amount,
      );
    case 'MasterCard':
      return credit_card_number(
        schemes['MasterCard'].prefixList,
        schemes['MasterCard'].digitCount,
        amount,
      );
    case 'Amex':
      return credit_card_number(
        schemes['Amex'].prefixList,
        schemes['Amex'].digitCount,
        amount,
      );
    case 'Diners':
      return credit_card_number(
        schemes['Diners'].prefixList,
        schemes['Diners'].digitCount,
        amount,
      );
    case 'Discover':
      return credit_card_number(
        schemes['Discover'].prefixList,
        schemes['Discover'].digitCount,
        amount,
      );
    case 'EnRoute':
      return credit_card_number(
        schemes['EnRoute'].prefixList,
        schemes['EnRoute'].digitCount,
        amount,
      );
    case 'JCB':
      return credit_card_number(
        schemes['JCB'].prefixList,
        schemes['JCB'].digitCount,
        amount,
      );
    case 'Voyager':
      return credit_card_number(
        schemes['Voyager'].prefixList,
        schemes['Voyager'].digitCount,
        amount,
      );
    default:
      return credit_card_number(
        schemes['MasterCard'].prefixList,
        schemes['MasterCard'].digitCount,
        amount,
      );
  }
}
