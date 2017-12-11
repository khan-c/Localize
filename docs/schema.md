# Schema

## Base version
### Companies
```
companies: [
  {
    _id: Company1_ID,
    name: Company1_NAME,
    image_url: imageURL,
    URL: Company1_URL,
    contact: {
      phone: Company1_PHONE,
      email: Company1_EMAIL
    },
    location: {
      address1: address1,
      address2: '',
      city: city,
      zip: zip,
      state: state,
      display_address: [
        'address1',
        'city, state zip'
      ]
    },
    coordinates: {
      lng: LNG,
      lat: LAT
    },
    is_claimed: false,
    photos: [
      photo_url,
      photo_url,
      photo_url
    ]
    categories: [category1, category2]
    services: [service1, service2, service3, service4],
    availability: [
      {
        start: hour,
        end: hour,
        day: 0
      },
      {
        start: hour,
        end: hour,
        day: 1
      },
      etc.
    ],
    leadTime: requestedLeadTime,
    reviews: [
      {
        user: user1,
        review: review,
        date: date
      },
      {
        user: user2,
        review: review,
        date: date
      }
    ],
    orders: [
      {
        _id: order_ID,
        delivery_date: date,
        quantity: amount,
        deliverable: good/service,
        transaction: cost
      }
    ]
    associated_users: [
      {
        _id: user_ID1,
        username: username,
        password_hash: pw,
      },
      {
        _id: user_ID2,
        username: username2,
        password_hash: pw
      }
    ]
  }
]
```
*categories and services may be similar..*


```
users: [
  {
    _id: User_ID,
    username: username,
    pw: password,
    session_token: session,
    company: company_ID
  }
]
```

## Bonus
in schema, company document can hold orders, messages, reviews, etc.
