const squidGameCharacters = [
  // — Season 1 main characters —
  {
    id: 1,
    ingameName: "Player 456",
    realName: "Seong Gi-hun",
    playerNumber: 456,
    behaviour: "Kind-hearted, impulsive, determined",
    background: "Divorced chauffeur; becomes vigilante",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbpaIYme0rAChfaSmy6jiu8rQ0OdicjHN1bxjgTcLPgezT8VUOwoGkPpN4tJ4BorGnPQcQ8Y8bLuSl99amDvYHbRYRDDvBYMZRdtzvC0RsZV1zcqO6-dvoXtcEPP0ptHU73RfK6c0YgIUjPXsbCISV_r.jpg?r=f70",
  },
  {
    id: 2,
    ingameName: "Player 218",
    realName: "Cho Sang-woo",
    playerNumber: 218,
    behaviour: "Strategic, pragmatic, morally conflicted",
    background: "Former investment banker",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjczNjRiN2UtZTJmYi00ZWI1LWExODktNGMyMjc4ODY0ZTgwXkEyXkFqcGc@._V1_FMjpg_UY5828_.jpg",
  },
  {
    id: 3,
    ingameName: "Player 067",
    realName: "Kang Sae-byeok",
    playerNumber: 67,
    behaviour: "Stoic, resourceful, protective",
    background: "North Korean defector",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDkxNzM0MDctODNmNy00ZDJkLThkM2UtNzk1ODFiNmY5YjliXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
  },
  {
    id: 4,
    ingameName: "Player 199",
    realName: "Ali Abdul",
    playerNumber: 199,
    behaviour: "Loyal, altruistic, trusting",
    background: "Pakistani factory worker",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjAxZWRiYTMtMTBkNS00NThkLWJiMzgtMzljMmI2ZjYwZGQzXkEyXkFqcGc@._V1_FMjpg_UY5805_.jpg",
  },
  {
    id: 5,
    ingameName: "Player 101",
    realName: "Jang Deok-su",
    playerNumber: 101,
    behaviour: "Aggressive, violent, self-centered",
    background: "Gangster",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMmIzYjg2NDUtNjEwMy00OTk0LWE0NDAtODA4NzAxMmM1ZTE0XkEyXkFqcGc@._V1_FMjpg_UY5805_.jpg",
  },
  {
    id: 6,
    ingameName: "Player 001",
    realName: "Oh Il-nam",
    playerNumber: 1,
    behaviour: "Playful, childlike",
    background: "Elderly mastermind in disguise",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA4MmQ4ZTctOTJlMC00NTBkLTk5YzctNzRkYzEzNzY3N2JmXkEyXkFqcGc@._V1_FMjpg_UY5828_.jpg",
  },
  {
    id: 7,
    ingameName: "Front Man",
    realName: "Hwang In-ho",
    playerNumber: 132,
    behaviour: "Calm, commanding, secretive",
    background: "Ex‑police turned overseer",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQYz31TcxJtZ1WjEOKr9LbTYVWHBEfCU1OAVeyzTpeId21b-iZz2lzWuCPtvyUN5Fav5MZFdSEOoz10lWUqbTGuvHFIrsrXp4DoVp2UzxbAH1vn9DTRvsJjxblb-8v3VzPRBTOfAKPEcl0aU7QZe-RcSr.jpg?r=0ff",
  },
  {
    id: 8,
    ingameName: "Detective Jun-ho",
    realName: "Hwang Jun-ho",
    playerNumber: null,
    behaviour: "Determined, resourceful",
    background: "Detective infiltrating the game",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfzmkWUlDiKPOwKqEAjNr8YnzKmF9dcDbr3DBcfnboWd-iM4LknURG88jFcdV1Bqp43LDWIExmGsYZkj_o0Dk003oy81NQnX8LXZ43uC6OAylIVFNl9nZ7KKrGdmJLTNTEs3DWuF_t8ZMsPW3f6N-UoQ.jpg?r=641",
  },
  {
    id: 9,
    ingameName: "Player 240",
    realName: "Ji-yeong",
    playerNumber: 240,
    behaviour: "Sincere, regretful",
    background: "Former convict",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZmM0MjhiZmQtMDlkZS00YTJkLWI1MTgtYTk3M2JjYjYwOGExXkEyXkFqcGc@._V1_FMjpg_UX800_.jpg",
  },

  // — Season 2 main cast —
  {
    id: 10,
    ingameName: "Player 333",
    realName: "Lee Myung-gi (MG Coin)",
    playerNumber: 333,
    behaviour: "Cunning, chaotic",
    background: "Crypto influencer in deep debt",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQb77UQKrqUgxaDIIzA9PD3TzCK76fgJPmO6MxTbNw97JUnwHbKS8tHP_Uaq01PTzGQvAjLMhqU0IXyfJrbi-3esMwKKYNQPNrSEVsKDH0UXhx4F7b7_uagem2eW-e_qVeVTlIXXUw2DY2RiP4vpvePYc.jpg?r=44f",
  },
  {
    id: 11,
    ingameName: "Player 388",
    realName: "Kang Dae-ho",
    playerNumber: 388,
    behaviour: "Brave, vulnerable",
    background: "New competitor, possible ally for Gi-hun",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQUu6KSq8kespcswi2iDK2y75Q9IgbLjng12CWkhhqLy4KEyu8jr3xXjP3_P7lsLV21iK1cDKMG_268ztZFRuLv8I4uVMuFAUVUR4WselodXnZbKqgI7dy711gX5FP7L_Bji4u0yMyQlqUOaOPIuXQfYL.jpg?r=68f",
  },
  {
    id: 12,
    ingameName: "Player 246",
    realName: "Park Gyeong-seok",
    playerNumber: 246,
    behaviour: "Loving father, loyal",
    background: "Family man doing anything for loved ones",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQYrxcRgORvqwGv_j9Qih0jOx8TDyXKIXLSqX6lPWzRgNW8CsWSZWvFlKLxbKCXPhWTyTvlKYTWkxzLDUlmcrI7wx-S9RF3gSGJaSvsdVEnFIysZMsKLexmxVf-OJktVqjsSj1HcuMB-pgLV21En8fg3T.jpg?r=0f7",
  },
  {
    id: 13,
    ingameName: "Player 120",
    realName: "Cho Hyun-ju",
    playerNumber: 120,
    behaviour: "Strategic, resilient",
    background: "Trans ex‑special forces sergeant",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWi5CmlY3cHmIUdYz5H-wJ8Q_RKtNBOB8nvD4dUIV_TLFkmYmtAvqLh7vtj-n04um_Iv0TAV70I1YkdifpA8YFjn_rqqMKUr8LmB90pX_yC1GE6kYjAZn0k5X7Kv0pDNyuZkCPQQMRrXoMfFC9kEm9vu.jpg?r=de8",
  },
  {
    id: 14,
    ingameName: "Player 007",
    realName: "Park Yong-sik",
    playerNumber: 7,
    behaviour: "Compulsive gambler",
    background: "Deep in debt, hopes to win for redemption",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbW2Gn-r_HdJCjMJQAZ_sWqB0vXhIsDq8VkUpEKCe5uQymNMgfepTE2EywrgJwRsaJ6uguHAH2fXAoFHBVUo6y5W6NERmD6S_0_i_8Di23o83FVg9sxss7SwYpxpQh8JfnuJ4kuummTWZcloIUpNhkoM.jpg?r=a0b",
  },
  {
    id: 15,
    ingameName: "Player 149",
    realName: "Jang Geum-ja",
    playerNumber: 149,
    behaviour: "Headstrong, caring",
    background: "Mother determined to help others",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRBZwTzKGYMMK-67gdDMW62Y6KX1JXuCRbpGhOT_xQBHy9qN-cR1TyRcfYXoZkBaLn0KjuteI2sUcqwDRosYv-aWUJqbaFnqAlZ3k6AeZ8wKaz7RTy9OgmbdXh9syN1IC64ug6ieNLcH1tE2q8RIrKVt.jpg?r=7d4",
  },
  {
    id: 15,
    ingameName: "Player 390",
    realName: "Park Jung-bae",
    playerNumber: 390,
    behaviour: "Loyal friend, supportive",
    background: "Longtime friend and ex-coworker of Gi-hun",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQcAtnBLBQv6dk6JG7Il75yQJmI-d7rChFpJIXatI5xN46Vc7VVZmVhya--3ddVJLdYQKhv7I_uiOeWnF_tPhFpbhMdB-daYbXG-02-QaylzvvNmR_ul7_dYHd9Fj914d4aIZ3wIczWd83lGiugQbcZOS.jpg?r=13e",
  },
  {
    id: 16,
    ingameName: "Player 222",
    realName: "Kim Jun-hee",
    playerNumber: 222,
    behaviour: "Strong-willed, maternal",
    background: "Scammed investor, determined",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQVzR5DGwtEQKM8tGhazHU-DDDsohOovWC7TeDW1eKIrhAzGNA-m1BbvNErBaEIxcZ69G00D5EuwI-rBhOHRgMCVKE_QTwNUh2LCDsmFwjaqWXrzOsgQISKybXbHOpXiEQf1mIB51taIb0Y2ya-XBCx_7.jpg?r=533",
  },
  {
    id: 17,
    ingameName: "Guard 011",
    realName: "Kang No‑eul",
    playerNumber: 11,
    behaviour: "Morally conflicted, skilled, compassionate",
    background:
      "North Korean defector and former soldier searching for her lost daughter; recruited as a triangle‑masked sniper guard",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQX_3gVImQKOhWQUHLd8KW7GHttGwo4clH0r_eNYwfFOeM32X28Zl9tltEnFZKycjyajtXqgovBJJgr3cHF15FgdHwGp0yXxyz7RqGUXLQwbBrspbhZMJcvyW66M9f5ga98prZ3878_fM-1vo_o1qCaRJ.jpg?r=923",
  },

  {
    id: 18,
    ingameName: "Player 230",
    realName: "Choi Su-bong (Thanos)",
    playerNumber: 230,
    behaviour: "Charismatic, reckless",
    background: "Rapper turned contestant",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQewqMdYhMLRjixzuPKdEvZ8MldBr1GCFFtwRigDFdj3s-aOmxo0NTYOcWjlVUs0zL587RYZrB5i_1Me-sKH4w4rN-nv5dngb5XVHW3aTBvgpTA6G5YLrSuKFLgrQgORph4r9XGRKHuxCmW3RhOOnIVQV.jpg?r=5dd",
  },
  {
    id: 19,
    ingameName: "Player 125",
    realName: "Park Min-su",
    playerNumber: 125,
    behaviour: "Reserved, thoughtful",
    background: "Unknown backstory",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQeO1bDPI0v55ptfNunc4ySoeHUonkKCjV_u8DB0EL_ngEBIZmJZKXXxWf2eSsURhAPb7DYRYiS_pzWdnZMVIVGIx4KeOOzjqa71dE2DWfFlDjh9MRYJV9TnZmLdFsu_0U0McjkfhVDmTKTd_JMWaa1yS.jpg?r=5ba",
  },
  {
    id: 20,
    ingameName: "Player 124",
    realName: "Nam-gyu",
    playerNumber: 124,
    behaviour: "Stoic, determined",
    background: "Unknown backstory",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQQelgYppTD9YwCGLqvXRicM3D9rfppgs7phBjwoMIuh-tiDWMawccKhxW4nA5Zu9eB_h6sn6kIeom6mr014R7DL3GufGavix_tGlf4ehC2-nuaxsiFAdgIMmc9donNcCKnUv-xYx2tp0wGFc7Tro_d9P.jpg?r=476",
  },
  {
    id: 21,
    ingameName: "The Recruiter",
    realName: "Gong Yoo's character",
    playerNumber: null,
    behaviour: "Mysterious, recruiter",
    background: "Finder of new players",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQYNN-bD5TQthsNdPIDuTyBL8MLr0vdBzwcSGRrY1MuvHp4meMyEiIrfwGGT6W7qbhPxVbbG5Ec0Ti8h7Wmv6Or-QLhF477gZ5pBxd4AFUpbUXCiJu0kT7Tg1WLUUkX77lYiiKkJRJ4dhihw_NL0Yjqj2.jpg?r=4b8",
  },

  // — Other cameos & guest stars—
  {
    id: 22,
    ingameName: "Player 380",
    realName: "Se-mi",
    playerNumber: 380,
    behaviour: "Quiet, observant",
    background: "Unknown",
    imageUrl:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbkzAb5PERn8pXyoPLGrUTCSHkKrWKbnbC2fjZplRzsUGepWj9XINa29hNpufDh940jiLvTanSFqQKew2g-XQ5FTkR1e6prmeBo05ssb5VHfptTX2hzoiebgOHbJm8Q3Y7L8riS5JaxyQUVvR5mH9tzp.jpg?r=4c3",
  },
];

export default squidGameCharacters;
