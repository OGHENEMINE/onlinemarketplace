<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ShopController extends Controller
{
    public function index()
    {
        return Inertia('Shop/Index', [
            'products' => Product::query()->latest()->paginate(),
        ]);
    }

    public function show(Product $product)
    {
        return Inertia('Shop/Show', [
            'product' => $product
        ]);
    }

    public function cart()
    {
        return Inertia('Cart');
    }
}
