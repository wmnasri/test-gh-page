(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/ibantools/jsnext/ibantools.js":
/*!****************************************************!*\
  !*** ./node_modules/ibantools/jsnext/ibantools.js ***!
  \****************************************************/
/*! exports provided: isValidIBAN, ValidationErrorsIBAN, validateIBAN, isValidBBAN, isSEPACountry, isQRIBAN, composeIBAN, extractIBAN, electronicFormatIBAN, friendlyFormatIBAN, getCountrySpecifications, isValidBIC, ValidationErrorsBIC, validateBIC, extractBIC, setCountryBBANValidation, countrySpecs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIBAN", function() { return isValidIBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorsIBAN", function() { return ValidationErrorsIBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIBAN", function() { return validateIBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidBBAN", function() { return isValidBBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSEPACountry", function() { return isSEPACountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQRIBAN", function() { return isQRIBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeIBAN", function() { return composeIBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractIBAN", function() { return extractIBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "electronicFormatIBAN", function() { return electronicFormatIBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friendlyFormatIBAN", function() { return friendlyFormatIBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountrySpecifications", function() { return getCountrySpecifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidBIC", function() { return isValidBIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorsBIC", function() { return ValidationErrorsBIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBIC", function() { return validateBIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractBIC", function() { return extractBIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountryBBANValidation", function() { return setCountryBBANValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countrySpecs", function() { return countrySpecs; });
/*!
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
/**
 * Validation, extraction and creation of IBAN, BBAN, BIC/SWIFT numbers plus some other helpful stuff
 * @package Documentation
 * @author Saša Jovanić
 * @module ibantools
 * @version 4.3.0
 * @license MPL-2.0
 * @preferred
 */

/**
 * Validate IBAN
 * ```
 * // returns true
 * ibantools.isValidIBAN("NL91ABNA0417164300");
 * ```
 * ```
 * // returns false
 * ibantools.isValidIBAN("NL92ABNA0517164300");
 * ```
 * ```
 * // returns true
 * ibantools.isValidIBAN('CH4431999123000889012');
 * ```
 * ```
 * // returns false
 * ibantools.isValidIBAN('CH4431999123000889012', { allowQRIBAN: false });
 * ```
 */
function isValidIBAN(iban, validationOptions) {
    if (validationOptions === void 0) { validationOptions = { allowQRIBAN: true }; }
    if (iban === undefined || iban === null)
        return false;
    var reg = new RegExp('^[0-9]{2}$', '');
    var countryCode = iban.slice(0, 2);
    var spec = countrySpecs[countryCode];
    if (spec === undefined || spec.bban_regexp === undefined || spec.bban_regexp === null || spec.chars === undefined)
        return false;
    return (spec.chars === iban.length &&
        reg.test(iban.slice(2, 4)) &&
        isValidBBAN(iban.slice(4), countryCode) &&
        isValidIBANChecksum(iban) &&
        (validationOptions.allowQRIBAN || !isQRIBAN(iban)));
}
/**
 * IBAM validation errors
 */
var ValidationErrorsIBAN;
(function (ValidationErrorsIBAN) {
    ValidationErrorsIBAN[ValidationErrorsIBAN["NoIBANProvided"] = 0] = "NoIBANProvided";
    ValidationErrorsIBAN[ValidationErrorsIBAN["NoIBANCountry"] = 1] = "NoIBANCountry";
    ValidationErrorsIBAN[ValidationErrorsIBAN["WrongBBANLength"] = 2] = "WrongBBANLength";
    ValidationErrorsIBAN[ValidationErrorsIBAN["WrongBBANFormat"] = 3] = "WrongBBANFormat";
    ValidationErrorsIBAN[ValidationErrorsIBAN["ChecksumNotNumber"] = 4] = "ChecksumNotNumber";
    ValidationErrorsIBAN[ValidationErrorsIBAN["WrongIBANChecksum"] = 5] = "WrongIBANChecksum";
    ValidationErrorsIBAN[ValidationErrorsIBAN["WrongAccountBankBranchChecksum"] = 6] = "WrongAccountBankBranchChecksum";
    ValidationErrorsIBAN[ValidationErrorsIBAN["QRIBANNotAllowed"] = 7] = "QRIBANNotAllowed";
})(ValidationErrorsIBAN || (ValidationErrorsIBAN = {}));
/**
 * validateIBAN
 * ```
 * // returns {errorCodes: [], valid: true}
 * ibantools.validateIBAN("NL91ABNA0417164300");
 * ```
 * ```
 * ```
 * // returns {errorCodes: [], valid: true}
 * ibantools.validateIBAN('CH4431999123000889012');
 * ```
 * ```
 * // returns {errorCodes: [7], valid: false}
 * ibantools.validateIBAN('CH4431999123000889012', { allowQRIBAN: false });
 * ```
 */
function validateIBAN(iban, validationOptions) {
    if (validationOptions === void 0) { validationOptions = { allowQRIBAN: true }; }
    var result = { errorCodes: [], valid: true };
    if (iban !== undefined && iban !== null && iban !== '') {
        var spec = countrySpecs[iban.slice(0, 2)];
        if (!spec || !(spec.bban_regexp || spec.chars)) {
            result.valid = false;
            result.errorCodes.push(ValidationErrorsIBAN.NoIBANCountry);
            return result;
        }
        if (spec && spec.chars && spec.chars !== iban.length) {
            result.valid = false;
            result.errorCodes.push(ValidationErrorsIBAN.WrongBBANLength);
        }
        if (spec && spec.bban_regexp && !checkFormatBBAN(iban.slice(4), spec.bban_regexp)) {
            result.valid = false;
            result.errorCodes.push(ValidationErrorsIBAN.WrongBBANFormat);
        }
        if (spec && spec.bban_validation_func && !spec.bban_validation_func(iban.slice(4))) {
            result.valid = false;
            result.errorCodes.push(ValidationErrorsIBAN.WrongAccountBankBranchChecksum);
        }
        var reg = new RegExp('^[0-9]{2}$', '');
        if (!reg.test(iban.slice(2, 4))) {
            result.valid = false;
            result.errorCodes.push(ValidationErrorsIBAN.ChecksumNotNumber);
        }
        if (result.errorCodes.indexOf(ValidationErrorsIBAN.WrongBBANFormat) !== -1 || !isValidIBANChecksum(iban)) {
            result.valid = false;
            result.errorCodes.push(ValidationErrorsIBAN.WrongIBANChecksum);
        }
        if (!validationOptions.allowQRIBAN && isQRIBAN(iban)) {
            result.valid = false;
            result.errorCodes.push(ValidationErrorsIBAN.QRIBANNotAllowed);
        }
    }
    else {
        result.valid = false;
        result.errorCodes.push(ValidationErrorsIBAN.NoIBANProvided);
    }
    return result;
}
/**
 * Validate BBAN
 *
 * ```
 * // returns true
 * ibantools.isValidBBAN("ABNA0417164300", "NL");
 * ```
 * ```
 * // returns false
 * ibantools.isValidBBAN("A7NA0517164300", "NL");
 * ```
 */
function isValidBBAN(bban, countryCode) {
    if (bban === undefined || bban === null || countryCode === undefined || countryCode === null)
        return false;
    var spec = countrySpecs[countryCode];
    if (spec === undefined ||
        spec === null ||
        spec.bban_regexp === undefined ||
        spec.bban_regexp === null ||
        spec.chars === undefined ||
        spec.chars === null)
        return false;
    if (spec.chars - 4 === bban.length && checkFormatBBAN(bban, spec.bban_regexp)) {
        if (spec.bban_validation_func) {
            return spec.bban_validation_func(bban.replace(/[\s.]+/g, ''));
        }
        return true;
    }
    return false;
}
/**
 * Validate if country code is from a SEPA country
 * ```
 * // returns true
 * ibantools.isSEPACountry("NL");
 * ```
 * ```
 * // returns false
 * ibantools.isSEPACountry("PK");
 * ```
 */
function isSEPACountry(countryCode) {
    if (countryCode !== undefined && countryCode !== null) {
        var spec = countrySpecs[countryCode];
        if (spec !== undefined) {
            return spec.SEPA ? spec.SEPA : false;
        }
    }
    return false;
}
/**
 * Check if IBAN is QR-IBAN
 * ```
 * // returns true
 * ibantools.isQRIBAN("CH4431999123000889012");
 * ```
 * ```
 * // returns false
 * ibantools.isQRIBAN("NL92ABNA0517164300");
 * ```
 */
function isQRIBAN(iban) {
    if (iban === undefined || iban === null)
        return false;
    var countryCode = iban.slice(0, 2);
    var QRIBANCountries = ['LX', 'CH'];
    if (!QRIBANCountries.includes(countryCode))
        return false;
    var reg = new RegExp('^3[0-1]{1}[0-9]{3}$', '');
    return reg.test(iban.slice(4, 9));
}
/**
 * composeIBAN
 *
 * ```
 * // returns NL91ABNA0417164300
 * ibantools.composeIBAN({ countryCode: "NL", bban: "ABNA0417164300" });
 * ```
 */
function composeIBAN(params) {
    var formated_bban = electronicFormatIBAN(params.bban) || '';
    if (params.countryCode === null || params.countryCode === undefined) {
        return null;
    }
    var spec = countrySpecs[params.countryCode];
    if (formated_bban !== '' &&
        spec !== undefined &&
        spec.chars &&
        spec.chars !== null &&
        spec.chars === formated_bban.length + 4 &&
        spec.bban_regexp &&
        spec.bban_regexp !== null &&
        checkFormatBBAN(formated_bban, spec.bban_regexp)) {
        var checksom = mod9710Iban(params.countryCode + '00' + formated_bban);
        return params.countryCode + ('0' + (98 - checksom)).slice(-2) + formated_bban;
    }
    return null;
}
/**
 * extractIBAN
 * ```
 * // returns {iban: "NL91ABNA0417164300", bban: "ABNA0417164300", countryCode: "NL", valid: true}
 * ibantools.extractIBAN("NL91 ABNA 0417 1643 00");
 * ```
 */
function extractIBAN(iban) {
    var result = {};
    var eFormatIBAN = electronicFormatIBAN(iban);
    result.iban = eFormatIBAN || iban;
    if (!!eFormatIBAN && isValidIBAN(eFormatIBAN)) {
        result.bban = eFormatIBAN.slice(4);
        result.countryCode = eFormatIBAN.slice(0, 2);
        result.valid = true;
    }
    else {
        result.valid = false;
    }
    return result;
}
/**
 * Check BBAN format
 *
 * @ignore
 */
function checkFormatBBAN(bban, bformat) {
    var reg = new RegExp(bformat, '');
    return reg.test(bban);
}
/**
 * Get IBAN in electronic format (no spaces)
 * IBAN validation is not performed.
 * When non-string value for IBAN is provided, returns null.
 * ```
 * // returns "NL91ABNA0417164300"
 * ibantools.electronicFormatIBAN("NL91 ABNA 0417 1643 00");
 * ```
 */
function electronicFormatIBAN(iban) {
    if (typeof iban !== 'string') {
        return null;
    }
    return iban.replace(/[-\ ]/g, '').toUpperCase();
}
/**
 * Get IBAN in friendly format (separated after every 4 characters)
 * IBAN validation is not performed.
 * When non-string value for IBAN is provided, returns null.
 * ```
 * // returns "NL91 ABNA 0417 1643 00"
 * ibantools.friendlyFormatIBAN("NL91ABNA0417164300");
 * ```
 * ```
 * // returns "NL91-ABNA-0417-1643-00"
 * ibantools.friendlyFormatIBAN("NL91ABNA0417164300","-");
 * ```
 */
function friendlyFormatIBAN(iban, separator) {
    if (typeof iban !== 'string') {
        return null;
    }
    if (separator === undefined || separator === null) {
        separator = ' ';
    }
    var electronic_iban = electronicFormatIBAN(iban);
    /* istanbul ignore if */
    if (electronic_iban === null) {
        return null;
    }
    return electronic_iban.replace(/(.{4})(?!$)/g, '$1' + separator);
}
/**
 * Calculate checksum of IBAN and compares it with checksum provided in IBAN Registry
 *
 * @ignore
 */
function isValidIBANChecksum(iban) {
    var countryCode = iban.slice(0, 2);
    var providedChecksum = parseInt(iban.slice(2, 4), 10);
    var bban = iban.slice(4);
    // Wikipedia[validating_iban] says there are a specif way to check if a IBAN is valid but
    // it. It says 'If the remainder is 1, the check digit test is passed and the
    // IBAN might be valid.'. might, MIGHT!
    // We don't want might but want yes or no. Since every BBAN is IBAN from the fifth
    // (slice(4)) we can generate the IBAN from BBAN and country code(two first characters)
    // from in the IBAN.
    // To generate the (generate the iban check digits)[generating-iban-check]
    //   Move the country code to the end
    //   remove the checksum from the begging
    //   Add "00" to the end
    //   modulo 97 on the amount
    //   subtract remainder from 98, (98 - remainder)
    //   Add a leading 0 if the remainder is less then 10 (padStart(2, "0")) (we skip this
    //     since we compare int, not string)
    //
    // [validating_iban][https://en.wikipedia.org/wiki/International_Bank_Account_Number#Validating_the_IBAN]
    // [generating-iban-check][https://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits]
    var validationString = replaceCharaterWithCode("".concat(bban).concat(countryCode, "00"));
    var rest = mod9710(validationString);
    return 98 - rest === providedChecksum;
}
/**
 * Iban contain characters and should be converted to intereger by 55 substracted
 * from there ascii value
 *
 * @ignore
 */
function replaceCharaterWithCode(str) {
    // It is slower but alot more readable
    // https://jsbench.me/ttkzgsekae/1
    return str
        .split('')
        .map(function (c) {
        var code = c.charCodeAt(0);
        return code >= 65 ? (code - 55).toString() : c;
    })
        .join('');
}
/**
 * MOD-97-10
 *
 * @ignore
 */
function mod9710Iban(iban) {
    return mod9710(replaceCharaterWithCode(iban.slice(3) + iban.slice(0, 4)));
}
/**
 * Returns specifications for all countries, even those who are not
 * members of IBAN registry. `IBANRegistry` field indicates if country
 * is member of not.
 *
 * ```
 * // Validating IBAN form field after user selects his country
 * // <select id="countries">
 * //   ...
 * //   <option value="NL">Netherlands</option>
 * //   ...
 * // </select>
 * $("#countries").select(function() {
 *   // Find country
 *   let country = ibantools.getCountrySpecifications()[$(this).val()];
 *   // Add country code letters to IBAN form field
 *   $("input#iban").value($(this).val());
 *   // Add New value to "pattern" attribute to #iban input text field
 *   $("input#iban").attr("pattern", $(this).val() + "[0-9]{2}" + country.bban_regexp.slice(1).replace("$",""));
 * });
 * ```
 */
function getCountrySpecifications() {
    var countyMap = {};
    for (var countyCode in countrySpecs) {
        var county = countrySpecs[countyCode];
        countyMap[countyCode] = {
            chars: county.chars || null,
            bban_regexp: county.bban_regexp || null,
            IBANRegistry: county.IBANRegistry || false,
            SEPA: county.SEPA || false,
        };
    }
    return countyMap;
}
/**
 * Validate BIC/SWIFT
 *
 * ```
 * // returns true
 * ibantools.isValidBIC("ABNANL2A");
 *
 * // returns true
 * ibantools.isValidBIC("NEDSZAJJXXX");
 *
 * // returns false
 * ibantools.isValidBIC("ABN4NL2A");
 *
 * // returns false
 * ibantools.isValidBIC("ABNA NL 2A");
 * ```
 */
function isValidBIC(bic) {
    if (!bic) {
        return false;
    }
    var reg = new RegExp('^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$', '');
    var spec = countrySpecs[bic.toUpperCase().slice(4, 6)];
    return reg.test(bic) && spec !== undefined;
}
/**
 * BIC validation errors
 */
var ValidationErrorsBIC;
(function (ValidationErrorsBIC) {
    ValidationErrorsBIC[ValidationErrorsBIC["NoBICProvided"] = 0] = "NoBICProvided";
    ValidationErrorsBIC[ValidationErrorsBIC["NoBICCountry"] = 1] = "NoBICCountry";
    ValidationErrorsBIC[ValidationErrorsBIC["WrongBICFormat"] = 2] = "WrongBICFormat";
})(ValidationErrorsBIC || (ValidationErrorsBIC = {}));
/**
 * validateBIC
 * ```
 * // returns {errorCodes: [], valid: true}
 * ibantools.validateBIC("NEDSZAJJXXX");
 * ```
 */
function validateBIC(bic) {
    var result = { errorCodes: [], valid: true };
    if (bic !== undefined && bic !== null && bic !== '') {
        var spec = countrySpecs[bic.toUpperCase().slice(4, 6)];
        if (spec === undefined) {
            result.valid = false;
            result.errorCodes.push(ValidationErrorsBIC.NoBICCountry);
        }
        else {
            var reg = new RegExp('^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$', '');
            if (!reg.test(bic)) {
                result.valid = false;
                result.errorCodes.push(ValidationErrorsBIC.WrongBICFormat);
            }
        }
    }
    else {
        result.valid = false;
        result.errorCodes.push(ValidationErrorsBIC.NoBICProvided);
    }
    return result;
}
/**
 * extractBIC
 * ```
 * // returns {bankCode: "ABNA", countryCode: "NL", locationCode: "2A", branchCode: null, testBIC: flase, valid: true}
 * ibantools.extractBIC("ABNANL2A");
 * ```
 */
function extractBIC(inputBic) {
    var result = {};
    var bic = inputBic.toUpperCase();
    if (isValidBIC(bic)) {
        result.bankCode = bic.slice(0, 4);
        result.countryCode = bic.slice(4, 6);
        result.locationCode = bic.slice(6, 8);
        result.testBIC = result.locationCode[1] === '0' ? true : false;
        result.branchCode = bic.length > 8 ? bic.slice(8) : null;
        result.valid = true;
    }
    else {
        result.valid = false;
    }
    return result;
}
/**
 * Used for Norway BBAN check
 *
 * @ignore
 */
var checkNorwayBBAN = function (bban) {
    var weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    var bbanWithoutSpacesAndPeriods = bban.replace(/[\s.]+/g, '');
    var controlDigit = parseInt(bbanWithoutSpacesAndPeriods.charAt(10), 10);
    var bbanWithoutControlDigit = bbanWithoutSpacesAndPeriods.substring(0, 10);
    var sum = 0;
    for (var index = 0; index < 10; index++) {
        sum += parseInt(bbanWithoutControlDigit.charAt(index), 10) * weights[index];
    }
    var remainder = sum % 11;
    return controlDigit === (remainder === 0 ? 0 : 11 - remainder);
};
/**
 * Used for Belgian BBAN check
 *
 * @ignore
 */
var checkBelgianBBAN = function (bban) {
    var stripped = bban.replace(/[\s.]+/g, '');
    var checkingPart = parseInt(stripped.substring(0, stripped.length - 2), 10);
    var checksum = parseInt(stripped.substring(stripped.length - 2, stripped.length), 10);
    var remainder = checkingPart % 97 === 0 ? 97 : checkingPart % 97;
    return remainder === checksum;
};
/**
 * Mod 97/10 calculation
 *
 * @ignore
 */
var mod9710 = function (validationString) {
    while (validationString.length > 2) {
        // > Any computer programming language or software package that is used to compute D
        // > mod 97 directly must have the ability to handle integers of more than 30 digits.
        // > In practice, this can only be done by software that either supports
        // > arbitrary-precision arithmetic or that can handle 219-bit (unsigned) integers
        // https://en.wikipedia.org/wiki/International_Bank_Account_Number#Modulo_operation_on_IBAN
        var part = validationString.slice(0, 6);
        var partInt = parseInt(part, 10);
        if (isNaN(partInt)) {
            return NaN;
        }
        validationString = (partInt % 97) + validationString.slice(part.length);
    }
    return parseInt(validationString, 10) % 97;
};
/**
 * Check BBAN based on Mod97/10 calculation for countries that support it:
 * BA, ME, MK, PT, RS, SI
 *
 * @ignore
 */
var checkMod9710BBAN = function (bban) {
    var stripped = bban.replace(/[\s.]+/g, '');
    var reminder = mod9710(stripped);
    return reminder === 1;
};
/**
 * Used for Poland BBAN check
 *
 * @ignore
 */
var checkPolandBBAN = function (bban) {
    var weights = [3, 9, 7, 1, 3, 9, 7];
    var controlDigit = parseInt(bban.charAt(7), 10);
    var toCheck = bban.substring(0, 7);
    var sum = 0;
    for (var index = 0; index < 7; index++) {
        sum += parseInt(toCheck.charAt(index), 10) * weights[index];
    }
    var remainder = sum % 10;
    return controlDigit === (remainder === 0 ? 0 : 10 - remainder);
};
/**
 * Spain (ES) BBAN check
 *
 * @ignore
 */
var checkSpainBBAN = function (bban) {
    var weightsBankBranch = [4, 8, 5, 10, 9, 7, 3, 6];
    var weightsAccount = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];
    var controlBankBranch = parseInt(bban.charAt(8), 10);
    var controlAccount = parseInt(bban.charAt(9), 10);
    var bankBranch = bban.substring(0, 8);
    var account = bban.substring(10, 20);
    var sum = 0;
    for (var index = 0; index < 8; index++) {
        sum += parseInt(bankBranch.charAt(index), 10) * weightsBankBranch[index];
    }
    var remainder = sum % 11;
    if (controlBankBranch !== (remainder === 0 ? 0 : remainder === 1 ? 1 : 11 - remainder)) {
        return false;
    }
    sum = 0;
    for (var index = 0; index < 10; index++) {
        sum += parseInt(account.charAt(index), 10) * weightsAccount[index];
    }
    remainder = sum % 11;
    return controlAccount === (remainder === 0 ? 0 : remainder === 1 ? 1 : 11 - remainder);
};
/**
 * Mod 11/10 check
 *
 * @ignore
 */
