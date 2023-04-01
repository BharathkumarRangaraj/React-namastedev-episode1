import React from 'react';
import ReactDOM from 'react-dom/client';

/*
header


*/
//header
const Header=()=>{
    return(
        <div className='header'>
            <div>
                <img className='image' src='data:image/jpeg;base64,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'/>
            </div>
            

            <div className='navitems'>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
//body

const Rescard=(props)=>{
    const {resData}=props;
    const{name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data
    return(
        <div className='cardss'>
            <img className='res-card-image' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+resData.data.cloudinaryImageId}/>
            <h4>{name}</h4>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>${costForTwo/100} </h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    )
}
//
const Rescontainer=()=>{
    return(
        <div>
            <div className='card'>


{
  Reslist.map((res)=> <Rescard key={res.data.id} resData={res}/>
  )
}
            
          
           
            </div>

        </div>
    )
}
const Reslist=
    [{"type": "restaurant",
    "data": {
      "type": "F",
      "id": "53332",
      "name": "Shree Aksshayam",
      "uuid": "286eb1eb-0b33-49d0-a63e-5a2295999d80",
      "city": "14",
      "area": "Peelamedu",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "jhkqrufhwa0xsds1wqt8",
      "cuisines": [
        "South Indian",
        "Chinese",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "shree-aksshayam-peelamedu-peelamedu",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "27-A, SNR College Road, Near Nava India Signal, Peelamedu, Coimbatore",
      "locality": "Nava India Road",
      "parentId": 7115,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6355769~p=1~eid=00000187-3b3e-f30a-0dbf-e79300b0012e",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "53332",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "275052",
      "name": "KR Bakes",
      "uuid": "11125be3-9dd6-411d-9176-b9e287e79862",
      "city": "14",
      "area": "Ganapathy",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "crhm6uiewvgyiwb3ofci",
      "cuisines": [
        "Bakery"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "kr-bakes-ganapathy-coi_ganapathy",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "35F, Annai Sathya Nagar,Ganapathy, Coimbatore",
      "locality": "Annai Sathya Nagar",
      "parentId": 4765,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "275052",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "51206",
      "name": "Sree Annapoorna",
      "uuid": "bcd15a28-e54a-4255-8ffd-536242ba3762",
      "city": "14",
      "area": "Race Course",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "vmf9bgblyxr3zmrvr2cr",
      "cuisines": [
        "Indian",
        "South Indian",
        "North Indian",
        "Chinese",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 4.699999809265137,
      "slugs": {
        "restaurant": "sree-annapoorna-sree-gowrishankar-race-course-race-course",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "2, Peoples Park, Arts College Road, Opposite Court, Race Course, Coimbatore",
      "locality": "Race Course Road",
      "parentId": 4732,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "FLAT100 off",
        "shortDescriptionList": [
          {
            "meta": "FLAT100 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT100 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹100 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT100 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6354746~p=19~eid=00000187-3b3e-f30a-0dbf-e79900b01304",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "51206",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 4.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.5",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "67838",
      "name": "Guru Amuthas",
      "uuid": "4330c005-8c66-4121-8f7c-0a863133ec77",
      "city": "14",
      "area": "Saravanampatty",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "of4uydxfme5q5yqfoq1t",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "hotel-sri-guru-amuthas-kalapatti-saravanampatti",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "Opposite Flower Garden, Sarvanampatty, Kalapatti, Coimbatore",
      "locality": "Kalapatti",
      "parentId": 17999,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6353901~p=4~eid=00000187-3b3e-f30a-0dbf-e79400b0045c",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "67838",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "444009",
      "name": "FB Cakes",
      "uuid": "b556e30b-713d-419e-86be-dd9a47de0174",
      "city": "14",
      "area": "Ganapathy",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "byjobyk9r9z5rsbkdgya",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "fb-cakes-coi-ganapathy-coi-ganapathy",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "No 270/271 GPK Building , Sathy Road, Ganapathy,Coimbatore - 641006",
      "locality": "Ganapathy",
      "parentId": 245423,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "444009",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "318571",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "uuid": "ac89d7c9-d4af-4c9d-b41e-0bd35f77cd06",
      "city": "14",
      "area": "Ganapathy",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "au1ccpewpaksackifwpw",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 14,
      "minDeliveryTime": 14,
      "maxDeliveryTime": 14,
      "slaString": "14 MINS",
      "lastMileTravel": 0.800000011920929,
      "slugs": {
        "restaurant": "kwality-walls-coi_ganapathy-coi_ganapathy-2",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "91,OPP CMS SCHOOL,SAKTHY ROAD,GANAPATHY,COIMBATORE, District - Coimbatore, STATE - Tamil Nadu",
      "locality": "Sathy Road",
      "parentId": 582,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "318571",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "93262",
      "name": "Hotel Maa",
      "uuid": "bcc523ad-00c7-438d-84d6-966b356c8179",
      "city": "14",
      "area": "Race Course",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "eeqwsj031qwrklkzt4bw",
      "cuisines": [
        "South Indian",
        "Indian",
        "Beverages",
        "Ice Cream",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 3.9000000953674316,
      "slugs": {
        "restaurant": "hotel-maa-anna-statue-dummy-inbound-area",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "Anna Statue",
      "locality": "Avinashi Road",
      "parentId": 9101,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6355190~p=7~eid=00000187-3b3e-f30a-0dbf-e79500b00749",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.9 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "93262",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 3.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "158762",
      "name": "Amul Parlour",
      "uuid": "1aa1e034-6911-4584-9387-b5338b3cd611",
      "city": "14",
      "area": "Ganapathy",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "g22m8fnibibdfs5mg5s3",
      "cuisines": [
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "amul-parlour-ganapathy-coi_ganapathy",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "Sathy Main Road , Ganapathy , Cbe",
      "locality": "Sathy Road",
      "parentId": 32561,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "158762",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "519311",
      "name": "SASTHA MESS",
      "uuid": "bc284090-33b2-4454-8bb9-bc3a2a73d9cd",
      "city": "14",
      "area": "Ganapathy",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "obocaadotbhkzcuowskw",
      "cuisines": [
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "sastha-mess-coi-ganapathy-coi-ganapathy",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "52, Gopalsamy Kovil St, Ganapathy, Coimbatore, Tamil Nadu 641006, India",
      "locality": "Gopalsamy Kovil Street",
      "parentId": 310051,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "519311",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "60005",
      "name": "Thirupathi Mess",
      "uuid": "b53d4511-6893-409e-8156-6f3cbe2dc952",
      "city": "14",
      "area": "Ramanathapuram",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "bzwckbvw6k8ncyw3lkfi",
      "cuisines": [
        "South Indian",
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 6,
      "slugs": {
        "restaurant": "thirupathi-mess-thiruvalluvar-nagar-ramanathapuram",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "97, Thiruvalluvar Nagar, Ramanathapuram, Cbe - 45",
      "locality": "Thiruvalluvar Nagar",
      "parentId": 215840,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6354382~p=10~eid=00000187-3b3e-f30a-0dbf-e79600b00a76",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "60005",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 6,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "56378",
      "name": "Sri Krishna Tiffin Room",
      "uuid": "b46d546f-2a51-4191-b9d6-b42252bf50d8",
      "city": "14",
      "area": "Lakshmi Mills",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "fdcjjpiofz11fj2xse4e",
      "cuisines": [
        "South Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 2.200000047683716,
      "slugs": {
        "restaurant": "sri-krishna-tiffin-room-pn-palayam-gandhipuram",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "Shop Number. 2, Jaganatha Perumal Koil Road, SNR Street, PN Palayam, Lakshmi Mills, Coimbatore",
      "locality": "Lakshmi Mills Colony",
      "parentId": 18430,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "56378",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 2.200000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.5",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "575570",
      "name": "Nagerkovil Arya Bhavan",
      "uuid": "478a4c15-86c4-44ed-9646-df9189dfd601",
      "city": "14",
      "area": "Peelamedu",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "yj6g7wugbi5qbvjtoqmr",
      "cuisines": [
        "South Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "nagercoil-catering-private-limited(nagerkovil-ary-peelamedu-peelamedu",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "No:751, AVINASHI ROAD, NEAR SUGUNA KALYANA MANDAPAM,PEELAMEDU,COIMBATORE-641004 , Coimbatore Corporation Ward-39, Coimbatore, Tamil Nadu-641004",
      "locality": "Avinash Road",
      "parentId": 353249,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "575570",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "58333",
      "name": "Bon Bon",
      "uuid": "004b7632-4e79-413e-a4d2-f5002a188e89",
      "city": "14",
      "area": "Ganapathy",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "o6dw4q94pmmeq6dm5zdm",
      "cuisines": [
        "Ice Cream",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 1.7999999523162842,
      "slugs": {
        "restaurant": "bon-bon-ganapathy-gandhipuram",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "4/5 , GKS Arcade , FCI Road , Bharathi Nagar , Ganapathy , CBE",
      "locality": "Fci Road",
      "parentId": 4902,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "58333",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "550587",
      "name": "Cake Heist",
      "uuid": "e35d01fb-8177-49b1-b7eb-64c68ad371d3",
      "city": "14",
      "area": "Sivanadha Colony",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "a6738553bc32b53f2bf3309620c8406d",
      "cuisines": [
        "Bakery",
        "Fast Food",
        "South Indian",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "hopscotch-cafe-gandhipuram-gandhipuram",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "12/121, Rajaji Road, Ramnagar, Coimbatore, Coimbatore Corporation Ward-52, Coimbatore Corporation Ward-52, Coimbatore, Tamil Nadu-641009",
      "locality": "Rajaji Road",
      "parentId": 365651,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "550587",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "51052",
      "name": "A2B - Adyar Ananda Bhavan",
      "uuid": "341361e6-6eaa-4eef-be09-00fc0b7c1307",
      "city": "14",
      "area": "Race Course",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "ow6arlbopuizo6lbnfk0",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 5.800000190734863,
      "slugs": {
        "restaurant": "adyar-ananda-bhavan-thadagam-road-rs-puram-r-s-puram",
        "city": "coimbatore"
      },
      "cityState": "14",
      "address": "opp KR bakery,near to railway station,SBI road,gopalpuram road,Coimbatote.",
      "locality": "State Bank Road",
      "parentId": 22,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6361765~p=16~eid=00000187-3b3e-f30a-0dbf-e79800b0102f",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "51052",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 5.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
      
}]
const Body=()=>{
    return(
        <div className='body'>
            <div className='Search'>
                <h2>search</h2>
                <Rescontainer/>
            </div>

        </div>
    )
}
const Applayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>

        </div>
    )

}




//const heading=React.createElement('h1',{id:"headings"},'hello from reacttt');
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>)
