<?php

namespace App\Listeners;

use App\Events\StoreCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AssignVendorRole
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(StoreCreated $event): void
    {
        $vendor = $event->store->user;

        if ($vendor && $vendor->role !== "vendor") {
            $vendor->update(['role' => "vendor"]);
        }
    }
}
