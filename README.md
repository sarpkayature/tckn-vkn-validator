# TCKN - VKN VALIDATOR

This is a simple validator for Turkish Companies' Identification Numbers (TCKN) and VKN (Vergi Kimlik Numarası). This library will only work for Turkish companies and Turkish persons. The validator is based on the official documents of the Social Security Administration & Tax Administration.

## Installation

```
npm install tckn-vkn-validator
```

## Usage

```
import {validateTCKN} from 'tckn-vkn-validator';

validateTCKN('12345678901') //false;

                 OR

import {validateVKN} from 'tckn-vkn-validator';

validateVKN('12345678901')//false;

```

validateTCKN and validateVKN will return true if the given TCKN or VKN is valid, otherwise false.

You can also use those functions through yup library.

## License

    MIT

## Contributing

    If you have any questions or suggestions, please open an issue or create a pull request.

## Version

      v1.0.0

## Author

- Sarpkaya Türe - [@sarpkaya](https://github.com/sarpkaya93)
