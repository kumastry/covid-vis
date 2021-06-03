const rawData = [
    {
      "id": 1,
      "name_ja": "北海道",
      "name_en": "Hokkaido",
      "lat": 43.46722222,
      "lng": 142.8277778,
      "population": 5248552,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 29911,
      "deaths": 929,
      "pcr": 591839,
      "hospitalize": 4765,
      "severe": 31,
      "discharge": 23890,
      "symptom_confirming": 327
    },
    {
      "id": 2,
      "name_ja": "青森",
      "name_en": "Aomori",
      "lat": 40.78027778,
      "lng": 140.83194440000003,
      "population": 1246138,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1942,
      "deaths": 27,
      "pcr": 37919,
      "hospitalize": 306,
      "severe": 4,
      "discharge": 1609,
      "symptom_confirming": 0
    },
    {
      "id": 3,
      "name_ja": "岩手",
      "name_en": "Iwate",
      "lat": 39.59138889,
      "lng": 141.3625,
      "population": 1226430,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1206,
      "deaths": 39,
      "pcr": 65259,
      "hospitalize": 203,
      "severe": 2,
      "discharge": 964,
      "symptom_confirming": 0
    },
    {
      "id": 4,
      "name_ja": "宮城",
      "name_en": "Miyagi",
      "lat": 38.44555556,
      "lng": 140.9280556,
      "population": 2303160,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 8522,
      "deaths": 75,
      "pcr": 129574,
      "hospitalize": 392,
      "severe": 13,
      "discharge": 8036,
      "symptom_confirming": 19
    },
    {
      "id": 5,
      "name_ja": "秋田",
      "name_en": "Akita",
      "lat": 39.7475,
      "lng": 140.4086111,
      "population": 965968,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 684,
      "deaths": 9,
      "pcr": 12270,
      "hospitalize": 165,
      "severe": 0,
      "discharge": 510,
      "symptom_confirming": 0
    },
    {
      "id": 6,
      "name_ja": "山形",
      "name_en": "Yamagata",
      "lat": 38.44638889,
      "lng": 140.1027778,
      "population": 1077057,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1702,
      "deaths": 37,
      "pcr": 51920,
      "hospitalize": 163,
      "severe": 5,
      "discharge": 1502,
      "symptom_confirming": 0
    },
    {
      "id": 7,
      "name_ja": "福島",
      "name_en": "Fukushima",
      "lat": 37.37888889,
      "lng": 140.22527780000001,
      "population": 1847950,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 4214,
      "deaths": 130,
      "pcr": 209746,
      "hospitalize": 642,
      "severe": 24,
      "discharge": 3442,
      "symptom_confirming": 0
    },
    {
      "id": 8,
      "name_ja": "茨城",
      "name_en": "Ibaraki",
      "lat": 36.30638889,
      "lng": 140.3186111,
      "population": 2868041,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 8946,
      "deaths": 137,
      "pcr": 31283,
      "hospitalize": 548,
      "severe": 16,
      "discharge": 8261,
      "symptom_confirming": 0
    },
    {
      "id": 9,
      "name_ja": "栃木",
      "name_en": "Tochigi",
      "lat": 36.68916667,
      "lng": 139.81916669999998,
      "population": 1942312,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 5825,
      "deaths": 74,
      "pcr": 228339,
      "hospitalize": 358,
      "severe": 4,
      "discharge": 5393,
      "symptom_confirming": 0
    },
    {
      "id": 10,
      "name_ja": "群馬",
      "name_en": "Gunma",
      "lat": 36.50388889,
      "lng": 138.9852778,
      "population": 1937626,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7152,
      "deaths": 114,
      "pcr": 150903,
      "hospitalize": 749,
      "severe": 14,
      "discharge": 6289,
      "symptom_confirming": 0
    },
    {
      "id": 11,
      "name_ja": "埼玉",
      "name_en": "Saitama",
      "lat": 35.99666667,
      "lng": 139.34777780000002,
      "population": 7337330,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 41340,
      "deaths": 760,
      "pcr": 815942,
      "hospitalize": 2761,
      "severe": 48,
      "discharge": 37819,
      "symptom_confirming": 0
    },
    {
      "id": 12,
      "name_ja": "千葉",
      "name_en": "Chiba",
      "lat": 35.51277778,
      "lng": 140.2038889,
      "population": 6279026,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 35351,
      "deaths": 655,
      "pcr": 579116,
      "hospitalize": 1496,
      "severe": 19,
      "discharge": 33200,
      "symptom_confirming": 0
    },
    {
      "id": 13,
      "name_ja": "東京",
      "name_en": "Tokyo",
      "lat": 35.702313700000005,
      "lng": 139.5803228,
      "population": 13942856,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 151697,
      "deaths": 1951,
      "pcr": 2145347,
      "hospitalize": 7436,
      "severe": 85,
      "discharge": 142310,
      "symptom_confirming": 0
    },
    {
      "id": 14,
      "name_ja": "神奈川",
      "name_en": "Kanagawa",
      "lat": 35.41416667,
      "lng": 139.34027780000002,
      "population": 9200166,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 57577,
      "deaths": 854,
      "pcr": 861075,
      "hospitalize": 2451,
      "severe": 48,
      "discharge": 54272,
      "symptom_confirming": 0
    },
    {
      "id": 15,
      "name_ja": "新潟",
      "name_en": "Niigata",
      "lat": 37.51888889,
      "lng": 138.91722219999997,
      "population": 2222004,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2815,
      "deaths": 27,
      "pcr": 124049,
      "hospitalize": 418,
      "severe": 6,
      "discharge": 2370,
      "symptom_confirming": 0
    },
    {
      "id": 16,
      "name_ja": "富山",
      "name_en": "Toyama",
      "lat": 36.63611111,
      "lng": 137.2680556,
      "population": 1042998,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1490,
      "deaths": 32,
      "pcr": 55720,
      "hospitalize": 147,
      "severe": 4,
      "discharge": 1311,
      "symptom_confirming": 0
    },
    {
      "id": 17,
      "name_ja": "石川",
      "name_en": "Ishikawa",
      "lat": 36.76583333,
      "lng": 136.7713889,
      "population": 1137181,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 3174,
      "deaths": 96,
      "pcr": 78080,
      "hospitalize": 629,
      "severe": 16,
      "discharge": 2447,
      "symptom_confirming": 2
    },
    {
      "id": 18,
      "name_ja": "福井",
      "name_en": "Fukui",
      "lat": 35.84666667,
      "lng": 136.22722219999997,
      "population": 767742,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 987,
      "deaths": 34,
      "pcr": 54647,
      "hospitalize": 82,
      "severe": 0,
      "discharge": 871,
      "symptom_confirming": 0
    },
    {
      "id": 19,
      "name_ja": "山梨",
      "name_en": "Yamanashi",
      "lat": 35.61222222,
      "lng": 138.6116667,
      "population": 812056,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1376,
      "deaths": 19,
      "pcr": 38972,
      "hospitalize": 136,
      "severe": 1,
      "discharge": 1221,
      "symptom_confirming": 0
    },
    {
      "id": 20,
      "name_ja": "長野",
      "name_en": "Nagano",
      "lat": 36.13,
      "lng": 138.04388889999998,
      "population": 2049023,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 4311,
      "deaths": 73,
      "pcr": 159648,
      "hospitalize": 346,
      "severe": 8,
      "discharge": 3892,
      "symptom_confirming": 0
    },
    {
      "id": 21,
      "name_ja": "岐阜",
      "name_en": "Gifu",
      "lat": 35.7775,
      "lng": 137.055,
      "population": 1988931,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7469,
      "deaths": 143,
      "pcr": 212236,
      "hospitalize": 1120,
      "severe": 14,
      "discharge": 6206,
      "symptom_confirming": 0
    },
    {
      "id": 22,
      "name_ja": "静岡",
      "name_en": "Shizuoka",
      "lat": 35.01694444,
      "lng": 138.33,
      "population": 3639226,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7337,
      "deaths": 130,
      "pcr": 319923,
      "hospitalize": 832,
      "severe": 7,
      "discharge": 6375,
      "symptom_confirming": 0
    },
    {
      "id": 23,
      "name_ja": "愛知",
      "name_en": "Aichi",
      "lat": 35.03444444,
      "lng": 137.215,
      "population": 7552873,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 39606,
      "deaths": 666,
      "pcr": 609769,
      "hospitalize": 5425,
      "severe": 66,
      "discharge": 33515,
      "symptom_confirming": 0
    },
    {
      "id": 24,
      "name_ja": "三重",
      "name_en": "Mie",
      "lat": 34.51361111,
      "lng": 136.3813889,
      "population": 1779770,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 4424,
      "deaths": 96,
      "pcr": 109813,
      "hospitalize": 605,
      "severe": 11,
      "discharge": 3723,
      "symptom_confirming": 0
    },
    {
      "id": 25,
      "name_ja": "滋賀",
      "name_en": "Shiga",
      "lat": 35.21527778,
      "lng": 136.13805559999997,
      "population": 1413959,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 4472,
      "deaths": 69,
      "pcr": 114770,
      "hospitalize": 578,
      "severe": 8,
      "discharge": 3825,
      "symptom_confirming": 0
    },
    {
      "id": 26,
      "name_ja": "京都",
      "name_en": "Kyoto",
      "lat": 35.25194444,
      "lng": 135.4458333,
      "population": 2583140,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 14232,
      "deaths": 196,
      "pcr": 232724,
      "hospitalize": 1468,
      "severe": 29,
      "discharge": 12568,
      "symptom_confirming": 0
    },
    {
      "id": 27,
      "name_ja": "大阪",
      "name_en": "Osaka",
      "lat": 34.62277778,
      "lng": 135.5111111,
      "population": 8823453,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 94155,
      "deaths": 1943,
      "pcr": 1628614,
      "hospitalize": 19678,
      "severe": 380,
      "discharge": 71619,
      "symptom_confirming": 915
    },
    {
      "id": 28,
      "name_ja": "兵庫",
      "name_en": "Hyogo",
      "lat": 35.03694444,
      "lng": 134.8286111,
      "population": 5463609,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 36985,
      "deaths": 848,
      "pcr": 420696,
      "hospitalize": 4493,
      "severe": 97,
      "discharge": 31644,
      "symptom_confirming": 0
    },
    {
      "id": 29,
      "name_ja": "奈良",
      "name_en": "Nara",
      "lat": 34.31555556,
      "lng": 135.8713889,
      "population": 1331330,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7360,
      "deaths": 97,
      "pcr": 138260,
      "hospitalize": 838,
      "severe": 23,
      "discharge": 6425,
      "symptom_confirming": 0
    },
    {
      "id": 30,
      "name_ja": "和歌山",
      "name_en": "Wakayama",
      "lat": 33.90944444,
      "lng": 135.5133333,
      "population": 923721,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2471,
      "deaths": 35,
      "pcr": 36939,
      "hospitalize": 203,
      "severe": 39,
      "discharge": 2195,
      "symptom_confirming": 38
    },
    {
      "id": 31,
      "name_ja": "鳥取",
      "name_en": "Tottori",
      "lat": 35.36055556,
      "lng": 133.8516667,
      "population": 555663,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 429,
      "deaths": 2,
      "pcr": 67810,
      "hospitalize": 50,
      "severe": 1,
      "discharge": 367,
      "symptom_confirming": 10
    },
    {
      "id": 32,
      "name_ja": "島根",
      "name_en": "Shimane",
      "lat": 35.07305556,
      "lng": 132.55944440000002,
      "population": 673891,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 424,
      "deaths": 0,
      "pcr": 21314,
      "hospitalize": 55,
      "severe": 1,
      "discharge": 369,
      "symptom_confirming": 0
    },
    {
      "id": 33,
      "name_ja": "岡山",
      "name_en": "Okayama",
      "lat": 34.90083333,
      "lng": 133.8152778,
      "population": 1891346,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 5965,
      "deaths": 70,
      "pcr": 108427,
      "hospitalize": 1308,
      "severe": 26,
      "discharge": 4071,
      "symptom_confirming": 516
    },
    {
      "id": 34,
      "name_ja": "広島",
      "name_en": "Hiroshima",
      "lat": 34.60361111,
      "lng": 132.7875,
      "population": 2807987,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7946,
      "deaths": 112,
      "pcr": 321772,
      "hospitalize": 848,
      "severe": 15,
      "discharge": 6226,
      "symptom_confirming": 760
    },
    {
      "id": 35,
      "name_ja": "山口",
      "name_en": "Yamaguchi",
      "lat": 34.19861111,
      "lng": 131.575,
      "population": 1355495,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2386,
      "deaths": 51,
      "pcr": 92132,
      "hospitalize": 497,
      "severe": 6,
      "discharge": 1838,
      "symptom_confirming": 0
    },
    {
      "id": 36,
      "name_ja": "徳島",
      "name_en": "Tokushima",
      "lat": 33.91805556,
      "lng": 134.2430556,
      "population": 728633,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1558,
      "deaths": 55,
      "pcr": 50212,
      "hospitalize": 180,
      "severe": 6,
      "discharge": 1323,
      "symptom_confirming": 0
    },
    {
      "id": 37,
      "name_ja": "香川",
      "name_en": "Kagawa",
      "lat": 34.24305556,
      "lng": 133.99666670000002,
      "population": 956069,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1790,
      "deaths": 24,
      "pcr": 69704,
      "hospitalize": 413,
      "severe": 3,
      "discharge": 1353,
      "symptom_confirming": 0
    },
    {
      "id": 38,
      "name_ja": "愛媛",
      "name_en": "Ehime",
      "lat": 33.62194444,
      "lng": 132.8558333,
      "population": 1338811,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2612,
      "deaths": 64,
      "pcr": 73971,
      "hospitalize": 207,
      "severe": 6,
      "discharge": 2341,
      "symptom_confirming": 0
    },
    {
      "id": 39,
      "name_ja": "高知",
      "name_en": "Kōchi",
      "lat": 33.42111111,
      "lng": 133.36666670000002,
      "population": 697674,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1148,
      "deaths": 20,
      "pcr": 8676,
      "hospitalize": 45,
      "severe": 3,
      "discharge": 1083,
      "symptom_confirming": 0
    },
    {
      "id": 40,
      "name_ja": "福岡",
      "name_en": "Fukuoka",
      "lat": 33.5225,
      "lng": 130.66805559999997,
      "population": 5110113,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 29737,
      "deaths": 390,
      "pcr": 675139,
      "hospitalize": 5469,
      "severe": 67,
      "discharge": 23363,
      "symptom_confirming": 515
    },
    {
      "id": 41,
      "name_ja": "佐賀",
      "name_en": "Saga",
      "lat": 33.28527778,
      "lng": 130.11694440000002,
      "population": 814211,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2199,
      "deaths": 15,
      "pcr": 44465,
      "hospitalize": 379,
      "severe": 4,
      "discharge": 1754,
      "symptom_confirming": 51
    },
    {
      "id": 42,
      "name_ja": "長崎",
      "name_en": "Nagasaki",
      "lat": 33.2275,
      "lng": 129.61416670000003,
      "population": 1325205,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2712,
      "deaths": 50,
      "pcr": 102842,
      "hospitalize": 527,
      "severe": 17,
      "discharge": 2135,
      "symptom_confirming": 0
    },
    {
      "id": 43,
      "name_ja": "熊本",
      "name_en": "Kumamoto",
      "lat": 32.615,
      "lng": 130.7563889,
      "population": 1746740,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 5116,
      "deaths": 84,
      "pcr": 71804,
      "hospitalize": 853,
      "severe": 22,
      "discharge": 4179,
      "symptom_confirming": 0
    },
    {
      "id": 44,
      "name_ja": "大分",
      "name_en": "Oita",
      "lat": 33.19916667,
      "lng": 131.43416670000002,
      "population": 1134431,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2830,
      "deaths": 33,
      "pcr": 130041,
      "hospitalize": 783,
      "severe": 5,
      "discharge": 2014,
      "symptom_confirming": 0
    },
    {
      "id": 45,
      "name_ja": "宮崎",
      "name_en": "Miyazaki",
      "lat": 32.19083333,
      "lng": 131.3005556,
      "population": 1072077,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2764,
      "deaths": 25,
      "pcr": 36174,
      "hospitalize": 461,
      "severe": 5,
      "discharge": 2269,
      "symptom_confirming": 9
    },
    {
      "id": 46,
      "name_ja": "鹿児島",
      "name_en": "Kagoshima",
      "lat": 31.01277778,
      "lng": 130.4241667,
      "population": 1599984,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2842,
      "deaths": 28,
      "pcr": 92020,
      "hospitalize": 469,
      "severe": 2,
      "discharge": 2339,
      "symptom_confirming": 6
    },
    {
      "id": 47,
      "name_ja": "沖縄",
      "name_en": "Okinawa",
      "lat": 25.77111111,
      "lng": 126.64,
      "population": 1454184,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 13781,
      "deaths": 141,
      "pcr": 202299,
      "hospitalize": 1447,
      "severe": 12,
      "discharge": 12193,
      "symptom_confirming": 0
    }
  ];


  const rawData1 = [
    {
      "id": 1,
      "name_ja": "北海道",
      "name_en": "Hokkaido",
      "lat": 43.46722222,
      "lng": 142.8277778,
      "population": 5248552,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 29911,
      "deaths": 929,
      "pcr": 591839,
      "hospitalize": 4765,
      "severe": 31,
      "discharge": 23890,
      "symptom_confirming": 327
    },
    {
      "id": 2,
      "name_ja": "青森",
      "name_en": "Aomori",
      "lat": 40.78027778,
      "lng": 140.83194440000003,
      "population": 1246138,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1942,
      "deaths": 27,
      "pcr": 37919,
      "hospitalize": 306,
      "severe": 4,
      "discharge": 1609,
      "symptom_confirming": 0
    },
    {
      "id": 3,
      "name_ja": "岩手",
      "name_en": "Iwate",
      "lat": 39.59138889,
      "lng": 141.3625,
      "population": 1226430,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1206,
      "deaths": 39,
      "pcr": 65259,
      "hospitalize": 203,
      "severe": 2,
      "discharge": 964,
      "symptom_confirming": 0
    },
    {
      "id": 4,
      "name_ja": "宮城",
      "name_en": "Miyagi",
      "lat": 38.44555556,
      "lng": 140.9280556,
      "population": 2303160,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 8522,
      "deaths": 75,
      "pcr": 129574,
      "hospitalize": 392,
      "severe": 13,
      "discharge": 8036,
      "symptom_confirming": 19
    },
    {
      "id": 5,
      "name_ja": "秋田",
      "name_en": "Akita",
      "lat": 39.7475,
      "lng": 140.4086111,
      "population": 965968,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 684,
      "deaths": 9,
      "pcr": 12270,
      "hospitalize": 165,
      "severe": 0,
      "discharge": 510,
      "symptom_confirming": 0
    },
    {
      "id": 6,
      "name_ja": "山形",
      "name_en": "Yamagata",
      "lat": 38.44638889,
      "lng": 140.1027778,
      "population": 1077057,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1702,
      "deaths": 37,
      "pcr": 51920,
      "hospitalize": 163,
      "severe": 5,
      "discharge": 1502,
      "symptom_confirming": 0
    },
    {
      "id": 7,
      "name_ja": "福島",
      "name_en": "Fukushima",
      "lat": 37.37888889,
      "lng": 140.22527780000001,
      "population": 1847950,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 4214,
      "deaths": 130,
      "pcr": 209746,
      "hospitalize": 642,
      "severe": 24,
      "discharge": 3442,
      "symptom_confirming": 0
    },
    {
      "id": 8,
      "name_ja": "茨城",
      "name_en": "Ibaraki",
      "lat": 36.30638889,
      "lng": 140.3186111,
      "population": 2868041,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 8946,
      "deaths": 137,
      "pcr": 31283,
      "hospitalize": 548,
      "severe": 16,
      "discharge": 8261,
      "symptom_confirming": 0
    },
    {
      "id": 9,
      "name_ja": "栃木",
      "name_en": "Tochigi",
      "lat": 36.68916667,
      "lng": 139.81916669999998,
      "population": 1942312,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 5825,
      "deaths": 74,
      "pcr": 228339,
      "hospitalize": 358,
      "severe": 4,
      "discharge": 5393,
      "symptom_confirming": 0
    },
    {
      "id": 10,
      "name_ja": "群馬",
      "name_en": "Gunma",
      "lat": 36.50388889,
      "lng": 138.9852778,
      "population": 1937626,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7152,
      "deaths": 114,
      "pcr": 150903,
      "hospitalize": 749,
      "severe": 14,
      "discharge": 6289,
      "symptom_confirming": 0
    },
    {
      "id": 11,
      "name_ja": "埼玉",
      "name_en": "Saitama",
      "lat": 35.99666667,
      "lng": 139.34777780000002,
      "population": 7337330,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 41340,
      "deaths": 760,
      "pcr": 815942,
      "hospitalize": 2761,
      "severe": 48,
      "discharge": 37819,
      "symptom_confirming": 0
    },
    {
      "id": 12,
      "name_ja": "千葉",
      "name_en": "Chiba",
      "lat": 35.51277778,
      "lng": 140.2038889,
      "population": 6279026,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 35351,
      "deaths": 655,
      "pcr": 579116,
      "hospitalize": 1496,
      "severe": 19,
      "discharge": 33200,
      "symptom_confirming": 0
    },
   
    {
      "id": 14,
      "name_ja": "神奈川",
      "name_en": "Kanagawa",
      "lat": 35.41416667,
      "lng": 139.34027780000002,
      "population": 9200166,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 57577,
      "deaths": 854,
      "pcr": 861075,
      "hospitalize": 2451,
      "severe": 48,
      "discharge": 54272,
      "symptom_confirming": 0
    },
    {
      "id": 15,
      "name_ja": "新潟",
      "name_en": "Niigata",
      "lat": 37.51888889,
      "lng": 138.91722219999997,
      "population": 2222004,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2815,
      "deaths": 27,
      "pcr": 124049,
      "hospitalize": 418,
      "severe": 6,
      "discharge": 2370,
      "symptom_confirming": 0
    },
    {
      "id": 16,
      "name_ja": "富山",
      "name_en": "Toyama",
      "lat": 36.63611111,
      "lng": 137.2680556,
      "population": 1042998,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1490,
      "deaths": 32,
      "pcr": 55720,
      "hospitalize": 147,
      "severe": 4,
      "discharge": 1311,
      "symptom_confirming": 0
    },
    {
      "id": 17,
      "name_ja": "石川",
      "name_en": "Ishikawa",
      "lat": 36.76583333,
      "lng": 136.7713889,
      "population": 1137181,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 3174,
      "deaths": 96,
      "pcr": 78080,
      "hospitalize": 629,
      "severe": 16,
      "discharge": 2447,
      "symptom_confirming": 2
    },
    {
      "id": 18,
      "name_ja": "福井",
      "name_en": "Fukui",
      "lat": 35.84666667,
      "lng": 136.22722219999997,
      "population": 767742,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 987,
      "deaths": 34,
      "pcr": 54647,
      "hospitalize": 82,
      "severe": 0,
      "discharge": 871,
      "symptom_confirming": 0
    },
    {
      "id": 19,
      "name_ja": "山梨",
      "name_en": "Yamanashi",
      "lat": 35.61222222,
      "lng": 138.6116667,
      "population": 812056,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1376,
      "deaths": 19,
      "pcr": 38972,
      "hospitalize": 136,
      "severe": 1,
      "discharge": 1221,
      "symptom_confirming": 0
    },
    {
      "id": 20,
      "name_ja": "長野",
      "name_en": "Nagano",
      "lat": 36.13,
      "lng": 138.04388889999998,
      "population": 2049023,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 4311,
      "deaths": 73,
      "pcr": 159648,
      "hospitalize": 346,
      "severe": 8,
      "discharge": 3892,
      "symptom_confirming": 0
    },
    {
      "id": 21,
      "name_ja": "岐阜",
      "name_en": "Gifu",
      "lat": 35.7775,
      "lng": 137.055,
      "population": 1988931,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7469,
      "deaths": 143,
      "pcr": 212236,
      "hospitalize": 1120,
      "severe": 14,
      "discharge": 6206,
      "symptom_confirming": 0
    },
    {
      "id": 22,
      "name_ja": "静岡",
      "name_en": "Shizuoka",
      "lat": 35.01694444,
      "lng": 138.33,
      "population": 3639226,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7337,
      "deaths": 130,
      "pcr": 319923,
      "hospitalize": 832,
      "severe": 7,
      "discharge": 6375,
      "symptom_confirming": 0
    },
    {
      "id": 23,
      "name_ja": "愛知",
      "name_en": "Aichi",
      "lat": 35.03444444,
      "lng": 137.215,
      "population": 7552873,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 39606,
      "deaths": 666,
      "pcr": 609769,
      "hospitalize": 5425,
      "severe": 66,
      "discharge": 33515,
      "symptom_confirming": 0
    },
    {
      "id": 24,
      "name_ja": "三重",
      "name_en": "Mie",
      "lat": 34.51361111,
      "lng": 136.3813889,
      "population": 1779770,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 4424,
      "deaths": 96,
      "pcr": 109813,
      "hospitalize": 605,
      "severe": 11,
      "discharge": 3723,
      "symptom_confirming": 0
    },
    {
      "id": 25,
      "name_ja": "滋賀",
      "name_en": "Shiga",
      "lat": 35.21527778,
      "lng": 136.13805559999997,
      "population": 1413959,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 4472,
      "deaths": 69,
      "pcr": 114770,
      "hospitalize": 578,
      "severe": 8,
      "discharge": 3825,
      "symptom_confirming": 0
    },
    {
      "id": 26,
      "name_ja": "京都",
      "name_en": "Kyoto",
      "lat": 35.25194444,
      "lng": 135.4458333,
      "population": 2583140,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 14232,
      "deaths": 196,
      "pcr": 232724,
      "hospitalize": 1468,
      "severe": 29,
      "discharge": 12568,
      "symptom_confirming": 0
    },
    
  
    {
      "id": 28,
      "name_ja": "兵庫",
      "name_en": "Hyogo",
      "lat": 35.03694444,
      "lng": 134.8286111,
      "population": 5463609,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 36985,
      "deaths": 848,
      "pcr": 420696,
      "hospitalize": 4493,
      "severe": 97,
      "discharge": 31644,
      "symptom_confirming": 0
    },
    {
      "id": 29,
      "name_ja": "奈良",
      "name_en": "Nara",
      "lat": 34.31555556,
      "lng": 135.8713889,
      "population": 1331330,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7360,
      "deaths": 97,
      "pcr": 138260,
      "hospitalize": 838,
      "severe": 23,
      "discharge": 6425,
      "symptom_confirming": 0
    },
    {
      "id": 30,
      "name_ja": "和歌山",
      "name_en": "Wakayama",
      "lat": 33.90944444,
      "lng": 135.5133333,
      "population": 923721,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2471,
      "deaths": 35,
      "pcr": 36939,
      "hospitalize": 203,
      "severe": 39,
      "discharge": 2195,
      "symptom_confirming": 38
    },
    {
      "id": 31,
      "name_ja": "鳥取",
      "name_en": "Tottori",
      "lat": 35.36055556,
      "lng": 133.8516667,
      "population": 555663,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 429,
      "deaths": 2,
      "pcr": 67810,
      "hospitalize": 50,
      "severe": 1,
      "discharge": 367,
      "symptom_confirming": 10
    },
    {
      "id": 32,
      "name_ja": "島根",
      "name_en": "Shimane",
      "lat": 35.07305556,
      "lng": 132.55944440000002,
      "population": 673891,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 424,
      "deaths": 0,
      "pcr": 21314,
      "hospitalize": 55,
      "severe": 1,
      "discharge": 369,
      "symptom_confirming": 0
    },
    {
      "id": 33,
      "name_ja": "岡山",
      "name_en": "Okayama",
      "lat": 34.90083333,
      "lng": 133.8152778,
      "population": 1891346,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 5965,
      "deaths": 70,
      "pcr": 108427,
      "hospitalize": 1308,
      "severe": 26,
      "discharge": 4071,
      "symptom_confirming": 516
    },
    {
      "id": 34,
      "name_ja": "広島",
      "name_en": "Hiroshima",
      "lat": 34.60361111,
      "lng": 132.7875,
      "population": 2807987,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 7946,
      "deaths": 112,
      "pcr": 321772,
      "hospitalize": 848,
      "severe": 15,
      "discharge": 6226,
      "symptom_confirming": 760
    },
    {
      "id": 35,
      "name_ja": "山口",
      "name_en": "Yamaguchi",
      "lat": 34.19861111,
      "lng": 131.575,
      "population": 1355495,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2386,
      "deaths": 51,
      "pcr": 92132,
      "hospitalize": 497,
      "severe": 6,
      "discharge": 1838,
      "symptom_confirming": 0
    },
    {
      "id": 36,
      "name_ja": "徳島",
      "name_en": "Tokushima",
      "lat": 33.91805556,
      "lng": 134.2430556,
      "population": 728633,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1558,
      "deaths": 55,
      "pcr": 50212,
      "hospitalize": 180,
      "severe": 6,
      "discharge": 1323,
      "symptom_confirming": 0
    },
    {
      "id": 37,
      "name_ja": "香川",
      "name_en": "Kagawa",
      "lat": 34.24305556,
      "lng": 133.99666670000002,
      "population": 956069,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1790,
      "deaths": 24,
      "pcr": 69704,
      "hospitalize": 413,
      "severe": 3,
      "discharge": 1353,
      "symptom_confirming": 0
    },
    {
      "id": 38,
      "name_ja": "愛媛",
      "name_en": "Ehime",
      "lat": 33.62194444,
      "lng": 132.8558333,
      "population": 1338811,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2612,
      "deaths": 64,
      "pcr": 73971,
      "hospitalize": 207,
      "severe": 6,
      "discharge": 2341,
      "symptom_confirming": 0
    },
    {
      "id": 39,
      "name_ja": "高知",
      "name_en": "Kōchi",
      "lat": 33.42111111,
      "lng": 133.36666670000002,
      "population": 697674,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 1148,
      "deaths": 20,
      "pcr": 8676,
      "hospitalize": 45,
      "severe": 3,
      "discharge": 1083,
      "symptom_confirming": 0
    },
    {
      "id": 40,
      "name_ja": "福岡",
      "name_en": "Fukuoka",
      "lat": 33.5225,
      "lng": 130.66805559999997,
      "population": 5110113,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 29737,
      "deaths": 390,
      "pcr": 675139,
      "hospitalize": 5469,
      "severe": 67,
      "discharge": 23363,
      "symptom_confirming": 515
    },
    {
      "id": 41,
      "name_ja": "佐賀",
      "name_en": "Saga",
      "lat": 33.28527778,
      "lng": 130.11694440000002,
      "population": 814211,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2199,
      "deaths": 15,
      "pcr": 44465,
      "hospitalize": 379,
      "severe": 4,
      "discharge": 1754,
      "symptom_confirming": 51
    },
    {
      "id": 42,
      "name_ja": "長崎",
      "name_en": "Nagasaki",
      "lat": 33.2275,
      "lng": 129.61416670000003,
      "population": 1325205,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2712,
      "deaths": 50,
      "pcr": 102842,
      "hospitalize": 527,
      "severe": 17,
      "discharge": 2135,
      "symptom_confirming": 0
    },
    {
      "id": 43,
      "name_ja": "熊本",
      "name_en": "Kumamoto",
      "lat": 32.615,
      "lng": 130.7563889,
      "population": 1746740,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 5116,
      "deaths": 84,
      "pcr": 71804,
      "hospitalize": 853,
      "severe": 22,
      "discharge": 4179,
      "symptom_confirming": 0
    },
    {
      "id": 44,
      "name_ja": "大分",
      "name_en": "Oita",
      "lat": 33.19916667,
      "lng": 131.43416670000002,
      "population": 1134431,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2830,
      "deaths": 33,
      "pcr": 130041,
      "hospitalize": 783,
      "severe": 5,
      "discharge": 2014,
      "symptom_confirming": 0
    },
    {
      "id": 45,
      "name_ja": "宮崎",
      "name_en": "Miyazaki",
      "lat": 32.19083333,
      "lng": 131.3005556,
      "population": 1072077,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2764,
      "deaths": 25,
      "pcr": 36174,
      "hospitalize": 461,
      "severe": 5,
      "discharge": 2269,
      "symptom_confirming": 9
    },
    {
      "id": 46,
      "name_ja": "鹿児島",
      "name_en": "Kagoshima",
      "lat": 31.01277778,
      "lng": 130.4241667,
      "population": 1599984,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 2842,
      "deaths": 28,
      "pcr": 92020,
      "hospitalize": 469,
      "severe": 2,
      "discharge": 2339,
      "symptom_confirming": 6
    },
    {
      "id": 47,
      "name_ja": "沖縄",
      "name_en": "Okinawa",
      "lat": 25.77111111,
      "lng": 126.64,
      "population": 1454184,
      "last_updated": {
        "cases_date": 20210516,
        "deaths_date": 20210516,
        "pcr_date": 20210516,
        "hospitalize_date": 20210516,
        "severe_date": 20210516,
        "discharge_date": 20210516,
        "symptom_confirming_date": 20210516
      },
      "cases": 13781,
      "deaths": 141,
      "pcr": 202299,
      "hospitalize": 1447,
      "severe": 12,
      "discharge": 12193,
      "symptom_confirming": 0
    }
  ];

