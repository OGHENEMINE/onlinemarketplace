<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequest;
use App\Models\Store;
use App\Models\User;
use Inertia\Inertia;


class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia('Admin/Store/Index', [
            'stores' => Store::query()->with('user:id,tel,firstname,lastname')->latest()->paginate(8),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Admin/Store/Create', [
            'users' => User::query()->select('id', 'firstname', 'lastname')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $data['published_at'] = $data['published_at'] === 'publish' ? now() : null;
        Store::query()->create($data);
        return redirect()->route('admin.stores.index')->with('success', 'Store created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Store $store)
    {
        return Inertia('Admin/Store/Edit', [
            'store' => $store->load('user:id,firstname,lastname'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreRequest $request, Store $store)
    {
        $data = $request->validated();
        $data['published_at'] = $data['published_at'] === 'publish' ? now() : null;
        $store->update($data);
        return redirect()->route('admin.stores.index')->with('success', 'Store updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Store $store)
    {
        $store->delete();
        return redirect()->route('admin.stores.index')->with('success', 'Store deleted successfully.');
    }
}
