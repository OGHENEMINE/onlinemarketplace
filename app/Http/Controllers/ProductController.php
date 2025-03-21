<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\Store;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia('Admin/Product/Index', [
            'products' => Product::query()->latest()->paginate(8),
        ]);
    }

    public function create()
    {
        return Inertia('Admin/Product/Create', [
            'stores' => Store::query()->whereNotNull('published_at')->get(),
        ]);
    }
    public function store(ProductRequest $request)
    {
        $data = $request->validated();
        dd($data);
        $data['published_at'] = $data['published_at']  === 'publish' ? now() : null;
        Product::query()->create($data);
        return redirect()->route('admin.products.index')->with('success', 'Product created successfully');
    }
    public function edit(Product $product)
    {
        return Inertia('Admin/Product/Edit', [
            'product' => $product
        ]);
    }
}
