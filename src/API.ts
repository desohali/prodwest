/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFactoryInput = {
  id?: string | null,
  name?: string | null,
  url?: string | null,
  order_contacts?: Array< string | null > | null,
  qtype?: string | null,
};

export type ModelFactoryConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  order_contacts?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelFactoryConditionInput | null > | null,
  or?: Array< ModelFactoryConditionInput | null > | null,
  not?: ModelFactoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Factory = {
  __typename: "Factory",
  id: string,
  name?: string | null,
  url?: string | null,
  order_contacts?: Array< string | null > | null,
  products?: ModelProductConnection | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name?: string | null,
  msrp?: number | null,
  price?: number | null,
  sku?: string | null,
  description?: string | null,
  available?: ProductAvailableEnum | null,
  media?: Array< string | null > | null,
  item_weight_net?: number | null,
  item_weight_gross?: number | null,
  item_size_width?: number | null,
  item_size_depth?: number | null,
  item_size_height?: number | null,
  package_weight_net?: number | null,
  package_weight_gross?: number | null,
  package_size_width?: number | null,
  package_size_depth?: number | null,
  package_size_height?: number | null,
  items_per_package?: number | null,
  tags?: ModelProductTagsConnection | null,
  factory_id?: string | null,
  factory?: Factory | null,
  updated_at?: string | null,
  qtype?: string | null,
  created_at: string,
};

export enum ProductAvailableEnum {
  yes = "yes",
  no = "no",
}


export type ModelProductTagsConnection = {
  __typename: "ModelProductTagsConnection",
  items:  Array<ProductTags | null >,
  nextToken?: string | null,
};

