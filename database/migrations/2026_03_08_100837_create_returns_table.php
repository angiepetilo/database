<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReturnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('returns', function (Blueprint $table) {
            $table->id('return_id');

            $table->foreignId('sale_id')
                ->constrained('sales','sale_id');

            $table->foreignId('product_id')
                ->constrained('products','product_id');

            $table->integer('quantity');

            $table->text('reason')->nullable();

            $table->date('return_date');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('returns');
    }
}
