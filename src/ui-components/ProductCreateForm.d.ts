/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { Tag, Factory } from "../models";
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
export declare type ProductCreateFormInputValues = {
    name?: string;
    msrp?: number;
    price?: number;
    sku?: string;
    description?: string;
    available?: string;
    media?: string[];
    item_weight_net?: number;
    item_weight_gross?: number;
    item_size_width?: number;
    item_size_depth?: number;
    item_size_height?: number;
    package_weight_net?: number;
    package_weight_gross?: number;
    package_size_width?: number;
    package_size_depth?: number;
    package_size_height?: number;
    items_per_package?: number;
    tags?: Tag[];
    factory?: Factory;
    updated_at?: string;
    qtype?: string;
};
export declare type ProductCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    msrp?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    sku?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    available?: ValidationFunction<string>;
    media?: ValidationFunction<string>;
    item_weight_net?: ValidationFunction<number>;
    item_weight_gross?: ValidationFunction<number>;
    item_size_width?: ValidationFunction<number>;
    item_size_depth?: ValidationFunction<number>;
    item_size_height?: ValidationFunction<number>;
    package_weight_net?: ValidationFunction<number>;
    package_weight_gross?: ValidationFunction<number>;
    package_size_width?: ValidationFunction<number>;
    package_size_depth?: ValidationFunction<number>;
    package_size_height?: ValidationFunction<number>;
    items_per_package?: ValidationFunction<number>;
    tags?: ValidationFunction<Tag>;
    factory?: ValidationFunction<Factory>;
    updated_at?: ValidationFunction<string>;
    qtype?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCreateFormOverridesProps = {
    ProductCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    msrp?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    sku?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    available?: PrimitiveOverrideProps<SelectFieldProps>;
    media?: PrimitiveOverrideProps<StorageManagerProps>;
    item_weight_net?: PrimitiveOverrideProps<TextFieldProps>;
    item_weight_gross?: PrimitiveOverrideProps<TextFieldProps>;
    item_size_width?: PrimitiveOverrideProps<TextFieldProps>;
    item_size_depth?: PrimitiveOverrideProps<TextFieldProps>;
    item_size_height?: PrimitiveOverrideProps<TextFieldProps>;
    package_weight_net?: PrimitiveOverrideProps<TextFieldProps>;
    package_weight_gross?: PrimitiveOverrideProps<TextFieldProps>;
    package_size_width?: PrimitiveOverrideProps<TextFieldProps>;
    package_size_depth?: PrimitiveOverrideProps<TextFieldProps>;
    package_size_height?: PrimitiveOverrideProps<TextFieldProps>;
    items_per_package?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<AutocompleteProps>;
    factory?: PrimitiveOverrideProps<AutocompleteProps>;
    updated_at?: PrimitiveOverrideProps<TextFieldProps>;
    qtype?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onSuccess?: (fields: ProductCreateFormInputValues) => void;
    onError?: (fields: ProductCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onValidate?: ProductCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCreateForm(props: ProductCreateFormProps): React.ReactElement;
