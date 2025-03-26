<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        public function definition(): array
        {
            return [
                'name' => fake()->word(),
                'price' => fake()->randomNumber(4),
                'stock' => fake()->numberBetween(1, 100),
                'category' => fake()->word(),
                'description' => fake()->sentence(),
                'published_at' => fake()->randomElement([
                    Carbon::now()->format('Y-m-d H:i:s'), // ✅ Correct format
                    null
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
    }
}
