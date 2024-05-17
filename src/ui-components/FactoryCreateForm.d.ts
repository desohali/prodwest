/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Product } from "../models";
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
export declare type FactoryCreateFormInputValues = {
    name?: string;
    url?: string;
    order_contacts?: string[];
    products?: Product[];
    qtype?: string;
};
export declare type FactoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    order_contacts?: ValidationFunction<string>;
    products?: ValidationFunction<Product>;
    qtype?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FactoryCreateFormOverridesProps = {
    FactoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    order_contacts?: PrimitiveOverrideProps<TextFieldProps>;
    products?: PrimitiveOverrideProps<AutocompleteProps>;
    qtype?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FactoryCreateFormProps = React.PropsWithChildren<{
    overrides?: FactoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FactoryCreateFormInputValues) => FactoryCreateFormInputValues;
    onSuccess?: (fields: FactoryCreateFormInputValues) => void;
    onError?: (fields: FactoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FactoryCreateFormInputValues) => FactoryCreateFormInputValues;
    onValidate?: FactoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function FactoryCreateForm(props: FactoryCreateFormProps): React.ReactElement;
