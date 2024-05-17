/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Buyer, Item } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartCreateFormInputValues = {
    buyer?: Buyer;
    items?: Item[];
    qtype?: string;
};
export declare type CartCreateFormValidationValues = {
    buyer?: ValidationFunction<Buyer>;
    items?: ValidationFunction<Item>;
    qtype?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartCreateFormOverridesProps = {
    CartCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    buyer?: PrimitiveOverrideProps<AutocompleteProps>;
    items?: PrimitiveOverrideProps<AutocompleteProps>;
    qtype?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartCreateFormProps = React.PropsWithChildren<{
    overrides?: CartCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CartCreateFormInputValues) => CartCreateFormInputValues;
    onSuccess?: (fields: CartCreateFormInputValues) => void;
    onError?: (fields: CartCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartCreateFormInputValues) => CartCreateFormInputValues;
    onValidate?: CartCreateFormValidationValues;
} & React.CSSProperties>;
export default function CartCreateForm(props: CartCreateFormProps): React.ReactElement;
