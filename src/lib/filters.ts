import { Product } from '@/data/products';

export type FilterOptions = {
  search: string;
  categories: string[];
  sortBy: 'name-asc' | 'name-desc';
};

export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  let filtered = [...products];

  // Busca por nome, descrição e tags
  if (filters.search.trim()) {
    const searchLower = filters.search.toLowerCase().trim();
    filtered = filtered.filter(
      product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  // Filtro por categorias
  if (filters.categories.length > 0) {
    filtered = filtered.filter(product =>
      filters.categories.includes(product.category)
    );
  }

  // Ordenação
  filtered.sort((a, b) => {
    switch (filters.sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name, "pt-BR");
      case "name-desc":
        return b.name.localeCompare(a.name, "pt-BR");
      default:
        return 0;
    }
  });

  return filtered;
}

export function getWhatsAppUrl(product: Product, whatsappNumber: string): string {
  const message = `Olá! Tenho interesse no produto: ${product.name}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