export type ProductTags = {
  __typename: "ProductTags",
  id: string,
  tagId: string,
  productId: string,
  tag: Tag,
  product: Product,
  createdAt: string,
  updatedAt: string,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  products?: ModelProductTagsConnection | null,
  buyers?: ModelBuyerTagsConnection | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type ModelBuyerTagsConnection = {
  __typename: "ModelBuyerTagsConnection",
  items:  Array<BuyerTags | null >,
  nextToken?: string | null,
};

export type BuyerTags = {
  __typename: "BuyerTags",
  id: string,
  tagId: string,
  buyerId: string,
  tag: Tag,
  buyer: Buyer,
  createdAt: string,
  updatedAt: string,
};

export type Buyer = {
  __typename: "Buyer",
  id: string,
  first_name: string,
  last_name: string,
  user_name: string,
  last_login?: string | null,
  status?: string | null,
  is_owner: boolean,
  email: string,
  phone: string,
  business_id?: string | null,
  business?: Business | null,
  cart_id?: string | null,
  cart?: Cart | null,
  tags?: ModelBuyerTagsConnection | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type Business = {
  __typename: "Business",
  id: string,
  name: string,
  description?: string | null,
  salesreps?: ModelBusinessSalesrepsConnection | null,
  addresses?: ModelAddressConnection | null,
  banks?: ModelBankConnection | null,
  buyers?: ModelBuyerConnection | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type ModelBusinessSalesrepsConnection = {
  __typename: "ModelBusinessSalesrepsConnection",
  items:  Array<BusinessSalesreps | null >,
  nextToken?: string | null,
};

export type BusinessSalesreps = {
  __typename: "BusinessSalesreps",
  id: string,
  salesrepId: string,
  businessId: string,
  salesrep: Salesrep,
  business: Business,
  createdAt: string,
  updatedAt: string,
};

export type Salesrep = {
  __typename: "Salesrep",
  id: string,
  name: string,
  title?: string | null,
  email: string,
  phone: string,
  businesses?: ModelBusinessSalesrepsConnection | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  is_default?: boolean | null,
  business_id?: string | null,
  business?: Business | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type ModelBankConnection = {
  __typename: "ModelBankConnection",
  items:  Array<Bank | null >,
  nextToken?: string | null,
};

export type Bank = {
  __typename: "Bank",
  id: string,
  account_name: string,
  account_number: string,
  routing_number: string,
  is_default?: boolean | null,
  business_id?: string | null,
  business?: Business | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type ModelBuyerConnection = {
  __typename: "ModelBuyerConnection",
  items:  Array<Buyer | null >,
  nextToken?: string | null,
};

export type Cart = {
  __typename: "Cart",
  id: string,
  buyer_id?: string | null,
  buyer?: Buyer | null,
  items?: ModelItemConnection | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  product_id?: string | null,
  product?: Product | null,
  cart_id?: string | null,
  cart?: Cart | null,
  quantity?: number | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type UpdateFactoryInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  order_contacts?: Array< string | null > | null,
  qtype?: string | null,
};

export type DeleteFactoryInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  name: string,
  qtype?: string | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  qtype?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name?: string | null,
  msrp?: number | null,
  price?: number | null,
  sku?: string | null,
  description?: string | null,
  available?: ProductAvailableEnum | null,
  media?: Array< string | null > | null,
  item_weight_net?: number | null,
  item_weight_gross?: number | null,
  item_size_width?: number | null,
  item_size_depth?: number | null,
  item_size_height?: number | null,
  package_weight_net?: number | null,
  package_weight_gross?: number | null,
  package_size_width?: number | null,
  package_size_depth?: number | null,
  package_size_height?: number | null,
  items_per_package?: number | null,
  factory_id?: string | null,
  updated_at?: string | null,
  qtype?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  msrp?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  sku?: ModelStringInput | null,
  description?: ModelStringInput | null,
  available?: ModelProductAvailableEnumInput | null,
  media?: ModelStringInput | null,
  item_weight_net?: ModelFloatInput | null,
  item_weight_gross?: ModelFloatInput | null,
  item_size_width?: ModelFloatInput | null,
  item_size_depth?: ModelFloatInput | null,
  item_size_height?: ModelFloatInput | null,
  package_weight_net?: ModelFloatInput | null,
  package_weight_gross?: ModelFloatInput | null,
  package_size_width?: ModelFloatInput | null,
  package_size_depth?: ModelFloatInput | null,
  package_size_height?: ModelFloatInput | null,
  items_per_package?: ModelIntInput | null,
  factory_id?: ModelIDInput | null,
  updated_at?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelProductAvailableEnumInput = {
  eq?: ProductAvailableEnum | null,
  ne?: ProductAvailableEnum | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  msrp?: number | null,
  price?: number | null,
  sku?: string | null,
  description?: string | null,
  available?: ProductAvailableEnum | null,
  media?: Array< string | null > | null,
  item_weight_net?: number | null,
  item_weight_gross?: number | null,
  item_size_width?: number | null,
  item_size_depth?: number | null,
  item_size_height?: number | null,
  package_weight_net?: number | null,
  package_weight_gross?: number | null,
  package_size_width?: number | null,
  package_size_depth?: number | null,
  package_size_height?: number | null,
  items_per_package?: number | null,
  factory_id?: string | null,
  updated_at?: string | null,
  qtype?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreatePackageInput = {
  id?: string | null,
  weight_net?: number | null,
  weight_gross?: number | null,
  size_width?: number | null,
  size_depth?: number | null,
  size_height?: number | null,
  qtype?: string | null,
  shipmentPackagesId?: string | null,
  packageProductId?: string | null,
};

export type ModelPackageConditionInput = {
  weight_net?: ModelFloatInput | null,
  weight_gross?: ModelFloatInput | null,
  size_width?: ModelFloatInput | null,
  size_depth?: ModelFloatInput | null,
  size_height?: ModelFloatInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelPackageConditionInput | null > | null,
  or?: Array< ModelPackageConditionInput | null > | null,
  not?: ModelPackageConditionInput | null,
  shipmentPackagesId?: ModelIDInput | null,
  packageProductId?: ModelIDInput | null,
};

export type Package = {
  __typename: "Package",
  id: string,
  product?: Product | null,
  weight_net?: number | null,
  weight_gross?: number | null,
  size_width?: number | null,
  size_depth?: number | null,
  size_height?: number | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
  shipmentPackagesId?: string | null,
  packageProductId?: string | null,
};

export type UpdatePackageInput = {
  id: string,
  weight_net?: number | null,
  weight_gross?: number | null,
  size_width?: number | null,
  size_depth?: number | null,
  size_height?: number | null,
  qtype?: string | null,
  shipmentPackagesId?: string | null,
  packageProductId?: string | null,
};

export type DeletePackageInput = {
  id: string,
};

export type CreateShipmentInput = {
  id?: string | null,
  departure?: string | null,
  arrival?: string | null,
  qtype?: string | null,
};

export type ModelShipmentConditionInput = {
  departure?: ModelStringInput | null,
  arrival?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelShipmentConditionInput | null > | null,
  or?: Array< ModelShipmentConditionInput | null > | null,
  not?: ModelShipmentConditionInput | null,
};

export type Shipment = {
  __typename: "Shipment",
  id: string,
  packages?: ModelPackageConnection | null,
  departure?: string | null,
  arrival?: string | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type ModelPackageConnection = {
  __typename: "ModelPackageConnection",
  items:  Array<Package | null >,
  nextToken?: string | null,
};

export type UpdateShipmentInput = {
  id: string,
  departure?: string | null,
  arrival?: string | null,
  qtype?: string | null,
};

export type DeleteShipmentInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  business_id?: string | null,
  buyer_id?: string | null,
  order_status?: string | null,
  paid_status?: string | null,
  packed_items?: string | null,
  subtotal?: string | null,
  tax?: string | null,
  shipping?: string | null,
  discount?: string | null,
  qtype?: string | null,
};

export type ModelOrderConditionInput = {
  business_id?: ModelIDInput | null,
  buyer_id?: ModelIDInput | null,
  order_status?: ModelStringInput | null,
  paid_status?: ModelStringInput | null,
  packed_items?: ModelStringInput | null,
  subtotal?: ModelStringInput | null,
  tax?: ModelStringInput | null,
  shipping?: ModelStringInput | null,
  discount?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  business_id?: string | null,
  business?: Business | null,
  buyer_id?: string | null,
  buyer?: Buyer | null,
  order_status?: string | null,
  paid_status?: string | null,
  packed_items?: string | null,
  subtotal?: string | null,
  tax?: string | null,
  shipping?: string | null,
  discount?: string | null,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type UpdateOrderInput = {
  id: string,
  business_id?: string | null,
  buyer_id?: string | null,
  order_status?: string | null,
  paid_status?: string | null,
  packed_items?: string | null,
  subtotal?: string | null,
  tax?: string | null,
  shipping?: string | null,
  discount?: string | null,
  qtype?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateItemInput = {
  id?: string | null,
  product_id?: string | null,
  cart_id?: string | null,
  quantity?: number | null,
  qtype?: string | null,
};

export type ModelItemConditionInput = {
  product_id?: ModelIDInput | null,
  cart_id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type UpdateItemInput = {
  id: string,
  product_id?: string | null,
  cart_id?: string | null,
  quantity?: number | null,
  qtype?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type CreateCartInput = {
  id?: string | null,
  buyer_id?: string | null,
  qtype?: string | null,
};

export type ModelCartConditionInput = {
  buyer_id?: ModelIDInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
};

export type UpdateCartInput = {
  id: string,
  buyer_id?: string | null,
  qtype?: string | null,
};

export type DeleteCartInput = {
  id: string,
};

export type CreateSalesrepInput = {
  id?: string | null,
  name: string,
  title?: string | null,
  email: string,
  phone: string,
  qtype?: string | null,
};

export type ModelSalesrepConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelSalesrepConditionInput | null > | null,
  or?: Array< ModelSalesrepConditionInput | null > | null,
  not?: ModelSalesrepConditionInput | null,
};

export type UpdateSalesrepInput = {
  id: string,
  name?: string | null,
  title?: string | null,
  email?: string | null,
  phone?: string | null,
  qtype?: string | null,
};

export type DeleteSalesrepInput = {
  id: string,
};

export type CreateAddressInput = {
  id?: string | null,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  is_default?: boolean | null,
  business_id?: string | null,
  qtype?: string | null,
};

export type ModelAddressConditionInput = {
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  country?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  business_id?: ModelIDInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAddressInput = {
  id: string,
  street?: string | null,
  city?: string | null,
  state?: string | null,
  postal_code?: string | null,
  country?: string | null,
  is_default?: boolean | null,
  business_id?: string | null,
  qtype?: string | null,
};

export type DeleteAddressInput = {
  id: string,
};

export type CreateBankInput = {
  id?: string | null,
  account_name: string,
  account_number: string,
  routing_number: string,
  is_default?: boolean | null,
  business_id?: string | null,
  qtype?: string | null,
};

export type ModelBankConditionInput = {
  account_name?: ModelStringInput | null,
  account_number?: ModelStringInput | null,
  routing_number?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  business_id?: ModelIDInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelBankConditionInput | null > | null,
  or?: Array< ModelBankConditionInput | null > | null,
  not?: ModelBankConditionInput | null,
};

export type UpdateBankInput = {
  id: string,
  account_name?: string | null,
  account_number?: string | null,
  routing_number?: string | null,
  is_default?: boolean | null,
  business_id?: string | null,
  qtype?: string | null,
};

export type DeleteBankInput = {
  id: string,
};

export type CreateBusinessInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  qtype?: string | null,
};

export type ModelBusinessConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelBusinessConditionInput | null > | null,
  or?: Array< ModelBusinessConditionInput | null > | null,
  not?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  qtype?: string | null,
};

export type DeleteBusinessInput = {
  id: string,
};

export type CreateBuyerInput = {
  id?: string | null,
  first_name: string,
  last_name: string,
  user_name: string,
  last_login?: string | null,
  status?: string | null,
  is_owner: boolean,
  email: string,
  phone: string,
  business_id?: string | null,
  cart_id?: string | null,
  qtype?: string | null,
};

export type ModelBuyerConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  last_login?: ModelStringInput | null,
  status?: ModelStringInput | null,
  is_owner?: ModelBooleanInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  business_id?: ModelIDInput | null,
  cart_id?: ModelIDInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelBuyerConditionInput | null > | null,
  or?: Array< ModelBuyerConditionInput | null > | null,
  not?: ModelBuyerConditionInput | null,
};

export type UpdateBuyerInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  user_name?: string | null,
  last_login?: string | null,
  status?: string | null,
  is_owner?: boolean | null,
  email?: string | null,
  phone?: string | null,
  business_id?: string | null,
  cart_id?: string | null,
  qtype?: string | null,
};

export type DeleteBuyerInput = {
  id: string,
};

export type CreateApplicationInput = {
  id?: string | null,
  buyer_id?: string | null,
  status?: string | null,
  business_name: string,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  qtype?: string | null,
};

export type ModelApplicationConditionInput = {
  buyer_id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  business_name?: ModelStringInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  country?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelApplicationConditionInput | null > | null,
  or?: Array< ModelApplicationConditionInput | null > | null,
  not?: ModelApplicationConditionInput | null,
};

export type Application = {
  __typename: "Application",
  id: string,
  buyer_id?: string | null,
  buyer?: Buyer | null,
  status?: string | null,
  business_name: string,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type UpdateApplicationInput = {
  id: string,
  buyer_id?: string | null,
  status?: string | null,
  business_name?: string | null,
  street?: string | null,
  city?: string | null,
  state?: string | null,
  postal_code?: string | null,
  country?: string | null,
  qtype?: string | null,
};

export type DeleteApplicationInput = {
  id: string,
};

export type CreateBlurbInput = {
  id?: string | null,
  title: string,
  description: string,
  start_date: string,
  end_date: string,
  qtype?: string | null,
};

export type ModelBlurbConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelBlurbConditionInput | null > | null,
  or?: Array< ModelBlurbConditionInput | null > | null,
  not?: ModelBlurbConditionInput | null,
};

export type Blurb = {
  __typename: "Blurb",
  id: string,
  title: string,
  description: string,
  start_date: string,
  end_date: string,
  qtype?: string | null,
  created_at: string,
  updated_at: string,
};

export type UpdateBlurbInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  qtype?: string | null,
};

export type DeleteBlurbInput = {
  id: string,
};

export type CreateProductTagsInput = {
  id?: string | null,
  tagId: string,
  productId: string,
};

export type ModelProductTagsConditionInput = {
  tagId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductTagsConditionInput | null > | null,
  or?: Array< ModelProductTagsConditionInput | null > | null,
  not?: ModelProductTagsConditionInput | null,
};

export type UpdateProductTagsInput = {
  id: string,
  tagId?: string | null,
  productId?: string | null,
};

export type DeleteProductTagsInput = {
  id: string,
};

export type CreateBuyerTagsInput = {
  id?: string | null,
  tagId: string,
  buyerId: string,
};

export type ModelBuyerTagsConditionInput = {
  tagId?: ModelIDInput | null,
  buyerId?: ModelIDInput | null,
  and?: Array< ModelBuyerTagsConditionInput | null > | null,
  or?: Array< ModelBuyerTagsConditionInput | null > | null,
  not?: ModelBuyerTagsConditionInput | null,
};

export type UpdateBuyerTagsInput = {
  id: string,
  tagId?: string | null,
  buyerId?: string | null,
};

export type DeleteBuyerTagsInput = {
  id: string,
};

export type CreateBusinessSalesrepsInput = {
  id?: string | null,
  salesrepId: string,
  businessId: string,
};

export type ModelBusinessSalesrepsConditionInput = {
  salesrepId?: ModelIDInput | null,
  businessId?: ModelIDInput | null,
  and?: Array< ModelBusinessSalesrepsConditionInput | null > | null,
  or?: Array< ModelBusinessSalesrepsConditionInput | null > | null,
  not?: ModelBusinessSalesrepsConditionInput | null,
};

export type UpdateBusinessSalesrepsInput = {
  id: string,
  salesrepId?: string | null,
  businessId?: string | null,
};

export type DeleteBusinessSalesrepsInput = {
  id: string,
};

export type ModelFactoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  order_contacts?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelFactoryFilterInput | null > | null,
  or?: Array< ModelFactoryFilterInput | null > | null,
  not?: ModelFactoryFilterInput | null,
};

export type ModelFactoryConnection = {
  __typename: "ModelFactoryConnection",
  items:  Array<Factory | null >,
  nextToken?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  msrp?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  sku?: ModelStringInput | null,
  description?: ModelStringInput | null,
  available?: ModelProductAvailableEnumInput | null,
  media?: ModelStringInput | null,
  item_weight_net?: ModelFloatInput | null,
  item_weight_gross?: ModelFloatInput | null,
  item_size_width?: ModelFloatInput | null,
  item_size_depth?: ModelFloatInput | null,
  item_size_height?: ModelFloatInput | null,
  package_weight_net?: ModelFloatInput | null,
  package_weight_gross?: ModelFloatInput | null,
  package_size_width?: ModelFloatInput | null,
  package_size_depth?: ModelFloatInput | null,
  package_size_height?: ModelFloatInput | null,
  items_per_package?: ModelIntInput | null,
  factory_id?: ModelIDInput | null,
  updated_at?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelPackageFilterInput = {
  id?: ModelIDInput | null,
  weight_net?: ModelFloatInput | null,
  weight_gross?: ModelFloatInput | null,
  size_width?: ModelFloatInput | null,
  size_depth?: ModelFloatInput | null,
  size_height?: ModelFloatInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelPackageFilterInput | null > | null,
  or?: Array< ModelPackageFilterInput | null > | null,
  not?: ModelPackageFilterInput | null,
  shipmentPackagesId?: ModelIDInput | null,
  packageProductId?: ModelIDInput | null,
};

export type ModelShipmentFilterInput = {
  id?: ModelIDInput | null,
  departure?: ModelStringInput | null,
  arrival?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelShipmentFilterInput | null > | null,
  or?: Array< ModelShipmentFilterInput | null > | null,
  not?: ModelShipmentFilterInput | null,
};

export type ModelShipmentConnection = {
  __typename: "ModelShipmentConnection",
  items:  Array<Shipment | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  business_id?: ModelIDInput | null,
  buyer_id?: ModelIDInput | null,
  order_status?: ModelStringInput | null,
  paid_status?: ModelStringInput | null,
  packed_items?: ModelStringInput | null,
  subtotal?: ModelStringInput | null,
  tax?: ModelStringInput | null,
  shipping?: ModelStringInput | null,
  discount?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  product_id?: ModelIDInput | null,
  cart_id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  buyer_id?: ModelIDInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
};

export type ModelSalesrepFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelSalesrepFilterInput | null > | null,
  or?: Array< ModelSalesrepFilterInput | null > | null,
  not?: ModelSalesrepFilterInput | null,
};

export type ModelSalesrepConnection = {
  __typename: "ModelSalesrepConnection",
  items:  Array<Salesrep | null >,
  nextToken?: string | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  country?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  business_id?: ModelIDInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelBankFilterInput = {
  id?: ModelIDInput | null,
  account_name?: ModelStringInput | null,
  account_number?: ModelStringInput | null,
  routing_number?: ModelStringInput | null,
  is_default?: ModelBooleanInput | null,
  business_id?: ModelIDInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelBankFilterInput | null > | null,
  or?: Array< ModelBankFilterInput | null > | null,
  not?: ModelBankFilterInput | null,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
};

export type ModelBusinessConnection = {
  __typename: "ModelBusinessConnection",
  items:  Array<Business | null >,
  nextToken?: string | null,
};

export type ModelBuyerFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  last_login?: ModelStringInput | null,
  status?: ModelStringInput | null,
  is_owner?: ModelBooleanInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  business_id?: ModelIDInput | null,
  cart_id?: ModelIDInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelBuyerFilterInput | null > | null,
  or?: Array< ModelBuyerFilterInput | null > | null,
  not?: ModelBuyerFilterInput | null,
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null,
  buyer_id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  business_name?: ModelStringInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  country?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelApplicationFilterInput | null > | null,
  or?: Array< ModelApplicationFilterInput | null > | null,
  not?: ModelApplicationFilterInput | null,
};

export type ModelApplicationConnection = {
  __typename: "ModelApplicationConnection",
  items:  Array<Application | null >,
  nextToken?: string | null,
};

export type ModelBlurbFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  qtype?: ModelStringInput | null,
  and?: Array< ModelBlurbFilterInput | null > | null,
  or?: Array< ModelBlurbFilterInput | null > | null,
  not?: ModelBlurbFilterInput | null,
};

export type ModelBlurbConnection = {
  __typename: "ModelBlurbConnection",
  items:  Array<Blurb | null >,
  nextToken?: string | null,
};

export type ModelProductTagsFilterInput = {
  id?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductTagsFilterInput | null > | null,
  or?: Array< ModelProductTagsFilterInput | null > | null,
  not?: ModelProductTagsFilterInput | null,
};

export type ModelBuyerTagsFilterInput = {
  id?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  buyerId?: ModelIDInput | null,
  and?: Array< ModelBuyerTagsFilterInput | null > | null,
  or?: Array< ModelBuyerTagsFilterInput | null > | null,
  not?: ModelBuyerTagsFilterInput | null,
};

export type ModelBusinessSalesrepsFilterInput = {
  id?: ModelIDInput | null,
  salesrepId?: ModelIDInput | null,
  businessId?: ModelIDInput | null,
  and?: Array< ModelBusinessSalesrepsFilterInput | null > | null,
  or?: Array< ModelBusinessSalesrepsFilterInput | null > | null,
  not?: ModelBusinessSalesrepsFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProductProductsByAvailableByNameCompositeKeyConditionInput = {
  eq?: ModelProductProductsByAvailableByNameCompositeKeyInput | null,
  le?: ModelProductProductsByAvailableByNameCompositeKeyInput | null,
  lt?: ModelProductProductsByAvailableByNameCompositeKeyInput | null,
  ge?: ModelProductProductsByAvailableByNameCompositeKeyInput | null,
  gt?: ModelProductProductsByAvailableByNameCompositeKeyInput | null,
  between?: Array< ModelProductProductsByAvailableByNameCompositeKeyInput | null > | null,
  beginsWith?: ModelProductProductsByAvailableByNameCompositeKeyInput | null,
};

export type ModelProductProductsByAvailableByNameCompositeKeyInput = {
  available?: ProductAvailableEnum | null,
  name?: string | null,
};

export type ModelProductProductsByAvailableByUpdatedAtCompositeKeyConditionInput = {
  eq?: ModelProductProductsByAvailableByUpdatedAtCompositeKeyInput | null,
  le?: ModelProductProductsByAvailableByUpdatedAtCompositeKeyInput | null,
  lt?: ModelProductProductsByAvailableByUpdatedAtCompositeKeyInput | null,
  ge?: ModelProductProductsByAvailableByUpdatedAtCompositeKeyInput | null,
  gt?: ModelProductProductsByAvailableByUpdatedAtCompositeKeyInput | null,
  between?: Array< ModelProductProductsByAvailableByUpdatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelProductProductsByAvailableByUpdatedAtCompositeKeyInput | null,
};

export type ModelProductProductsByAvailableByUpdatedAtCompositeKeyInput = {
  available?: ProductAvailableEnum | null,
  updated_at?: string | null,
};

export type ModelSubscriptionFactoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  order_contacts?: ModelSubscriptionStringInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFactoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionFactoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  msrp?: ModelSubscriptionFloatInput | null,
  price?: ModelSubscriptionFloatInput | null,
  sku?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  available?: ModelSubscriptionStringInput | null,
  media?: ModelSubscriptionStringInput | null,
  item_weight_net?: ModelSubscriptionFloatInput | null,
  item_weight_gross?: ModelSubscriptionFloatInput | null,
  item_size_width?: ModelSubscriptionFloatInput | null,
  item_size_depth?: ModelSubscriptionFloatInput | null,
  item_size_height?: ModelSubscriptionFloatInput | null,
  package_weight_net?: ModelSubscriptionFloatInput | null,
  package_weight_gross?: ModelSubscriptionFloatInput | null,
  package_size_width?: ModelSubscriptionFloatInput | null,
  package_size_depth?: ModelSubscriptionFloatInput | null,
  package_size_height?: ModelSubscriptionFloatInput | null,
  items_per_package?: ModelSubscriptionIntInput | null,
  factory_id?: ModelSubscriptionIDInput | null,
  updated_at?: ModelSubscriptionStringInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPackageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  weight_net?: ModelSubscriptionFloatInput | null,
  weight_gross?: ModelSubscriptionFloatInput | null,
  size_width?: ModelSubscriptionFloatInput | null,
  size_depth?: ModelSubscriptionFloatInput | null,
  size_height?: ModelSubscriptionFloatInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPackageFilterInput | null > | null,
  or?: Array< ModelSubscriptionPackageFilterInput | null > | null,
};

export type ModelSubscriptionShipmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  departure?: ModelSubscriptionStringInput | null,
  arrival?: ModelSubscriptionStringInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionShipmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionShipmentFilterInput | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  business_id?: ModelSubscriptionIDInput | null,
  buyer_id?: ModelSubscriptionIDInput | null,
  order_status?: ModelSubscriptionStringInput | null,
  paid_status?: ModelSubscriptionStringInput | null,
  packed_items?: ModelSubscriptionStringInput | null,
  subtotal?: ModelSubscriptionStringInput | null,
  tax?: ModelSubscriptionStringInput | null,
  shipping?: ModelSubscriptionStringInput | null,
  discount?: ModelSubscriptionStringInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  product_id?: ModelSubscriptionIDInput | null,
  cart_id?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionCartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  buyer_id?: ModelSubscriptionIDInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
};

export type ModelSubscriptionSalesrepFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSalesrepFilterInput | null > | null,
  or?: Array< ModelSubscriptionSalesrepFilterInput | null > | null,
};

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  street?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  is_default?: ModelSubscriptionBooleanInput | null,
  business_id?: ModelSubscriptionIDInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionBankFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  account_name?: ModelSubscriptionStringInput | null,
  account_number?: ModelSubscriptionStringInput | null,
  routing_number?: ModelSubscriptionStringInput | null,
  is_default?: ModelSubscriptionBooleanInput | null,
  business_id?: ModelSubscriptionIDInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBankFilterInput | null > | null,
  or?: Array< ModelSubscriptionBankFilterInput | null > | null,
};

export type ModelSubscriptionBusinessFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
};

export type ModelSubscriptionBuyerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  user_name?: ModelSubscriptionStringInput | null,
  last_login?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  is_owner?: ModelSubscriptionBooleanInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  business_id?: ModelSubscriptionIDInput | null,
  cart_id?: ModelSubscriptionIDInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBuyerFilterInput | null > | null,
  or?: Array< ModelSubscriptionBuyerFilterInput | null > | null,
};

export type ModelSubscriptionApplicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  buyer_id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  business_name?: ModelSubscriptionStringInput | null,
  street?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
};

export type ModelSubscriptionBlurbFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  start_date?: ModelSubscriptionStringInput | null,
  end_date?: ModelSubscriptionStringInput | null,
  qtype?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlurbFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlurbFilterInput | null > | null,
};

export type ModelSubscriptionProductTagsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tagId?: ModelSubscriptionIDInput | null,
  productId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductTagsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductTagsFilterInput | null > | null,
};

export type ModelSubscriptionBuyerTagsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tagId?: ModelSubscriptionIDInput | null,
  buyerId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBuyerTagsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBuyerTagsFilterInput | null > | null,
};

export type ModelSubscriptionBusinessSalesrepsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  salesrepId?: ModelSubscriptionIDInput | null,
  businessId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBusinessSalesrepsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessSalesrepsFilterInput | null > | null,
};

