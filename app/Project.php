<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'settings',
    ];

    protected $casts = [
        'settings' => 'array',
    ];

    public function nodes()
    {
        return $this->hasMany(Node::class);
    }

    public function createParentNode(): void
    {
        $this->nodes()->create([
            'parent_id' => 0,
            'title' => 'Parent node',
            'url' => '',
            'interactor' => ["enabled" => true, "type" => "on_end"],
        ]);
    }
}
