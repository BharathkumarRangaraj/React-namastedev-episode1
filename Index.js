import React from 'react';
import ReactDOM from 'react-dom';

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
    return(
        <div className='cardss'>
            <img className='Card-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-asnXknZFMozPIr0txBTShDqR8ii18lrlwMtZG9BCA&usqp=CAU&ec=48600112'/>
            <h3>{resData.data.name}</h3>
            <h4>{resData.cuisines}</h4>
            <h4>: 4.5</h4>
            <h4>35 minutes</h4>
        </div>
    )
}

const Rescontainer=()=>{
    return(
        <div>
            <div className='card'>
            <Rescard resData={Restobj}/>
          
           
            </div>

        </div>
    )
}
const Restobj=
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "67645",
          "name": "Night Lion by Madhampatty Pakashala",
          "uuid": "372098e0-4c40-40ca-9ec4-f363863e1f17",
          "city": "14",
          "area": "Peelamedu",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "qgck9fzi17ljdvwboljb",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Haleem"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "slaString": "44 MINS",
          "lastMileTravel": 4.599999904632568,
          "slugs": {
            "restaurant": "fireflies-night-restaurant-peelamedu-peelamedu",
            "city": "coimbatore"
          },
          "cityState": "14",
          "address": "Nehru street, Avinashi road, Peelamedu, Coimbatore",
          "locality": "Gauthama Puri Nagar",
          "parentId": 377170,
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
          "adTrackingID": "cid=6110529~p=1~eid=00000187-32f2-10d6-0822-c54d00110115",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "67645",
            "deliveryTime": 44,
            "minDeliveryTime": 44,
            "maxDeliveryTime": 44,
            "lastMileTravel": 4.599999904632568,
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
      
}
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
