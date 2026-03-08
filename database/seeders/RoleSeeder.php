<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminRole = \App\Models\Role::create(['role_name' => 'Admin']);
        \App\Models\Role::create(['role_name' => 'Manager']);
        \App\Models\Role::create(['role_name' => 'Staff']);

        \App\Models\User::create([
            'username' => 'admin',
            'password' => \Illuminate\Support\Facades\Hash::make('admin123'),
            'role_id' => $adminRole->role_id,
        ]);
    }
}