export const ConvertedData1 = () => {
    let Data = rawData.map(data => {
        let area;
        if(data.id <= 7) {
            area = "東北・北海道";
        } else if(data.id <= 14) {
            area = "関東";
        } else if(data.id <= 18) {
            area = "北陸";
        } else if(data.id <= 23) {
            area = "中部";
        } else if(data.id <= 30) {
            area = "近畿";
        } else if(data.id <= 39) {
            area = "中国・四国";
        } else {
            area = "九州・沖縄";
        }

        
        return [data.name_ja, area,data.cases, data.deaths];
    });
    
    Data.sort((a, b) => {
      if(a[2] === b[2]) {
        return b[3]-a[3];
      }else {
        return b[2] - a[2];
      }
    });

    Data.unshift(["都道府県", "地域", "感染者", "死者"]);
    console.log(Data);
    return Data;
}   


export const ConvertedData2 = () => {
  let Data = rawData1.map(data => {
      let area;
      if(data.id <= 7) {
          area = "東北・北海道";
      } else if(data.id <= 14) {
          area = "関東";
      } else if(data.id <= 18) {
          area = "北陸";
      } else if(data.id <= 23) {
          area = "中部";
      } else if(data.id <= 30) {
          area = "近畿";
      } else if(data.id <= 39) {
          area = "中国・四国";
      } else {
          area = "九州・沖縄";
      }

      if(data.name_ja !== '大阪') {
        return [data.name_ja, area,data.cases, data.deaths];
      }
  });
  
  Data.sort((a, b) => {
    if(a[2] === b[2]) {
      return b[3]-a[3];
    }else {
      return b[2] - a[2];
    }
  });

  Data.unshift(["都道府県", "地域", "感染者", "死者"]);
  console.log(Data);
  return Data;
}   

export const ConvertedData3 = () => {
  let Data = rawData1.map(data => {
      let area;
      if(data.id <= 7) {
          area = "東北・北海道";
      } else if(data.id <= 14) {
          area = "関東";
      } else if(data.id <= 18) {
          area = "北陸";
      } else if(data.id <= 23) {
          area = "中部";
      } else if(data.id <= 30) {
          area = "近畿";
      } else if(data.id <= 39) {
          area = "中国・四国";
      } else {
          area = "九州・沖縄";
      }

      
      return [data.name_ja, area,data.cases, data.deaths];
      
  });
  
  Data.sort((a, b) => {
    if(a[2] === b[2]) {
      return b[3]-a[3];
    }else {
      return b[2] - a[2];
    }
  });

  
  
  const res = Data.filter(data => data[2] <= 20000);
  console.log(res);
  console.log('ffff')
  res.unshift(["都道府県", "地域", "感染者", "死者"]);
  return res;
}   





