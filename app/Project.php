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
//        'settings' => 'array',
    ];

    protected $defaultInteractions = [
        'fork' => [
            'enabled' => true, 'type' => 'on_end'
        ]
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
            'interactions' => $this->defaultInteractions,
        ]);
    }

    public function createNode($data)
    {
        if (empty($data['interactions'])) {
            $data['interactions'] = $this->defaultInteractions;
        }

        return $this->nodes()->create($data);
    }
}
