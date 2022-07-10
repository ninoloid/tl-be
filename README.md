# TRAVELIO SIMPLE BE SERVER

---

## Book Service

---

### Available Endpoint

```
Get by Keyword from Google Books API

URL : http://localhost:3000/search?keyword=yourkeywordhere

METHOD : GET

RESPONSE :
{
  error: boolean,
  code: number,
  data: [
    {
      title: string | undefined,
      author: string | undefined,
      thumbnail: string | undefined
    }
  ]
}
```

---

```
Create a New Wishlish

URL : http://localhost:3000/wishlish

METHOD : POST

BODY :
example :
{
  "title": "Hands-on Go Programming",
  "author": "Sachchidanand Singh, Prithvipal Singh",
  "thumbnail": "http://books.google.com/books/content?id=Q3whEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
}

RESPONSE :
{
  error: boolean,
  code: number,
  message: string,
}
```

---

```
Get ALL WishLish

URL : http://localhost:3000/wishlishs

METHOD : GET

RESPONSE :
example :
{
  error: false,
  code: 200,
  data: [
    {
      _id: "62ca6533e73ff5291901e470",
      title: "Hands-on Go Programming",
      authors: [
        {
          author: "Sachchidanand Singh",
          _id: "62ca6533e73ff5291901e471"
        },
        {
          author: "Prithvipal Singh",
          _id: "62ca6533e73ff5291901e472"
        }
      ],
      createdAt: "2022-07-10T05:35:47.824Z",
      updatedAt: "2022-07-10T05:35:47.824Z",
      __v": 0
    }
  ]
}
```

Postman collection included.

### Dockerization

Run

```
docker build . --rm -t tms-api
```

then run

```
docker run --rm -it  -p 3000:3000/tcp travelio-be:latest
```
