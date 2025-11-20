import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'lib/data.ts');

export async function POST(request: Request) {
  try {
    const { products } = await request.json();
    const fileContent = `export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  isNew?: boolean
  isSale?: boolean
  originalPrice?: number
  stock?: number
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

    fs.writeFileSync(dataFilePath, fileContent, 'utf8');

    return NextResponse.json({ message: 'Products updated successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating products', error }, { status: 500 });
  }
}