var checkMod1110 = function (toCheck, control) {
    var nr = 10;
    for (var index = 0; index < toCheck.length; index++) {
        nr += parseInt(toCheck.charAt(index), 10);
        if (nr % 10 !== 0) {
            nr = nr % 10;
        }
        nr = nr * 2;
        nr = nr % 11;
    }
    return control === (11 - nr === 10 ? 0 : 11 - nr);
};
/**
 * Croatian (HR) BBAN check
 *
 * @ignore
 */
var checkCroatianBBAN = function (bban) {
    var controlBankBranch = parseInt(bban.charAt(6), 10);
    var controlAccount = parseInt(bban.charAt(16), 10);
    var bankBranch = bban.substring(0, 6);
    var account = bban.substring(7, 16);
    return checkMod1110(bankBranch, controlBankBranch) && checkMod1110(account, controlAccount);
};
/**
 * Czech (CZ) and Slowak (SK) BBAN check
 *
 * @ignore
 */
var checkCzechAndSlovakBBAN = function (bban) {
    var weightsPrefix = [10, 5, 8, 4, 2, 1];
    var weightsSuffix = [6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
    var controlPrefix = parseInt(bban.charAt(9), 10);
    var controlSuffix = parseInt(bban.charAt(19), 10);
    var prefix = bban.substring(4, 9);
    var suffix = bban.substring(10, 19);
    var sum = 0;
    for (var index = 0; index < prefix.length; index++) {
        sum += parseInt(prefix.charAt(index), 10) * weightsPrefix[index];
    }
    var remainder = sum % 11;
    if (controlPrefix !== (remainder === 0 ? 0 : remainder === 1 ? 1 : 11 - remainder)) {
        return false;
    }
    sum = 0;
    for (var index = 0; index < suffix.length; index++) {
        sum += parseInt(suffix.charAt(index), 10) * weightsSuffix[index];
    }
    remainder = sum % 11;
    return controlSuffix === (remainder === 0 ? 0 : remainder === 1 ? 1 : 11 - remainder);
};
/**
 * Estonian (EE) BBAN check
 *
 * @ignore
 */
var checkEstonianBBAN = function (bban) {
    var weights = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7];
    var controlDigit = parseInt(bban.charAt(15), 10);
    var toCheck = bban.substring(2, 15);
    var sum = 0;
    for (var index = 0; index < toCheck.length; index++) {
        sum += parseInt(toCheck.charAt(index), 10) * weights[index];
    }
    var remainder = sum % 10;
    return controlDigit === (remainder === 0 ? 0 : 10 - remainder);
};
/**
 * Finland (FI) BBAN check
 *
 * @ignore
 */
