/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFactory = /* GraphQL */ `mutation CreateFactory(
  $input: CreateFactoryInput!
  $condition: ModelFactoryConditionInput
) {
  createFactory(input: $input, condition: $condition) {
    id
    name
    url
    order_contacts
    products {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFactoryMutationVariables,
  APITypes.CreateFactoryMutation
>;
export const updateFactory = /* GraphQL */ `mutation UpdateFactory(
  $input: UpdateFactoryInput!
  $condition: ModelFactoryConditionInput
) {
  updateFactory(input: $input, condition: $condition) {
    id
    name
    url
    order_contacts
    products {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFactoryMutationVariables,
  APITypes.UpdateFactoryMutation
>;
export const deleteFactory = /* GraphQL */ `mutation DeleteFactory(
  $input: DeleteFactoryInput!
  $condition: ModelFactoryConditionInput
) {
  deleteFactory(input: $input, condition: $condition) {
    id
    name
    url
    order_contacts
    products {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFactoryMutationVariables,
  APITypes.DeleteFactoryMutation
>;
export const createTag = /* GraphQL */ `mutation CreateTag(
  $input: CreateTagInput!
  $condition: ModelTagConditionInput
) {
  createTag(input: $input, condition: $condition) {
    id
    name
    products {
      nextToken
      __typename
    }
    buyers {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTagMutationVariables,
  APITypes.CreateTagMutation
>;
export const updateTag = /* GraphQL */ `mutation UpdateTag(
  $input: UpdateTagInput!
  $condition: ModelTagConditionInput
) {
  updateTag(input: $input, condition: $condition) {
    id
    name
    products {
      nextToken
      __typename
    }
    buyers {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTagMutationVariables,
  APITypes.UpdateTagMutation
>;
export const deleteTag = /* GraphQL */ `mutation DeleteTag(
  $input: DeleteTagInput!
  $condition: ModelTagConditionInput
) {
  deleteTag(input: $input, condition: $condition) {
    id
    name
    products {
      nextToken
      __typename
    }
    buyers {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTagMutationVariables,
  APITypes.DeleteTagMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
    id
    name
    msrp
    price
    sku
    description
    available
    media
    item_weight_net
    item_weight_gross
    item_size_width
    item_size_depth
    item_size_height
    package_weight_net
    package_weight_gross
    package_size_width
    package_size_depth
    package_size_height
    items_per_package
    tags {
      nextToken
      __typename
    }
    factory_id
    factory {
      id
      name
      url
      order_contacts
      qtype
      created_at
      updated_at
      __typename
    }
    updated_at
    qtype
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
    id
    name
    msrp
    price
    sku
    description
    available
    media
    item_weight_net
    item_weight_gross
    item_size_width
    item_size_depth
    item_size_height
    package_weight_net
    package_weight_gross
    package_size_width
    package_size_depth
    package_size_height
    items_per_package
    tags {
      nextToken
      __typename
    }
    factory_id
    factory {
      id
      name
      url
      order_contacts
      qtype
      created_at
      updated_at
      __typename
    }
    updated_at
    qtype
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
    id
    name
    msrp
    price
    sku
    description
    available
    media
    item_weight_net
    item_weight_gross
    item_size_width
    item_size_depth
    item_size_height
    package_weight_net
    package_weight_gross
    package_size_width
    package_size_depth
    package_size_height
    items_per_package
    tags {
      nextToken
      __typename
    }
    factory_id
    factory {
      id
      name
      url
      order_contacts
      qtype
      created_at
      updated_at
      __typename
    }
    updated_at
    qtype
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createPackage = /* GraphQL */ `mutation CreatePackage(
  $input: CreatePackageInput!
  $condition: ModelPackageConditionInput
) {
  createPackage(input: $input, condition: $condition) {
    id
    product {
      id
      name
      msrp
      price
      sku
      description
      available
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      factory_id
      updated_at
      qtype
      created_at
      __typename
    }
    weight_net
    weight_gross
    size_width
    size_depth
    size_height
    qtype
    created_at
    updated_at
    shipmentPackagesId
    packageProductId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePackageMutationVariables,
  APITypes.CreatePackageMutation
>;
export const updatePackage = /* GraphQL */ `mutation UpdatePackage(
  $input: UpdatePackageInput!
  $condition: ModelPackageConditionInput
) {
  updatePackage(input: $input, condition: $condition) {
    id
    product {
      id
      name
      msrp
      price
      sku
      description
      available
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      factory_id
      updated_at
      qtype
      created_at
      __typename
    }
    weight_net
    weight_gross
    size_width
    size_depth
    size_height
    qtype
    created_at
    updated_at
    shipmentPackagesId
    packageProductId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePackageMutationVariables,
  APITypes.UpdatePackageMutation
>;
export const deletePackage = /* GraphQL */ `mutation DeletePackage(
  $input: DeletePackageInput!
  $condition: ModelPackageConditionInput
) {
  deletePackage(input: $input, condition: $condition) {
    id
    product {
      id
      name
      msrp
      price
      sku
      description
      available
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      factory_id
      updated_at
      qtype
      created_at
      __typename
    }
    weight_net
    weight_gross
    size_width
    size_depth
    size_height
    qtype
    created_at
    updated_at
    shipmentPackagesId
    packageProductId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePackageMutationVariables,
  APITypes.DeletePackageMutation
>;
export const createShipment = /* GraphQL */ `mutation CreateShipment(
  $input: CreateShipmentInput!
  $condition: ModelShipmentConditionInput
) {
  createShipment(input: $input, condition: $condition) {
    id
    packages {
      nextToken
      __typename
    }
    departure
    arrival
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateShipmentMutationVariables,
  APITypes.CreateShipmentMutation
>;
export const updateShipment = /* GraphQL */ `mutation UpdateShipment(
  $input: UpdateShipmentInput!
  $condition: ModelShipmentConditionInput
) {
  updateShipment(input: $input, condition: $condition) {
    id
    packages {
      nextToken
      __typename
    }
    departure
    arrival
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateShipmentMutationVariables,
  APITypes.UpdateShipmentMutation
>;
export const deleteShipment = /* GraphQL */ `mutation DeleteShipment(
  $input: DeleteShipmentInput!
  $condition: ModelShipmentConditionInput
) {
  deleteShipment(input: $input, condition: $condition) {
    id
    packages {
      nextToken
      __typename
    }
    departure
    arrival
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteShipmentMutationVariables,
  APITypes.DeleteShipmentMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
    id
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    buyer_id
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    order_status
    paid_status
    packed_items
    subtotal
    tax
    shipping
    discount
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    id
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    buyer_id
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    order_status
    paid_status
    packed_items
    subtotal
    tax
    shipping
    discount
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
    id
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    buyer_id
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    order_status
    paid_status
    packed_items
    subtotal
    tax
    shipping
    discount
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createItem = /* GraphQL */ `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
    id
    product_id
    product {
      id
      name
      msrp
      price
      sku
      description
      available
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      factory_id
      updated_at
      qtype
      created_at
      __typename
    }
    cart_id
    cart {
      id
      buyer_id
      qtype
      created_at
      updated_at
      __typename
    }
    quantity
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $input: UpdateItemInput!
  $condition: ModelItemConditionInput
) {
  updateItem(input: $input, condition: $condition) {
    id
    product_id
    product {
      id
      name
      msrp
      price
      sku
      description
      available
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      factory_id
      updated_at
      qtype
      created_at
      __typename
    }
    cart_id
    cart {
      id
      buyer_id
      qtype
      created_at
      updated_at
      __typename
    }
    quantity
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $input: DeleteItemInput!
  $condition: ModelItemConditionInput
) {
  deleteItem(input: $input, condition: $condition) {
    id
    product_id
    product {
      id
      name
      msrp
      price
      sku
      description
      available
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      factory_id
      updated_at
      qtype
      created_at
      __typename
    }
    cart_id
    cart {
      id
      buyer_id
      qtype
      created_at
      updated_at
      __typename
    }
    quantity
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
export const createCart = /* GraphQL */ `mutation CreateCart(
  $input: CreateCartInput!
  $condition: ModelCartConditionInput
) {
  createCart(input: $input, condition: $condition) {
    id
    buyer_id
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    items {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCartMutationVariables,
  APITypes.CreateCartMutation
>;
export const updateCart = /* GraphQL */ `mutation UpdateCart(
  $input: UpdateCartInput!
  $condition: ModelCartConditionInput
) {
  updateCart(input: $input, condition: $condition) {
    id
    buyer_id
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    items {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCartMutationVariables,
  APITypes.UpdateCartMutation
>;
export const deleteCart = /* GraphQL */ `mutation DeleteCart(
  $input: DeleteCartInput!
  $condition: ModelCartConditionInput
) {
  deleteCart(input: $input, condition: $condition) {
    id
    buyer_id
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    items {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCartMutationVariables,
  APITypes.DeleteCartMutation
>;
export const createSalesrep = /* GraphQL */ `mutation CreateSalesrep(
  $input: CreateSalesrepInput!
  $condition: ModelSalesrepConditionInput
) {
  createSalesrep(input: $input, condition: $condition) {
    id
    name
    title
    email
    phone
    businesses {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSalesrepMutationVariables,
  APITypes.CreateSalesrepMutation
>;
export const updateSalesrep = /* GraphQL */ `mutation UpdateSalesrep(
  $input: UpdateSalesrepInput!
  $condition: ModelSalesrepConditionInput
) {
  updateSalesrep(input: $input, condition: $condition) {
    id
    name
    title
    email
    phone
    businesses {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSalesrepMutationVariables,
  APITypes.UpdateSalesrepMutation
>;
export const deleteSalesrep = /* GraphQL */ `mutation DeleteSalesrep(
  $input: DeleteSalesrepInput!
  $condition: ModelSalesrepConditionInput
) {
  deleteSalesrep(input: $input, condition: $condition) {
    id
    name
    title
    email
    phone
    businesses {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSalesrepMutationVariables,
  APITypes.DeleteSalesrepMutation
>;
export const createAddress = /* GraphQL */ `mutation CreateAddress(
  $input: CreateAddressInput!
  $condition: ModelAddressConditionInput
) {
  createAddress(input: $input, condition: $condition) {
    id
    street
    city
    state
    postal_code
    country
    is_default
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAddressMutationVariables,
  APITypes.CreateAddressMutation
>;
export const updateAddress = /* GraphQL */ `mutation UpdateAddress(
  $input: UpdateAddressInput!
  $condition: ModelAddressConditionInput
) {
  updateAddress(input: $input, condition: $condition) {
    id
    street
    city
    state
    postal_code
    country
    is_default
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAddressMutationVariables,
  APITypes.UpdateAddressMutation
>;
export const deleteAddress = /* GraphQL */ `mutation DeleteAddress(
  $input: DeleteAddressInput!
  $condition: ModelAddressConditionInput
) {
  deleteAddress(input: $input, condition: $condition) {
    id
    street
    city
    state
    postal_code
    country
    is_default
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAddressMutationVariables,
  APITypes.DeleteAddressMutation
>;
export const createBank = /* GraphQL */ `mutation CreateBank(
  $input: CreateBankInput!
  $condition: ModelBankConditionInput
) {
  createBank(input: $input, condition: $condition) {
    id
    account_name
    account_number
    routing_number
    is_default
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBankMutationVariables,
  APITypes.CreateBankMutation
>;
export const updateBank = /* GraphQL */ `mutation UpdateBank(
  $input: UpdateBankInput!
  $condition: ModelBankConditionInput
) {
  updateBank(input: $input, condition: $condition) {
    id
    account_name
    account_number
    routing_number
    is_default
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBankMutationVariables,
  APITypes.UpdateBankMutation
>;
export const deleteBank = /* GraphQL */ `mutation DeleteBank(
  $input: DeleteBankInput!
  $condition: ModelBankConditionInput
) {
  deleteBank(input: $input, condition: $condition) {
    id
    account_name
    account_number
    routing_number
    is_default
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBankMutationVariables,
  APITypes.DeleteBankMutation
>;
export const createBusiness = /* GraphQL */ `mutation CreateBusiness(
  $input: CreateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  createBusiness(input: $input, condition: $condition) {
    id
    name
    description
    salesreps {
      nextToken
      __typename
    }
    addresses {
      nextToken
      __typename
    }
    banks {
      nextToken
      __typename
    }
    buyers {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBusinessMutationVariables,
  APITypes.CreateBusinessMutation
>;
export const updateBusiness = /* GraphQL */ `mutation UpdateBusiness(
  $input: UpdateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  updateBusiness(input: $input, condition: $condition) {
    id
    name
    description
    salesreps {
      nextToken
      __typename
    }
    addresses {
      nextToken
      __typename
    }
    banks {
      nextToken
      __typename
    }
    buyers {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBusinessMutationVariables,
  APITypes.UpdateBusinessMutation
>;
export const deleteBusiness = /* GraphQL */ `mutation DeleteBusiness(
  $input: DeleteBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  deleteBusiness(input: $input, condition: $condition) {
    id
    name
    description
    salesreps {
      nextToken
      __typename
    }
    addresses {
      nextToken
      __typename
    }
    banks {
      nextToken
      __typename
    }
    buyers {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBusinessMutationVariables,
  APITypes.DeleteBusinessMutation
>;
export const createBuyer = /* GraphQL */ `mutation CreateBuyer(
  $input: CreateBuyerInput!
  $condition: ModelBuyerConditionInput
) {
  createBuyer(input: $input, condition: $condition) {
    id
    first_name
    last_name
    user_name
    last_login
    status
    is_owner
    email
    phone
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    cart_id
    cart {
      id
      buyer_id
      qtype
      created_at
      updated_at
      __typename
    }
    tags {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBuyerMutationVariables,
  APITypes.CreateBuyerMutation
>;
export const updateBuyer = /* GraphQL */ `mutation UpdateBuyer(
  $input: UpdateBuyerInput!
  $condition: ModelBuyerConditionInput
) {
  updateBuyer(input: $input, condition: $condition) {
    id
    first_name
    last_name
    user_name
    last_login
    status
    is_owner
    email
    phone
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    cart_id
    cart {
      id
      buyer_id
      qtype
      created_at
      updated_at
      __typename
    }
    tags {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBuyerMutationVariables,
  APITypes.UpdateBuyerMutation
>;
export const deleteBuyer = /* GraphQL */ `mutation DeleteBuyer(
  $input: DeleteBuyerInput!
  $condition: ModelBuyerConditionInput
) {
  deleteBuyer(input: $input, condition: $condition) {
    id
    first_name
    last_name
    user_name
    last_login
    status
    is_owner
    email
    phone
    business_id
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    cart_id
    cart {
      id
      buyer_id
      qtype
      created_at
      updated_at
      __typename
    }
    tags {
      nextToken
      __typename
    }
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBuyerMutationVariables,
  APITypes.DeleteBuyerMutation
>;
export const createApplication = /* GraphQL */ `mutation CreateApplication(
  $input: CreateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  createApplication(input: $input, condition: $condition) {
    id
    buyer_id
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    status
    business_name
    street
    city
    state
    postal_code
    country
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateApplicationMutationVariables,
  APITypes.CreateApplicationMutation
>;
export const updateApplication = /* GraphQL */ `mutation UpdateApplication(
  $input: UpdateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  updateApplication(input: $input, condition: $condition) {
    id
    buyer_id
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    status
    business_name
    street
    city
    state
    postal_code
    country
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateApplicationMutationVariables,
  APITypes.UpdateApplicationMutation
>;
export const deleteApplication = /* GraphQL */ `mutation DeleteApplication(
  $input: DeleteApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  deleteApplication(input: $input, condition: $condition) {
    id
    buyer_id
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    status
    business_name
    street
    city
    state
    postal_code
    country
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteApplicationMutationVariables,
  APITypes.DeleteApplicationMutation
>;
export const createBlurb = /* GraphQL */ `mutation CreateBlurb(
  $input: CreateBlurbInput!
  $condition: ModelBlurbConditionInput
) {
  createBlurb(input: $input, condition: $condition) {
    id
    title
    description
    start_date
    end_date
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBlurbMutationVariables,
  APITypes.CreateBlurbMutation
>;
export const updateBlurb = /* GraphQL */ `mutation UpdateBlurb(
  $input: UpdateBlurbInput!
  $condition: ModelBlurbConditionInput
) {
  updateBlurb(input: $input, condition: $condition) {
    id
    title
    description
    start_date
    end_date
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBlurbMutationVariables,
  APITypes.UpdateBlurbMutation
>;
export const deleteBlurb = /* GraphQL */ `mutation DeleteBlurb(
  $input: DeleteBlurbInput!
  $condition: ModelBlurbConditionInput
) {
  deleteBlurb(input: $input, condition: $condition) {
    id
    title
    description
    start_date
    end_date
    qtype
    created_at
    updated_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBlurbMutationVariables,
  APITypes.DeleteBlurbMutation
>;
export const createProductTags = /* GraphQL */ `mutation CreateProductTags(
  $input: CreateProductTagsInput!
  $condition: ModelProductTagsConditionInput
) {
  createProductTags(input: $input, condition: $condition) {
    id
    tagId
    productId
    tag {
      id
      name
      qtype
      created_at
      updated_at
      __typename
    }
    product {
      id
      name
      msrp
      price
      sku
      description
      available
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      factory_id
      updated_at
      qtype
      created_at
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductTagsMutationVariables,
  APITypes.CreateProductTagsMutation
>;
export const updateProductTags = /* GraphQL */ `mutation UpdateProductTags(
  $input: UpdateProductTagsInput!
  $condition: ModelProductTagsConditionInput
) {
  updateProductTags(input: $input, condition: $condition) {
    id
    tagId
    productId
    tag {
      id
      name
      qtype
      created_at
      updated_at
      __typename
    }
    product {
      id
      name
      msrp
      price
      sku
      description
      available
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      factory_id
      updated_at
      qtype
      created_at
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductTagsMutationVariables,
  APITypes.UpdateProductTagsMutation
>;
export const deleteProductTags = /* GraphQL */ `mutation DeleteProductTags(
  $input: DeleteProductTagsInput!
  $condition: ModelProductTagsConditionInput
) {
  deleteProductTags(input: $input, condition: $condition) {
    id
    tagId
    productId
    tag {
      id
      name
      qtype
      created_at
      updated_at
      __typename
    }
    product {
      id
      name
      msrp
      price
      sku
      description
      available
      media
      item_weight_net
      item_weight_gross
      item_size_width
      item_size_depth
      item_size_height
      package_weight_net
      package_weight_gross
      package_size_width
      package_size_depth
      package_size_height
      items_per_package
      factory_id
      updated_at
      qtype
      created_at
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductTagsMutationVariables,
  APITypes.DeleteProductTagsMutation
>;
export const createBuyerTags = /* GraphQL */ `mutation CreateBuyerTags(
  $input: CreateBuyerTagsInput!
  $condition: ModelBuyerTagsConditionInput
) {
  createBuyerTags(input: $input, condition: $condition) {
    id
    tagId
    buyerId
    tag {
      id
      name
      qtype
      created_at
      updated_at
      __typename
    }
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBuyerTagsMutationVariables,
  APITypes.CreateBuyerTagsMutation
>;
export const updateBuyerTags = /* GraphQL */ `mutation UpdateBuyerTags(
  $input: UpdateBuyerTagsInput!
  $condition: ModelBuyerTagsConditionInput
) {
  updateBuyerTags(input: $input, condition: $condition) {
    id
    tagId
    buyerId
    tag {
      id
      name
      qtype
      created_at
      updated_at
      __typename
    }
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBuyerTagsMutationVariables,
  APITypes.UpdateBuyerTagsMutation
>;
export const deleteBuyerTags = /* GraphQL */ `mutation DeleteBuyerTags(
  $input: DeleteBuyerTagsInput!
  $condition: ModelBuyerTagsConditionInput
) {
  deleteBuyerTags(input: $input, condition: $condition) {
    id
    tagId
    buyerId
    tag {
      id
      name
      qtype
      created_at
      updated_at
      __typename
    }
    buyer {
      id
      first_name
      last_name
      user_name
      last_login
      status
      is_owner
      email
      phone
      business_id
      cart_id
      qtype
      created_at
      updated_at
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBuyerTagsMutationVariables,
  APITypes.DeleteBuyerTagsMutation
>;
export const createBusinessSalesreps = /* GraphQL */ `mutation CreateBusinessSalesreps(
  $input: CreateBusinessSalesrepsInput!
  $condition: ModelBusinessSalesrepsConditionInput
) {
  createBusinessSalesreps(input: $input, condition: $condition) {
    id
    salesrepId
    businessId
    salesrep {
      id
      name
      title
      email
      phone
      qtype
      created_at
      updated_at
      __typename
    }
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBusinessSalesrepsMutationVariables,
  APITypes.CreateBusinessSalesrepsMutation
>;
export const updateBusinessSalesreps = /* GraphQL */ `mutation UpdateBusinessSalesreps(
  $input: UpdateBusinessSalesrepsInput!
  $condition: ModelBusinessSalesrepsConditionInput
) {
  updateBusinessSalesreps(input: $input, condition: $condition) {
    id
    salesrepId
    businessId
    salesrep {
      id
      name
      title
      email
      phone
      qtype
      created_at
      updated_at
      __typename
    }
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBusinessSalesrepsMutationVariables,
  APITypes.UpdateBusinessSalesrepsMutation
>;
export const deleteBusinessSalesreps = /* GraphQL */ `mutation DeleteBusinessSalesreps(
  $input: DeleteBusinessSalesrepsInput!
  $condition: ModelBusinessSalesrepsConditionInput
) {
  deleteBusinessSalesreps(input: $input, condition: $condition) {
    id
    salesrepId
    businessId
    salesrep {
      id
      name
      title
      email
      phone
      qtype
      created_at
      updated_at
      __typename
    }
    business {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBusinessSalesrepsMutationVariables,
  APITypes.DeleteBusinessSalesrepsMutation
>;
