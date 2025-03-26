<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Store>
 */
class StoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'vendor_id' => User::inRandomOrder()->first()->id ?? User::factory()->create()->id,
            'state' => fake()->randomElement([
                'Lagos',
                'Delta',
                'Benin'
            ]),
            'LGA' => fake()->streetName(),
            'description' => fake()->text(),
            'published_at' => fake()->randomElement([
                Carbon::now()->format('Y-m-d H:i:s'), // ✅ Correct format
                null
            ]),
        ];
    }
}
