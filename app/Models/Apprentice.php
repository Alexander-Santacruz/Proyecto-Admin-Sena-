<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Apprentice extends Model
{
    protected $fillable = ['name', 'email', 'ficha', 'photo'];
}
