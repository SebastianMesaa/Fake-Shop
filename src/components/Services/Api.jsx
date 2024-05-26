import React from 'react'

export const getProducts = () => {
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => json);
};

export const getCategories = () => {
  return fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => json);
};