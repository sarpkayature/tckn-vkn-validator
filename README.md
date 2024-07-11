# TCKN - VKN VALIDATOR

This is a simple validator for Turkish Citizens Identification Numbers (TCKN) and VKN (Vergi Kimlik Numarası). This library will only work for Turkish companies and Turkish citizens. The validator is based on the official documents of the Social Security Administration & Tax Administration.

## Installation

```
npm install tckn-vkn-validator
```

## Usage

```
import {validateTCKN} from 'tckn-vkn-validator';

const tckn = '12345678901';
validateTCKN(tckn) //false;

                 OR

import {validateVKN} from 'tckn-vkn-validator';

const vkn = '12345678901';
validateVKN(vkn)//false;

```

- Parameters for both functions could be string or number.

validateTCKN and validateVKN will return true if the given TCKN or VKN is valid, otherwise false.

You can also use those functions through yup library.

## Contributing

    If you have any questions or suggestions, please open an issue or create a pull request.

## Version

      v1.0.0

## Author

- Sarpkaya Türe - [@sarpkaya](https://github.com/sarpkaya93)
