<?php

use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         factory(User::class)->create([
             'email' => 'demo@example.com',
             'api_token' => 'somerandomstring',
         ]);
    }
}