export type CreateFactoryMutationVariables = {
  input: CreateFactoryInput,
  condition?: ModelFactoryConditionInput | null,
};

export type CreateFactoryMutation = {
  createFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    order_contacts?: Array< string | null > | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateFactoryMutationVariables = {
  input: UpdateFactoryInput,
  condition?: ModelFactoryConditionInput | null,
};

export type UpdateFactoryMutation = {
  updateFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    order_contacts?: Array< string | null > | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteFactoryMutationVariables = {
  input: DeleteFactoryInput,
  condition?: ModelFactoryConditionInput | null,
};

export type DeleteFactoryMutation = {
  deleteFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    order_contacts?: Array< string | null > | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    available?: ProductAvailableEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    tags?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      order_contacts?: Array< string | null > | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    updated_at?: string | null,
    qtype?: string | null,
    created_at: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    available?: ProductAvailableEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    tags?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      order_contacts?: Array< string | null > | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    updated_at?: string | null,
    qtype?: string | null,
    created_at: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    available?: ProductAvailableEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    tags?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      order_contacts?: Array< string | null > | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    updated_at?: string | null,
    qtype?: string | null,
    created_at: string,
  } | null,
};

export type CreatePackageMutationVariables = {
  input: CreatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type CreatePackageMutation = {
  createPackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type UpdatePackageMutationVariables = {
  input: UpdatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type UpdatePackageMutation = {
  updatePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type DeletePackageMutationVariables = {
  input: DeletePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type DeletePackageMutation = {
  deletePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type CreateShipmentMutationVariables = {
  input: CreateShipmentInput,
  condition?: ModelShipmentConditionInput | null,
};

export type CreateShipmentMutation = {
  createShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateShipmentMutationVariables = {
  input: UpdateShipmentInput,
  condition?: ModelShipmentConditionInput | null,
};

export type UpdateShipmentMutation = {
  updateShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteShipmentMutationVariables = {
  input: DeleteShipmentInput,
  condition?: ModelShipmentConditionInput | null,
};

export type DeleteShipmentMutation = {
  deleteShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    order_status?: string | null,
    paid_status?: string | null,
    packed_items?: string | null,
    subtotal?: string | null,
    tax?: string | null,
    shipping?: string | null,
    discount?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    order_status?: string | null,
    paid_status?: string | null,
    packed_items?: string | null,
    subtotal?: string | null,
    tax?: string | null,
    shipping?: string | null,
    discount?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    order_status?: string | null,
    paid_status?: string | null,
    packed_items?: string | null,
    subtotal?: string | null,
    tax?: string | null,
    shipping?: string | null,
    discount?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    product_id?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    quantity?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    product_id?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    quantity?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    product_id?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    quantity?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateSalesrepMutationVariables = {
  input: CreateSalesrepInput,
  condition?: ModelSalesrepConditionInput | null,
};

export type CreateSalesrepMutation = {
  createSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateSalesrepMutationVariables = {
  input: UpdateSalesrepInput,
  condition?: ModelSalesrepConditionInput | null,
};

export type UpdateSalesrepMutation = {
  updateSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteSalesrepMutationVariables = {
  input: DeleteSalesrepInput,
  condition?: ModelSalesrepConditionInput | null,
};

export type DeleteSalesrepMutation = {
  deleteSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateBankMutationVariables = {
  input: CreateBankInput,
  condition?: ModelBankConditionInput | null,
};

export type CreateBankMutation = {
  createBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateBankMutationVariables = {
  input: UpdateBankInput,
  condition?: ModelBankConditionInput | null,
};

export type UpdateBankMutation = {
  updateBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteBankMutationVariables = {
  input: DeleteBankInput,
  condition?: ModelBankConditionInput | null,
};

export type DeleteBankMutation = {
  deleteBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateBusinessMutationVariables = {
  input: CreateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type CreateBusinessMutation = {
  createBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateBusinessMutationVariables = {
  input: UpdateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessMutation = {
  updateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteBusinessMutationVariables = {
  input: DeleteBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type DeleteBusinessMutation = {
  deleteBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateBuyerMutationVariables = {
  input: CreateBuyerInput,
  condition?: ModelBuyerConditionInput | null,
};

export type CreateBuyerMutation = {
  createBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    status?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    tags?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateBuyerMutationVariables = {
  input: UpdateBuyerInput,
  condition?: ModelBuyerConditionInput | null,
};

export type UpdateBuyerMutation = {
  updateBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    status?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    tags?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteBuyerMutationVariables = {
  input: DeleteBuyerInput,
  condition?: ModelBuyerConditionInput | null,
};

export type DeleteBuyerMutation = {
  deleteBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    status?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    tags?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateApplicationMutationVariables = {
  input: CreateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type CreateApplicationMutation = {
  createApplication?:  {
    __typename: "Application",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateApplicationMutationVariables = {
  input: UpdateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type UpdateApplicationMutation = {
  updateApplication?:  {
    __typename: "Application",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteApplicationMutationVariables = {
  input: DeleteApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type DeleteApplicationMutation = {
  deleteApplication?:  {
    __typename: "Application",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateBlurbMutationVariables = {
  input: CreateBlurbInput,
  condition?: ModelBlurbConditionInput | null,
};

export type CreateBlurbMutation = {
  createBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type UpdateBlurbMutationVariables = {
  input: UpdateBlurbInput,
  condition?: ModelBlurbConditionInput | null,
};

export type UpdateBlurbMutation = {
  updateBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type DeleteBlurbMutationVariables = {
  input: DeleteBlurbInput,
  condition?: ModelBlurbConditionInput | null,
};

export type DeleteBlurbMutation = {
  deleteBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type CreateProductTagsMutationVariables = {
  input: CreateProductTagsInput,
  condition?: ModelProductTagsConditionInput | null,
};

export type CreateProductTagsMutation = {
  createProductTags?:  {
    __typename: "ProductTags",
    id: string,
    tagId: string,
    productId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductTagsMutationVariables = {
  input: UpdateProductTagsInput,
  condition?: ModelProductTagsConditionInput | null,
};

export type UpdateProductTagsMutation = {
  updateProductTags?:  {
    __typename: "ProductTags",
    id: string,
    tagId: string,
    productId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductTagsMutationVariables = {
  input: DeleteProductTagsInput,
  condition?: ModelProductTagsConditionInput | null,
};

export type DeleteProductTagsMutation = {
  deleteProductTags?:  {
    __typename: "ProductTags",
    id: string,
    tagId: string,
    productId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBuyerTagsMutationVariables = {
  input: CreateBuyerTagsInput,
  condition?: ModelBuyerTagsConditionInput | null,
};

export type CreateBuyerTagsMutation = {
  createBuyerTags?:  {
    __typename: "BuyerTags",
    id: string,
    tagId: string,
    buyerId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    buyer:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBuyerTagsMutationVariables = {
  input: UpdateBuyerTagsInput,
  condition?: ModelBuyerTagsConditionInput | null,
};

export type UpdateBuyerTagsMutation = {
  updateBuyerTags?:  {
    __typename: "BuyerTags",
    id: string,
    tagId: string,
    buyerId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    buyer:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBuyerTagsMutationVariables = {
  input: DeleteBuyerTagsInput,
  condition?: ModelBuyerTagsConditionInput | null,
};

export type DeleteBuyerTagsMutation = {
  deleteBuyerTags?:  {
    __typename: "BuyerTags",
    id: string,
    tagId: string,
    buyerId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    buyer:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBusinessSalesrepsMutationVariables = {
  input: CreateBusinessSalesrepsInput,
  condition?: ModelBusinessSalesrepsConditionInput | null,
};

export type CreateBusinessSalesrepsMutation = {
  createBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBusinessSalesrepsMutationVariables = {
  input: UpdateBusinessSalesrepsInput,
  condition?: ModelBusinessSalesrepsConditionInput | null,
};

export type UpdateBusinessSalesrepsMutation = {
  updateBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBusinessSalesrepsMutationVariables = {
  input: DeleteBusinessSalesrepsInput,
  condition?: ModelBusinessSalesrepsConditionInput | null,
};

export type DeleteBusinessSalesrepsMutation = {
  deleteBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFactoryQueryVariables = {
  id: string,
};

export type GetFactoryQuery = {
  getFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    order_contacts?: Array< string | null > | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListFactoriesQueryVariables = {
  filter?: ModelFactoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFactoriesQuery = {
  listFactories?:  {
    __typename: "ModelFactoryConnection",
    items:  Array< {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      order_contacts?: Array< string | null > | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    available?: ProductAvailableEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    tags?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      order_contacts?: Array< string | null > | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    updated_at?: string | null,
    qtype?: string | null,
    created_at: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPackageQueryVariables = {
  id: string,
};

export type GetPackageQuery = {
  getPackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type ListPackagesQueryVariables = {
  filter?: ModelPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPackagesQuery = {
  listPackages?:  {
    __typename: "ModelPackageConnection",
    items:  Array< {
      __typename: "Package",
      id: string,
      weight_net?: number | null,
      weight_gross?: number | null,
      size_width?: number | null,
      size_depth?: number | null,
      size_height?: number | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
      shipmentPackagesId?: string | null,
      packageProductId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetShipmentQueryVariables = {
  id: string,
};

export type GetShipmentQuery = {
  getShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListShipmentsQueryVariables = {
  filter?: ModelShipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShipmentsQuery = {
  listShipments?:  {
    __typename: "ModelShipmentConnection",
    items:  Array< {
      __typename: "Shipment",
      id: string,
      departure?: string | null,
      arrival?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    order_status?: string | null,
    paid_status?: string | null,
    packed_items?: string | null,
    subtotal?: string | null,
    tax?: string | null,
    shipping?: string | null,
    discount?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      business_id?: string | null,
      buyer_id?: string | null,
      order_status?: string | null,
      paid_status?: string | null,
      packed_items?: string | null,
      subtotal?: string | null,
      tax?: string | null,
      shipping?: string | null,
      discount?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    product_id?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    quantity?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      product_id?: string | null,
      cart_id?: string | null,
      quantity?: number | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSalesrepQueryVariables = {
  id: string,
};

export type GetSalesrepQuery = {
  getSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListSalesrepsQueryVariables = {
  filter?: ModelSalesrepFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalesrepsQuery = {
  listSalesreps?:  {
    __typename: "ModelSalesrepConnection",
    items:  Array< {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postal_code: string,
      country: string,
      is_default?: boolean | null,
      business_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBankQueryVariables = {
  id: string,
};

export type GetBankQuery = {
  getBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListBanksQueryVariables = {
  filter?: ModelBankFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBanksQuery = {
  listBanks?:  {
    __typename: "ModelBankConnection",
    items:  Array< {
      __typename: "Bank",
      id: string,
      account_name: string,
      account_number: string,
      routing_number: string,
      is_default?: boolean | null,
      business_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
};

export type GetBusinessQuery = {
  getBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListBusinessesQueryVariables = {
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessesQuery = {
  listBusinesses?:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBuyerQueryVariables = {
  id: string,
};

export type GetBuyerQuery = {
  getBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    status?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    tags?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListBuyersQueryVariables = {
  filter?: ModelBuyerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuyersQuery = {
  listBuyers?:  {
    __typename: "ModelBuyerConnection",
    items:  Array< {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationQueryVariables = {
  id: string,
};

export type GetApplicationQuery = {
  getApplication?:  {
    __typename: "Application",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListApplicationsQueryVariables = {
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationsQuery = {
  listApplications?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      buyer_id?: string | null,
      status?: string | null,
      business_name: string,
      street: string,
      city: string,
      state: string,
      postal_code: string,
      country: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlurbQueryVariables = {
  id: string,
};

export type GetBlurbQuery = {
  getBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type ListBlurbsQueryVariables = {
  filter?: ModelBlurbFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlurbsQuery = {
  listBlurbs?:  {
    __typename: "ModelBlurbConnection",
    items:  Array< {
      __typename: "Blurb",
      id: string,
      title: string,
      description: string,
      start_date: string,
      end_date: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductTagsQueryVariables = {
  id: string,
};

export type GetProductTagsQuery = {
  getProductTags?:  {
    __typename: "ProductTags",
    id: string,
    tagId: string,
    productId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductTagsQueryVariables = {
  filter?: ModelProductTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductTagsQuery = {
  listProductTags?:  {
    __typename: "ModelProductTagsConnection",
    items:  Array< {
      __typename: "ProductTags",
      id: string,
      tagId: string,
      productId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBuyerTagsQueryVariables = {
  id: string,
};

export type GetBuyerTagsQuery = {
  getBuyerTags?:  {
    __typename: "BuyerTags",
    id: string,
    tagId: string,
    buyerId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    buyer:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBuyerTagsQueryVariables = {
  filter?: ModelBuyerTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuyerTagsQuery = {
  listBuyerTags?:  {
    __typename: "ModelBuyerTagsConnection",
    items:  Array< {
      __typename: "BuyerTags",
      id: string,
      tagId: string,
      buyerId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBusinessSalesrepsQueryVariables = {
  id: string,
};

export type GetBusinessSalesrepsQuery = {
  getBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBusinessSalesrepsQueryVariables = {
  filter?: ModelBusinessSalesrepsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessSalesrepsQuery = {
  listBusinessSalesreps?:  {
    __typename: "ModelBusinessSalesrepsConnection",
    items:  Array< {
      __typename: "BusinessSalesreps",
      id: string,
      salesrepId: string,
      businessId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QueryFactoriesByNameQueryVariables = {
  qtype: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFactoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QueryFactoriesByNameQuery = {
  queryFactoriesByName?:  {
    __typename: "ModelFactoryConnection",
    items:  Array< {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      order_contacts?: Array< string | null > | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetTagByNameQuery = {
  getTagByName?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QueryTagsByNameQueryVariables = {
  qtype: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QueryTagsByNameQuery = {
  queryTagsByName?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByFactory_idQueryVariables = {
  factory_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByFactory_idQuery = {
  productsByFactory_id?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QueryProductsByAvailableByNameQueryVariables = {
  qtype: string,
  availableName?: ModelProductProductsByAvailableByNameCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QueryProductsByAvailableByNameQuery = {
  queryProductsByAvailableByName?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QueryProductsByAvailableByUpdatedAtQueryVariables = {
  qtype: string,
  availableUpdated_at?: ModelProductProductsByAvailableByUpdatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QueryProductsByAvailableByUpdatedAtQuery = {
  queryProductsByAvailableByUpdatedAt?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByBusiness_idQueryVariables = {
  business_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByBusiness_idQuery = {
  ordersByBusiness_id?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      business_id?: string | null,
      buyer_id?: string | null,
      order_status?: string | null,
      paid_status?: string | null,
      packed_items?: string | null,
      subtotal?: string | null,
      tax?: string | null,
      shipping?: string | null,
      discount?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByBuyer_idQueryVariables = {
  buyer_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByBuyer_idQuery = {
  ordersByBuyer_id?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      business_id?: string | null,
      buyer_id?: string | null,
      order_status?: string | null,
      paid_status?: string | null,
      packed_items?: string | null,
      subtotal?: string | null,
      tax?: string | null,
      shipping?: string | null,
      discount?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ItemsByProduct_idQueryVariables = {
  product_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByProduct_idQuery = {
  itemsByProduct_id?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      product_id?: string | null,
      cart_id?: string | null,
      quantity?: number | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ItemsByCart_idQueryVariables = {
  cart_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByCart_idQuery = {
  itemsByCart_id?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      product_id?: string | null,
      cart_id?: string | null,
      quantity?: number | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CartsByBuyer_idQueryVariables = {
  buyer_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CartsByBuyer_idQuery = {
  cartsByBuyer_id?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuerySalesrepsByNameQueryVariables = {
  qtype: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSalesrepFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuerySalesrepsByNameQuery = {
  querySalesrepsByName?:  {
    __typename: "ModelSalesrepConnection",
    items:  Array< {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AddressesByBusiness_idQueryVariables = {
  business_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AddressesByBusiness_idQuery = {
  addressesByBusiness_id?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postal_code: string,
      country: string,
      is_default?: boolean | null,
      business_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BanksByBusiness_idQueryVariables = {
  business_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBankFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BanksByBusiness_idQuery = {
  banksByBusiness_id?:  {
    __typename: "ModelBankConnection",
    items:  Array< {
      __typename: "Bank",
      id: string,
      account_name: string,
      account_number: string,
      routing_number: string,
      is_default?: boolean | null,
      business_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QueryBusinessesByNameQueryVariables = {
  qtype: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QueryBusinessesByNameQuery = {
  queryBusinessesByName?:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BuyersByBusiness_idQueryVariables = {
  business_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBuyerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BuyersByBusiness_idQuery = {
  buyersByBusiness_id?:  {
    __typename: "ModelBuyerConnection",
    items:  Array< {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BuyersByCart_idQueryVariables = {
  cart_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBuyerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BuyersByCart_idQuery = {
  buyersByCart_id?:  {
    __typename: "ModelBuyerConnection",
    items:  Array< {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByBuyer_idQueryVariables = {
  buyer_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByBuyer_idQuery = {
  applicationsByBuyer_id?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      buyer_id?: string | null,
      status?: string | null,
      business_name: string,
      street: string,
      city: string,
      state: string,
      postal_code: string,
      country: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductTagsByTagIdQueryVariables = {
  tagId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductTagsByTagIdQuery = {
  productTagsByTagId?:  {
    __typename: "ModelProductTagsConnection",
    items:  Array< {
      __typename: "ProductTags",
      id: string,
      tagId: string,
      productId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductTagsByProductIdQueryVariables = {
  productId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductTagsByProductIdQuery = {
  productTagsByProductId?:  {
    __typename: "ModelProductTagsConnection",
    items:  Array< {
      __typename: "ProductTags",
      id: string,
      tagId: string,
      productId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BuyerTagsByTagIdQueryVariables = {
  tagId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBuyerTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BuyerTagsByTagIdQuery = {
  buyerTagsByTagId?:  {
    __typename: "ModelBuyerTagsConnection",
    items:  Array< {
      __typename: "BuyerTags",
      id: string,
      tagId: string,
      buyerId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BuyerTagsByBuyerIdQueryVariables = {
  buyerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBuyerTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BuyerTagsByBuyerIdQuery = {
  buyerTagsByBuyerId?:  {
    __typename: "ModelBuyerTagsConnection",
    items:  Array< {
      __typename: "BuyerTags",
      id: string,
      tagId: string,
      buyerId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BusinessSalesrepsBySalesrepIdQueryVariables = {
  salesrepId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessSalesrepsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessSalesrepsBySalesrepIdQuery = {
  businessSalesrepsBySalesrepId?:  {
    __typename: "ModelBusinessSalesrepsConnection",
    items:  Array< {
      __typename: "BusinessSalesreps",
      id: string,
      salesrepId: string,
      businessId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BusinessSalesrepsByBusinessIdQueryVariables = {
  businessId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessSalesrepsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessSalesrepsByBusinessIdQuery = {
  businessSalesrepsByBusinessId?:  {
    __typename: "ModelBusinessSalesrepsConnection",
    items:  Array< {
      __typename: "BusinessSalesreps",
      id: string,
      salesrepId: string,
      businessId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFactorySubscriptionVariables = {
  filter?: ModelSubscriptionFactoryFilterInput | null,
};

export type OnCreateFactorySubscription = {
  onCreateFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    order_contacts?: Array< string | null > | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateFactorySubscriptionVariables = {
  filter?: ModelSubscriptionFactoryFilterInput | null,
};

export type OnUpdateFactorySubscription = {
  onUpdateFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    order_contacts?: Array< string | null > | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteFactorySubscriptionVariables = {
  filter?: ModelSubscriptionFactoryFilterInput | null,
};

export type OnDeleteFactorySubscription = {
  onDeleteFactory?:  {
    __typename: "Factory",
    id: string,
    name?: string | null,
    url?: string | null,
    order_contacts?: Array< string | null > | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    available?: ProductAvailableEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    tags?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      order_contacts?: Array< string | null > | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    updated_at?: string | null,
    qtype?: string | null,
    created_at: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    available?: ProductAvailableEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    tags?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      order_contacts?: Array< string | null > | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    updated_at?: string | null,
    qtype?: string | null,
    created_at: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    msrp?: number | null,
    price?: number | null,
    sku?: string | null,
    description?: string | null,
    available?: ProductAvailableEnum | null,
    media?: Array< string | null > | null,
    item_weight_net?: number | null,
    item_weight_gross?: number | null,
    item_size_width?: number | null,
    item_size_depth?: number | null,
    item_size_height?: number | null,
    package_weight_net?: number | null,
    package_weight_gross?: number | null,
    package_size_width?: number | null,
    package_size_depth?: number | null,
    package_size_height?: number | null,
    items_per_package?: number | null,
    tags?:  {
      __typename: "ModelProductTagsConnection",
      nextToken?: string | null,
    } | null,
    factory_id?: string | null,
    factory?:  {
      __typename: "Factory",
      id: string,
      name?: string | null,
      url?: string | null,
      order_contacts?: Array< string | null > | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    updated_at?: string | null,
    qtype?: string | null,
    created_at: string,
  } | null,
};

export type OnCreatePackageSubscriptionVariables = {
  filter?: ModelSubscriptionPackageFilterInput | null,
};

export type OnCreatePackageSubscription = {
  onCreatePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type OnUpdatePackageSubscriptionVariables = {
  filter?: ModelSubscriptionPackageFilterInput | null,
};

export type OnUpdatePackageSubscription = {
  onUpdatePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type OnDeletePackageSubscriptionVariables = {
  filter?: ModelSubscriptionPackageFilterInput | null,
};

export type OnDeletePackageSubscription = {
  onDeletePackage?:  {
    __typename: "Package",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    weight_net?: number | null,
    weight_gross?: number | null,
    size_width?: number | null,
    size_depth?: number | null,
    size_height?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
    shipmentPackagesId?: string | null,
    packageProductId?: string | null,
  } | null,
};

export type OnCreateShipmentSubscriptionVariables = {
  filter?: ModelSubscriptionShipmentFilterInput | null,
};

export type OnCreateShipmentSubscription = {
  onCreateShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateShipmentSubscriptionVariables = {
  filter?: ModelSubscriptionShipmentFilterInput | null,
};

export type OnUpdateShipmentSubscription = {
  onUpdateShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteShipmentSubscriptionVariables = {
  filter?: ModelSubscriptionShipmentFilterInput | null,
};

export type OnDeleteShipmentSubscription = {
  onDeleteShipment?:  {
    __typename: "Shipment",
    id: string,
    packages?:  {
      __typename: "ModelPackageConnection",
      nextToken?: string | null,
    } | null,
    departure?: string | null,
    arrival?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    order_status?: string | null,
    paid_status?: string | null,
    packed_items?: string | null,
    subtotal?: string | null,
    tax?: string | null,
    shipping?: string | null,
    discount?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    order_status?: string | null,
    paid_status?: string | null,
    packed_items?: string | null,
    subtotal?: string | null,
    tax?: string | null,
    shipping?: string | null,
    discount?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    order_status?: string | null,
    paid_status?: string | null,
    packed_items?: string | null,
    subtotal?: string | null,
    tax?: string | null,
    shipping?: string | null,
    discount?: string | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    product_id?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    quantity?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    product_id?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    quantity?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    product_id?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    quantity?: number | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateSalesrepSubscriptionVariables = {
  filter?: ModelSubscriptionSalesrepFilterInput | null,
};

export type OnCreateSalesrepSubscription = {
  onCreateSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateSalesrepSubscriptionVariables = {
  filter?: ModelSubscriptionSalesrepFilterInput | null,
};

export type OnUpdateSalesrepSubscription = {
  onUpdateSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteSalesrepSubscriptionVariables = {
  filter?: ModelSubscriptionSalesrepFilterInput | null,
};

export type OnDeleteSalesrepSubscription = {
  onDeleteSalesrep?:  {
    __typename: "Salesrep",
    id: string,
    name: string,
    title?: string | null,
    email: string,
    phone: string,
    businesses?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateBankSubscriptionVariables = {
  filter?: ModelSubscriptionBankFilterInput | null,
};

export type OnCreateBankSubscription = {
  onCreateBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateBankSubscriptionVariables = {
  filter?: ModelSubscriptionBankFilterInput | null,
};

export type OnUpdateBankSubscription = {
  onUpdateBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteBankSubscriptionVariables = {
  filter?: ModelSubscriptionBankFilterInput | null,
};

export type OnDeleteBankSubscription = {
  onDeleteBank?:  {
    __typename: "Bank",
    id: string,
    account_name: string,
    account_number: string,
    routing_number: string,
    is_default?: boolean | null,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    description?: string | null,
    salesreps?:  {
      __typename: "ModelBusinessSalesrepsConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    banks?:  {
      __typename: "ModelBankConnection",
      nextToken?: string | null,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateBuyerSubscriptionVariables = {
  filter?: ModelSubscriptionBuyerFilterInput | null,
};

export type OnCreateBuyerSubscription = {
  onCreateBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    status?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    tags?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateBuyerSubscriptionVariables = {
  filter?: ModelSubscriptionBuyerFilterInput | null,
};

export type OnUpdateBuyerSubscription = {
  onUpdateBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    status?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    tags?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteBuyerSubscriptionVariables = {
  filter?: ModelSubscriptionBuyerFilterInput | null,
};

export type OnDeleteBuyerSubscription = {
  onDeleteBuyer?:  {
    __typename: "Buyer",
    id: string,
    first_name: string,
    last_name: string,
    user_name: string,
    last_login?: string | null,
    status?: string | null,
    is_owner: boolean,
    email: string,
    phone: string,
    business_id?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    cart_id?: string | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      buyer_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    tags?:  {
      __typename: "ModelBuyerTagsConnection",
      nextToken?: string | null,
    } | null,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnCreateApplicationSubscription = {
  onCreateApplication?:  {
    __typename: "Application",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnUpdateApplicationSubscription = {
  onUpdateApplication?:  {
    __typename: "Application",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnDeleteApplicationSubscription = {
  onDeleteApplication?:  {
    __typename: "Application",
    id: string,
    buyer_id?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    } | null,
    status?: string | null,
    business_name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateBlurbSubscriptionVariables = {
  filter?: ModelSubscriptionBlurbFilterInput | null,
};

export type OnCreateBlurbSubscription = {
  onCreateBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnUpdateBlurbSubscriptionVariables = {
  filter?: ModelSubscriptionBlurbFilterInput | null,
};

export type OnUpdateBlurbSubscription = {
  onUpdateBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnDeleteBlurbSubscriptionVariables = {
  filter?: ModelSubscriptionBlurbFilterInput | null,
};

export type OnDeleteBlurbSubscription = {
  onDeleteBlurb?:  {
    __typename: "Blurb",
    id: string,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    qtype?: string | null,
    created_at: string,
    updated_at: string,
  } | null,
};

export type OnCreateProductTagsSubscriptionVariables = {
  filter?: ModelSubscriptionProductTagsFilterInput | null,
};

export type OnCreateProductTagsSubscription = {
  onCreateProductTags?:  {
    __typename: "ProductTags",
    id: string,
    tagId: string,
    productId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductTagsSubscriptionVariables = {
  filter?: ModelSubscriptionProductTagsFilterInput | null,
};

export type OnUpdateProductTagsSubscription = {
  onUpdateProductTags?:  {
    __typename: "ProductTags",
    id: string,
    tagId: string,
    productId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductTagsSubscriptionVariables = {
  filter?: ModelSubscriptionProductTagsFilterInput | null,
};

export type OnDeleteProductTagsSubscription = {
  onDeleteProductTags?:  {
    __typename: "ProductTags",
    id: string,
    tagId: string,
    productId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      msrp?: number | null,
      price?: number | null,
      sku?: string | null,
      description?: string | null,
      available?: ProductAvailableEnum | null,
      media?: Array< string | null > | null,
      item_weight_net?: number | null,
      item_weight_gross?: number | null,
      item_size_width?: number | null,
      item_size_depth?: number | null,
      item_size_height?: number | null,
      package_weight_net?: number | null,
      package_weight_gross?: number | null,
      package_size_width?: number | null,
      package_size_depth?: number | null,
      package_size_height?: number | null,
      items_per_package?: number | null,
      factory_id?: string | null,
      updated_at?: string | null,
      qtype?: string | null,
      created_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBuyerTagsSubscriptionVariables = {
  filter?: ModelSubscriptionBuyerTagsFilterInput | null,
};

export type OnCreateBuyerTagsSubscription = {
  onCreateBuyerTags?:  {
    __typename: "BuyerTags",
    id: string,
    tagId: string,
    buyerId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    buyer:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBuyerTagsSubscriptionVariables = {
  filter?: ModelSubscriptionBuyerTagsFilterInput | null,
};

export type OnUpdateBuyerTagsSubscription = {
  onUpdateBuyerTags?:  {
    __typename: "BuyerTags",
    id: string,
    tagId: string,
    buyerId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    buyer:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBuyerTagsSubscriptionVariables = {
  filter?: ModelSubscriptionBuyerTagsFilterInput | null,
};

export type OnDeleteBuyerTagsSubscription = {
  onDeleteBuyerTags?:  {
    __typename: "BuyerTags",
    id: string,
    tagId: string,
    buyerId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    buyer:  {
      __typename: "Buyer",
      id: string,
      first_name: string,
      last_name: string,
      user_name: string,
      last_login?: string | null,
      status?: string | null,
      is_owner: boolean,
      email: string,
      phone: string,
      business_id?: string | null,
      cart_id?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBusinessSalesrepsSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessSalesrepsFilterInput | null,
};

export type OnCreateBusinessSalesrepsSubscription = {
  onCreateBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBusinessSalesrepsSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessSalesrepsFilterInput | null,
};

export type OnUpdateBusinessSalesrepsSubscription = {
  onUpdateBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBusinessSalesrepsSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessSalesrepsFilterInput | null,
};

export type OnDeleteBusinessSalesrepsSubscription = {
  onDeleteBusinessSalesreps?:  {
    __typename: "BusinessSalesreps",
    id: string,
    salesrepId: string,
    businessId: string,
    salesrep:  {
      __typename: "Salesrep",
      id: string,
      name: string,
      title?: string | null,
      email: string,
      phone: string,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      description?: string | null,
      qtype?: string | null,
      created_at: string,
      updated_at: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
