/**
 * Resolves the problem of underlining 'window.ethereum' as error by typescript check:
 *
 * See here for further explanation:
 * https://ethereum.stackexchange.com/questions/94439/trying-to-use-window-ethereum-request-in-typescript-errors-out-with-property-re
 */
/// <reference types="react-scripts" />

interface Window {
    ethereum: any;
}