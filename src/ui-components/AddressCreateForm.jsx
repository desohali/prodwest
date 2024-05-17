/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Address, Business } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function AddressCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    street: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    is_default: false,
    business: undefined,
    qtype: "",
  };
  const [street, setStreet] = React.useState(initialValues.street);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [postal_code, setPostal_code] = React.useState(
    initialValues.postal_code
  );
  const [country, setCountry] = React.useState(initialValues.country);
  const [is_default, setIs_default] = React.useState(initialValues.is_default);
  const [business, setBusiness] = React.useState(initialValues.business);
  const [qtype, setQtype] = React.useState(initialValues.qtype);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStreet(initialValues.street);
    setCity(initialValues.city);
    setState(initialValues.state);
    setPostal_code(initialValues.postal_code);
    setCountry(initialValues.country);
    setIs_default(initialValues.is_default);
    setBusiness(initialValues.business);
    setCurrentBusinessValue(undefined);
    setCurrentBusinessDisplayValue("");
    setQtype(initialValues.qtype);
    setErrors({});
  };
  const [currentBusinessDisplayValue, setCurrentBusinessDisplayValue] =
    React.useState("");
  const [currentBusinessValue, setCurrentBusinessValue] =
    React.useState(undefined);
  const businessRef = React.createRef();
  const getIDValue = {
    business: (r) => JSON.stringify({ id: r?.id }),
  };
  const businessIdSet = new Set(
    Array.isArray(business)
      ? business.map((r) => getIDValue.business?.(r))
      : getIDValue.business?.(business)
  );
  const businessRecords = useDataStoreBinding({
    type: "collection",
    model: Business,
  }).items;
  const getDisplayValue = {
    business: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    street: [{ type: "Required" }],
    city: [{ type: "Required" }],
    state: [{ type: "Required" }],
    postal_code: [{ type: "Required" }],
    country: [{ type: "Required" }],
    is_default: [],
    business: [],
    qtype: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          street,
          city,
          state,
          postal_code,
          country,
          is_default,
          business,
          qtype,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Address(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AddressCreateForm")}
      {...rest}
    >
      <TextField
        label="Street"
        isRequired={true}
        isReadOnly={false}
        value={street}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              street: value,
              city,
              state,
              postal_code,
              country,
              is_default,
              business,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.street ?? value;
          }
          if (errors.street?.hasError) {
            runValidationTasks("street", value);
          }
          setStreet(value);
        }}
        onBlur={() => runValidationTasks("street", street)}
        errorMessage={errors.street?.errorMessage}
        hasError={errors.street?.hasError}
        {...getOverrideProps(overrides, "street")}
      ></TextField>
      <TextField
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              street,
              city: value,
              state,
              postal_code,
              country,
              is_default,
              business,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={true}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              street,
              city,
              state: value,
              postal_code,
              country,
              is_default,
              business,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Postal code"
        isRequired={true}
        isReadOnly={false}
        value={postal_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              street,
              city,
              state,
              postal_code: value,
              country,
              is_default,
              business,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.postal_code ?? value;
          }
          if (errors.postal_code?.hasError) {
            runValidationTasks("postal_code", value);
          }
          setPostal_code(value);
        }}
        onBlur={() => runValidationTasks("postal_code", postal_code)}
        errorMessage={errors.postal_code?.errorMessage}
        hasError={errors.postal_code?.hasError}
        {...getOverrideProps(overrides, "postal_code")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={true}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              street,
              city,
              state,
              postal_code,
              country: value,
              is_default,
              business,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <SwitchField
        label="Is default"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_default}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              street,
              city,
              state,
              postal_code,
              country,
              is_default: value,
              business,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.is_default ?? value;
          }
          if (errors.is_default?.hasError) {
            runValidationTasks("is_default", value);
          }
          setIs_default(value);
        }}
        onBlur={() => runValidationTasks("is_default", is_default)}
        errorMessage={errors.is_default?.errorMessage}
        hasError={errors.is_default?.hasError}
        {...getOverrideProps(overrides, "is_default")}
      ></SwitchField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              street,
              city,
              state,
              postal_code,
              country,
              is_default,
              business: value,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.business ?? value;
          }
          setBusiness(value);
          setCurrentBusinessValue(undefined);
          setCurrentBusinessDisplayValue("");
        }}
        currentFieldValue={currentBusinessValue}
        label={"Business"}
        items={business ? [business] : []}
        hasError={errors?.business?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("business", currentBusinessValue)
        }
        errorMessage={errors?.business?.errorMessage}
        getBadgeText={getDisplayValue.business}
        setFieldValue={(model) => {
          setCurrentBusinessDisplayValue(
            model ? getDisplayValue.business(model) : ""
          );
          setCurrentBusinessValue(model);
        }}
        inputFieldRef={businessRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Business"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Business"
          value={currentBusinessDisplayValue}
          options={businessRecords
            .filter((r) => !businessIdSet.has(getIDValue.business?.(r)))
            .map((r) => ({
              id: getIDValue.business?.(r),
              label: getDisplayValue.business?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBusinessValue(
              businessRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBusinessDisplayValue(label);
            runValidationTasks("business", label);
          }}
          onClear={() => {
            setCurrentBusinessDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.business?.hasError) {
              runValidationTasks("business", value);
            }
            setCurrentBusinessDisplayValue(value);
            setCurrentBusinessValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("business", currentBusinessDisplayValue)
          }
          errorMessage={errors.business?.errorMessage}
          hasError={errors.business?.hasError}
          ref={businessRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "business")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Qtype"
        isRequired={false}
        isReadOnly={false}
        value={qtype}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              street,
              city,
              state,
              postal_code,
              country,
              is_default,
              business,
              qtype: value,
            };
            const result = onChange(modelFields);
            value = result?.qtype ?? value;
          }
          if (errors.qtype?.hasError) {
            runValidationTasks("qtype", value);
          }
          setQtype(value);
        }}
        onBlur={() => runValidationTasks("qtype", qtype)}
        errorMessage={errors.qtype?.errorMessage}
        hasError={errors.qtype?.hasError}
        {...getOverrideProps(overrides, "qtype")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
