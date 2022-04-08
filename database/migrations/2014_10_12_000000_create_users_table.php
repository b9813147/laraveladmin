<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50)->comment('User name');
            $table->string('email', 100)->unique()->comment('Email');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 250)->comment('User Password');
            $table->tinyInteger('identity')->default(2)->comment('User identity(1 admin,2 user)');
            $table->tinyInteger('status')->default(1)->comment('User status(1 enable,2 disable)');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
