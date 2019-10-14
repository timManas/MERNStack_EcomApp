import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector (
  [selectShop],
  shop => shop.isFetching
)

// Checks to see if collections is loaded.
// If nothing is loaded then isCollectionLoaded is false
export const selectIsCollectionLoaded = createSelector (
  [selectShop],
  shop => !!shop.collections
)
