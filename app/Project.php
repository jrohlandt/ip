<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'user_id',
        'title',
    ];

    public function nodes()
    {
        return $this->hasMany(Node::class);
    }
}
