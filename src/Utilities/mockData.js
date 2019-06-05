const mockGetMyHikesResults = {
  "trails": [
    {
      "id": 7000130,
      "name": "Bear Peak Out and Back",
      "type": "Featured Hike",
      "summary": "A must-do hike for Boulder locals and visitors alike!",
      "difficulty": "blueBlack",
      "stars": 4.6,
      "starVotes": 94,
      "location": "Boulder, Colorado",
      "url": "https://www.hikingproject.com/trail/7000130/bear-peak-out-and-back",
      "imgSqSmall": "https://cdn-files.apstatic.com/hike/7005382_sqsmall_1554312030.jpg",
      "imgSmall": "https://cdn-files.apstatic.com/hike/7005382_small_1554312030.jpg",
      "imgSmallMed": "https://cdn-files.apstatic.com/hike/7005382_smallMed_1554312030.jpg",
      "imgMedium": "https://cdn-files.apstatic.com/hike/7005382_medium_1554312030.jpg",
      "length": 5.7,
      "ascent": 2541,
      "descent": -2540,
      "high": 8342,
      "low": 6103,
      "longitude": -105.2755,
      "latitude": 39.9787,
      "conditionStatus": "All Clear",
      "conditionDetails": "Mostly Dry: All dry. A few places of the hike have small streams flowing through the path but nothing too extreme. Rain = mud tho.  ",
      "conditionDate": "2019-06-04 13:38:04"
    },
    {
      "id": 7003096,
      "name": "Mount Falcon West Loop",
      "type": "Featured Hike",
      "summary": "Spectacular mountain scenery just minutes from the plains.",
      "difficulty": "greenBlue",
      "stars": 4.2,
      "starVotes": 49,
      "location": "Indian Hills, Colorado",
      "url": "https://www.hikingproject.com/trail/7003096/mount-falcon-west-loop",
      "imgSqSmall": "https://cdn-files.apstatic.com/hike/7002141_sqsmall_1554225326.jpg",
      "imgSmall": "https://cdn-files.apstatic.com/hike/7002141_small_1554225326.jpg",
      "imgSmallMed": "https://cdn-files.apstatic.com/hike/7002141_smallMed_1554225326.jpg",
      "imgMedium": "https://cdn-files.apstatic.com/hike/7002141_medium_1554225326.jpg",
      "length": 3.6,
      "ascent": 637,
      "descent": -638,
      "high": 7838,
      "low": 7256,
      "longitude": -105.2394,
      "latitude": 39.6361,
      "conditionStatus": "All Clear",
      "conditionDetails": "Dry",
      "conditionDate": "2019-06-03 17:53:20"
    },
    {
      "id": 7004911,
      "name": "Mt. Galbraith Park Loop",
      "type": "Featured Hike",
      "summary": "A fun singletrack lollipop loop up and around Mt. Galbraith's peak with views in all directions.",
      "difficulty": "blue",
      "stars": 4,
      "starVotes": 71,
      "location": "Golden, Colorado",
      "url": "https://www.hikingproject.com/trail/7004911/mt-galbraith-park-loop",
      "imgSqSmall": "https://cdn-files.apstatic.com/hike/7005037_sqsmall_1554311310.jpg",
      "imgSmall": "https://cdn-files.apstatic.com/hike/7005037_small_1554311310.jpg",
      "imgSmallMed": "https://cdn-files.apstatic.com/hike/7005037_smallMed_1554311310.jpg",
      "imgMedium": "https://cdn-files.apstatic.com/hike/7005037_medium_1554311310.jpg",
      "length": 4.3,
      "ascent": 918,
      "descent": -919,
      "high": 7192,
      "low": 6289,
      "longitude": -105.2541,
      "latitude": 39.7736,
      "conditionStatus": "Minor Issues",
      "conditionDetails": "Mostly Dry - Very little spots of snow on the trail 2 weeks ago (4-7-2019). Beautiful and fun hike!",
      "conditionDate": "2019-04-21 12:34:19"
    }
  ],
  "success": 1
}

const mockTrails = [
    {
      "id": 7000130,
      "name": "Bear Peak Out and Back",
      "type": "Featured Hike",
      "summary": "A must-do hike for Boulder locals and visitors alike!",
      "difficulty": "blueBlack",
      "stars": 4.6,
      "starVotes": 94,
      "location": "Boulder, Colorado",
      "url": "https://www.hikingproject.com/trail/7000130/bear-peak-out-and-back",
      "imgSqSmall": "https://cdn-files.apstatic.com/hike/7005382_sqsmall_1554312030.jpg",
      "imgSmall": "https://cdn-files.apstatic.com/hike/7005382_small_1554312030.jpg",
      "imgSmallMed": "https://cdn-files.apstatic.com/hike/7005382_smallMed_1554312030.jpg",
      "imgMedium": "https://cdn-files.apstatic.com/hike/7005382_medium_1554312030.jpg",
      "length": 5.7,
      "ascent": 2541,
      "descent": -2540,
      "high": 8342,
      "low": 6103,
      "longitude": -105.2755,
      "latitude": 39.9787,
      "conditionStatus": "All Clear",
      "conditionDetails": "Mostly Dry: All dry. A few places of the hike have small streams flowing through the path but nothing too extreme. Rain = mud tho.  ",
      "conditionDate": "2019-06-04 13:38:04",
      "hiked": true,
      "hikeLater": false
    },
    {
      "id": 7004226,
      "name": "Sunshine Lion's Lair Loop",
      "type": "Featured Hike",
      "summary": "Great Mount Sanitas views are the reward for this gentler loop in Sunshine Canyon.",
      "difficulty": "blue",
      "stars": 4.5,
      "starVotes": 95,
      "location": "Boulder, Colorado",
      "url": "https://www.hikingproject.com/trail/7004226/sunshine-lions-lair-loop",
      "imgSqSmall": "https://cdn-files.apstatic.com/hike/7039883_sqsmall_1555092747.jpg",
      "imgSmall": "https://cdn-files.apstatic.com/hike/7039883_small_1555092747.jpg",
      "imgSmallMed": "https://cdn-files.apstatic.com/hike/7039883_smallMed_1555092747.jpg",
      "imgMedium": "https://cdn-files.apstatic.com/hike/7039883_medium_1555092747.jpg",
      "length": 5.3,
      "ascent": 1261,
      "descent": -1282,
      "high": 6800,
      "low": 5530,
      "longitude": -105.2979,
      "latitude": 40.02,
      "conditionStatus": "All Clear",
      "conditionDetails": "A little wet in places but clear overall",
      "conditionDate": "2019-05-29 12:06:52",
      "hiked": false,
      "hikeLater": true
    }
  ]

module.exports = {mockGetMyHikesResults, mockTrails}