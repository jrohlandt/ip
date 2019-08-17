<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Node extends Model
{
    protected $fillable = [
        'title',
        'parent_id',
        'url',
        'interactions',
    ];

    protected $casts = [
        'parent_id' => 'integer',
        'interactions' => 'array',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function isRootNode()
    {
        return $this->parent_id === 0;
    }
}
