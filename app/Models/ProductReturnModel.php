<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductReturnModel extends Model
{
    use HasFactory;

    protected $table = 'returns';
    protected $primaryKey = 'return_id';
    protected $fillable = ['sale_id', 'product_id', 'quantity', 'reason', 'return_date'];

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id', 'sale_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'product_id');
    }
}
