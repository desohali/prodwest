/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFactory = /* GraphQL */ `query GetFactory($id: ID!) {
  getFactory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFactoryQueryVariables,
  APITypes.GetFactoryQuery
>;
export const listFactories = /* GraphQL */ `query ListFactories(
  $filter: ModelFactoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listFactories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      url
      order_contacts
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFactoriesQueryVariables,
  APITypes.ListFactoriesQuery
>;
export const getTag = /* GraphQL */ `query GetTag($id: ID!) {
  getTag(id: $id) {
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
` as GeneratedQuery<APITypes.GetTagQueryVariables, APITypes.GetTagQuery>;
export const listTags = /* GraphQL */ `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const getPackage = /* GraphQL */ `query GetPackage($id: ID!) {
  getPackage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPackageQueryVariables,
  APITypes.GetPackageQuery
>;
export const listPackages = /* GraphQL */ `query ListPackages(
  $filter: ModelPackageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPackagesQueryVariables,
  APITypes.ListPackagesQuery
>;
export const getShipment = /* GraphQL */ `query GetShipment($id: ID!) {
  getShipment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetShipmentQueryVariables,
  APITypes.GetShipmentQuery
>;
export const listShipments = /* GraphQL */ `query ListShipments(
  $filter: ModelShipmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listShipments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      departure
      arrival
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShipmentsQueryVariables,
  APITypes.ListShipmentsQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      business_id
      buyer_id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
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
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      product_id
      cart_id
      quantity
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const getCart = /* GraphQL */ `query GetCart($id: ID!) {
  getCart(id: $id) {
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
` as GeneratedQuery<APITypes.GetCartQueryVariables, APITypes.GetCartQuery>;
export const listCarts = /* GraphQL */ `query ListCarts(
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      buyer_id
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCartsQueryVariables, APITypes.ListCartsQuery>;
export const getSalesrep = /* GraphQL */ `query GetSalesrep($id: ID!) {
  getSalesrep(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSalesrepQueryVariables,
  APITypes.GetSalesrepQuery
>;
export const listSalesreps = /* GraphQL */ `query ListSalesreps(
  $filter: ModelSalesrepFilterInput
  $limit: Int
  $nextToken: String
) {
  listSalesreps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSalesrepsQueryVariables,
  APITypes.ListSalesrepsQuery
>;
export const getAddress = /* GraphQL */ `query GetAddress($id: ID!) {
  getAddress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAddressQueryVariables,
  APITypes.GetAddressQuery
>;
export const listAddresses = /* GraphQL */ `query ListAddresses(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      street
      city
      state
      postal_code
      country
      is_default
      business_id
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressesQueryVariables,
  APITypes.ListAddressesQuery
>;
export const getBank = /* GraphQL */ `query GetBank($id: ID!) {
  getBank(id: $id) {
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
` as GeneratedQuery<APITypes.GetBankQueryVariables, APITypes.GetBankQuery>;
export const listBanks = /* GraphQL */ `query ListBanks(
  $filter: ModelBankFilterInput
  $limit: Int
  $nextToken: String
) {
  listBanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      account_name
      account_number
      routing_number
      is_default
      business_id
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBanksQueryVariables, APITypes.ListBanksQuery>;
export const getBusiness = /* GraphQL */ `query GetBusiness($id: ID!) {
  getBusiness(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBusinessQueryVariables,
  APITypes.GetBusinessQuery
>;
export const listBusinesses = /* GraphQL */ `query ListBusinesses(
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessesQueryVariables,
  APITypes.ListBusinessesQuery
>;
export const getBuyer = /* GraphQL */ `query GetBuyer($id: ID!) {
  getBuyer(id: $id) {
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
` as GeneratedQuery<APITypes.GetBuyerQueryVariables, APITypes.GetBuyerQuery>;
export const listBuyers = /* GraphQL */ `query ListBuyers(
  $filter: ModelBuyerFilterInput
  $limit: Int
  $nextToken: String
) {
  listBuyers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBuyersQueryVariables,
  APITypes.ListBuyersQuery
>;
export const getApplication = /* GraphQL */ `query GetApplication($id: ID!) {
  getApplication(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetApplicationQueryVariables,
  APITypes.GetApplicationQuery
>;
export const listApplications = /* GraphQL */ `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      buyer_id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicationsQueryVariables,
  APITypes.ListApplicationsQuery
>;
export const getBlurb = /* GraphQL */ `query GetBlurb($id: ID!) {
  getBlurb(id: $id) {
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
` as GeneratedQuery<APITypes.GetBlurbQueryVariables, APITypes.GetBlurbQuery>;
export const listBlurbs = /* GraphQL */ `query ListBlurbs(
  $filter: ModelBlurbFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlurbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlurbsQueryVariables,
  APITypes.ListBlurbsQuery
>;
export const getProductTags = /* GraphQL */ `query GetProductTags($id: ID!) {
  getProductTags(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductTagsQueryVariables,
  APITypes.GetProductTagsQuery
>;
export const listProductTags = /* GraphQL */ `query ListProductTags(
  $filter: ModelProductTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tagId
      productId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductTagsQueryVariables,
  APITypes.ListProductTagsQuery
>;
export const getBuyerTags = /* GraphQL */ `query GetBuyerTags($id: ID!) {
  getBuyerTags(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBuyerTagsQueryVariables,
  APITypes.GetBuyerTagsQuery
>;
export const listBuyerTags = /* GraphQL */ `query ListBuyerTags(
  $filter: ModelBuyerTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  listBuyerTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tagId
      buyerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBuyerTagsQueryVariables,
  APITypes.ListBuyerTagsQuery
>;
export const getBusinessSalesreps = /* GraphQL */ `query GetBusinessSalesreps($id: ID!) {
  getBusinessSalesreps(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBusinessSalesrepsQueryVariables,
  APITypes.GetBusinessSalesrepsQuery
>;
export const listBusinessSalesreps = /* GraphQL */ `query ListBusinessSalesreps(
  $filter: ModelBusinessSalesrepsFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinessSalesreps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      salesrepId
      businessId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessSalesrepsQueryVariables,
  APITypes.ListBusinessSalesrepsQuery
>;
export const queryFactoriesByName = /* GraphQL */ `query QueryFactoriesByName(
  $qtype: String!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFactoryFilterInput
  $limit: Int
  $nextToken: String
) {
  queryFactoriesByName(
    qtype: $qtype
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      url
      order_contacts
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QueryFactoriesByNameQueryVariables,
  APITypes.QueryFactoriesByNameQuery
>;
export const getTagByName = /* GraphQL */ `query GetTagByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelTagFilterInput
  $limit: Int
  $nextToken: String
) {
  getTagByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTagByNameQueryVariables,
  APITypes.GetTagByNameQuery
>;
export const queryTagsByName = /* GraphQL */ `query QueryTagsByName(
  $qtype: String!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelTagFilterInput
  $limit: Int
  $nextToken: String
) {
  queryTagsByName(
    qtype: $qtype
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QueryTagsByNameQueryVariables,
  APITypes.QueryTagsByNameQuery
>;
export const productsByFactory_id = /* GraphQL */ `query ProductsByFactory_id(
  $factory_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  productsByFactory_id(
    factory_id: $factory_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductsByFactory_idQueryVariables,
  APITypes.ProductsByFactory_idQuery
>;
export const queryProductsByAvailableByName = /* GraphQL */ `query QueryProductsByAvailableByName(
  $qtype: String!
  $availableName: ModelProductProductsByAvailableByNameCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  queryProductsByAvailableByName(
    qtype: $qtype
    availableName: $availableName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QueryProductsByAvailableByNameQueryVariables,
  APITypes.QueryProductsByAvailableByNameQuery
>;
export const queryProductsByAvailableByUpdatedAt = /* GraphQL */ `query QueryProductsByAvailableByUpdatedAt(
  $qtype: String!
  $availableUpdated_at: ModelProductProductsByAvailableByUpdatedAtCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  queryProductsByAvailableByUpdatedAt(
    qtype: $qtype
    availableUpdated_at: $availableUpdated_at
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QueryProductsByAvailableByUpdatedAtQueryVariables,
  APITypes.QueryProductsByAvailableByUpdatedAtQuery
>;
export const ordersByBusiness_id = /* GraphQL */ `query OrdersByBusiness_id(
  $business_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByBusiness_id(
    business_id: $business_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      business_id
      buyer_id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByBusiness_idQueryVariables,
  APITypes.OrdersByBusiness_idQuery
>;
export const ordersByBuyer_id = /* GraphQL */ `query OrdersByBuyer_id(
  $buyer_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByBuyer_id(
    buyer_id: $buyer_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      business_id
      buyer_id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByBuyer_idQueryVariables,
  APITypes.OrdersByBuyer_idQuery
>;
export const itemsByProduct_id = /* GraphQL */ `query ItemsByProduct_id(
  $product_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByProduct_id(
    product_id: $product_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      product_id
      cart_id
      quantity
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByProduct_idQueryVariables,
  APITypes.ItemsByProduct_idQuery
>;
export const itemsByCart_id = /* GraphQL */ `query ItemsByCart_id(
  $cart_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByCart_id(
    cart_id: $cart_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      product_id
      cart_id
      quantity
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByCart_idQueryVariables,
  APITypes.ItemsByCart_idQuery
>;
export const cartsByBuyer_id = /* GraphQL */ `query CartsByBuyer_id(
  $buyer_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
) {
  cartsByBuyer_id(
    buyer_id: $buyer_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buyer_id
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CartsByBuyer_idQueryVariables,
  APITypes.CartsByBuyer_idQuery
>;
export const querySalesrepsByName = /* GraphQL */ `query QuerySalesrepsByName(
  $qtype: String!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSalesrepFilterInput
  $limit: Int
  $nextToken: String
) {
  querySalesrepsByName(
    qtype: $qtype
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuerySalesrepsByNameQueryVariables,
  APITypes.QuerySalesrepsByNameQuery
>;
export const addressesByBusiness_id = /* GraphQL */ `query AddressesByBusiness_id(
  $business_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  addressesByBusiness_id(
    business_id: $business_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      street
      city
      state
      postal_code
      country
      is_default
      business_id
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AddressesByBusiness_idQueryVariables,
  APITypes.AddressesByBusiness_idQuery
>;
export const banksByBusiness_id = /* GraphQL */ `query BanksByBusiness_id(
  $business_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBankFilterInput
  $limit: Int
  $nextToken: String
) {
  banksByBusiness_id(
    business_id: $business_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      account_name
      account_number
      routing_number
      is_default
      business_id
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BanksByBusiness_idQueryVariables,
  APITypes.BanksByBusiness_idQuery
>;
export const queryBusinessesByName = /* GraphQL */ `query QueryBusinessesByName(
  $qtype: String!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  queryBusinessesByName(
    qtype: $qtype
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      qtype
      created_at
      updated_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QueryBusinessesByNameQueryVariables,
  APITypes.QueryBusinessesByNameQuery
>;
export const buyersByBusiness_id = /* GraphQL */ `query BuyersByBusiness_id(
  $business_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBuyerFilterInput
  $limit: Int
  $nextToken: String
) {
  buyersByBusiness_id(
    business_id: $business_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BuyersByBusiness_idQueryVariables,
  APITypes.BuyersByBusiness_idQuery
>;
export const buyersByCart_id = /* GraphQL */ `query BuyersByCart_id(
  $cart_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBuyerFilterInput
  $limit: Int
  $nextToken: String
) {
  buyersByCart_id(
    cart_id: $cart_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BuyersByCart_idQueryVariables,
  APITypes.BuyersByCart_idQuery
>;
export const applicationsByBuyer_id = /* GraphQL */ `query ApplicationsByBuyer_id(
  $buyer_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByBuyer_id(
    buyer_id: $buyer_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buyer_id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationsByBuyer_idQueryVariables,
  APITypes.ApplicationsByBuyer_idQuery
>;
export const productTagsByTagId = /* GraphQL */ `query ProductTagsByTagId(
  $tagId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  productTagsByTagId(
    tagId: $tagId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tagId
      productId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductTagsByTagIdQueryVariables,
  APITypes.ProductTagsByTagIdQuery
>;
export const productTagsByProductId = /* GraphQL */ `query ProductTagsByProductId(
  $productId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  productTagsByProductId(
    productId: $productId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tagId
      productId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductTagsByProductIdQueryVariables,
  APITypes.ProductTagsByProductIdQuery
>;
export const buyerTagsByTagId = /* GraphQL */ `query BuyerTagsByTagId(
  $tagId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBuyerTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  buyerTagsByTagId(
    tagId: $tagId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tagId
      buyerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BuyerTagsByTagIdQueryVariables,
  APITypes.BuyerTagsByTagIdQuery
>;
export const buyerTagsByBuyerId = /* GraphQL */ `query BuyerTagsByBuyerId(
  $buyerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBuyerTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  buyerTagsByBuyerId(
    buyerId: $buyerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tagId
      buyerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BuyerTagsByBuyerIdQueryVariables,
  APITypes.BuyerTagsByBuyerIdQuery
>;
export const businessSalesrepsBySalesrepId = /* GraphQL */ `query BusinessSalesrepsBySalesrepId(
  $salesrepId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessSalesrepsFilterInput
  $limit: Int
  $nextToken: String
) {
  businessSalesrepsBySalesrepId(
    salesrepId: $salesrepId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      salesrepId
      businessId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessSalesrepsBySalesrepIdQueryVariables,
  APITypes.BusinessSalesrepsBySalesrepIdQuery
>;
export const businessSalesrepsByBusinessId = /* GraphQL */ `query BusinessSalesrepsByBusinessId(
  $businessId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessSalesrepsFilterInput
  $limit: Int
  $nextToken: String
) {
  businessSalesrepsByBusinessId(
    businessId: $businessId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      salesrepId
      businessId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessSalesrepsByBusinessIdQueryVariables,
  APITypes.BusinessSalesrepsByBusinessIdQuery
>;
