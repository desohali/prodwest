/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Business } from "../models";
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
export declare type AddressCreateFormInputValues = {
    street?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
    is_default?: boolean;
    business?: Business;
    qtype?: string;
};
export declare type AddressCreateFormValidationValues = {
    street?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    postal_code?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    is_default?: ValidationFunction<boolean>;
    business?: ValidationFunction<Business>;
    qtype?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddressCreateFormOverridesProps = {
    AddressCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    street?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    postal_code?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    is_default?: PrimitiveOverrideProps<SwitchFieldProps>;
    business?: PrimitiveOverrideProps<AutocompleteProps>;
    qtype?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddressCreateFormProps = React.PropsWithChildren<{
    overrides?: AddressCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AddressCreateFormInputValues) => AddressCreateFormInputValues;
    onSuccess?: (fields: AddressCreateFormInputValues) => void;
    onError?: (fields: AddressCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AddressCreateFormInputValues) => AddressCreateFormInputValues;
    onValidate?: AddressCreateFormValidationValues;
} & React.CSSProperties>;
export default function AddressCreateForm(props: AddressCreateFormProps): React.ReactElement;