var checkFinlandBBAN = function (bban) {
    var weights = [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    var controlDigit = parseInt(bban.charAt(13), 10);
    var toCheck = bban.substring(0, 13);
    var sum = 0;
    for (var index = 0; index < toCheck.length; index++) {
        if (weights[index] === 1) {
            sum += parseInt(toCheck.charAt(index), 10) * weights[index];
        }
        else {
            var value = parseInt(toCheck.charAt(index), 10) * weights[index];
            sum += Math.floor(value / 10) + (value % 10);
        }
    }
    var extraSum = sum + controlDigit;
    var multiDigit = Math.floor(extraSum / 10);
    var result = multiDigit * 10;
    var remainder = result - sum;
    return remainder === controlDigit;
};
/**
 * Check French (FR) BBAN
 * Also for Monaco (MC)
 *
 * @ignore
 */
var checkFrenchBBAN = function (bban) {
    var stripped = bban.replace(/[\s.]+/g, '');
    var normalized = Array.from(stripped);
    for (var index = 0; index < stripped.length; index++) {
        var c = normalized[index].charCodeAt(0);
        if (c >= 65) {
            switch (c) {
                case 65:
                case 74:
                    normalized[index] = '1';
                    break;
                case 66:
                case 75:
                case 83:
                    normalized[index] = '2';
                    break;
                case 67:
                case 76:
                case 84:
                    normalized[index] = '3';
                    break;
                case 68:
                case 77:
                case 85:
                    normalized[index] = '4';
                    break;
                case 69:
                case 78:
                case 86:
                    normalized[index] = '5';
                    break;
                case 70:
                case 79:
                case 87:
                    normalized[index] = '6';
                    break;
                case 71:
                case 80:
                case 88:
                    normalized[index] = '7';
                    break;
                case 72:
                case 81:
                case 89:
                    normalized[index] = '8';
                    break;
                case 73:
                case 82:
                case 90:
                    normalized[index] = '9';
                    break;
            }
        }
    }
    var remainder = mod9710(normalized.join(''));
    return remainder === 0;
};
/**
 * Hungarian (HU) BBAN check
 *
 * @ignore
 */
var checkHungarianBBAN = function (bban) {
    var weights = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7, 3, 1, 9, 7, 3];
    var controlDigitBankBranch = parseInt(bban.charAt(7), 10);
    var toCheckBankBranch = bban.substring(0, 7);
    var sum = 0;
    for (var index = 0; index < toCheckBankBranch.length; index++) {
        sum += parseInt(toCheckBankBranch.charAt(index), 10) * weights[index];
    }
    var remainder = sum % 10;
    if (controlDigitBankBranch !== (remainder === 0 ? 0 : 10 - remainder)) {
        return false;
    }
    sum = 0;
    if (bban.endsWith('00000000')) {
        var toCheckAccount = bban.substring(8, 15);
        var controlDigitAccount = parseInt(bban.charAt(15), 10);
        for (var index = 0; index < toCheckAccount.length; index++) {
            sum += parseInt(toCheckAccount.charAt(index), 10) * weights[index];
        }
        var remainder_1 = sum % 10;
        return controlDigitAccount === (remainder_1 === 0 ? 0 : 10 - remainder_1);
    }
    else {
        var toCheckAccount = bban.substring(8, 23);
        var controlDigitAccount = parseInt(bban.charAt(23), 10);
        for (var index = 0; index < toCheckAccount.length; index++) {
            sum += parseInt(toCheckAccount.charAt(index), 10) * weights[index];
        }
        var remainder_2 = sum % 10;
        return controlDigitAccount === (remainder_2 === 0 ? 0 : 10 - remainder_2);
    }
};
/**
 * Set custom BBAN validation function for country.
 *
 * If `bban_validation_func` already exists for the corresponding country,
 * it will be overwritten.
 */
