<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    protected $primaryKey = 'unit_id';
    protected $fillable = ['unit_name'];

    public function productUnits()
    {
        return $this->hasMany(ProductUnit::class, 'unit_id', 'unit_id');
    }
}
