<?php

namespace Database\Seeders;

use App\Models\Kas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kas::factory()->create(
            ['name' => 'H2111']
        );

        Kas::factory()->create(
            ['name' => 'H2112']
        );

        Kas::factory()->create(
            ['name' => 'H2113']
        );

        Kas::factory()->create(
            ['name' => 'H2114']
        );

        Kas::factory()->create(
            ['name' => 'H2115']
        );

        Kas::factory()->create(
            ['name' => 'H2116']
        );

        Kas::factory()->create(
            ['name' => 'H2117']
        );

        Kas::factory()->create(
            ['name' => 'H2118']
        );

        Kas::factory()->create(
            ['name' => 'H2119']
        );

        Kas::factory()->create(
            ['name' => 'H2120']
        );
    }
}
