'use client';

import { createContext, useContext, useState, useMemo, useEffect } from 'react';

const CART_STORAGE_KEY = 'mavi-sepet';

function loadCartFromStorage() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCartToStorage(items) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(loadCartFromStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveCartToStorage(items);
  }, [hydrated, items]);

  function addItem(product, category, options = {}) {
    setItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.categorySlug === category.slug &&
          item.color === (options.color || null) &&
          item.memory === (options.memory || null),
      );
      let next;
      if (existing) {
        next = prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        next = [
          ...prev,
          {
            id: product.id,
            name: product.name,
            image: product.image,
            categorySlug: category.slug,
            categoryTitle: category.title,
            color: options.color || null,
            memory: options.memory || null,
            quantity: 1,
            unitPrice: typeof options.unitPrice === 'number' ? options.unitPrice : 4999,
          },
        ];
      }
      return next;
    });
  }

  function removeItem(index) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function updateQuantity(index, quantity) {
    if (quantity < 1) {
      removeItem(index);
      return;
    }
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item)),
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      totalCount,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      hydrated,
    }),
    [items, totalCount, hydrated],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}

