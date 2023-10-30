import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from '@/components/pages/shop/components/products';
import { Category } from '@/types';

const mockProducts = [
  {
    id: 37098869,
    category: 'outerwear' as Category,
    color: 'gren',
    designer: 'United Colors Of Benetton × Vintage',
    price: 64,
    size: 'l',
    traits: [
      {
        name: 'color',
        value: 'gren',
      },
    ],
    image:
      'https://media-assets.grailed.com/prd/listing/37098869/5a8a2a447eaf48ffb7b9fa0b77ce81d2',
    condition: 'is_gently_used',
    popularity: 1633.312818287037,
    created_at: '2022-11-18T13:15:08.929Z',
    rating: 5,
    title: 'baz',
  },
  {
    id: 39714669,
    category: 'outerwear' as Category,
    color: 'grey',
    designer: 'The North Face',
    price: 117,
    size: 's',
    traits: [
      {
        name: 'color',
        value: 'grey',
      },
    ],
    image:
      'https://media-assets.grailed.com/prd/listing/39714669/c4095121d0934e4eb285ea114cc3cceb',
    condition: 'is_gently_used',
    popularity: 1662.360497685185,
    created_at: '2023-01-19T15:32:27.150Z',
    rating: 5,
    title: 'foo',
  },
  {
    id: 40950684,
    category: 'outerwear' as Category,
    color: 'black',
    designer: 'Dunderdon × Goretex',
    price: 72,
    size: 'l',
    traits: [
      {
        name: 'color',
        value: 'black',
      },
    ],
    image:
      'https://media-assets.grailed.com/prd/listing/40950684/31c1a521d4e7425ab42694a6a9920ea8',
    condition: 'is_gently_used',
    popularity: 1676.905729166667,
    created_at: '2023-02-15T17:42:43.744Z',
    rating: 2,
    title: 'bar',
  },
];

describe('Products Component', () => {
  it('should render products', () => {
    render(<Products products={mockProducts} />);

    // Check if the products are rendered
    const productElements = screen.getAllByTestId('product');
    expect(productElements.length).toBe(mockProducts.length);
  });

  it('should render product details', () => {
    render(<Products products={mockProducts} />);

    // Check if product details are rendered
    mockProducts.forEach((product) => {
      const productElement = screen.getByText(product.title);
      expect(productElement).toBeInTheDocument();

      const designerElement = screen.getByText(product.designer);
      expect(designerElement).toBeInTheDocument();

      const priceElement = screen.getByText(`$${product.price}`);
      expect(priceElement).toBeInTheDocument();
    });
  });

  // test if page renders links for products
  it('should render an anchor tag for each product', () => {
    render(<Products products={mockProducts} />);

    screen.debug();

    // Find all anchor tags within the component
    const anchorTags = screen.getAllByRole('link');

    // Check if the number of anchor tags matches the number of products
    expect(anchorTags.length).toBe(mockProducts.length);

    // Check if the href attribute of each anchor tag matches the expected product route
    mockProducts.forEach((product, index) => {
      const expectedRoute = `/products/${product.id}`;
      expect(anchorTags[index]).toHaveAttribute(
        'href',
        expectedRoute
      );
    });
  });
});
