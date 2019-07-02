<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Node extends Model
{
    protected $fillable = [
        'title',
        'parent_id',
        'url',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
