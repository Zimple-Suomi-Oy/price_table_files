/**
 * This component handles the row
 * @param props
 * @returns
 */
export default function GridRow(props: {
    children: any;
    isHeader?: boolean;
}): import("preact").JSX.Element;
/**
 * This component handles the cell
 * @param props
 * @returns
 */
export declare function GridCell(props: {
    children?: any;
}): import("preact").JSX.Element;
