# How to run the API
## Download dependencies:
```
npm i
```
## Run the aplication with nodemon/node:
```
npx nodemon src/app.ts
```

# API CRUD Documentation:

- **POST**: `/movie` 
    - body: `{ "title": "yourMovie" }`

- **GET**: `/movies?id=1`
    - *optional query for filtering movie by id (must be a number)*

- **POST** `/review`
    - body: `{ "score": 10, "movieId": 1, "reviewerId": 1 }`

- **GET** `/reviews`
    - *optional query for filtering review by id (must be a number)*

- **PATCH** `/review/:id`
    - *id must be a number*
    - body: `{ "score": 9 }`

- **DELETE** `/review/:id`
    - *id must be a number*

- **DELETE** `/movie:id`
    - params must be a number