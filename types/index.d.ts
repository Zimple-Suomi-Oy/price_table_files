export declare type Languages = "fi" | "en";
export interface TableConfig {
    blocks: {
        blockHeader: string;
        rows: {
            header: string;
            values: {
                additionalText: null | string;
                isSvg: boolean;
                value: "f" | "s";
            }[];
        }[];
    }[];
    colTitles: string[];
    icons: {
        f: string;
        s: string;
    };
}
