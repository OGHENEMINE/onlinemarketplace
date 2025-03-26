<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VendorController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/about/vendor', [VendorController::class, 'index'])->name('new_vendor');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/shop', [ShopController::class, 'index'])->name('shop');
Route::get('/shop/{product}', [ShopController::class, 'show'])->name('shop.product');;
Route::get('/cart', [ShopController::class, 'cart'])->name('cart');

Route::middleware('auth')->group(function () {
    Route::resource('vendors', VendorController::class);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->prefix('/admin')->name('admin.')->group(function () {
    Route::redirect('/', 'admin/dashboard')->name('admin');

    Route::get('/dashboard', [ProductController::class, 'index'])->name('dashboard');
    Route::resource('users', UserController::class);
    Route::resource('products', ProductController::class);
    Route::resource('stores', StoreController::class);
});

require __DIR__ . '/auth.php';
