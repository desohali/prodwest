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
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Product, Tag, Factory, ProductTags } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { Field } from "@aws-amplify/ui-react/internal";
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
export default function ProductCreateForm(props) {
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
    name: "",
    msrp: "",
    price: "",
    sku: "",
    description: "",
    available: "",
    media: [],
    item_weight_net: "",
    item_weight_gross: "",
    item_size_width: "",
    item_size_depth: "",
    item_size_height: "",
    package_weight_net: "",
    package_weight_gross: "",
    package_size_width: "",
    package_size_depth: "",
    package_size_height: "",
    items_per_package: "",
    tags: [],
    factory: undefined,
    updated_at: "",
    qtype: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [msrp, setMsrp] = React.useState(initialValues.msrp);
  const [price, setPrice] = React.useState(initialValues.price);
  const [sku, setSku] = React.useState(initialValues.sku);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [available, setAvailable] = React.useState(initialValues.available);
  const [media, setMedia] = React.useState(initialValues.media);
  const [item_weight_net, setItem_weight_net] = React.useState(
    initialValues.item_weight_net
  );
  const [item_weight_gross, setItem_weight_gross] = React.useState(
    initialValues.item_weight_gross
  );
  const [item_size_width, setItem_size_width] = React.useState(
    initialValues.item_size_width
  );
  const [item_size_depth, setItem_size_depth] = React.useState(
    initialValues.item_size_depth
  );
  const [item_size_height, setItem_size_height] = React.useState(
    initialValues.item_size_height
  );
  const [package_weight_net, setPackage_weight_net] = React.useState(
    initialValues.package_weight_net
  );
  const [package_weight_gross, setPackage_weight_gross] = React.useState(
    initialValues.package_weight_gross
  );
  const [package_size_width, setPackage_size_width] = React.useState(
    initialValues.package_size_width
  );
  const [package_size_depth, setPackage_size_depth] = React.useState(
    initialValues.package_size_depth
  );
  const [package_size_height, setPackage_size_height] = React.useState(
    initialValues.package_size_height
  );
  const [items_per_package, setItems_per_package] = React.useState(
    initialValues.items_per_package
  );
  const [tags, setTags] = React.useState(initialValues.tags);
  const [factory, setFactory] = React.useState(initialValues.factory);
  const [updated_at, setUpdated_at] = React.useState(initialValues.updated_at);
  const [qtype, setQtype] = React.useState(initialValues.qtype);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setMsrp(initialValues.msrp);
    setPrice(initialValues.price);
    setSku(initialValues.sku);
    setDescription(initialValues.description);
    setAvailable(initialValues.available);
    setMedia(initialValues.media);
    setItem_weight_net(initialValues.item_weight_net);
    setItem_weight_gross(initialValues.item_weight_gross);
    setItem_size_width(initialValues.item_size_width);
    setItem_size_depth(initialValues.item_size_depth);
    setItem_size_height(initialValues.item_size_height);
    setPackage_weight_net(initialValues.package_weight_net);
    setPackage_weight_gross(initialValues.package_weight_gross);
    setPackage_size_width(initialValues.package_size_width);
    setPackage_size_depth(initialValues.package_size_depth);
    setPackage_size_height(initialValues.package_size_height);
    setItems_per_package(initialValues.items_per_package);
    setTags(initialValues.tags);
    setCurrentTagsValue(undefined);
    setCurrentTagsDisplayValue("");
    setFactory(initialValues.factory);
    setCurrentFactoryValue(undefined);
    setCurrentFactoryDisplayValue("");
    setUpdated_at(initialValues.updated_at);
    setQtype(initialValues.qtype);
    setErrors({});
  };
  const [currentTagsDisplayValue, setCurrentTagsDisplayValue] =
    React.useState("");
  const [currentTagsValue, setCurrentTagsValue] = React.useState(undefined);
  const tagsRef = React.createRef();
  const [currentFactoryDisplayValue, setCurrentFactoryDisplayValue] =
    React.useState("");
  const [currentFactoryValue, setCurrentFactoryValue] =
    React.useState(undefined);
  const factoryRef = React.createRef();
  const getIDValue = {
    tags: (r) => JSON.stringify({ id: r?.id }),
    factory: (r) => JSON.stringify({ id: r?.id }),
  };
  const tagsIdSet = new Set(
    Array.isArray(tags)
      ? tags.map((r) => getIDValue.tags?.(r))
      : getIDValue.tags?.(tags)
  );
  const factoryIdSet = new Set(
    Array.isArray(factory)
      ? factory.map((r) => getIDValue.factory?.(r))
      : getIDValue.factory?.(factory)
  );
  const tagRecords = useDataStoreBinding({
    type: "collection",
    model: Tag,
  }).items;
  const factoryRecords = useDataStoreBinding({
    type: "collection",
    model: Factory,
  }).items;
  const getDisplayValue = {
    tags: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    factory: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    msrp: [],
    price: [],
    sku: [],
    description: [],
    available: [],
    media: [],
    item_weight_net: [],
    item_weight_gross: [],
    item_size_width: [],
    item_size_depth: [],
    item_size_height: [],
    package_weight_net: [],
    package_weight_gross: [],
    package_size_width: [],
    package_size_depth: [],
    package_size_height: [],
    items_per_package: [],
    tags: [],
    factory: [],
    updated_at: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          name,
          msrp,
          price,
          sku,
          description,
          available,
          media,
          item_weight_net,
          item_weight_gross,
          item_size_width,
          item_size_depth,
          item_size_height,
          package_weight_net,
          package_weight_gross,
          package_size_width,
          package_size_depth,
          package_size_height,
          items_per_package,
          tags,
          factory,
          updated_at,
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
          const modelFieldsToSave = {
            name: modelFields.name,
            msrp: modelFields.msrp,
            price: modelFields.price,
            sku: modelFields.sku,
            description: modelFields.description,
            available: modelFields.available,
            media: modelFields.media,
            item_weight_net: modelFields.item_weight_net,
            item_weight_gross: modelFields.item_weight_gross,
            item_size_width: modelFields.item_size_width,
            item_size_depth: modelFields.item_size_depth,
            item_size_height: modelFields.item_size_height,
            package_weight_net: modelFields.package_weight_net,
            package_weight_gross: modelFields.package_weight_gross,
            package_size_width: modelFields.package_size_width,
            package_size_depth: modelFields.package_size_depth,
            package_size_height: modelFields.package_size_height,
            items_per_package: modelFields.items_per_package,
            factory: modelFields.factory,
            updated_at: modelFields.updated_at,
            qtype: modelFields.qtype,
          };
          const product = await DataStore.save(new Product(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...tags.reduce((promises, tag) => {
              promises.push(
                DataStore.save(
                  new ProductTags({
                    product,
                    tag,
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "ProductCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Msrp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={msrp}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp: value,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.msrp ?? value;
          }
          if (errors.msrp?.hasError) {
            runValidationTasks("msrp", value);
          }
          setMsrp(value);
        }}
        onBlur={() => runValidationTasks("msrp", msrp)}
        errorMessage={errors.msrp?.errorMessage}
        hasError={errors.msrp?.hasError}
        {...getOverrideProps(overrides, "msrp")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price: value,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Sku"
        isRequired={false}
        isReadOnly={false}
        value={sku}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku: value,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.sku ?? value;
          }
          if (errors.sku?.hasError) {
            runValidationTasks("sku", value);
          }
          setSku(value);
        }}
        onBlur={() => runValidationTasks("sku", sku)}
        errorMessage={errors.sku?.errorMessage}
        hasError={errors.sku?.hasError}
        {...getOverrideProps(overrides, "sku")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description: value,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SelectField
        label="Available"
        placeholder="Please select an option"
        isDisabled={false}
        value={available}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available: value,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.available ?? value;
          }
          if (errors.available?.hasError) {
            runValidationTasks("available", value);
          }
          setAvailable(value);
        }}
        onBlur={() => runValidationTasks("available", available)}
        errorMessage={errors.available?.errorMessage}
        hasError={errors.available?.hasError}
        {...getOverrideProps(overrides, "available")}
      >
        <option
          children="Yes"
          value="yes"
          {...getOverrideProps(overrides, "availableoption0")}
        ></option>
        <option
          children="No"
          value="no"
          {...getOverrideProps(overrides, "availableoption1")}
        ></option>
      </SelectField>
      <Field
        errorMessage={errors.media?.errorMessage}
        hasError={errors.media?.hasError}
        label={"Media"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setMedia((prev) => {
              let value = [...prev, key];
              if (onChange) {
                const modelFields = {
                  name,
                  msrp,
                  price,
                  sku,
                  description,
                  available,
                  media: value,
                  item_weight_net,
                  item_weight_gross,
                  item_size_width,
                  item_size_depth,
                  item_size_height,
                  package_weight_net,
                  package_weight_gross,
                  package_size_width,
                  package_size_depth,
                  package_size_height,
                  items_per_package,
                  tags,
                  factory,
                  updated_at,
                  qtype,
                };
                const result = onChange(modelFields);
                value = result?.media ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setMedia((prev) => {
              let value = prev.filter((f) => f !== key);
              if (onChange) {
                const modelFields = {
                  name,
                  msrp,
                  price,
                  sku,
                  description,
                  available,
                  media: value,
                  item_weight_net,
                  item_weight_gross,
                  item_size_width,
                  item_size_depth,
                  item_size_height,
                  package_weight_net,
                  package_weight_gross,
                  package_size_width,
                  package_size_depth,
                  package_size_height,
                  items_per_package,
                  tags,
                  factory,
                  updated_at,
                  qtype,
                };
                const result = onChange(modelFields);
                value = result?.media ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={[]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "media")}
        ></StorageManager>
      </Field>
      <TextField
        label="Item weight net"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={item_weight_net}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net: value,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.item_weight_net ?? value;
          }
          if (errors.item_weight_net?.hasError) {
            runValidationTasks("item_weight_net", value);
          }
          setItem_weight_net(value);
        }}
        onBlur={() => runValidationTasks("item_weight_net", item_weight_net)}
        errorMessage={errors.item_weight_net?.errorMessage}
        hasError={errors.item_weight_net?.hasError}
        {...getOverrideProps(overrides, "item_weight_net")}
      ></TextField>
      <TextField
        label="Item weight gross"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={item_weight_gross}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross: value,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.item_weight_gross ?? value;
          }
          if (errors.item_weight_gross?.hasError) {
            runValidationTasks("item_weight_gross", value);
          }
          setItem_weight_gross(value);
        }}
        onBlur={() =>
          runValidationTasks("item_weight_gross", item_weight_gross)
        }
        errorMessage={errors.item_weight_gross?.errorMessage}
        hasError={errors.item_weight_gross?.hasError}
        {...getOverrideProps(overrides, "item_weight_gross")}
      ></TextField>
      <TextField
        label="Item size width"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={item_size_width}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width: value,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.item_size_width ?? value;
          }
          if (errors.item_size_width?.hasError) {
            runValidationTasks("item_size_width", value);
          }
          setItem_size_width(value);
        }}
        onBlur={() => runValidationTasks("item_size_width", item_size_width)}
        errorMessage={errors.item_size_width?.errorMessage}
        hasError={errors.item_size_width?.hasError}
        {...getOverrideProps(overrides, "item_size_width")}
      ></TextField>
      <TextField
        label="Item size depth"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={item_size_depth}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth: value,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.item_size_depth ?? value;
          }
          if (errors.item_size_depth?.hasError) {
            runValidationTasks("item_size_depth", value);
          }
          setItem_size_depth(value);
        }}
        onBlur={() => runValidationTasks("item_size_depth", item_size_depth)}
        errorMessage={errors.item_size_depth?.errorMessage}
        hasError={errors.item_size_depth?.hasError}
        {...getOverrideProps(overrides, "item_size_depth")}
      ></TextField>
      <TextField
        label="Item size height"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={item_size_height}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height: value,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.item_size_height ?? value;
          }
          if (errors.item_size_height?.hasError) {
            runValidationTasks("item_size_height", value);
          }
          setItem_size_height(value);
        }}
        onBlur={() => runValidationTasks("item_size_height", item_size_height)}
        errorMessage={errors.item_size_height?.errorMessage}
        hasError={errors.item_size_height?.hasError}
        {...getOverrideProps(overrides, "item_size_height")}
      ></TextField>
      <TextField
        label="Package weight net"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={package_weight_net}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net: value,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.package_weight_net ?? value;
          }
          if (errors.package_weight_net?.hasError) {
            runValidationTasks("package_weight_net", value);
          }
          setPackage_weight_net(value);
        }}
        onBlur={() =>
          runValidationTasks("package_weight_net", package_weight_net)
        }
        errorMessage={errors.package_weight_net?.errorMessage}
        hasError={errors.package_weight_net?.hasError}
        {...getOverrideProps(overrides, "package_weight_net")}
      ></TextField>
      <TextField
        label="Package weight gross"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={package_weight_gross}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross: value,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.package_weight_gross ?? value;
          }
          if (errors.package_weight_gross?.hasError) {
            runValidationTasks("package_weight_gross", value);
          }
          setPackage_weight_gross(value);
        }}
        onBlur={() =>
          runValidationTasks("package_weight_gross", package_weight_gross)
        }
        errorMessage={errors.package_weight_gross?.errorMessage}
        hasError={errors.package_weight_gross?.hasError}
        {...getOverrideProps(overrides, "package_weight_gross")}
      ></TextField>
      <TextField
        label="Package size width"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={package_size_width}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width: value,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.package_size_width ?? value;
          }
          if (errors.package_size_width?.hasError) {
            runValidationTasks("package_size_width", value);
          }
          setPackage_size_width(value);
        }}
        onBlur={() =>
          runValidationTasks("package_size_width", package_size_width)
        }
        errorMessage={errors.package_size_width?.errorMessage}
        hasError={errors.package_size_width?.hasError}
        {...getOverrideProps(overrides, "package_size_width")}
      ></TextField>
      <TextField
        label="Package size depth"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={package_size_depth}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth: value,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.package_size_depth ?? value;
          }
          if (errors.package_size_depth?.hasError) {
            runValidationTasks("package_size_depth", value);
          }
          setPackage_size_depth(value);
        }}
        onBlur={() =>
          runValidationTasks("package_size_depth", package_size_depth)
        }
        errorMessage={errors.package_size_depth?.errorMessage}
        hasError={errors.package_size_depth?.hasError}
        {...getOverrideProps(overrides, "package_size_depth")}
      ></TextField>
      <TextField
        label="Package size height"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={package_size_height}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height: value,
              items_per_package,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.package_size_height ?? value;
          }
          if (errors.package_size_height?.hasError) {
            runValidationTasks("package_size_height", value);
          }
          setPackage_size_height(value);
        }}
        onBlur={() =>
          runValidationTasks("package_size_height", package_size_height)
        }
        errorMessage={errors.package_size_height?.errorMessage}
        hasError={errors.package_size_height?.hasError}
        {...getOverrideProps(overrides, "package_size_height")}
      ></TextField>
      <TextField
        label="Items per package"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={items_per_package}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package: value,
              tags,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.items_per_package ?? value;
          }
          if (errors.items_per_package?.hasError) {
            runValidationTasks("items_per_package", value);
          }
          setItems_per_package(value);
        }}
        onBlur={() =>
          runValidationTasks("items_per_package", items_per_package)
        }
        errorMessage={errors.items_per_package?.errorMessage}
        hasError={errors.items_per_package?.hasError}
        {...getOverrideProps(overrides, "items_per_package")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags: values,
              factory,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue(undefined);
          setCurrentTagsDisplayValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tags", currentTagsValue)
        }
        errorMessage={errors?.tags?.errorMessage}
        getBadgeText={getDisplayValue.tags}
        setFieldValue={(model) => {
          setCurrentTagsDisplayValue(model ? getDisplayValue.tags(model) : "");
          setCurrentTagsValue(model);
        }}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Tag"
          value={currentTagsDisplayValue}
          options={tagRecords
            .filter((r) => !tagsIdSet.has(getIDValue.tags?.(r)))
            .map((r) => ({
              id: getIDValue.tags?.(r),
              label: getDisplayValue.tags?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTagsValue(
              tagRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTagsDisplayValue(label);
            runValidationTasks("tags", label);
          }}
          onClear={() => {
            setCurrentTagsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsDisplayValue(value);
            setCurrentTagsValue(undefined);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsDisplayValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory: value,
              updated_at,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.factory ?? value;
          }
          setFactory(value);
          setCurrentFactoryValue(undefined);
          setCurrentFactoryDisplayValue("");
        }}
        currentFieldValue={currentFactoryValue}
        label={"Factory"}
        items={factory ? [factory] : []}
        hasError={errors?.factory?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("factory", currentFactoryValue)
        }
        errorMessage={errors?.factory?.errorMessage}
        getBadgeText={getDisplayValue.factory}
        setFieldValue={(model) => {
          setCurrentFactoryDisplayValue(
            model ? getDisplayValue.factory(model) : ""
          );
          setCurrentFactoryValue(model);
        }}
        inputFieldRef={factoryRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Factory"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Factory"
          value={currentFactoryDisplayValue}
          options={factoryRecords
            .filter((r) => !factoryIdSet.has(getIDValue.factory?.(r)))
            .map((r) => ({
              id: getIDValue.factory?.(r),
              label: getDisplayValue.factory?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentFactoryValue(
              factoryRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentFactoryDisplayValue(label);
            runValidationTasks("factory", label);
          }}
          onClear={() => {
            setCurrentFactoryDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.factory?.hasError) {
              runValidationTasks("factory", value);
            }
            setCurrentFactoryDisplayValue(value);
            setCurrentFactoryValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("factory", currentFactoryDisplayValue)
          }
          errorMessage={errors.factory?.errorMessage}
          hasError={errors.factory?.hasError}
          ref={factoryRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "factory")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updated_at && convertToLocal(new Date(updated_at))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at: value,
              qtype,
            };
            const result = onChange(modelFields);
            value = result?.updated_at ?? value;
          }
          if (errors.updated_at?.hasError) {
            runValidationTasks("updated_at", value);
          }
          setUpdated_at(value);
        }}
        onBlur={() => runValidationTasks("updated_at", updated_at)}
        errorMessage={errors.updated_at?.errorMessage}
        hasError={errors.updated_at?.hasError}
        {...getOverrideProps(overrides, "updated_at")}
      ></TextField>
      <TextField
        label="Qtype"
        isRequired={false}
        isReadOnly={false}
        value={qtype}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              msrp,
              price,
              sku,
              description,
              available,
              media,
              item_weight_net,
              item_weight_gross,
              item_size_width,
              item_size_depth,
              item_size_height,
              package_weight_net,
              package_weight_gross,
              package_size_width,
              package_size_depth,
              package_size_height,
              items_per_package,
              tags,
              factory,
              updated_at,
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
