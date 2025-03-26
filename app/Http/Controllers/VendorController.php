<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequest;
use App\Models\Store;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function index()
    {
        return Inertia::render('Vendor/About');
    }

    public function create()
    {
        return Inertia::render('Vendor/Create');
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        // dd($data['vendor_id']);
        $data['published_at'] = $data['published_at'] === 'publish' ? now() : null;
        Store::query()->create($data);
        return redirect()->route('vendors.show', ['user' =>  $data['vendor_id']])->with('success', 'Store created successfully.');
    }

    public function show(User $user)
    {
        dd(User::query()->where('id', 1));
        return Inertia::render('Vendor/Show', [
            'user' => $user,
        ]);
    }
}
