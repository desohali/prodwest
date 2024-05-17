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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Cart, Buyer, Item } from "../models";
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
export default function CartUpdateForm(props) {
  const {
    id: idProp,
    cart: cartModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    buyer: undefined,
    items: [],
    qtype: "",
  };
  const [buyer, setBuyer] = React.useState(initialValues.buyer);
  const [items, setItems] = React.useState(initialValues.items);
  const [qtype, setQtype] = React.useState(initialValues.qtype);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cartRecord
      ? { ...initialValues, ...cartRecord, buyer, items: linkedItems }
      : initialValues;
    setBuyer(cleanValues.buyer);
    setCurrentBuyerValue(undefined);
    setCurrentBuyerDisplayValue("");
    setItems(cleanValues.items ?? []);
    setCurrentItemsValue(undefined);
    setCurrentItemsDisplayValue("");
    setQtype(cleanValues.qtype);
    setErrors({});
  };
  const [cartRecord, setCartRecord] = React.useState(cartModelProp);
  const [linkedItems, setLinkedItems] = React.useState([]);
  const canUnlinkItems = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Cart, idProp)
        : cartModelProp;
      setCartRecord(record);
      const buyerRecord = record ? await record.buyer : undefined;
      setBuyer(buyerRecord);
      const linkedItems = record ? await record.items.toArray() : [];
      setLinkedItems(linkedItems);
    };
    queryData();
  }, [idProp, cartModelProp]);
  React.useEffect(resetStateValues, [cartRecord, buyer, linkedItems]);
  const [currentBuyerDisplayValue, setCurrentBuyerDisplayValue] =
    React.useState("");
  const [currentBuyerValue, setCurrentBuyerValue] = React.useState(undefined);
  const buyerRef = React.createRef();
  const [currentItemsDisplayValue, setCurrentItemsDisplayValue] =
    React.useState("");
  const [currentItemsValue, setCurrentItemsValue] = React.useState(undefined);
  const itemsRef = React.createRef();
  const getIDValue = {
    buyer: (r) => JSON.stringify({ id: r?.id }),
    items: (r) => JSON.stringify({ id: r?.id }),
  };
  const buyerIdSet = new Set(
    Array.isArray(buyer)
      ? buyer.map((r) => getIDValue.buyer?.(r))
      : getIDValue.buyer?.(buyer)
  );
  const itemsIdSet = new Set(
    Array.isArray(items)
      ? items.map((r) => getIDValue.items?.(r))
      : getIDValue.items?.(items)
  );
  const buyerRecords = useDataStoreBinding({
    type: "collection",
    model: Buyer,
  }).items;
  const itemRecords = useDataStoreBinding({
    type: "collection",
    model: Item,
  }).items;
  const getDisplayValue = {
    buyer: (r) => `${r?.first_name ? r?.first_name + " - " : ""}${r?.id}`,
    items: (r) => `${r?.id}`,
  };
  const validations = {
    buyer: [],
    items: [],
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
          buyer,
          items,
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
          const promises = [];
          const buyerToUnlink = await cartRecord.buyer;
          if (buyerToUnlink) {
            promises.push(
              DataStore.save(
                Buyer.copyOf(buyerToUnlink, (updated) => {
                  updated.cart = undefined;
                  updated.cart_id = undefined;
                })
              )
            );
          }
          const buyerToLink = modelFields.buyer;
          if (buyerToLink) {
            promises.push(
              DataStore.save(
                Buyer.copyOf(buyerToLink, (updated) => {
                  updated.cart = cartRecord;
                })
              )
            );
            const cartToUnlink = await buyerToLink.cart;
            if (cartToUnlink) {
              promises.push(
                DataStore.save(
                  Cart.copyOf(cartToUnlink, (updated) => {
                    updated.buyer = undefined;
                    updated.buyer_id = undefined;
                  })
                )
              );
            }
          }
          const itemsToLink = [];
          const itemsToUnLink = [];
          const itemsSet = new Set();
          const linkedItemsSet = new Set();
          items.forEach((r) => itemsSet.add(getIDValue.items?.(r)));
          linkedItems.forEach((r) => linkedItemsSet.add(getIDValue.items?.(r)));
          linkedItems.forEach((r) => {
            if (!itemsSet.has(getIDValue.items?.(r))) {
              itemsToUnLink.push(r);
            }
          });
          items.forEach((r) => {
            if (!linkedItemsSet.has(getIDValue.items?.(r))) {
              itemsToLink.push(r);
            }
          });
          itemsToUnLink.forEach((original) => {
            if (!canUnlinkItems) {
              throw Error(
                `Item ${original.id} cannot be unlinked from Cart because undefined is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Item.copyOf(original, (updated) => {
                  updated.cart = null;
                })
              )
            );
          });
          itemsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Item.copyOf(original, (updated) => {
                  updated.cart = cartRecord;
                })
              )
            );
          });
          const modelFieldsToSave = {
            buyer: modelFields.buyer,
            qtype: modelFields.qtype,
          };
          promises.push(
            DataStore.save(
              Cart.copyOf(cartRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
                if (!modelFieldsToSave.buyer) {
                  updated.buyer_id = undefined;
                }
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CartUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              buyer: value,
              items,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.buyer ?? value;
          }
          setBuyer(value);
          setCurrentBuyerValue(undefined);
          setCurrentBuyerDisplayValue("");
        }}
        currentFieldValue={currentBuyerValue}
        label={"Buyer"}
        items={buyer ? [buyer] : []}
        hasError={errors?.buyer?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("buyer", currentBuyerValue)
        }
        errorMessage={errors?.buyer?.errorMessage}
        getBadgeText={getDisplayValue.buyer}
        setFieldValue={(model) => {
          setCurrentBuyerDisplayValue(
            model ? getDisplayValue.buyer(model) : ""
          );
          setCurrentBuyerValue(model);
        }}
        inputFieldRef={buyerRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Buyer"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Buyer"
          value={currentBuyerDisplayValue}
          options={buyerRecords
            .filter((r) => !buyerIdSet.has(getIDValue.buyer?.(r)))
            .map((r) => ({
              id: getIDValue.buyer?.(r),
              label: getDisplayValue.buyer?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBuyerValue(
              buyerRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBuyerDisplayValue(label);
            runValidationTasks("buyer", label);
          }}
          onClear={() => {
            setCurrentBuyerDisplayValue("");
          }}
          defaultValue={buyer}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.buyer?.hasError) {
              runValidationTasks("buyer", value);
            }
            setCurrentBuyerDisplayValue(value);
            setCurrentBuyerValue(undefined);
          }}
          onBlur={() => runValidationTasks("buyer", currentBuyerDisplayValue)}
          errorMessage={errors.buyer?.errorMessage}
          hasError={errors.buyer?.hasError}
          ref={buyerRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "buyer")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              buyer,
              items: values,
              qtype,
            };
            const result = onChange(modelFields);
            values = result?.items ?? values;
          }
          setItems(values);
          setCurrentItemsValue(undefined);
          setCurrentItemsDisplayValue("");
        }}
        currentFieldValue={currentItemsValue}
        label={"Items"}
        items={items}
        hasError={errors?.items?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("items", currentItemsValue)
        }
        errorMessage={errors?.items?.errorMessage}
        getBadgeText={getDisplayValue.items}
        setFieldValue={(model) => {
          setCurrentItemsDisplayValue(
            model ? getDisplayValue.items(model) : ""
          );
          setCurrentItemsValue(model);
        }}
        inputFieldRef={itemsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Items"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Item"
          value={currentItemsDisplayValue}
          options={itemRecords
            .filter((r) => !itemsIdSet.has(getIDValue.items?.(r)))
            .map((r) => ({
              id: getIDValue.items?.(r),
              label: getDisplayValue.items?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentItemsValue(
              itemRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentItemsDisplayValue(label);
            runValidationTasks("items", label);
          }}
          onClear={() => {
            setCurrentItemsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.items?.hasError) {
              runValidationTasks("items", value);
            }
            setCurrentItemsDisplayValue(value);
            setCurrentItemsValue(undefined);
          }}
          onBlur={() => runValidationTasks("items", currentItemsDisplayValue)}
          errorMessage={errors.items?.errorMessage}
          hasError={errors.items?.hasError}
          ref={itemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "items")}
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
              buyer,
              items,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cartModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cartModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
