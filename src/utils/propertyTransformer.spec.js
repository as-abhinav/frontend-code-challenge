import {
  addressFormatter,
  areaFormatter,
  populateThumbnails,
  priceFormatter,
  propertyTransformer,
  roomsFormatter,
  translatePurpose
} from './propertyTransformer';

describe('Helpers', () => {

  describe('Populate Thumbnail.', () => {
    it('should return one image object with URL', () => {
      const data = {
        '0': {
          titlePicture: true,
          advertisementThumbnails: {
            inventory_m: {
              url: 'SOME_URL'
            }
          }
        },
        '1': {
          titlePicture: false,
          advertisementThumbnails: {
            inventory_m: {
              url: 'SOME_URL2'
            }
          }
        }
      };

      expect(populateThumbnails(data).url).toEqual('SOME_URL');
    });
  });

  describe('translatePurpose.', () => {
    it('should return text for purposes', () => {
      expect(translatePurpose(0)).toEqual('Meiten');
      expect(translatePurpose(1)).toEqual('Kaufen');
      expect(translatePurpose(2)).toEqual('Meiten');
    });
  });

  describe('priceFormatter.', () => {
    it('should return formatted prices', () => {
      expect(priceFormatter(12)).toEqual('€ 12.00');
    });
  });

  describe('roomsFormatter.', () => {
    it('should return formatted rooms', () => {
      expect(roomsFormatter(2)).toEqual('2 Zimmer');
    });
  });

  describe('roomsFormatter.', () => {
    it('should return formatted area', () => {
      expect(areaFormatter(43.33)).toEqual('ab 43 m²');
      expect(areaFormatter(43.00)).toEqual('ab 43 m²');
      expect(areaFormatter(43.88)).toEqual('ab 44 m²');
    });
  });

  describe('addressFormatter.', () => {
    it('should return formatted address', () => {
      expect(addressFormatter({
        postalCode: 122,
        city: 'CITY',
        street: 'STREET'
      })).toEqual('122 CITY / STREET');
    });
  });

  describe('propertyTransformer.', () => {
    it('should return formatted properties', () => {
      const data = {
        data: [{
          purpose: 1,
          _id: {
            $id: 1
          },
          title: 'TITLE',
          realestateSummary: {
            address: {
              postalCode: 2,
              city: 'CITY',
              street: 'STREET'
            },
            numberOfRooms: 3,
            space: 43
          },
          advertisementAssets: {
            '0': {
              titlePicture: true,
              advertisementThumbnails: {
                inventory_m: {
                  url: 'SOME_URL'
                }
              }
            }
          },
          advertisementPrice: {
            sellPrice: 223
          }
        }]
      };
      const properties = propertyTransformer(data, 0, 1);
      const property = properties[0];

      expect(property.id).toEqual(1);
      expect(property.title).toEqual('TITLE');
      expect(property.purpose).toEqual('Kaufen');
      expect(property.address).toEqual('2 CITY / STREET');
      expect(property.rooms).toEqual('3 Zimmer');
      expect(property.area).toEqual('ab 43 m²');
      expect(property.image.url).toEqual('SOME_URL');
    });
  });

});
