<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Node;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class NodeType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Node',
        'description' => 'A project node',
        'model' => Node::class,
    ];

    public function fields(): array
    {
        return [
            'id' => ['type' => Type::nonNull(Type::int())],
            'title' => ['type' => Type::nonNull(Type::string())],
            'parent_id' => ['type' => Type::nonNull(Type::int())],
            'url' => ['type' => Type::string()],
            'interactions' =>[
                'type' => Type::string(),
                'description' => 'Interactions e.g. {"fork": {"type": "on_end"}}',
            ],
        ];
    }
}
