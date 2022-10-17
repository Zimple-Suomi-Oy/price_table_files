import { Languages, TableConfig } from "../types";
/**
 * Simple translator tool
 * @param lang
 * @param key
 * @returns {string}
 */
export declare function translate(lang: Languages, key: string): string;
export declare function getPriceTable(lang: Languages): Promise<TableConfig>;
export declare function isMobileMode(): boolean;
