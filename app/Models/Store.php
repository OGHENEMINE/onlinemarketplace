<?php

namespace App\Models;

use App\Events\StoreCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Store extends Model
{
    /** @use HasFactory<\Database\Factories\StoreFactory> */
    use HasFactory;

    protected $guarded = [];

    protected static function booted()
    {
        static::created(
            function ($store) {
                event(new StoreCreated($store));
            }
        );
    }

    public function vendor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'vendor_id');
    }

    public function product(): HasMany
    {
        return $this->hasMany(Product::class, 'store_id');
    }
}
