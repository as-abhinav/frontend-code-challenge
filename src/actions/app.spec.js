import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchProperties, RECEIVE_PROPERTIES, REQUEST_PROPERTIES} from './app';

const _mockedDataToTest = [{
    'address': '09130 Chemnitz / Philippstraße',
    'area': 'ab 37 m²',
    'id': '573379e18ffd7c64368b4568',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573379e18ffd7c64368b4568_variant_asset5829e70a6bc59_inventoryM.jpg'},
    'price': '€ 166.00',
    'purpose': 'Meiten',
    'rooms': '1 Zimmer',
    'title': 'Gemütliche 1-Zi Wohnung in ruhiger Lage auf dem Sonnenberg'
  }, {
    'address': '47259 Duisburg / Im Bonnefeld',
    'area': 'ab 79 m²',
    'id': '573c7c608ffd7c0b2a8b45b6',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg'},
    'price': '€ 457.00',
    'purpose': 'Meiten',
    'rooms': '3 Zimmer',
    'title': '+++ +++ FLATSCREEN ZUM EINZUG! +++ Moderne, frisch sanierte 3 Zi-Wohnung mit herrlichem Ausblick'
  }, {
    'address': '09130 Chemnitz / Tschaikowskistraße',
    'area': 'ab 73 m²',
    'id': '574eb90e8ffd7c8a2a8b4568',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/574eb90e8ffd7c8a2a8b4568_variant_asset5825d8e1e9420_inventoryM.jpg'},
    'price': '€ 280.00',
    'purpose': 'Meiten',
    'rooms': '2 Zimmer',
    'title': 'Großzügige 2-Zi Wohnung mit Balkon in ruhiger Lage'
  }, {
    'address': '04249 Leipzig / Schkorlopperstraße',
    'area': 'ab 97 m²',
    'id': '576693abac92b25b528b4568',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/576693abac92b25b528b4568_variant_asset5810e90a49c4c_inventoryM.jpg'},
    'price': '€ 970.00',
    'purpose': 'Meiten',
    'rooms': '2 Zimmer',
    'title': 'Schöne 2-Zi Galeriewohnung in ruhiger Lage'
  }, {
    'address': '47259 Duisburg / Im Bonnefeld',
    'area': 'ab 83 m²',
    'id': '577bf07fac92b204538b4568',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/577bf07fac92b204538b4568_variant_asset57ff9d6162bd5_inventoryM.jpg'},
    'price': '€ 481.00',
    'purpose': 'Meiten',
    'rooms': '3 Zimmer',
    'title': '100 €-Gutschein und 3-Zi Wohnung mit Terrasse und Gemeinschaftsgarten'
  }, {
    'address': '04564 Böhlen / Joseph-Haydn-Straße',
    'area': 'ab 54 m²',
    'id': '578d1623ac92b204088b4568',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/578d1623ac92b204088b4568_variant_asset580e4605f1682_inventoryM.jpg'},
    'price': '€ 280.00',
    'purpose': 'Meiten',
    'rooms': '3 Zimmer',
    'title': 'Lichtdurchflutete 3-Zi DG-Wohnung'
  }, {
    'address': '04552 Borna / Glück-auf-Straße',
    'area': 'ab 56 m²',
    'id': '579f94b7ac92b2431f8b4568',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/579f94b7ac92b2431f8b4568_variant_asset583ea48c188a9_inventoryM.jpg'},
    'price': '€ 285.00',
    'purpose': 'Meiten',
    'rooms': '2 Zimmer',
    'title': 'Gemütliche 2-Zi.Dachgeschosswohnung mit Tageslichtbad und Klimaanlage in schöner Seenlandschaft'
  }, {
    'address': '04552 Borna / Glück-Auf-Straße',
    'area': 'ab 49 m²',
    'id': '579f94b7ac92b2401f8b4568',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/579f94b7ac92b2401f8b4568_variant_asset57ffb95d130a0_inventoryM.jpg'},
    'price': '€ 250.00',
    'purpose': 'Meiten',
    'rooms': '2 Zimmer',
    'title': 'Praktische 2-Zi. Erdgeschosswohnung mit Balkon in schöner Seelandschaft'
  }, {
    'address': '47259 Duisburg / Im Bonnefeld',
    'area': 'ab 64 m²',
    'id': '57dfe9faac92b2bb768b4568',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/57dfe9faac92b2bb768b4568_variant_asset57ffa39683bcc_inventoryM.jpg'},
    'price': '€ 379.90',
    'purpose': 'Meiten',
    'rooms': '2 Zimmer',
    'title': '+++ FLATSCREEN ZUM EINZUG! +++ Großzügig geschnittene 2,5-Zi Wohnung mit schönem Weitblick'
  }, {
    'address': '09123 Chemitz / Marie-Tilch-Straße',
    'area': 'ab 39 m²',
    'id': '57f3d8dcac92b2a8548b4568',
    'image': {'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/57f3d8dcac92b2a8548b4568_variant_asset57ffb66179457_inventoryM.jpg'},
    'price': '€ 190.00',
    'purpose': 'Meiten',
    'rooms': '2 Zimmer',
    'title': 'Schön geschnittene 2-Zi Hochparterre Wohnung in grüner Lage'
  }];

const mockStore = configureMockStore([thunk]);

describe('[Async Action] : Fetch Properties', () => {
  it('should dispatch `requestProperties` action and then should dispatch `receiveProperties` action with received data ', async () => {
    const expectedActions = [
      {type: REQUEST_PROPERTIES},
      {type: RECEIVE_PROPERTIES, data: _mockedDataToTest}
    ];

    const store = mockStore({});

    await store.dispatch(fetchProperties());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
