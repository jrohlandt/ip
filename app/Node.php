<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Node extends Model
{
    protected $fillable = [
      'title',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
