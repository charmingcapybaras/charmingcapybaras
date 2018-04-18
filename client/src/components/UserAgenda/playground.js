import _ from 'underscore';

const results = [
  {
    geometry: {
      location: {
        lat: 30.1799275,
        lng: -95.5384278
      },
      viewport: {
        northeast: {
          lat: 30.1813642802915,
          lng: -95.53701501970849
        },
        southwest: {
          lat: 30.1786663197085,
          lng: -95.5397129802915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '1147be77271043fee4b902077f3a7262090b1cc9',
    name: 'SUBWAY®Restaurants',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    place_id: 'ChIJs3QSHbUxR4YRgg_1r35WP-Q',
    price_level: 1,
    rating: 2.9,
    reference:
      'CmRSAAAAv1t86iCMRmJ9rC8M6vLumagnH9H-3tgAIKdBr6YDPVSZLGYXN7e3zA5jajwBKrP0lDgQhxBifY1cgSQF_4Tf3KpPIemWblFMdbltPTLm-y1_BalFx0BU42AKer1eDD2uEhC0XY7aS81NBd98Tl5o0Fc6GhTtinIHsjJ4EvXKz5dW6CjaA8qJHw',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '6777 Woodlands Parkway #318, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.2097673,
        lng: -95.52655360000001
      },
      viewport: {
        northeast: {
          lat: 30.2110421302915,
          lng: -95.5252676197085
        },
        southwest: {
          lat: 30.2083441697085,
          lng: -95.52796558029151
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '4309a11287669dbe97fff509496a61152f958550',
    name: "Papa John's Pizza",
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 5316,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100814603226456308844/photos">Papa John&#39;s Pizza</a>'
        ],
        photo_reference:
          'CmRaAAAAA2ODApGJpE3Jph3pyfb2RYCMmNe8_kge66yqF82F-98oo34orO-k3arvtejeyAnchNtQqQ2oYMKapWR_wp1OqKlRdhj1Y3g0TxKsP6x5Y-Y5w8-uIYfInoI7sJPaKUH6EhDrxfcMJ7hikrUGsM19XKc0GhTmWrmyvc8-vrYMgEEhKszeoE49Yg',
        width: 5316
      }
    ],
    place_id: 'ChIJx8g31GUwR4YRjariNrflM9U',
    price_level: 2,
    rating: 3.4,
    reference:
      'CmRSAAAA_edhCq0t7E6J07H0erRJXqVJBihPjfO15cTL4NazH9IF3kfOCVcEve2bWM99Q_CZGGpzzn3v363DY1vLiRwXgeFtg5uFwJCg6Ks3FqefjW1JrgW4AyhnhhB1zBE3wXRVEhDfeaem5fhalQ9BLOcoYwS1GhQHcUM25YzKgnFENEkaIELjLfXCJg',
    scope: 'GOOGLE',
    types: [
      'meal_takeaway',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    vicinity: '8000 Research Forest Dr #105, Spring'
  },
  {
    geometry: {
      location: {
        lat: 30.18298059999999,
        lng: -95.5367002
      },
      viewport: {
        northeast: {
          lat: 30.18419908029149,
          lng: -95.53536766970849
        },
        southwest: {
          lat: 30.1815011197085,
          lng: -95.53806563029151
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: 'f2e1295c9433624e3afbdbf208b0a85e8933821b',
    name: "Perry's Steakhouse & Grille",
    opening_hours: {
      open_now: false,
      weekday_text: []
    },
    photos: [
      {
        height: 4032,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100203459464845134849/photos">Dee Marino</a>'
        ],
        photo_reference:
          'CmRaAAAAAf4VdegJXkEzo_juih7SJUuloOOEB3pTT583FmSXUOZX2_noi92OgQMGxPiH158_9vxdUzk-TpqxYsGU--3uLqfoXYIMFql63RrfeWpICA087D1uPJ1sFRdV4Gl6cCQHEhDvOIP7Fp5O9Rdkb_UIk6MsGhSwdbJM3H8hOvI4lgerfq2eQuuYgQ',
        width: 3024
      }
    ],
    place_id: 'ChIJ_RavZ0swR4YR0ASukxejMEs',
    price_level: 3,
    rating: 4.3,
    reference:
      'CmRRAAAA72PD1PZ7zvQV0S87AND4HngzZYWNLKSMkS0-mdIy7byyYfU7sQzTNluNkhj1VcltqkJDW7AINgnJYkz2ZLnitCIvSbqZTKPeJG2waL68wL4LTLtV-jTiuSVI3rEAOw-EEhDqJeXD2sh1JOq1ppyCr1INGhQTbbOdIhFSQNjya8MZ0sTnX_fTSw',
    scope: 'GOOGLE',
    types: ['bar', 'restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '6700 Woodlands Parkway, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.1825825,
        lng: -95.53460559999999
      },
      viewport: {
        northeast: {
          lat: 30.1839196802915,
          lng: -95.53314226970849
        },
        southwest: {
          lat: 30.1812217197085,
          lng: -95.5358402302915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '3f5ac242ebb50b3aa6e8b9f9f260c878efebab22',
    name: 'Brothers Pizza Express',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 3456,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/116694039270782654126/photos">Brothers Pizza Express</a>'
        ],
        photo_reference:
          'CmRaAAAAjf_b3-6lPkE8JvoBFlO_qrwixyhqrNVjcKTJRb7EZjmfTfrStsFbfnLSLlE95MCg74_GEO6DK_CZey5pfhlirEiEIedk49AvPzVZ0PylGLUcyEjUTPi6erH2DLt4r7vpEhBBQgH7lMeDbtAnt4oimDnCGhTDnAnPWdi0bwK5o_bG3gFXa_rFNg',
        width: 5184
      }
    ],
    place_id: 'ChIJ9bXGZ0swR4YRWgMjha7BRf0',
    price_level: 2,
    rating: 4.4,
    reference:
      'CmRSAAAAzF3uE3-DyYf3Ozkaw7MrViWNC-jwxedU3kuT4MzB9lKkNzg1SzSz6SWaILFoqttojCpWmiKF6Y1-DpSu_pqaGJtEV6-pQP6fcKcs26plR6cUr7YnVj2swxwzw8qDTUV7EhDx7QR4xvQbfTTPFR2wEnrWGhTwSGGhcYGFkiLZ6YkkQTcCk0ZITQ',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '6700 Woodlands Pkwy #100, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.18252,
        lng: -95.534643
      },
      viewport: {
        northeast: {
          lat: 30.1838689802915,
          lng: -95.53329401970849
        },
        southwest: {
          lat: 30.1811710197085,
          lng: -95.5359919802915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: 'e0c350d4c1ea92f0c268f3eb2d4f627abe35175a',
    name: 'Wing Street',
    place_id: 'ChIJ9bXGZ0swR4YRIjkHg2B4PqQ',
    price_level: 2,
    reference:
      'CmRSAAAA41-GsKY-fMLB8dd9i_38POjz5wXG0kjhFv_iRvASR5yEGp6OEYHQKCFozRQi3o3lrvrbVA1A0Rqo4MK_d0XAm4CzyGrh8JwGI1H2z0earQ2wMNtn4fCluEo5-5jFns4REhBTyRYXsg6SX3HITCkeCukgGhTL_9DGlqGsnhW7tVuW5nv0PTQQfg',
    scope: 'GOOGLE',
    types: [
      'meal_takeaway',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    vicinity: '6700 Woodlands Parkway, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.2108688,
        lng: -95.52873699999999
      },
      viewport: {
        northeast: {
          lat: 30.2122177802915,
          lng: -95.52738801970848
        },
        southwest: {
          lat: 30.2095198197085,
          lng: -95.5300859802915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '8918148d43d2f80c158487c103baac88aa2e9fbb',
    name: 'Subway',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 2952,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/101028553422779309036/photos">Lord Baron</a>'
        ],
        photo_reference:
          'CmRaAAAAJfVHR4E0OHSQI7UxpQeLQ-bdrhEIz4WLBlGBtkWqCEi1U6duL03PjSI9-y5aXJoVpFaGslFwBf6X_EHtMBzWQm7q7F4ouyH7eluxx_Ox_JGz3CS_gB2rtNNqIiN_ya6KEhBicpH6a_lLy4NiBpOaPMcMGhSMszyS1H8TRjMlOxxQEGS6ghPxqA',
        width: 5248
      }
    ],
    place_id: 'ChIJx8g31GUwR4YRKVcrQkPhy5U',
    price_level: 1,
    rating: 3.9,
    reference:
      'CmRSAAAA6HsyeIO3hmS7MLbxBuhykSsGvFMclynf65Tm7UMP6NkpULCb9QpukpzvDoVOjMfGxBafnOssPtuxbfwSrcAMH3lZeWTgElqBk0y8cTKJxhFIxdgUCWMhlOa_Y6aaGHFsEhB5tZvc0Kgy0vAsbQYW47NYGhTdQpmXLH4UGG5BSuYOqN0PRFhu-w',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '8000 Research Forest Drive #320, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.209476,
        lng: -95.528919
      },
      viewport: {
        northeast: {
          lat: 30.2106571302915,
          lng: -95.5276975697085
        },
        southwest: {
          lat: 30.2079591697085,
          lng: -95.5303955302915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '5d7d72bc5238529691cce322215aafaefd7ffa9f',
    name: 'Chick-fil-A',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 288,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/109916148311378650179/photos">Chick-fil-A</a>'
        ],
        photo_reference:
          'CmRaAAAA1ztSQLF7FrrkTwL7yVmiOA0CkFn0NbbXd3c83U3dD_PzN3EWHxLwREaE0AKjW_Yyv5bgRJ2JsEcCdImA9ofv_clENHLWCUadu3CiBannDXG0z9OXJi_uwhMy9mOI1ru6EhCvQV6zeLIKrJ-8oarebSKfGhS9EWt8KZ1VU9ecYuSG32dhoYHILw',
        width: 512
      }
    ],
    place_id: 'ChIJTWT7cmYwR4YRjGyY8kIciiM',
    price_level: 1,
    rating: 4.6,
    reference:
      'CmRRAAAAsST6rXuGfNiHfG6MwoixqsWluLXlgy1OGATimw1aJmxUVmUWYGinE_Hx78mo-apg5nGON4XAJmC7mMn5GviXL26sv8Nm65t5xBDPAYCt5BRk5JRlyWQk6QX8TUrRiFFxEhCz_0pfqBDyys5mHBzVGT1KGhQKSv3e7Dxb7kFnCIjtdjFpsc0Bpg',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '8020 Research Forest Drive, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.1800027,
        lng: -95.5386576
      },
      viewport: {
        northeast: {
          lat: 30.1814583802915,
          lng: -95.53723626970849
        },
        southwest: {
          lat: 30.1787604197085,
          lng: -95.53993423029151
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: 'b80d0b566ae5b206d5792a57639612857430a70e',
    name: 'Wingstop',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 4032,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/106579733974333733365/photos">Stephanie Henderson</a>'
        ],
        photo_reference:
          'CmRaAAAAG9IDsAEsAOWJgjqtgrhUBTFZDA30x7K5ddXJ3n6Mh9BrASNMJ8Rb5JS1oueVy5AfJFTEfTlFZU5dNtMx-nDuK4l1b4iqLfiPZE89x6I4phG757uKGYiYkXGYICNeh4LMEhCw9SYvAnlMfAngkCRoEmlYGhQSspF6TdluZgDfTliGtaSTJjTexA',
        width: 3024
      }
    ],
    place_id: 'ChIJs3QSHbUxR4YRNgtxGIkPLTs',
    price_level: 1,
    rating: 2.8,
    reference:
      'CmRRAAAAgBbrDlfvHuzdw1OlcCvexv-I3K_BtiT9gM2G9RYGtgqKZQXh6EvluJ8615qOGOhIZ3ktMoFF215eRx7QjCOxuB6szRdQkgYf2pTK78BeXad74jfOIQ5HBLtDrD4l07QvEhDqd2y_SUcqRIwawhPRasISGhRZhzat8qdAAQ0pXcw4R--Y20O-Xg',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '6777 Woodlands Parkway Ste 324, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.221679,
        lng: -95.56213100000001
      },
      viewport: {
        northeast: {
          lat: 30.2230277302915,
          lng: -95.56098341970849
        },
        southwest: {
          lat: 30.2203297697085,
          lng: -95.5636813802915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '9cce39c660fa6631deb1b40eba6d71972ea76a89',
    name: 'Eden Cafe',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 1152,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/111560135339079467353/photos">Eden Cafe</a>'
        ],
        photo_reference:
          'CmRaAAAAeZwPNljPhzB_xIXQu6Tzsyj3u3sh0wPxOzeqGxTywAWmB9WvTBlIloc7IVmL33rZYHuRhTMimWvh_QlyWknBpmPFfP8WpAlKv1xVUw9fCJOOhHlyLp95x5Qqfj_KU6mHEhCkqY88ScUdX9Ch1i0zvqpxGhQT0uz1UwJkhQE3fKUGQuVMNl-H9g',
        width: 2048
      }
    ],
    place_id: 'ChIJE3GkF_4vR4YR9zE_XPZTe5s',
    price_level: 2,
    rating: 4.6,
    reference:
      'CmRSAAAAQLXfb6TRvrdDPk-h3M-MjLYubn_uTTdbBgJfWipnRBEA45UdBojXswrOQt6cYxbzV_aGEw95tFJq7obGR8pMzcjJK3YN7jlg2nyfftQdOSnnlrtDl2OkDpybefBsTYK_EhDe1x0-XRD54PYPh-NN0GbZGhR6ToKuvVBy2iso6mBHLyCycF27iA',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '2759, 33418 Egypt Lane #16, Magnolia'
  },
  {
    geometry: {
      location: {
        lat: 30.180011,
        lng: -95.5369245
      },
      viewport: {
        northeast: {
          lat: 30.1817496302915,
          lng: -95.53556021970849
        },
        southwest: {
          lat: 30.1790516697085,
          lng: -95.5382581802915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: 'f084c846cd3e8ec58a18e99490f1cee28a6c9f6e',
    name: "Chili's Grill & Bar",
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 5312,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/111710297987709732128/photos">Joe Ternyik</a>'
        ],
        photo_reference:
          'CmRZAAAAzmE9mk7-Qx6zn5L8zFc8H_l9BCjrlqI6m6x31PEKkOOGnqPFkCgZtnErD1s8Yd0Ykomks3cbYk6wF817TsMuaNLUEDWDras1tKozP3dIOlQHk7JrnwwqGC39Z-J7HH09EhCdJe6mYNM_oMeyXsSARqDBGhSrQdeZ6V75wJ3tLNITMwWeOciMoQ',
        width: 2988
      }
    ],
    place_id: 'ChIJU5sNLEswR4YRk3z_Yi0K5-8',
    price_level: 1,
    rating: 3.5,
    reference:
      'CmRSAAAATvwzvJO4gV79O8zMgJwJAxYeBGQvadgnA-IXYJ2ylce8qB4Qky32_vEAw1QkqB0Tsl9ov9lTG35nUO6kL5dn_jNe5IbRIoQmVVC6xhgDX8ykKfLU-s9zMs4xd-Ba7rC9EhCgb1asf9IQ0DoULWD1lmLZGhQK_mOnCCy_1a4e3vPz3mw2vaXzmA',
    scope: 'GOOGLE',
    types: [
      'bar',
      'meal_takeaway',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    vicinity: '6671 Woodlands Parkway, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.207848,
        lng: -95.528336
      },
      viewport: {
        northeast: {
          lat: 30.2094646302915,
          lng: -95.5268204197085
        },
        southwest: {
          lat: 30.2067666697085,
          lng: -95.5295183802915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '9d932ec30ecd2c45822c29c4447bd5c52d90afc0',
    name: 'China Bridge',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 4048,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/112149135986737689898/photos">D Bayer</a>'
        ],
        photo_reference:
          'CmRaAAAAEQnNklxa1yFonRO7LhglIZIuVjMf4O-RMX_3Xo9lfBCQL-YzTgy815TD4p37UeGoJXnIuMadQdcv3rlJTtqhIqM62PXQAEfWCGLvQIhFWaFTUtHehtu9HSy3tcuZuabAEhATQgf9Ehy2fXuhdsiBJCZIGhRUnmWaaIjV59uExK2V9O0ZOlSKZw',
        width: 3036
      }
    ],
    place_id: 'ChIJXTACWmYwR4YRCUX4e-rc71k',
    price_level: 2,
    rating: 4,
    reference:
      'CmRRAAAAYml1oweo3pzO6Zob7lcPCGJH06fL86BojNxzajbwJlzHAm0j4NwPbSfB4188DLvkMsWyBadIhB4Xr4Hdrdzu5zQTga3qxqwHimKcq5YlIgNuJwCki9ouSSKOzfP5osP4EhAwbtj3t-PDQrv2fXD9M_wpGhTJpau_8Sp_vCRV9luMXvLl2N-90Q',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '7901 Research Forest Drive #1600, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.22141500000001,
        lng: -95.56540199999999
      },
      viewport: {
        northeast: {
          lat: 30.22276398029151,
          lng: -95.5640530197085
        },
        southwest: {
          lat: 30.22006601970851,
          lng: -95.5667509802915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: 'cdc69c74dacab71ae2ae199c92e6e4fc7a046cd9',
    name: 'Chick-fil-A',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 288,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/112920612847360272769/photos">Chick-fil-A</a>'
        ],
        photo_reference:
          'CmRZAAAAeVNK1c-0zJXKgXZWwayASVy0wBWW_bhcDV8Wpvcbs4kQOBrB8q0A4DvoWZp364IM5Cjj5n9JsbCTthiOwhYXXNZ09PsMqH0iUy2X0nwghtjN5cG_Jk9s3s4aqDlDRwJkEhB0NLt3FcdBJMRasIngf-_jGhSmA28J8OaKbPS8YUDoRrYZ91fzvA',
        width: 512
      }
    ],
    place_id: 'ChIJa_TRif4vR4YRu-tlv3RIBvo',
    price_level: 1,
    rating: 4.5,
    reference:
      'CmRSAAAAOYqVhHtEmL9E0zs2jbeLeAb9n7QaR0eSslWzpp8eEvhWsZRzvGcxmvtw-RvyxsNkGakYooKC-r1XB3dboVhwBHHq_2za5EqrX_3qEJdF7YXkUB-xOPZBOkmIqHSxT_-aEhCeH4YpJu6fsXPQ4JYU-DDuGhSibYX93zf8-bnGZ_Sc0Kl-P6CqjA',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '6543 Fm 1488 Rd, Magnolia'
  },
  {
    geometry: {
      location: {
        lat: 30.1822361,
        lng: -95.53491
      },
      viewport: {
        northeast: {
          lat: 30.1834284802915,
          lng: -95.53351906970849
        },
        southwest: {
          lat: 30.1807305197085,
          lng: -95.5362170302915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: 'afb537db687e0dd2fd20b04232eb3698fa4b6286',
    name: 'Zoës Kitchen',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 525,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100903266397388913638/photos">Zoës Kitchen</a>'
        ],
        photo_reference:
          'CmRaAAAAmKYZN3O_1WDJ2aTDWdi9f0H6lFq2POgaOUEOfouzqE2XGydcQrXgy-leU6NukF54nZ_nMegslAm1ZkT9u1ebmj9LdYB2CROQv1BBilUNsvPVI3-cw-FfYG_tB2XiLi78EhB2x8AJbFhKL_9P5UFxY3crGhSAOeifnz3_UDLlvgvuR04_GdEjnw',
        width: 867
      }
    ],
    place_id: 'ChIJ9bXGZ0swR4YRdqGVneM9b64',
    rating: 4.1,
    reference:
      'CmRSAAAADC2GjwMtxR3vHaCvK3_ot_A-R8vJaIPvmjHwcHm2iuHqyNZVZldHLJK4f2tC1YOEX5c5bNAC4sVQc_LypppwSb11RPNnfLWkUz0tCXo-FrAHMLZacIFy-8TYnwMjAWVaEhDuyt4zO1Qo1Yv6hmrkbXtzGhTTj9NI_wc5jsdcrDThpBO2Leu6aA',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '6700 Woodlands Parkway Ste 170, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.2211469,
        lng: -95.5659297
      },
      viewport: {
        northeast: {
          lat: 30.2224958802915,
          lng: -95.5645807197085
        },
        southwest: {
          lat: 30.2197979197085,
          lng: -95.56727868029151
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '85fa30bb39e3783a031523a47bc4e51c143558d9',
    name: "Chili's Grill & Bar",
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 2952,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/102929988612111529911/photos">Christopher Guillory</a>'
        ],
        photo_reference:
          'CmRaAAAAt2pyXtOVRhgqZVXGfKSrbN2B230A1QZfg3VnEMXel_XK6IZ5Wan_AARLVuWq6qvRxWuQ2F5VzI1VivfMuaTHaXs0uvMieAhwL56s8UDoxg-hGb1VyV_9eNsmRM3V915DEhBoaT6KpdkNVvNE2DUDNXuoGhSQS_mjCiU-UVX6eQ85Gzi-QrLC3A',
        width: 5248
      }
    ],
    place_id: 'ChIJR2gUnv4vR4YReabjrkVfaKM',
    price_level: 1,
    rating: 3.7,
    reference:
      'CmRSAAAA1IQ0pFSU9D_xwgl25ry56bq-lta7SOJgwChIolUmqf9cHX0--tznOlFppT-PpkEu0OWDFKX1-keXujF8BrXyRRPkgW81fS0DIrDGaK-EP1EdjHebYGo7YAJeocjNni-nEhBBWDgnSwnWKK5TrrcMn3VyGhSh7hze4byBdCqAJVcYX9pYqLD8pQ',
    scope: 'GOOGLE',
    types: [
      'bar',
      'meal_takeaway',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    vicinity: '6603 Farm to Market Road 1488, Magnolia'
  },
  {
    geometry: {
      location: {
        lat: 30.228992,
        lng: -95.50882
      },
      viewport: {
        northeast: {
          lat: 30.2297684802915,
          lng: -95.5075367197085
        },
        southwest: {
          lat: 30.2270705197085,
          lng: -95.5102346802915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '407c27fea36f1093086b1f45dc259c3210ac52d7',
    name: 'Shogun Japanese Grill & Sushi Bar',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 1080,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/104832023411951895270/photos">jeffrey sparks</a>'
        ],
        photo_reference:
          'CmRaAAAAmWhgHiOiUC9gYYDGnSOMP54Xc9d0npaW6zyhVASpaage356CjuMsh1RRV0DJAVpcbRQy6jJDpsH4ZpzJVYEN75ZyxhR28YCDGlxJZArjKgISf3DzSlyLlfcXlqUWdXLiEhD0bpB9AC2QnOUhaSQgTHGSGhSaTCB8gM8liDUgBrMh8BhVmIWvhw',
        width: 1920
      }
    ],
    place_id: 'ChIJ7ZiGAXg6R4YRn2iYBBxygCI',
    price_level: 2,
    rating: 4,
    reference:
      'CmRRAAAAN9QJGlrzksW1DlVrB8D_WXhfFtfgKXbhwUtMpFyvmlfQ8FA60tXJfswBzte9U8WG4yj6_7nAl89W8N3IgeuC8kkqsiamXgAhUNlBAkl-I2F-Bn8Y3IedodmuizCNHyWdEhA7MHJYbE11Ja3w4G8H4LfTGhSTMx56gEIxgIuZBSa1Gp5s4elaZQ',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '9420 College Park Drive Ste195, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.220383,
        lng: -95.566243
      },
      viewport: {
        northeast: {
          lat: 30.2218331302915,
          lng: -95.5649422697085
        },
        southwest: {
          lat: 30.2191351697085,
          lng: -95.56764023029152
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '4ebdbcecfb1d7c182bbf306b517e0f5bc91adc39',
    name: 'Five Guys',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/112490188040078312546/photos">Matthew Hernandez</a>'
        ],
        photo_reference:
          'CmRaAAAAfyHslK2JbuFe2hTG_L9mL33O06-DlP8zenSXhanrLe2s5VJwnPKnslMDNh5AsriYruo3micpRZr9mXVhEBtLZyeLwcq8Wbm_pXfRB02Rn-Gkzgs4b2th21-nN0mPAnCOEhBgcb-QZLrVVeaZO6KWnJ1UGhSZKV7dazxOY4tD9EuZ1hCPRqETcw',
        width: 4032
      }
    ],
    place_id: 'ChIJtSbVtv4vR4YRZGoWK62GzGk',
    price_level: 1,
    rating: 4,
    reference:
      'CmRRAAAAB4JwYwF1OaWxM3ITtZnF1JDKgGBAvidnQ5BZhVrJ_nzW88_zE2cDUpdbjC2tSv7zV88df0VoUaveleSzAcr34_wP6z-QQYH9afoD7ioUEIH5fHCemIkqntuG_e9BXEyPEhCgREIsONjlwp-VFZWfCVSHGhQWAQ0txi_wTwthWW8DozCt_GqG2g',
    scope: 'GOOGLE',
    types: [
      'meal_takeaway',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    vicinity: '6619 Fm 1488, Magnolia'
  },
  {
    geometry: {
      location: {
        lat: 30.1828937,
        lng: -95.5363387
      },
      viewport: {
        northeast: {
          lat: 30.18412498029151,
          lng: -95.53502231970849
        },
        southwest: {
          lat: 30.18142701970851,
          lng: -95.5377202802915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: 'eec85dcaea748f99b7148b083b81deb59afdb2a1',
    name: 'The Woodlands Thai Cafe',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/110775611152469545585/photos">Ray Caywood</a>'
        ],
        photo_reference:
          'CmRaAAAA4njh3sLv784zY-BlhJnUNCx4CTrzJP4PvrAt3Oime5Sosw9N_9gcghOSq-yZJIIG9Fww_TgwDE9zTVbBwINRs8-sdR4__yDqjdO7bozWkBH0JvSq6YaTfSJMtNWqEWCCEhDihLtiKLDPIVFpCcYO0Va9GhQW7SD0M0ZJA-Ebqq36yyOrO9wUgQ',
        width: 4032
      }
    ],
    place_id: 'ChIJ9bXGZ0swR4YRvYISdrDAWuo',
    rating: 3.6,
    reference:
      'CmRSAAAA-fKwWEPIXAZW551gyekDn4uwqJe9XxSkioWZ8Qw4mEyJSNSay3akdbMCWW8kWBYiUnlxFS2k37qt2bFiqVAZHIYX9OzgWkZi1zgBszo_ZGtm1vCI4yIbOOkPLGrE_RTkEhCUqloEEXHrsmMq4VxhhJ9yGhQnTM-2EXIwscN1yMO0PvWfr4ZXGw',
    scope: 'GOOGLE',
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '6700 Woodlands Parkway #250, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.210246,
        lng: -95.52733599999999
      },
      viewport: {
        northeast: {
          lat: 30.2114499802915,
          lng: -95.52608976970849
        },
        southwest: {
          lat: 30.2087520197085,
          lng: -95.5287877302915
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: '321ed585a2b90f948cada54965d03757c18e0fa0',
    name: "Rico's Grill",
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/104698659376730196128/photos">Travis Funkhouser</a>'
        ],
        photo_reference:
          'CmRaAAAAyVukAVaBWy_P3OdC5hE4J7D-HXmWOYT4791tYcTfXY3JrLGq129ia26BxFC79Aa_5x3Uq5TVQ-wf8Xso8hyNF3ciVc4my2NMpvW3_wkpuTkr21mIASKc3c3LHWg8TVWtEhCSV8rii6KL_FRTw4ulB8uiGhTHq_3vZ6Zlt_mztPnQiBUSq5WRTA',
        width: 4032
      }
    ],
    place_id: 'ChIJx8g31GUwR4YRJZoYqAFmEsA',
    price_level: 2,
    rating: 3.5,
    reference:
      'CmRSAAAAX7qtg0zQ5jEubnv9pw6-FNwM34wukOmfhdySvhSrbLsozGpPhfA4b1SiKW1wA6x3kyG0MYpkNTHJNePWwHrI3Kin6FKhN_q5dnvuVVGhNt3gXpSER6QD5TziQX1ewLmkEhA5cOqkw6JVfehIZYgUlKP-GhSxsGzhQ2fP-_dMoW2PbhGutBptwg',
    scope: 'GOOGLE',
    types: ['bar', 'restaurant', 'food', 'point_of_interest', 'establishment'],
    vicinity: '8000 Research Forest Drive #200, The Woodlands'
  },
  {
    geometry: {
      location: {
        lat: 30.2211786,
        lng: -95.56476239999999
      },
      viewport: {
        northeast: {
          lat: 30.2225275802915,
          lng: -95.56341341970848
        },
        southwest: {
          lat: 30.2198296197085,
          lng: -95.56611138029149
        }
      }
    },
    icon:
      'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
    id: '87790c1d928166f7ac0f39f659a00d128a27e134',
    name: 'Brothers Pizza Delivery',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 4618,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/117872627136904961637/photos">jessica Therrien</a>'
        ],
        photo_reference:
          'CmRaAAAAZtSb53SjCz4kfHI-wqC36AGSKOgqMFxuzc3z8RvaiyJDmR-DJkGCu6I49vJAicW7b6V9Sy1V9tqiaSM3TW2kH2yGy0QB-S8xMmQZHl0i_UPj8WYAlQ4Uz09HGFh2nW4qEhBwNXxaB7IMsGM_VvbxJlkpGhQQ0XVmNdz0ZgPVlejSlmCsRSF5cQ',
        width: 3464
      }
    ],
    place_id: 'ChIJv5k_SfkvR4YRTdLEtzQZxbM',
    price_level: 2,
    rating: 3.7,
    reference:
      'CmRSAAAAf4y0ywVzVnk__tGbQO3MTleHUNF3CarCBeiEJFFf2egcoCukCJaQW61vE5jRhxJVl_rA5RHby0ePUn-o3YtvqvVhGx_zyejrwlRFb6JYPk0CijBdU9h3pF41I75XF2yzEhDPB-9BQ5vUri9u84u8lHQmGhS-r0R2zjoXQsFhdw_ofFjYJmT_Xw',
    scope: 'GOOGLE',
    types: [
      'meal_delivery',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    vicinity: '6541 Farm to Market Road 1488, Magnolia'
  },
  {
    geometry: {
      location: {
        lat: 30.192977,
        lng: -95.588301
      },
      viewport: {
        northeast: {
          lat: 30.1940098302915,
          lng: -95.5871262197085
        },
        southwest: {
          lat: 30.1913118697085,
          lng: -95.58982418029152
        }
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    id: 'd5ddf9bfc086467f5895d282a98364191cea34a5',
    name: 'Caffe Di Fiore',
    opening_hours: {
      open_now: true,
      weekday_text: []
    },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114211907876281413408/photos">Charlie Blake</a>'
        ],
        photo_reference:
          'CmRaAAAAeO70kcn15mNYGRxedrnlgy8-K662fhsRBLYrUuZJZYi_a4XQglsB2I_cXK82Vw4ssowARf_GCA6FP50RFdFUPrmTIBDlaihUrbwkDudhIXidA9Qn7NhMHHQKcGIMzynPEhCPSBXNKpFe30DTZqgp9aQmGhSq3iFZKS9R1TNX28EN7M4z60wZaA',
        width: 4032
      }
    ],
    place_id: 'ChIJ2aZBO7ovR4YR-GKYhq6jpdk',
    price_level: 2,
    rating: 4.1,
    reference:
      'CmRSAAAAgAp60h4NiT6NzFCQ0W-lig_fq0dSSD2bQDeeZUV175eHWD9qzD5wjqLW8b_V5hNmrOOis8zDJRfzOj7OfRU_KlNQd7nxXKK_uo13fKmJuzIgCiNtkTVrwI_SlAUF-Mx8EhBoXk4x_gScaowlYYf4vT9LGhQMRaQtkT4X1rSR5t6XiO3Nf13HUA',
    scope: 'GOOGLE',
    types: [
      'bakery',
      'store',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    vicinity: '10110 Woodlands Parkway #900, The Woodlands'
  }
];

const user = {
  price: 3,
  rating: 4
};

// _.each(results, (item) => {
//   console.log(item.name);
// })

// console.log(_.where(results, {rating: 4.1}));

let best = _.filter(results, item => {
  return item.rating > user.rating && item.price_level >= user.price;
});

console.log(best[0].name);
