import type { NextApiRequest, NextApiResponse } from "next";
import { generateFakeProduct } from "@/lib/utils/generateFakeProduct";

import { Product, Sort, Filter, Category } from "@/types";
import { products as rawProducts } from "@/data";

const products = rawProducts
  .filter((p) => p.image)
  .map((p) => ({
    ...p,
    ...generateFakeProduct(p.id),
  }));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsResponseData>,
) {
  const { query } = req;
  const { sort, limit, page, category, color, designer, size, condition } =
    query;

  let pageSize = 160;

  let pageNum = 1;

  if (limit && !Number.isNaN(limit)) {
    pageSize = Number(limit);
  }

  if (page && !Number.isNaN(page)) {
    pageNum = Number(page);
  }

  const results = products.filter((x) => {
    if (category) {
      if (typeof category === "string" && x.category !== category) {
        return false;
      }
      if (!category.includes(x.category)) {
        return false;
      }
    }

    if (color) {
      if (typeof color === "string" && x.color !== color) {
        return false;
      }
      if (!color.includes(x.color)) {
        return false;
      }
    }

    if (designer) {
      if (typeof designer === "string" && x.designer !== designer) {
        return false;
      }
      if (!designer.includes(x.designer)) {
        return false;
      }
    }

    if (size) {
      if (typeof size === "string" && x.size !== size) {
        return false;
      }
      if (!size.includes(x.size)) {
        return false;
      }
    }

    if (condition) {
      if (typeof condition === "string" && x.condition !== condition) {
        return false;
      }
      if (!condition.includes(x.condition)) {
        return false;
      }
    }
    return true;
  });

  let selectedSort: Sort = "popular";

  const sortedResults = results.sort((a, b) => {
    if (!sort || typeof sort !== "string" || sort === "popular") {
      return b.popularity - a.popularity;
    }

    if (sort === "rating") {
      selectedSort = "rating";
      return b.rating - a.rating;
    }

    if (sort === "created") {
      selectedSort = "created";
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }

    if (sort === "priceAsc") {
      selectedSort = "priceAsc";
      return a.price - b.price;
    }

    if (sort === "priceDesc") {
      selectedSort = "priceDesc";
      return b.price - a.price;
    }
    return b.popularity - a.popularity;
  });

  const paginatedResults = sortedResults.slice(
    pageSize * (pageNum - 1),
    pageSize,
  );

  res.status(200).json({
    results: paginatedResults,
    sort: selectedSort,
    filters: {
      category: sortedResults.reduce<Category[]>((acc, el) => {
        if (!acc.includes(el.category)) {
          acc.push(el.category);
        }
        return acc;
      }, []),
      color: sortedResults.reduce<string[]>((acc, el) => {
        if (!acc.includes(el.color)) {
          acc.push(el.color);
        }
        return acc;
      }, []),
      designer: sortedResults.reduce<string[]>((acc, el) => {
        if (!acc.includes(el.designer)) {
          acc.push(el.designer);
        }
        return acc;
      }, []),
      size: sortedResults.reduce<string[]>((acc, el) => {
        if (!acc.includes(el.size)) {
          acc.push(el.size);
        }
        return acc;
      }, []),
      condition: sortedResults.reduce<string[]>((acc, el) => {
        if (!acc.includes(el.condition)) {
          acc.push(el.condition);
        }
        return acc;
      }, []),
    },
    count: paginatedResults.length,
    page: pageNum,
  });
}
