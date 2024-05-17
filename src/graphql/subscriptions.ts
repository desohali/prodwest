/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFactory = /* GraphQL */ `subscription OnCreateFactory($filter: ModelSubscriptionFactoryFilterInput) {
  onCreateFactory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFactorySubscriptionVariables,
  APITypes.OnCreateFactorySubscription
>;
export const onUpdateFactory = /* GraphQL */ `subscription OnUpdateFactory($filter: ModelSubscriptionFactoryFilterInput) {
  onUpdateFactory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFactorySubscriptionVariables,
  APITypes.OnUpdateFactorySubscription
>;
export const onDeleteFactory = /* GraphQL */ `subscription OnDeleteFactory($filter: ModelSubscriptionFactoryFilterInput) {
  onDeleteFactory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFactorySubscriptionVariables,
  APITypes.OnDeleteFactorySubscription
>;
export const onCreateTag = /* GraphQL */ `subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
  onCreateTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTagSubscriptionVariables,
  APITypes.OnCreateTagSubscription
>;
export const onUpdateTag = /* GraphQL */ `subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
  onUpdateTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTagSubscriptionVariables,
  APITypes.OnUpdateTagSubscription
>;
export const onDeleteTag = /* GraphQL */ `subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
  onDeleteTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTagSubscriptionVariables,
  APITypes.OnDeleteTagSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreatePackage = /* GraphQL */ `subscription OnCreatePackage($filter: ModelSubscriptionPackageFilterInput) {
  onCreatePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePackageSubscriptionVariables,
  APITypes.OnCreatePackageSubscription
>;
export const onUpdatePackage = /* GraphQL */ `subscription OnUpdatePackage($filter: ModelSubscriptionPackageFilterInput) {
  onUpdatePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePackageSubscriptionVariables,
  APITypes.OnUpdatePackageSubscription
>;
export const onDeletePackage = /* GraphQL */ `subscription OnDeletePackage($filter: ModelSubscriptionPackageFilterInput) {
  onDeletePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePackageSubscriptionVariables,
  APITypes.OnDeletePackageSubscription
>;
export const onCreateShipment = /* GraphQL */ `subscription OnCreateShipment($filter: ModelSubscriptionShipmentFilterInput) {
  onCreateShipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateShipmentSubscriptionVariables,
  APITypes.OnCreateShipmentSubscription
>;
export const onUpdateShipment = /* GraphQL */ `subscription OnUpdateShipment($filter: ModelSubscriptionShipmentFilterInput) {
  onUpdateShipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateShipmentSubscriptionVariables,
  APITypes.OnUpdateShipmentSubscription
>;
export const onDeleteShipment = /* GraphQL */ `subscription OnDeleteShipment($filter: ModelSubscriptionShipmentFilterInput) {
  onDeleteShipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteShipmentSubscriptionVariables,
  APITypes.OnDeleteShipmentSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateItem = /* GraphQL */ `subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
  onCreateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
  onUpdateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
  onDeleteItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
export const onCreateCart = /* GraphQL */ `subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
  onCreateCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCartSubscriptionVariables,
  APITypes.OnCreateCartSubscription
>;
export const onUpdateCart = /* GraphQL */ `subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
  onUpdateCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCartSubscriptionVariables,
  APITypes.OnUpdateCartSubscription
>;
export const onDeleteCart = /* GraphQL */ `subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
  onDeleteCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCartSubscriptionVariables,
  APITypes.OnDeleteCartSubscription
>;
export const onCreateSalesrep = /* GraphQL */ `subscription OnCreateSalesrep($filter: ModelSubscriptionSalesrepFilterInput) {
  onCreateSalesrep(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSalesrepSubscriptionVariables,
  APITypes.OnCreateSalesrepSubscription
>;
export const onUpdateSalesrep = /* GraphQL */ `subscription OnUpdateSalesrep($filter: ModelSubscriptionSalesrepFilterInput) {
  onUpdateSalesrep(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSalesrepSubscriptionVariables,
  APITypes.OnUpdateSalesrepSubscription
>;
export const onDeleteSalesrep = /* GraphQL */ `subscription OnDeleteSalesrep($filter: ModelSubscriptionSalesrepFilterInput) {
  onDeleteSalesrep(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSalesrepSubscriptionVariables,
  APITypes.OnDeleteSalesrepSubscription
>;
export const onCreateAddress = /* GraphQL */ `subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onCreateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAddressSubscriptionVariables,
  APITypes.OnCreateAddressSubscription
>;
export const onUpdateAddress = /* GraphQL */ `subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onUpdateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAddressSubscriptionVariables,
  APITypes.OnUpdateAddressSubscription
>;
export const onDeleteAddress = /* GraphQL */ `subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
  onDeleteAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAddressSubscriptionVariables,
  APITypes.OnDeleteAddressSubscription
>;
export const onCreateBank = /* GraphQL */ `subscription OnCreateBank($filter: ModelSubscriptionBankFilterInput) {
  onCreateBank(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBankSubscriptionVariables,
  APITypes.OnCreateBankSubscription
>;
export const onUpdateBank = /* GraphQL */ `subscription OnUpdateBank($filter: ModelSubscriptionBankFilterInput) {
  onUpdateBank(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBankSubscriptionVariables,
  APITypes.OnUpdateBankSubscription
>;
export const onDeleteBank = /* GraphQL */ `subscription OnDeleteBank($filter: ModelSubscriptionBankFilterInput) {
  onDeleteBank(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBankSubscriptionVariables,
  APITypes.OnDeleteBankSubscription
>;
export const onCreateBusiness = /* GraphQL */ `subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onCreateBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessSubscriptionVariables,
  APITypes.OnCreateBusinessSubscription
>;
export const onUpdateBusiness = /* GraphQL */ `subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onUpdateBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessSubscriptionVariables,
  APITypes.OnUpdateBusinessSubscription
>;
export const onDeleteBusiness = /* GraphQL */ `subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onDeleteBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessSubscriptionVariables,
  APITypes.OnDeleteBusinessSubscription
>;
export const onCreateBuyer = /* GraphQL */ `subscription OnCreateBuyer($filter: ModelSubscriptionBuyerFilterInput) {
  onCreateBuyer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBuyerSubscriptionVariables,
  APITypes.OnCreateBuyerSubscription
>;
export const onUpdateBuyer = /* GraphQL */ `subscription OnUpdateBuyer($filter: ModelSubscriptionBuyerFilterInput) {
  onUpdateBuyer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBuyerSubscriptionVariables,
  APITypes.OnUpdateBuyerSubscription
>;
export const onDeleteBuyer = /* GraphQL */ `subscription OnDeleteBuyer($filter: ModelSubscriptionBuyerFilterInput) {
  onDeleteBuyer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBuyerSubscriptionVariables,
  APITypes.OnDeleteBuyerSubscription
>;
export const onCreateApplication = /* GraphQL */ `subscription OnCreateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onCreateApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateApplicationSubscriptionVariables,
  APITypes.OnCreateApplicationSubscription
>;
export const onUpdateApplication = /* GraphQL */ `subscription OnUpdateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onUpdateApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationSubscriptionVariables,
  APITypes.OnUpdateApplicationSubscription
>;
export const onDeleteApplication = /* GraphQL */ `subscription OnDeleteApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onDeleteApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationSubscriptionVariables,
  APITypes.OnDeleteApplicationSubscription
>;
export const onCreateBlurb = /* GraphQL */ `subscription OnCreateBlurb($filter: ModelSubscriptionBlurbFilterInput) {
  onCreateBlurb(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlurbSubscriptionVariables,
  APITypes.OnCreateBlurbSubscription
>;
export const onUpdateBlurb = /* GraphQL */ `subscription OnUpdateBlurb($filter: ModelSubscriptionBlurbFilterInput) {
  onUpdateBlurb(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlurbSubscriptionVariables,
  APITypes.OnUpdateBlurbSubscription
>;
export const onDeleteBlurb = /* GraphQL */ `subscription OnDeleteBlurb($filter: ModelSubscriptionBlurbFilterInput) {
  onDeleteBlurb(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlurbSubscriptionVariables,
  APITypes.OnDeleteBlurbSubscription
>;
export const onCreateProductTags = /* GraphQL */ `subscription OnCreateProductTags(
  $filter: ModelSubscriptionProductTagsFilterInput
) {
  onCreateProductTags(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductTagsSubscriptionVariables,
  APITypes.OnCreateProductTagsSubscription
>;
export const onUpdateProductTags = /* GraphQL */ `subscription OnUpdateProductTags(
  $filter: ModelSubscriptionProductTagsFilterInput
) {
  onUpdateProductTags(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductTagsSubscriptionVariables,
  APITypes.OnUpdateProductTagsSubscription
>;
export const onDeleteProductTags = /* GraphQL */ `subscription OnDeleteProductTags(
  $filter: ModelSubscriptionProductTagsFilterInput
) {
  onDeleteProductTags(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductTagsSubscriptionVariables,
  APITypes.OnDeleteProductTagsSubscription
>;
export const onCreateBuyerTags = /* GraphQL */ `subscription OnCreateBuyerTags($filter: ModelSubscriptionBuyerTagsFilterInput) {
  onCreateBuyerTags(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBuyerTagsSubscriptionVariables,
  APITypes.OnCreateBuyerTagsSubscription
>;
export const onUpdateBuyerTags = /* GraphQL */ `subscription OnUpdateBuyerTags($filter: ModelSubscriptionBuyerTagsFilterInput) {
  onUpdateBuyerTags(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBuyerTagsSubscriptionVariables,
  APITypes.OnUpdateBuyerTagsSubscription
>;
export const onDeleteBuyerTags = /* GraphQL */ `subscription OnDeleteBuyerTags($filter: ModelSubscriptionBuyerTagsFilterInput) {
  onDeleteBuyerTags(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBuyerTagsSubscriptionVariables,
  APITypes.OnDeleteBuyerTagsSubscription
>;
export const onCreateBusinessSalesreps = /* GraphQL */ `subscription OnCreateBusinessSalesreps(
  $filter: ModelSubscriptionBusinessSalesrepsFilterInput
) {
  onCreateBusinessSalesreps(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessSalesrepsSubscriptionVariables,
  APITypes.OnCreateBusinessSalesrepsSubscription
>;
export const onUpdateBusinessSalesreps = /* GraphQL */ `subscription OnUpdateBusinessSalesreps(
  $filter: ModelSubscriptionBusinessSalesrepsFilterInput
) {
  onUpdateBusinessSalesreps(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessSalesrepsSubscriptionVariables,
  APITypes.OnUpdateBusinessSalesrepsSubscription
>;
export const onDeleteBusinessSalesreps = /* GraphQL */ `subscription OnDeleteBusinessSalesreps(
  $filter: ModelSubscriptionBusinessSalesrepsFilterInput
) {
  onDeleteBusinessSalesreps(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessSalesrepsSubscriptionVariables,
  APITypes.OnDeleteBusinessSalesrepsSubscription
>;
