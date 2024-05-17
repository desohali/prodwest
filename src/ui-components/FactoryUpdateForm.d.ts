/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Factory, Product } from "../models";
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
export declare type FactoryUpdateFormInputValues = {
    name?: string;
    url?: string;
    order_contacts?: string[];
    products?: Product[];
    qtype?: string;
};
export declare type FactoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    order_contacts?: ValidationFunction<string>;
    products?: ValidationFunction<Product>;
    qtype?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FactoryUpdateFormOverridesProps = {
    FactoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    order_contacts?: PrimitiveOverrideProps<TextFieldProps>;
    products?: PrimitiveOverrideProps<AutocompleteProps>;
    qtype?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FactoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: FactoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    factory?: Factory;
    onSubmit?: (fields: FactoryUpdateFormInputValues) => FactoryUpdateFormInputValues;
    onSuccess?: (fields: FactoryUpdateFormInputValues) => void;
    onError?: (fields: FactoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FactoryUpdateFormInputValues) => FactoryUpdateFormInputValues;
    onValidate?: FactoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FactoryUpdateForm(props: FactoryUpdateFormProps): React.ReactElement;
