# API Documentation

## Endpoint: `/api/products`

### Description
This API endpoint provides a collection of products, with the ability to filter, sort, and paginate through them. It also dynamically generates fake product data for testing and development purposes.

### Method: `GET`

### Query Parameters

- `sort`: (optional) Defines the sorting method for the product list. Possible values:
  - `"popular"` (default)
  - `"rating"`
  - `"created"`
  - `"priceAsc"`
  - `"priceDesc"`
- `limit`: (optional) Number of products per page. Default is `160`.
- `page`: (optional) Page number to retrieve. Default is `1`.
- `category`: (optional) Filter by product category. Accepts a string or an array of strings.
- `color`: (optional) Filter by product color. Accepts a string or an array of strings.
- `designer`: (optional) Filter by product designer. Accepts a string or an array of strings.
- `size`: (optional) Filter by product size. Accepts a string or an array of strings.
- `condition`: (optional) Filter by product condition. Accepts a string or an array of strings.

### Response Format

```typescript
type ResponseData = {
  results: Product[];
  sort: Sort;
  filters: Filters;
  count: number;
  page: number;
};
```

- `results`: An array of `Product` objects.
- `sort`: The sorting method used for the current response.
- `filters`: Available filters based on the current product list.
- `count`: The number of products in the current page.
- `page`: The current page number.

### Product Object Format

```typescript
type Product = {
  id: number;
  title: string;
  category: Category;
  color: string;
  designer: string;
  price: number;
  size: string;
  image: string;
  condition: string;
  popularity: number;
  created_at: string;
  rating: number;
};
```

### Example Request

```plaintext
GET /api/products?sort=rating&limit=20&page=2&category=Tops&color=Red
```

### Example Response

```json
{
  "results": [
    {
      "id": 1,
      "title": "Ergonomic Granite Shirt",
      "category": "Tops",
      "color": "Red",
      "designer": "Nuke",
      "price": 500,
      "size": "M",
      "image": "https://example.com/image1.jpg",
      "condition": "New",
      "popularity": 90,
      "created_at": "2022-01-01T00:00:00.000Z",
      "rating": 9
    },
    ...
  ],
  "sort": "rating",
  "filters": {
    "category": ["Tops", "Bottoms"],
    "color": ["Red", "Blue"],
    "designer": ["Nuke", "Suprime"],
    "size": ["M", "L"],
    "condition": ["New", "Used"]
  },
  "count": 20,
  "page": 2
}
```

### Notes

- The `sort`, `limit`, and `page` parameters control the pagination and order of the product list.
- The `category`, `color`, `designer`, `size`, and `condition` parameters filter the product list based on the provided criteria.
- The `filters` object in the response provides available filter options based on the current product list.
- The `count` field in the response indicates the number of products in the current page, and `page` indicates the current page number.
- The `image` URLs in the product objects are placeholders and may need to be replaced with actual image URLs in a production environment.

### Status Codes

- `200 OK`: The request was successful.
- `400 Bad Request`: The request was malformed or invalid.
- `500 Internal Server Error`: An error occurred on the server.

### Error Handling

In case of an error, the API will return an appropriate HTTP status code along with a message describing the error. Always check the HTTP status code and handle errors gracefully in your application.

### Example Error Response

```json
{
  "error": "Invalid sort parameter provided."
}
```

### Additional Notes

Ensure to handle potential API errors and edge cases in your application, such as invalid parameters or an empty product list. Always validate user input and provide feedback to guide users in interacting with your application.