var setCountryBBANValidation = function (country, func) {
    if (typeof countrySpecs[country] === 'undefined') {
        return false;
    }
    countrySpecs[country].bban_validation_func = func;
    return true;
};
/**
 * Country specifications
 */
var countrySpecs = {
    AD: {
        chars: 24,
        bban_regexp: '^[0-9]{8}[A-Z0-9]{12}$',
        IBANRegistry: true,
        SEPA: true,
    },
    AE: {
        chars: 23,
        bban_regexp: '^[0-9]{3}[0-9]{16}$',
        IBANRegistry: true,
    },
    AF: {},
    AG: {},
    AI: {},
    AL: {
        chars: 28,
        bban_regexp: '^[0-9]{8}[A-Z0-9]{16}$',
        IBANRegistry: true,
    },
    AM: {},
    AO: {
        chars: 25,
        bban_regexp: '^[0-9]{21}$',
    },
    AQ: {},
    AR: {},
    AS: {},
    AT: { chars: 20, bban_regexp: '^[0-9]{16}$', IBANRegistry: true, SEPA: true },
    AU: {},
    AW: {},
    AX: {
        chars: 18,
        bban_regexp: '^[0-9]{14}$',
        bban_validation_func: checkFinlandBBAN,
        IBANRegistry: true,
    },
    AZ: {
        chars: 28,
        bban_regexp: '^[A-Z]{4}[A-Z0-9]{20}$',
        IBANRegistry: true,
    },
    BA: {
        chars: 20,
        bban_regexp: '^[0-9]{16}$',
        bban_validation_func: checkMod9710BBAN,
        IBANRegistry: true,
    },
    BB: {},
    BD: {},
    BE: { chars: 16, bban_regexp: '^[0-9]{12}$', bban_validation_func: checkBelgianBBAN, IBANRegistry: true, SEPA: true },
    BF: {
        chars: 28,
        bban_regexp: '^[A-Z0-9]{2}[0-9]{22}$',
    },
    BG: {
        chars: 22,
        bban_regexp: '^[A-Z]{4}[0-9]{6}[A-Z0-9]{8}$',
        IBANRegistry: true,
        SEPA: true,
    },
    BH: {
        chars: 22,
        bban_regexp: '^[A-Z]{4}[A-Z0-9]{14}$',
        IBANRegistry: true,
    },
    BI: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    BJ: {
        chars: 28,
        bban_regexp: '^[A-Z0-9]{2}[0-9]{22}$',
    },
    BL: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    BM: {},
    BN: {},
    BO: {},
    BQ: {},
    BR: {
        chars: 29,
        bban_regexp: '^[0-9]{23}[A-Z]{1}[A-Z0-9]{1}$',
        IBANRegistry: true,
    },
    BS: {},
    BT: {},
    BV: {},
    BW: {},
    BY: {
        chars: 28,
        bban_regexp: '^[A-Z]{4}[0-9]{4}[A-Z0-9]{16}$',
        IBANRegistry: true,
    },
    BZ: {},
    CA: {},
    CC: {},
    CD: {},
    CF: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    CG: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    CH: {
        chars: 21,
        bban_regexp: '^[0-9]{5}[A-Z0-9]{12}$',
        IBANRegistry: true,
        SEPA: true,
    },
    CI: {
        chars: 28,
        bban_regexp: '^[A-Z]{1}[0-9]{23}$',
    },
    CK: {},
    CL: {},
    CM: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    CN: {},
    CO: {},
    CR: {
        chars: 22,
        bban_regexp: '^[0-9]{18}$',
        IBANRegistry: true,
    },
    CU: {},
    CV: { chars: 25, bban_regexp: '^[0-9]{21}$' },
    CW: {},
    CX: {},
    CY: {
        chars: 28,
        bban_regexp: '^[0-9]{8}[A-Z0-9]{16}$',
        IBANRegistry: true,
        SEPA: true,
    },
    CZ: {
        chars: 24,
        bban_regexp: '^[0-9]{20}$',
        bban_validation_func: checkCzechAndSlovakBBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    DE: { chars: 22, bban_regexp: '^[0-9]{18}$', IBANRegistry: true, SEPA: true },
    DJ: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    DK: { chars: 18, bban_regexp: '^[0-9]{14}$', IBANRegistry: true, SEPA: true },
    DM: {},
    DO: {
        chars: 28,
        bban_regexp: '^[A-Z]{4}[0-9]{20}$',
        IBANRegistry: true,
    },
    DZ: {
        chars: 26,
        bban_regexp: '^[0-9]{22}$',
    },
    EC: {},
    EE: {
        chars: 20,
        bban_regexp: '^[0-9]{16}$',
        bban_validation_func: checkEstonianBBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    EG: { chars: 29, bban_regexp: '^[0-9]{25}', IBANRegistry: true },
    EH: {},
    ER: {},
    ES: {
        chars: 24,
        bban_validation_func: checkSpainBBAN,
        bban_regexp: '^[0-9]{20}$',
        IBANRegistry: true,
        SEPA: true,
    },
    ET: {},
    FI: {
        chars: 18,
        bban_regexp: '^[0-9]{14}$',
        bban_validation_func: checkFinlandBBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    FJ: {},
    FK: {},
    FM: {},
    FO: { chars: 18, bban_regexp: '^[0-9]{14}$', IBANRegistry: true },
    FR: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        bban_validation_func: checkFrenchBBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    GA: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    GB: {
        chars: 22,
        bban_regexp: '^[A-Z]{4}[0-9]{14}$',
        IBANRegistry: true,
        SEPA: true,
    },
    GD: {},
    GE: {
        chars: 22,
        bban_regexp: '^[A-Z0-9]{2}[0-9]{16}$',
        IBANRegistry: true,
    },
    GF: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    GG: {},
    GH: {},
    GI: {
        chars: 23,
        bban_regexp: '^[A-Z]{4}[A-Z0-9]{15}$',
        IBANRegistry: true,
        SEPA: true,
    },
    GL: { chars: 18, bban_regexp: '^[0-9]{14}$', IBANRegistry: true },
    GM: {},
    GN: {},
    GP: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    GQ: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    GR: {
        chars: 27,
        bban_regexp: '^[0-9]{7}[A-Z0-9]{16}$',
        IBANRegistry: true,
        SEPA: true,
    },
    GS: {},
    GT: {
        chars: 28,
        bban_regexp: '^[A-Z0-9]{24}$',
        IBANRegistry: true,
    },
    GU: {},
    GW: {
        chars: 25,
        bban_regexp: '^[A-Z]{2}[0-9]{19}$',
    },
    GY: {},
    HK: {},
    HM: {},
    HN: {
        chars: 28,
        bban_regexp: '^[A-Z]{4}[0-9]{20}$',
    },
    HR: {
        chars: 21,
        bban_regexp: '^[0-9]{17}$',
        bban_validation_func: checkCroatianBBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    HT: {},
    HU: {
        chars: 28,
        bban_regexp: '^[0-9]{24}$',
        bban_validation_func: checkHungarianBBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    ID: {},
    IE: {
        chars: 22,
        bban_regexp: '^[A-Z0-9]{4}[0-9]{14}$',
        IBANRegistry: true,
        SEPA: true,
    },
    IL: {
        chars: 23,
        bban_regexp: '^[0-9]{19}$',
        IBANRegistry: true,
    },
    IM: {},
    IN: {},
    IO: {},
    IQ: {
        chars: 23,
        bban_regexp: '^[A-Z]{4}[0-9]{15}$',
        IBANRegistry: true,
    },
    IR: {
        chars: 26,
        bban_regexp: '^[0-9]{22}$',
    },
    IS: { chars: 26, bban_regexp: '^[0-9]{22}$', IBANRegistry: true, SEPA: true },
    IT: {
        chars: 27,
        bban_regexp: '^[A-Z]{1}[0-9]{10}[A-Z0-9]{12}$',
        IBANRegistry: true,
        SEPA: true,
    },
    JE: {},
    JM: {},
    JO: {
        chars: 30,
        bban_regexp: '^[A-Z]{4}[0-9]{4}[A-Z0-9]{18}$',
        IBANRegistry: true,
    },
    JP: {},
    KE: {},
    KG: {},
    KH: {},
    KI: {},
    KM: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    KN: {},
    KP: {},
    KR: {},
    KW: {
        chars: 30,
        bban_regexp: '^[A-Z]{4}[A-Z0-9]{22}$',
        IBANRegistry: true,
    },
    KY: {},
    KZ: {
        chars: 20,
        bban_regexp: '^[0-9]{3}[A-Z0-9]{13}$',
        IBANRegistry: true,
    },
    LA: {},
    LB: {
        chars: 28,
        bban_regexp: '^[0-9]{4}[A-Z0-9]{20}$',
        IBANRegistry: true,
    },
    LC: {
        chars: 32,
        bban_regexp: '^[A-Z]{4}[A-Z0-9]{24}$',
        IBANRegistry: true,
    },
    LI: {
        chars: 21,
        bban_regexp: '^[0-9]{5}[A-Z0-9]{12}$',
        IBANRegistry: true,
        SEPA: true,
    },
    LK: {},
    LR: {},
    LS: {},
    LT: { chars: 20, bban_regexp: '^[0-9]{16}$', IBANRegistry: true, SEPA: true },
    LU: {
        chars: 20,
        bban_regexp: '^[0-9]{3}[A-Z0-9]{13}$',
        IBANRegistry: true,
        SEPA: true,
    },
    LV: {
        chars: 21,
        bban_regexp: '^[A-Z]{4}[A-Z0-9]{13}$',
        IBANRegistry: true,
        SEPA: true,
    },
    LY: {
        chars: 25,
        bban_regexp: '^[0-9]{21}$',
        IBANRegistry: true,
    },
    MA: {
        chars: 28,
        bban_regexp: '^[0-9]{24}$',
    },
    MC: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        bban_validation_func: checkFrenchBBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    MD: {
        chars: 24,
        bban_regexp: '^[A-Z0-9]{2}[A-Z0-9]{18}$',
        IBANRegistry: true,
    },
    ME: {
        chars: 22,
        bban_regexp: '^[0-9]{18}$',
        bban_validation_func: checkMod9710BBAN,
        IBANRegistry: true,
    },
    MF: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    MG: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    MH: {},
    MK: {
        chars: 19,
        bban_regexp: '^[0-9]{3}[A-Z0-9]{10}[0-9]{2}$',
        bban_validation_func: checkMod9710BBAN,
        IBANRegistry: true,
    },
    ML: {
        chars: 28,
        bban_regexp: '^[A-Z0-9]{2}[0-9]{22}$',
    },
    MM: {},
    MN: {
        chars: 20,
        bban_regexp: '^[0-9]{16}$',
    },
    MO: {},
    MP: {},
    MQ: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    MR: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
        IBANRegistry: true,
    },
    MS: {},
    MT: {
        chars: 31,
        bban_regexp: '^[A-Z]{4}[0-9]{5}[A-Z0-9]{18}$',
        IBANRegistry: true,
        SEPA: true,
    },
    MU: {
        chars: 30,
        bban_regexp: '^[A-Z]{4}[0-9]{19}[A-Z]{3}$',
        IBANRegistry: true,
    },
    MV: {},
    MW: {},
    MX: {},
    MY: {},
    MZ: {
        chars: 25,
        bban_regexp: '^[0-9]{21}$',
    },
    NA: {},
    NC: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    NE: {
        chars: 28,
        bban_regexp: '^[A-Z]{2}[0-9]{22}$',
    },
    NF: {},
    NG: {},
    NI: {
        chars: 32,
        bban_regexp: '^[A-Z]{4}[0-9]{24}$',
    },
    NL: {
        chars: 18,
        bban_regexp: '^[A-Z]{4}[0-9]{10}$',
        IBANRegistry: true,
        SEPA: true,
    },
    NO: {
        chars: 15,
        bban_regexp: '^[0-9]{11}$',
        bban_validation_func: checkNorwayBBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    NP: {},
    NR: {},
    NU: {},
    NZ: {},
    OM: {},
    PA: {},
    PE: {},
    PF: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    PG: {},
    PH: {},
    PK: {
        chars: 24,
        bban_regexp: '^[A-Z0-9]{4}[0-9]{16}$',
        IBANRegistry: true,
    },
    PL: { chars: 28, bban_validation_func: checkPolandBBAN, bban_regexp: '^[0-9]{24}$', IBANRegistry: true, SEPA: true },
    PM: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    PN: {},
    PR: {},
    PS: {
        chars: 29,
        bban_regexp: '^[A-Z0-9]{4}[0-9]{21}$',
        IBANRegistry: true,
    },
    PT: { chars: 25, bban_regexp: '^[0-9]{21}$', bban_validation_func: checkMod9710BBAN, IBANRegistry: true, SEPA: true },
    PW: {},
    PY: {},
    QA: {
        chars: 29,
        bban_regexp: '^[A-Z]{4}[A-Z0-9]{21}$',
        IBANRegistry: true,
    },
    RE: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    RO: {
        chars: 24,
        bban_regexp: '^[A-Z]{4}[A-Z0-9]{16}$',
        IBANRegistry: true,
        SEPA: true,
    },
    RS: {
        chars: 22,
        bban_regexp: '^[0-9]{18}$',
        bban_validation_func: checkMod9710BBAN,
        IBANRegistry: true,
    },
    RU: {
        chars: 33,
        bban_regexp: '^[0-9]{14}[A-Z0-9]{15}$',
        IBANRegistry: true,
    },
    RW: {},
    SA: {
        chars: 24,
        bban_regexp: '^[0-9]{2}[A-Z0-9]{18}$',
        IBANRegistry: true,
    },
    SB: {},
    SC: {
        chars: 31,
        bban_regexp: '^[A-Z]{4}[0-9]{20}[A-Z]{3}$',
        IBANRegistry: true,
    },
    SD: {},
    SE: { chars: 24, bban_regexp: '^[0-9]{20}$', IBANRegistry: true, SEPA: true },
    SG: {},
    SH: {},
    SI: {
        chars: 19,
        bban_regexp: '^[0-9]{15}$',
        bban_validation_func: checkMod9710BBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    SJ: {},
    SK: {
        chars: 24,
        bban_regexp: '^[0-9]{20}$',
        bban_validation_func: checkCzechAndSlovakBBAN,
        IBANRegistry: true,
        SEPA: true,
    },
    SL: {},
    SM: {
        chars: 27,
        bban_regexp: '^[A-Z]{1}[0-9]{10}[A-Z0-9]{12}$',
        IBANRegistry: true,
        SEPA: true,
    },
    SN: {
        chars: 28,
        bban_regexp: '^[A-Z]{2}[0-9]{22}$',
    },
    SO: {},
    SR: {},
    SS: {},
    ST: {
        chars: 25,
        bban_regexp: '^[0-9]{21}$',
        IBANRegistry: true,
    },
    SV: {
        chars: 28,
        bban_regexp: '^[A-Z]{4}[0-9]{20}$',
        IBANRegistry: true,
    },
    SX: {},
    SY: {},
    SZ: {},
    TC: {},
    TD: {
        chars: 27,
        bban_regexp: '^[0-9]{23}$',
    },
    TF: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    TG: {
        chars: 28,
        bban_regexp: '^[A-Z]{2}[0-9]{22}$',
    },
    TH: {},
    TJ: {},
    TK: {},
    TL: {
        chars: 23,
        bban_regexp: '^[0-9]{19}$',
        IBANRegistry: true,
    },
    TM: {},
    TN: {
        chars: 24,
        bban_regexp: '^[0-9]{20}$',
        IBANRegistry: true,
    },
    TO: {},
    TR: {
        chars: 26,
        bban_regexp: '^[0-9]{5}[A-Z0-9]{17}$',
        IBANRegistry: true,
    },
    TT: {},
    TV: {},
    TW: {},
    TZ: {},
    UA: {
        chars: 29,
        bban_regexp: '^[0-9]{6}[A-Z0-9]{19}$',
        IBANRegistry: true,
    },
    UG: {},
    UM: {},
    US: {},
    UY: {},
    UZ: {},
    VA: { chars: 22, bban_regexp: '^[0-9]{18}', IBANRegistry: true },
    VC: {},
    VE: {},
    VG: {
        chars: 24,
        bban_regexp: '^[A-Z0-9]{4}[0-9]{16}$',
        IBANRegistry: true,
    },
    VI: {},
    VN: {},
    VU: {},
    WF: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    WS: {},
    XK: {
        chars: 20,
        bban_regexp: '^[0-9]{16}$',
        IBANRegistry: true,
    },
    YE: {},
    YT: {
        chars: 27,
        bban_regexp: '^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$',
        IBANRegistry: true,
    },
    ZA: {},
    ZM: {},
    ZW: {},
};


/***/ }),

/***/ "./node_modules/react-input-mask/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-input-mask/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/react-input-mask.development.js */ "./node_modules/react-input-mask/lib/react-input-mask.development.js");
}


/***/ }),

/***/ "./node_modules/react-input-mask/lib/react-input-mask.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-input-mask/lib/react-input-mask.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function setInputSelection(input, start, end) {
  if ('selectionStart' in input && 'selectionEnd' in input) {
    input.selectionStart = start;
    input.selectionEnd = end;
  } else {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart('character', start);
    range.moveEnd('character', end - start);
    range.select();
  }
}
function getInputSelection(input) {
  var start = 0;
  var end = 0;

  if ('selectionStart' in input && 'selectionEnd' in input) {
    start = input.selectionStart;
    end = input.selectionEnd;
  } else {
    var range = document.selection.createRange();

    if (range.parentElement() === input) {
      start = -range.moveStart('character', -input.value.length);
      end = -range.moveEnd('character', -input.value.length);
    }
  }

  return {
    start: start,
    end: end,
    length: end - start
  };
}

