import {CONSTANTS} from './constants';

export const populateThumbnails = (thumbnails) => {
  let thumbnailsArray = Array.from(Object.values(thumbnails));
  return thumbnailsArray.filter(_ => _.titlePicture).map((thumbnail) => {
    const url = thumbnail && thumbnail.advertisementThumbnails && thumbnail.advertisementThumbnails.inventory_m.url;
    return {
      url
    };
  }).find((img, index) => index === 0);
};

export const translatePurpose = (purpose) => {
  switch ( purpose ) {
    case 1:
      return 'Kaufen';
    case 2:
    default:
      return 'Meiten';
  }
};

export const priceFormatter = (price) => {
  return price.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
};

export const roomsFormatter = (numberOfRooms) => {
  return `${numberOfRooms} Zimmer`;
};

export const areaFormatter = (area) => {
  return `ab ${Math.round(area)} m²`;
};

export const addressFormatter = (add) => {
  return `${add.postalCode} ${add.city} / ${add.street}`;
};

export const propertyTransformer = (data) => {
  if ( !data ) return;

  let properties = data.data;

  properties = properties.slice(CONSTANTS.PAGE_COUNT, CONSTANTS.PAGE_SIZE);
  return properties.map((property) => {
    return {
      id: property._id.$id,
      title: property.title,
      purpose: translatePurpose(property.purpose),
      address: addressFormatter(property.realestateSummary.address),
      rooms: roomsFormatter(property.realestateSummary.numberOfRooms),
      area: areaFormatter(property.realestateSummary.space),
      image: populateThumbnails(property.advertisementAssets),
      price: priceFormatter(property.advertisementPrice.sellPrice)
    };
  });

};