var defaultFormatChars = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};
var defaultMaskChar = '_';

function parseMask (mask, maskChar, formatChars) {
  var parsedMaskString = '';
  var prefix = '';
  var lastEditablePosition = null;
  var permanents = [];

  if (maskChar === undefined) {
    maskChar = defaultMaskChar;
  }

  if (formatChars == null) {
    formatChars = defaultFormatChars;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      formatChars: formatChars,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  var isPermanent = false;
  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !formatChars[character]) {
        permanents.push(parsedMaskString.length);

        if (parsedMaskString.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePosition = parsedMaskString.length + 1;
      }

      parsedMaskString += character;
      isPermanent = false;
    }
  });
  return {
    maskChar: maskChar,
    formatChars: formatChars,
    prefix: prefix,
    mask: parsedMaskString,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */
function isPermanentCharacter(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      formatChars = maskOptions.formatChars;

  if (!character) {
    return false;
  }

  if (isPermanentCharacter(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = formatChars[ruleChar];
  return new RegExp(charRule).test(character);
}
function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentCharacter(maskOptions, i) || !isAllowedCharacter(maskOptions, i, character);
  });
}
function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    while (value.length > prefix.length && isPermanentCharacter(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  var filledLength = prefix.length;

  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentCharacter(maskOptions, i) && isAllowedCharacter(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}
function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);

    if (value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentCharacter(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentCharacter(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;
  var arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (var i = end; i < arrayValue.length; i++) {
      if (isPermanentCharacter(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentCharacter(maskOptions, i)) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
function insertString(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;
  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentCharacter(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPosition > value.length) {
    value += mask.slice(value.length, insertPosition);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      if (insertPosition >= value.length) {
        value += mask[insertPosition];
      }

      if (!isUsableCharacter(insertCharacter, insertPosition)) {
        return true;
      }

      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPosition < value.length) {
      if (maskChar || isInputFilled || insertPosition < prefix.length) {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
      } else {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPosition++; // stop iteration if maximum value length reached

    return insertPosition < mask.length;
  });
  return value;
}
function getInsertStringLength(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;
  var arrayInsertStr = insertStr.split('');
  var initialInsertPosition = insertPosition;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPosition++;
    } // stop iteration if maximum value length reached


    return insertPosition < mask.length;
  });
  return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition(maskOptions, pos) {
  for (var i = pos; i >= 0; --i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getRightEditablePosition(maskOptions, pos) {
  var mask = maskOptions.mask;

  for (var i = pos; i < mask.length; ++i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getStringValue(value) {
  return !value && value !== 0 ? '' : value + '';
}

function processChange(maskOptions, value, selection, previousValue, previousSelection) {
  var mask = maskOptions.mask,
      prefix = maskOptions.prefix,
      lastEditablePosition = maskOptions.lastEditablePosition;
  var newValue = value;
  var enteredString = '';
  var formattedEnteredStringLength = 0;
  var removedLength = 0;
  var cursorPosition = Math.min(previousSelection.start, selection.start);

  if (selection.end > previousSelection.start) {
    enteredString = newValue.slice(previousSelection.start, selection.end);
    formattedEnteredStringLength = getInsertStringLength(maskOptions, previousValue, enteredString, cursorPosition);

    if (!formattedEnteredStringLength) {
      removedLength = 0;
    } else {
      removedLength = previousSelection.length;
    }
  } else if (newValue.length < previousValue.length) {
    removedLength = previousValue.length - newValue.length;
  }

  newValue = previousValue;

  if (removedLength) {
    if (removedLength === 1 && !previousSelection.length) {
      var deleteFromRight = previousSelection.start === selection.start;
      cursorPosition = deleteFromRight ? getRightEditablePosition(maskOptions, selection.start) : getLeftEditablePosition(maskOptions, selection.start);
    }

    newValue = clearRange(maskOptions, newValue, cursorPosition, removedLength);
  }

  newValue = insertString(maskOptions, newValue, enteredString, cursorPosition);
  cursorPosition = cursorPosition + formattedEnteredStringLength;

  if (cursorPosition >= mask.length) {
    cursorPosition = mask.length;
  } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
    cursorPosition = prefix.length;
  } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
    cursorPosition = getRightEditablePosition(maskOptions, cursorPosition);
  }

  newValue = formatValue(maskOptions, newValue);

  if (!enteredString) {
    enteredString = null;
  }

  return {
    value: newValue,
    enteredString: enteredString,
    selection: {
      start: cursorPosition,
      end: cursorPosition
    }
  };
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isFunction(value) {
  return typeof value === 'function';
}

function getRequestAnimationFrame() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}

function getCancelAnimationFrame() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}

function defer(fn) {
  var hasCancelAnimationFrame = !!getCancelAnimationFrame();
  var deferFn;

  if (hasCancelAnimationFrame) {
    deferFn = getRequestAnimationFrame();
  } else {
    deferFn = function deferFn() {
      return setTimeout(fn, 1000 / 60);
    };
  }

  return deferFn(fn);
}
function cancelDefer(deferId) {
  var cancelFn = getCancelAnimationFrame() || clearTimeout;
  cancelFn(deferId);
}

var InputElement =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputElement, _React$Component);

  function InputElement(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.focused = false;
    _this.mounted = false;
    _this.previousSelection = null;
    _this.selectionDeferId = null;
    _this.saveSelectionLoopDeferId = null;

    _this.saveSelectionLoop = function () {
      _this.previousSelection = _this.getSelection();
      _this.saveSelectionLoopDeferId = defer(_this.saveSelectionLoop);
    };

    _this.runSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId === null) {
        _this.saveSelectionLoop();
      }
    };

    _this.stopSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId !== null) {
        cancelDefer(_this.saveSelectionLoopDeferId);
        _this.saveSelectionLoopDeferId = null;
        _this.previousSelection = null;
      }
    };

    _this.getInputDOMNode = function () {
      if (!_this.mounted) {
        return null;
      }

      var input = reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));
      var isDOMNode = typeof window !== 'undefined' && input instanceof window.Element; // workaround for react-test-renderer
      // https://github.com/sanniassin/react-input-mask/issues/147

      if (input && !isDOMNode) {
        return null;
      }

      if (input.nodeName !== 'INPUT') {
        input = input.querySelector('input');
      }

      if (!input) {
        throw new Error('react-input-mask: inputComponent doesn\'t contain input node');
      }

      return input;
    };

    _this.getInputValue = function () {
      var input = _this.getInputDOMNode();

      if (!input) {
        return null;
      }

      return input.value;
    };

    _this.setInputValue = function (value) {
      var input = _this.getInputDOMNode();

      if (!input) {
        return;
      }

      _this.value = value;
      input.value = value;
    };

    _this.setCursorToEnd = function () {
      var filledLength = getFilledLength(_this.maskOptions, _this.value);
      var pos = getRightEditablePosition(_this.maskOptions, filledLength);

      if (pos !== null) {
        _this.setCursorPosition(pos);
      }
    };

    _this.setSelection = function (start, end, options) {
      if (options === void 0) {
        options = {};
      }

      var input = _this.getInputDOMNode();

      var isFocused = _this.isFocused(); // don't change selection on unfocused input
      // because Safari sets focus on selection change (#154)


      if (!input || !isFocused) {
        return;
      }

      var _options = options,
          deferred = _options.deferred;

      if (!deferred) {
        setInputSelection(input, start, end);
      }

      if (_this.selectionDeferId !== null) {
        cancelDefer(_this.selectionDeferId);
      } // deferred selection update is required for pre-Lollipop Android browser,
      // but for consistent behavior we do it for all browsers


      _this.selectionDeferId = defer(function () {
        _this.selectionDeferId = null;
        setInputSelection(input, start, end);
      });
      _this.previousSelection = {
        start: start,
        end: end,
        length: Math.abs(end - start)
      };
    };

    _this.getSelection = function () {
      var input = _this.getInputDOMNode();

      return getInputSelection(input);
    };

    _this.getCursorPosition = function () {
      return _this.getSelection().start;
    };

    _this.setCursorPosition = function (pos) {
      _this.setSelection(pos, pos);
    };

    _this.isFocused = function () {
      return _this.focused;
    };

    _this.getBeforeMaskedValueChangeConfig = function () {
      var _this$maskOptions = _this.maskOptions,
          mask = _this$maskOptions.mask,
          maskChar = _this$maskOptions.maskChar,
          permanents = _this$maskOptions.permanents,
          formatChars = _this$maskOptions.formatChars;
      var alwaysShowMask = _this.props.alwaysShowMask;
      return {
        mask: mask,
        maskChar: maskChar,
        permanents: permanents,
        alwaysShowMask: !!alwaysShowMask,
        formatChars: formatChars
      };
    };

    _this.isInputAutofilled = function (value, selection, previousValue, previousSelection) {
      var input = _this.getInputDOMNode(); // only check for positive match because it will be false negative
      // in case of autofill simulation in tests
      //
      // input.matches throws an exception if selector isn't supported


      try {
        if (input.matches(':-webkit-autofill')) {
          return true;
        }
      } catch (e) {} // if input isn't focused then change event must have been triggered
      // either by autofill or event simulation in tests


      if (!_this.focused) {
        return true;
      } // if cursor has moved to the end while previousSelection forbids it
      // then it must be autofill


      return previousSelection.end < previousValue.length && selection.end === value.length;
    };

    _this.onChange = function (event) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          previousSelection = _assertThisInitialize2.previousSelection;

      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;

      var value = _this.getInputValue();

      var previousValue = _this.value;

      var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
      // https://github.com/sanniassin/react-input-mask/issues/113


      if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
        previousValue = formatValue(_this.maskOptions, '');
        previousSelection = {
          start: 0,
          end: 0,
          length: 0
        };
      } // set value and selection as if we haven't
      // cleared input in onPaste handler


      if (beforePasteState) {
        previousSelection = beforePasteState.selection;
        previousValue = beforePasteState.value;
        selection = {
          start: previousSelection.start + value.length,
          end: previousSelection.start + value.length,
          length: 0
        };
        value = previousValue.slice(0, previousSelection.start) + value + previousValue.slice(previousSelection.end);
        _this.beforePasteState = null;
      }

      var changedState = processChange(_this.maskOptions, value, selection, previousValue, previousSelection);
      var enteredString = changedState.enteredString;
      var newSelection = changedState.selection;
      var newValue = changedState.value;

      if (isFunction(beforeMaskedValueChange)) {
        var modifiedValue = beforeMaskedValueChange({
          value: newValue,
          selection: newSelection
        }, {
          value: previousValue,
          selection: previousSelection
        }, enteredString, _this.getBeforeMaskedValueChangeConfig());
        newValue = modifiedValue.value;
        newSelection = modifiedValue.selection;
      }

      _this.setInputValue(newValue);

      if (isFunction(_this.props.onChange)) {
        _this.props.onChange(event);
      }

      if (_this.isWindowsPhoneBrowser) {
        _this.setSelection(newSelection.start, newSelection.end, {
          deferred: true
        });
      } else {
        _this.setSelection(newSelection.start, newSelection.end);
      }
    };

    _this.onFocus = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var _this$maskOptions2 = _this.maskOptions,
          mask = _this$maskOptions2.mask,
          prefix = _this$maskOptions2.prefix;
      _this.focused = true; // if autoFocus is set, onFocus triggers before componentDidMount

      _this.mounted = true;

      if (mask) {
        if (!_this.value) {
          var emptyValue = formatValue(_this.maskOptions, prefix);
          var newValue = formatValue(_this.maskOptions, emptyValue);
          var filledLength = getFilledLength(_this.maskOptions, newValue);
          var cursorPosition = getRightEditablePosition(_this.maskOptions, filledLength);
          var newSelection = {
            start: cursorPosition,
            end: cursorPosition
          };

          if (isFunction(beforeMaskedValueChange)) {
            var modifiedValue = beforeMaskedValueChange({
              value: newValue,
              selection: newSelection
            }, {
              value: _this.value,
              selection: null
            }, null, _this.getBeforeMaskedValueChangeConfig());
            newValue = modifiedValue.value;
            newSelection = modifiedValue.selection;
          }

          var isInputValueChanged = newValue !== _this.getInputValue();

          if (isInputValueChanged) {
            _this.setInputValue(newValue);
          }

          if (isInputValueChanged && isFunction(_this.props.onChange)) {
            _this.props.onChange(event);
          }

          _this.setSelection(newSelection.start, newSelection.end);
        } else if (getFilledLength(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
          _this.setCursorToEnd();
        }

        _this.runSaveSelectionLoop();
      }

      if (isFunction(_this.props.onFocus)) {
        _this.props.onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var mask = _this.maskOptions.mask;

      _this.stopSaveSelectionLoop();

      _this.focused = false;

      if (mask && !_this.props.alwaysShowMask && isEmpty(_this.maskOptions, _this.value)) {
        var newValue = '';

        if (isFunction(beforeMaskedValueChange)) {
          var modifiedValue = beforeMaskedValueChange({
            value: newValue,
            selection: null
          }, {
            value: _this.value,
            selection: _this.previousSelection
          }, null, _this.getBeforeMaskedValueChangeConfig());
          newValue = modifiedValue.value;
        }

        var isInputValueChanged = newValue !== _this.getInputValue();

        if (isInputValueChanged) {
          _this.setInputValue(newValue);
        }

        if (isInputValueChanged && isFunction(_this.props.onChange)) {
          _this.props.onChange(event);
        }
      }

      if (isFunction(_this.props.onBlur)) {
        _this.props.onBlur(event);
      }
    };

    _this.onMouseDown = function (event) {
      // tiny unintentional mouse movements can break cursor
      // position on focus, so we have to restore it in that case
      //
      // https://github.com/sanniassin/react-input-mask/issues/108
      if (!_this.focused && document.addEventListener) {
        _this.mouseDownX = event.clientX;
        _this.mouseDownY = event.clientY;
        _this.mouseDownTime = new Date().getTime();

        var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
          document.removeEventListener('mouseup', mouseUpHandler);

          if (!_this.focused) {
            return;
          }

          var deltaX = Math.abs(mouseUpEvent.clientX - _this.mouseDownX);
          var deltaY = Math.abs(mouseUpEvent.clientY - _this.mouseDownY);
          var axisDelta = Math.max(deltaX, deltaY);

          var timeDelta = new Date().getTime() - _this.mouseDownTime;

          if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
            _this.setCursorToEnd();
          }
        };

        document.addEventListener('mouseup', mouseUpHandler);
      }

      if (isFunction(_this.props.onMouseDown)) {
        _this.props.onMouseDown(event);
      }
    };

    _this.onPaste = function (event) {
      if (isFunction(_this.props.onPaste)) {
        _this.props.onPaste(event);
      } // event.clipboardData might not work in Android browser
      // cleaning input to get raw text inside onChange handler


      if (!event.defaultPrevented) {
        _this.beforePasteState = {
          value: _this.getInputValue(),
          selection: _this.getSelection()
        };

        _this.setInputValue('');
      }
    };

    _this.handleRef = function (ref) {
      if (_this.props.children == null && isFunction(_this.props.inputRef)) {
        _this.props.inputRef(ref);
      }
    };

    var _mask = props.mask,
        _maskChar = props.maskChar,
        _formatChars = props.formatChars,
        _alwaysShowMask = props.alwaysShowMask,
        _beforeMaskedValueChange = props.beforeMaskedValueChange;
    var defaultValue = props.defaultValue,
        _value = props.value;
    _this.maskOptions = parseMask(_mask, _maskChar, _formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }

    if (_value == null) {
      _value = defaultValue;
    }

    var _newValue = getStringValue(_value);

    if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
      _newValue = formatValue(_this.maskOptions, _newValue);

      if (isFunction(_beforeMaskedValueChange)) {
        var oldValue = props.value;

        if (props.value == null) {
          oldValue = defaultValue;
        }

        oldValue = getStringValue(oldValue);

        var modifiedValue = _beforeMaskedValueChange({
          value: _newValue,
          selection: null
        }, {
          value: oldValue,
          selection: null
        }, null, _this.getBeforeMaskedValueChangeConfig());

        _newValue = modifiedValue.value;
      }
    }

    _this.value = _newValue;
    return _this;
  }

  var _proto = InputElement.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true; // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!this.getInputDOMNode()) {
      return;
    }

    this.isWindowsPhoneBrowser = isWindowsPhoneBrowser();

    if (this.maskOptions.mask && this.getInputValue() !== this.value) {
      this.setInputValue(this.value);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var previousSelection = this.previousSelection;
    var _this$props = this.props,
        beforeMaskedValueChange = _this$props.beforeMaskedValueChange,
        alwaysShowMask = _this$props.alwaysShowMask,
        mask = _this$props.mask,
        maskChar = _this$props.maskChar,
        formatChars = _this$props.formatChars;
    var previousMaskOptions = this.maskOptions;
    var showEmpty = alwaysShowMask || this.isFocused();
    var hasValue = this.props.value != null;
    var newValue = hasValue ? getStringValue(this.props.value) : this.value;
    var cursorPosition = previousSelection ? previousSelection.start : null;
    this.maskOptions = parseMask(mask, maskChar, formatChars);

    if (!this.maskOptions.mask) {
      if (previousMaskOptions.mask) {
        this.stopSaveSelectionLoop(); // render depends on this.maskOptions and this.value,
        // call forceUpdate to keep it in sync

        this.forceUpdate();
      }

      return;
    } else if (!previousMaskOptions.mask && this.isFocused()) {
      this.runSaveSelectionLoop();
    }

    var isMaskChanged = this.maskOptions.mask && this.maskOptions.mask !== previousMaskOptions.mask;

    if (!previousMaskOptions.mask && !hasValue) {
      newValue = this.getInputValue();
    }

    if (isMaskChanged || this.maskOptions.mask && (newValue || showEmpty)) {
      newValue = formatValue(this.maskOptions, newValue);
    }

    if (isMaskChanged) {
      var filledLength = getFilledLength(this.maskOptions, newValue);

      if (cursorPosition === null || filledLength < cursorPosition) {
        if (isFilled(this.maskOptions, newValue)) {
          cursorPosition = filledLength;
        } else {
          cursorPosition = getRightEditablePosition(this.maskOptions, filledLength);
        }
      }
    }

    if (this.maskOptions.mask && isEmpty(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
      newValue = '';
    }

    var newSelection = {
      start: cursorPosition,
      end: cursorPosition
    };

    if (isFunction(beforeMaskedValueChange)) {
      var modifiedValue = beforeMaskedValueChange({
        value: newValue,
        selection: newSelection
      }, {
        value: this.value,
        selection: this.previousSelection
      }, null, this.getBeforeMaskedValueChangeConfig());
      newValue = modifiedValue.value;
      newSelection = modifiedValue.selection;
    }

    this.value = newValue;
    var isValueChanged = this.getInputValue() !== this.value; // render depends on this.maskOptions and this.value,
    // call forceUpdate to keep it in sync

    if (isValueChanged) {
      this.setInputValue(this.value);
      this.forceUpdate();
    } else if (isMaskChanged) {
      this.forceUpdate();
    }

    var isSelectionChanged = false;

    if (newSelection.start != null && newSelection.end != null) {
      isSelectionChanged = !previousSelection || previousSelection.start !== newSelection.start || previousSelection.end !== newSelection.end;
    }

    if (isSelectionChanged || isValueChanged) {
      this.setSelection(newSelection.start, newSelection.end);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;

    if (this.selectionDeferId !== null) {
      cancelDefer(this.selectionDeferId);
    }

    this.stopSaveSelectionLoop();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        mask = _this$props2.mask,
        alwaysShowMask = _this$props2.alwaysShowMask,
        maskChar = _this$props2.maskChar,
        formatChars = _this$props2.formatChars,
        inputRef = _this$props2.inputRef,
        beforeMaskedValueChange = _this$props2.beforeMaskedValueChange,
        children = _this$props2.children,
        restProps = _objectWithoutPropertiesLoose(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
     true ? warning( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : undefined;

    if (children) {
      !isFunction(children) ?  true ? invariant(false, 'react-input-mask: children must be a function') : undefined : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends({}, restProps);

      controlledProps.forEach(function (propId) {
        return delete childrenProps[propId];
      });
      inputElement = children(childrenProps);
      var conflictProps = controlledProps.filter(function (propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
      });
      !!conflictProps.length ?  true ? invariant(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : undefined : void 0;
       true ? warning(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : undefined;
    } else {
      inputElement = React.createElement("input", _extends({
        ref: this.handleRef
      }, restProps));
    }

    var changedProps = {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };

    if (this.maskOptions.mask) {
      if (!restProps.disabled && !restProps.readOnly) {
        changedProps.onChange = this.onChange;
        changedProps.onPaste = this.onPaste;
        changedProps.onMouseDown = this.onMouseDown;
      }

      if (restProps.value != null) {
        changedProps.value = this.value;
      }
    }

    inputElement = React.cloneElement(inputElement, changedProps);
    return inputElement;
  };

  return InputElement;
}(React.Component);

module.exports = InputElement;


/***/ }),

/***/ "./node_modules/react-router-dom/cjs/react-router-dom.min.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-router-dom/cjs/react-router-dom.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var reactRouter=__webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js"),React=_interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),history=__webpack_require__(/*! history */ "./node_modules/history/esm/history.js");__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");var invariant=_interopDefault(__webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js"));function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),_setPrototypeOf(e.prototype.constructor=e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],0<=t.indexOf(r)||(n[r]=e[r]);return n}var BrowserRouter=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).history=history.createBrowserHistory(e.props),e}return _inheritsLoose(e,n),e.prototype.render=function(){return React.createElement(reactRouter.Router,{history:this.history,children:this.props.children})},e}(React.Component),HashRouter=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).history=history.createHashHistory(e.props),e}return _inheritsLoose(e,n),e.prototype.render=function(){return React.createElement(reactRouter.Router,{history:this.history,children:this.props.children})},e}(React.Component),resolveToLocation=function(e,t){return"function"==typeof e?e(t):e},normalizeToLocation=function(e,t){return"string"==typeof e?history.createLocation(e,null,null,t):e},forwardRefShim=function(e){return e},forwardRef=React.forwardRef;function isModifiedEvent(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}void 0===forwardRef&&(forwardRef=forwardRefShim);var LinkAnchor=forwardRef(function(e,t){var r=e.innerRef,o=e.navigate,n=e.onClick,a=_objectWithoutPropertiesLoose(e,["innerRef","navigate","onClick"]),i=a.target,c=_extends({},a,{onClick:function(t){try{n&&n(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||i&&"_self"!==i||isModifiedEvent(t)||(t.preventDefault(),o())}});return c.ref=forwardRefShim!==forwardRef&&t||r,React.createElement("a",c)}),Link=forwardRef(function(e,a){var t=e.component,i=void 0===t?LinkAnchor:t,c=e.replace,u=e.to,f=e.innerRef,s=_objectWithoutPropertiesLoose(e,["component","replace","to","innerRef"]);return React.createElement(reactRouter.__RouterContext.Consumer,null,function(r){r||invariant(!1);var o=r.history,e=normalizeToLocation(resolveToLocation(u,r.location),r.location),t=e?o.createHref(e):"",n=_extends({},s,{href:t,navigate:function(){var e=resolveToLocation(u,r.location),t=history.createPath(r.location)===history.createPath(normalizeToLocation(e));(c||t?o.replace:o.push)(e)}});return forwardRefShim!==forwardRef?n.ref=a||f:n.innerRef=f,React.createElement(i,n)})}),forwardRefShim$1=function(e){return e},forwardRef$1=React.forwardRef;function joinClassnames(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(function(e){return e}).join(" ")}void 0===forwardRef$1&&(forwardRef$1=forwardRefShim$1);var NavLink=forwardRef$1(function(e,s){var t=e["aria-current"],l=void 0===t?"page":t,r=e.activeClassName,p=void 0===r?"active":r,R=e.activeStyle,h=e.className,y=e.exact,d=e.isActive,m=e.location,v=e.sensitive,b=e.strict,P=e.style,w=e.to,x=e.innerRef,g=_objectWithoutPropertiesLoose(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return React.createElement(reactRouter.__RouterContext.Consumer,null,function(e){e||invariant(!1);var t=m||e.location,r=normalizeToLocation(resolveToLocation(w,t),t),o=r.pathname,n=o&&o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),a=n?reactRouter.matchPath(t.pathname,{path:n,exact:y,sensitive:v,strict:b}):null,i=!!(d?d(a,t):a),c="function"==typeof h?h(i):h,u="function"==typeof P?P(i):P;i&&(c=joinClassnames(c,p),u=_extends({},u,R));var f=_extends({"aria-current":i&&l||null,className:c,style:u,to:r},g);return forwardRefShim$1!==forwardRef$1?f.ref=s||x:f.innerRef=x,React.createElement(Link,f)})});Object.defineProperty(exports,"MemoryRouter",{enumerable:!0,get:function(){return reactRouter.MemoryRouter}}),Object.defineProperty(exports,"Prompt",{enumerable:!0,get:function(){return reactRouter.Prompt}}),Object.defineProperty(exports,"Redirect",{enumerable:!0,get:function(){return reactRouter.Redirect}}),Object.defineProperty(exports,"Route",{enumerable:!0,get:function(){return reactRouter.Route}}),Object.defineProperty(exports,"Router",{enumerable:!0,get:function(){return reactRouter.Router}}),Object.defineProperty(exports,"StaticRouter",{enumerable:!0,get:function(){return reactRouter.StaticRouter}}),Object.defineProperty(exports,"Switch",{enumerable:!0,get:function(){return reactRouter.Switch}}),Object.defineProperty(exports,"generatePath",{enumerable:!0,get:function(){return reactRouter.generatePath}}),Object.defineProperty(exports,"matchPath",{enumerable:!0,get:function(){return reactRouter.matchPath}}),Object.defineProperty(exports,"useHistory",{enumerable:!0,get:function(){return reactRouter.useHistory}}),Object.defineProperty(exports,"useLocation",{enumerable:!0,get:function(){return reactRouter.useLocation}}),Object.defineProperty(exports,"useParams",{enumerable:!0,get:function(){return reactRouter.useParams}}),Object.defineProperty(exports,"useRouteMatch",{enumerable:!0,get:function(){return reactRouter.useRouteMatch}}),Object.defineProperty(exports,"withRouter",{enumerable:!0,get:function(){return reactRouter.withRouter}}),exports.BrowserRouter=BrowserRouter,exports.HashRouter=HashRouter,exports.Link=Link,exports.NavLink=NavLink;
//# sourceMappingURL=react-router-dom.min.js.map


/***/ })

}]);